
import Knex from 'knex';

export class PackageService {
    

    constructor(private knex: Knex) {}

    // public async getPayment() {
    //     let packageDefine = ()=>this.knex.select("package.package_name","package.price", "package.credit","package.description")
    //     .from("transaction")
    //     .leftJoin("package","package.id",'transaction.package_id')
  
    //     let oneTime = await packageDefine().where("package_id",1)
    //     let fiveTime = await packageDefine().where("package_id",2)
    //     let tenTime= await packageDefine().where("package_id",3)
       
    //     let result = {}
    //     result[1] = oneTime
    //     result[5] = fiveTime
    //     result[10]= tenTime
       
  
    //     return result
    //   }
    
    addTransaction = async (user_id:number, package_id:number)=>{
        let result = await this.knex.insert({user_id,package_id }).into('transaction').returning('*')
        return result
    }

    getAllPackage = async()=>{
        let result = await this.knex.select("*").from("package")
        return result
    }

    addQuota = async(user_id:number,credit:number)=>{

        let result = (await this.knex.raw(`update "user" set quota = quota+${credit} where id = ${user_id} returning id`)).rows
        console.log("add Quota", result)
        return result
    }

    addNotice = async(notice:{content:string,user_id:number})=>{
        let noticed =  await this.knex.insert(notice).into("notification").returning("id")
        return noticed

    }


}

   // function pushDetails(
        //     packageName,price:(number)[], credit:(number)[], description: (string)[]) {
        //     if (packageName == "one time package") {
        //         price.push(200)
        //         credit.push(1)
        //         description.push('enjoy 1 time')
        //     } else if (packageName == "5 times package") {
        //         price.push(800)
        //         credit.push(5)
        //         description.push("enjoy 5 time")
        //     }
        //     else if (packageName == "10 times package") {
        //         price.push(1500)
        //         credit.push(10)
        //         description.push('enjoy 10 times')
        //     }
           
        // }
        // let price:number[]=[]
        // let credit:number[]=[]
        // let description:string[]=[]
        // pushDetails(packageId, price, credit, description)
