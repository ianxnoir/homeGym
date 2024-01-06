import { Request, Response } from "express";
// import { Bearer } from "permit";

import { PackageService } from "../service/PackageService";


import dotenv from "dotenv";

dotenv.config();

// const permit = new Bearer({
//   query: "access_token",
// });


export function getPackage_id(price: number, packages: { id: number, price: number }[]) {
  for (const pack of packages) {
    if (price == pack.price) {
      return pack.id
    }
  }
  return
}

export function getPackageCredit(price: number, packages: { credit: number, price: number }[]) {

  for (const pack of packages) {
    if (price == pack.price) {
      return pack.credit
    }
  }
  return
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export class PackageController {
  constructor(private packageService: PackageService, private sse_payment: any) { }



  public addPayment = async (req: Request, res: Response) => {

    const user_id = req["user"]?.id as number
    const { product, token } = req.body;
    let pricez = (product.price/10000) * 100
    console.log(pricez)
    try {
      const charge = await stripe.charges.create(
        {
          amount: product.price,
          currency: "hkd",
          receipt_email: token.email,
          description: `Purchased the ${product.name}`,
          source: token.id,
        }
      );
      console.log('check charge', charge.status)
      if (charge.status != 'succeeded') {
        return res.json({ msg: "Charge fail" })
      }


      const packages = await this.packageService.getAllPackage();
      if (!packages || packages.length == 0) {
        return res.json({ msg: "Cannot get all packages" })
      }

      const package_id = getPackage_id(pricez, packages)
      if (!package_id) {
        return res.json({ msg: "Cannot get package id" })
      }

      let addedTransactions = await this.packageService.addTransaction(user_id, package_id as number)
      if (!addedTransactions || addedTransactions.length == 0) {
        return res.json({ msg: "Cannot add transaction" })
      }

      let credit = getPackageCredit(pricez, packages)
      if (!credit) {
        return res.json({ msg: "Cannot get package credit" })
      }

      let addedQuota = await this.packageService.addQuota(user_id, credit as number)

      if (!addedQuota || addedQuota.length == 0) {
        return res.json({ msg: "Fail" })
      }

      let noticed_id = await this.packageService.addNotice({ content: `${credit} lesson credits added successfully`, user_id })
      let json = { price: product.price, user_id }
      
      try{
        this.sse_payment.send(json)
      }catch(e){
        console.log(e)
      }
      
      console.log("noticed", noticed_id)
      return res.json({ msg: "Success" })

    } catch (e) {
      console.log(e)
      return res.status(500).json({ msg: e })
    }

  }

}


    


