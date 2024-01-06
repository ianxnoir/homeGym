import bcrypt from 'bcryptjs'
import { LoginService } from "../service/LoginsService";
import { LoginController } from "./LoginsController";
import jwtSimple from 'jwt-simple';
import jwt from '../jwt';


describe("LoginController", () => {
  let loginController: LoginController;
  let loginService: LoginService;
  let res: any;

  beforeEach(() => {
    loginService = new LoginService({} as any)
    loginController = new LoginController(loginService)
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    }
  });

  it("can login success if email can find user in db and password is right", async () => {
    const req: any = {
      body: {
        email: "ian@tecky.io",
        password: "123"
      }
    }

    const getUserByEmail = jest.spyOn(loginService, "getUserByEmail")
    const checkPassword = jest.spyOn(loginService, "checkPassword")

    getUserByEmail.mockResolvedValue(
      [{
        id: 1,
        displayname: "ian",
        email: "ian@tecky.io",
        password: await bcrypt.hash("123", 10),
        height: 161,
        weight: 50,
        DOB: new Date('August 19, 1975 23:15:30'),
        quota: 10,
        expiry_date: new Date('2015-08-22 23:15:30'),
        gender: "M",
        role: "student",
        goal_id: 1,
        frequency_id: 1,
        focus_id: 1,

      }]
    )


    checkPassword.mockResolvedValue(true)

    await loginController.login(req, res)
    expect(getUserByEmail).toHaveBeenCalledWith("ian@tecky.io");
    expect(checkPassword).toHaveBeenCalled()

    expect(res.json).toHaveBeenCalledWith({

      token: jwtSimple.encode({
        id: 1
      }, jwt.jwtSecret)
    })
  })

  it("can login unsuccessful if no such user", async () => {
    const req: any = {
      body: {
        email: "ian@tecky.io",
        password: "123"
      }
    }
    const getUserByEmail = jest.spyOn(loginService, "getUserByEmail")
    getUserByEmail.mockResolvedValue([])
    await loginController.login(req, res)
    expect(getUserByEmail).toHaveBeenCalledWith("ian@tecky.io");
    expect(res.json).toHaveBeenCalledWith({ result: 'no_user' })
  })

  //i want to check what it pass into checkpw as well :( but hashed code is different everytime

  it("can login unsuccessful if password is incorrect", async () => {
    const req: any = {
      body: {
        email: "ian@tecky.io",
        password: "234"
      }
    }
    const getUserByEmail = jest.spyOn(loginService, "getUserByEmail")
    const checkPassword = jest.spyOn(loginService, "checkPassword")

    getUserByEmail.mockResolvedValue(
      [{
        id: 1,
        displayname: "ian",
        email: "ian@tecky.io",
        password: await bcrypt.hash("123", 10),
        height: 161,
        weight: 50,
        DOB: new Date('August 19, 1975 23:15:30'),
        quota: 10,
        expiry_date: new Date('2015-08-22 23:15:30'),
        gender: "M",
        role: "student",
        goal_id: 1,
        frequency_id: 1,
        focus_id: 1,

      }]
    )


    checkPassword.mockResolvedValue(false)

    await loginController.login(req, res)
    expect(getUserByEmail).toHaveBeenCalledWith("ian@tecky.io");
    expect(checkPassword).toHaveBeenCalled()
    expect(res.json).toHaveBeenCalledWith({ result: 'incorrect_password' })

  })

  it("can throw error if any service throw error", async () => {
    const req: any = {
      body: {
        email: "ian@tecky.io",
        password: "234"
      }
    }
    const getUserByEmail = jest.spyOn(loginService, "getUserByEmail")
    getUserByEmail.mockImplementation(() => {
      throw new Error('db close');
    });

    await loginController.login(req, res)


    expect(res.status).toHaveBeenCalledWith(401)

  })

  // it("can add user if email has not been used and db return [x] as id and no error is thrown in service",
  //  async () => {
  //   const req: any = {
  //     body: {
  //       username: "a",
  //       email: "a@a.com",
  //       password: "123",
  //       height: 100,
  //       weight: 100,
  //       dob: "1997-11-11",
  //       gender: "M",
  //       goal: 1,
  //       frequency_id: 1,
  //       focus_id: 1
  //     }
  //   }
  //   const getUserByEmail = jest.spyOn(loginService, "getUserByEmail")

  //   const addUser = jest.spyOn(loginService, "addUser")
  //   getUserByEmail.mockResolvedValue([])
  //   await loginController.addUser(req, res)

  //   expect(getUserByEmail).toHaveBeenCalledWith("a@a.com")
  //   expect(addUser).toHaveBeenCalledWith(
  //     expect.objectContaining({
  //       displayname: "a",
  //       email: "a@a.com",
  //       height: 100,
  //       weight: 100,
  //       gender: "M",
  //       goal_id: 1,
  //       frequency_id: 1,
  //       focus_id: 1
  //     })
  //   )
  //   addUser.mockResolvedValue(["1"])
  //   expect(res.json).toHaveBeenCalledWith({ msg: "Successful" })
  // })




})