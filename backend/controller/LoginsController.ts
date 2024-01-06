import { Request, Response } from 'express';
import jwtSimple from 'jwt-simple';
import jwt from '../jwt';
import bcrypt from 'bcryptjs'
import fetch from 'node-fetch';

import { LoginService } from "../service/LoginsService";
import { HighlightSpanKind } from 'typescript';

export class LoginController {
  constructor(private loginService: LoginService) { }

  public login = async (req, res) => {

    try {
      const users = await this.loginService.getUserByEmail(req.body.email)

      if (users.length <= 0) {
        return res.status(401).json({ result: 'no_user' })
      }
      if (!(await this.loginService.checkPassword(req.body.password, users[0].password))) {
        return res.status(401).json({ result: 'incorrect_password' })
      }

      res.json({
        token: jwtSimple.encode({
          id: users[0].id
        }, jwt.jwtSecret)
      })
    } catch (e) {
      res.status(401).json({ result: e })
    }

  }


  getUserInfo = async (req: Request, res: Response) => {
    res.json(req.user)
  }



  addUser = async (req: Request, res: Response) => {
    let displayname = req.body.username;
    let email = req.body.email;
    let password = await this.loginService.hashPassword(req.body.password);
    let height = req.body.height;
    let weight = req.body.weight;
    let DOB = new Date(req.body.dob);
    let gender = req.body.gender;
    let role = "student";
    let goal_id = req.body.goal_id;
    let frequency_id = req.body.frequency_id;
    let focus_id = req.body.focus_id;
    try {
      if ((await this.loginService.getUserByEmail(req.body.email)).length > 0) {
        res.status(500).json({ msg: "email has been used" })
        return
      }

      const user = await this.loginService.addUser(
        { displayname, email, password, height, weight, DOB, gender, role, goal_id, frequency_id, focus_id }
      )

      if (user.length == 1) {
        res.json({ msg: "Successful" })
        return
      }

    } catch (e) {
      res.status(500).json({ msg: e.toString() })
    }
  }

  addPT = async (req: Request, res: Response) => {
    console.log(req.body)
    let displayname = req.body.username;
    let email = req.body.email;
    let password = await this.loginService.hashPassword(req.body.password);
    let height = req.body.height;
    let gender = req.body.gender
    let qualification = req.body.quali
    let speciality = req.body.spec
    let intro = req.body.intro
    console.log(req.files)


    try {
      if ((await this.loginService.getUserByEmail(req.body.email)).length > 0) {
        res.status(500).json({ msg: "email has been used" })
        return
      }
      else {

        let result = await this.loginService.addPT(displayname, email, password, height, gender,
          qualification, speciality, intro, req.files as any)

        if (result.length > 0) {
          console.log("result:", result)
          res.json({ msg: "Successful" })
          return
        } else {
          res.json({ msg: "try again" })
        }

      }
    } catch (e) {
      console.log(e)
      res.status(500).json({ msg: e.toString() })
    }
  }


  public resetPassword = async (req: Request, res: Response) => {


    let user_id = req["user"]?.id as number;

    try {


      let origianlPw = (await this.loginService.getPasswordbyID(user_id))[0].password

      console.log("origianlPw",origianlPw)
      let match = await this.loginService.checkPassword(req.body.oldPassword, origianlPw)
      console.log("match",match)
      if (!match) {
        return res.json({ msg: "Your old password is wrong." })
      }

      let newPw = await this.loginService.hashPassword(req.body.newPassword)


      let insertedIdLength = await this.loginService.resetPassword(user_id, newPw)

      if (insertedIdLength !== 1) {
        return res.json({ msg: "Please make sure your passwords match" })
      }
      return res.json({ msg: "Successful" })
    } catch (e) {
      return res.status(401).json({ msg: "Fail" })
    }


  }


  public changeInfo = async (req: Request, res: Response) => {
    console.log("change info controller", req.body)
    let result = await this.loginService.changeInfo(
      req.body.height,
      req.body.weight,
      req.body.username,
      req.body.goal,
      req.body.frequency,
      req.body.focus, req["user"]!.id)
   
   
    if (result == 1) {
      res.json({ msg: "Successful" })
    }
    else {
      res.json({ msg: "Try again" })
    }
  }

}