import { Bearer } from 'permit';
import jwtSimple from 'jwt-simple';
import express from 'express';
import jwt from './jwt';
import { loginService } from './server'
import { User } from './model';

const permit = new Bearer({
  query: "access_token"
})


export const isLoggedIn = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

  const token = permit.check(req)

  try {
    const payload = jwtSimple.decode(token, jwt.jwtSecret);
    const users = await loginService.getUserById(payload.id);
    if (users.length > 0) {
      req['user'] = users[0];
      next()
    } else {
      res.status(401).json({ 'result': 'Unauthoirzed' })
    }
  } catch (e) {
    console.log(e)
    res.status(401).json({ 'result': 'Unauthoirzed' })
  }


}

export const isPT = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req['user']?.role == "pt") {
    next()
  } else {
    res.status(401).json({ 'reuslt': 'Unauthoirzed' })
  }
}


export const isVerified_pt = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.body.password == "HomeGymPt") {
    console.log("verified access in /stream/pt")
    next();
  } else {
    console.log("failed verification in /stream/pt")
    res.status(401).json({ 'reuslt': 'Unauthoirzed' })
  }
}

export const isVerified_std = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.body.password == "HomeGymStd") {
    console.log("verified access in /stream/std")
    next();
  } else {
    console.log("failed verification in /stream/std")
    res.status(401).json({ 'reuslt': 'Unauthoirzed' })
  }
}

export const isVerified_payment = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.body.password == "HomeGymPayment") {
    console.log("verified access in /stream/payment")
    next();
  } else {
    console.log("failed verification in /stream/payment")
    res.status(401).json({ 'reuslt': 'Unauthoirzed' })
  }
}
