import { LoginService } from "./LoginsService"
import Knex from 'knex'
import * as bcrypt from 'bcrypt';
const knexConfig = require('../knexfile')
const knex = Knex(knexConfig['testing'])

const SALT_ROUNDS = 10


describe('Login Service', () => {
    let loginService: LoginService;

    beforeEach(async () => {


        loginService = new LoginService(knex)
        await knex.migrate.rollback();
        await knex.migrate.latest();

        //run seed
        await knex.transaction(async (trx) => {

            const goal = await trx.insert([{ goal: "Lose weight" }, { goal: "Stay healthy" }, { goal: "Build muscles" }]).into('goal').returning('id');
            const frequency = await trx.insert([{ frequency: "Just start exercising" }, { frequency: "2-3 times a week" }, { frequency: "Over 3 times a week" }])
                .into('frequency').returning('id');
            const focus = await trx.insert([{ focus: "Stretching" }, { focus: "Weight gain training" }, { focus: "Keep fit" }]).into('focus').returning('id');
            const category = await trx.insert([{ category: "Stretching" }, { category: "Yoga" }, { category: "Boxing" }, { category: "Core Fusion" }, { category: "Functional Training" }, { category: "Keep Fit" }, { category: "Body-Building" }, { category: "Cardio" }]).into('category').returning('id');
            const users = await trx.insert([{
                displayname: "ian",
                email: "ian@tecky.io",
                password: await bcrypt.hash("123", SALT_ROUNDS),
                height: 161,
                weight: 50,
                DOB: new Date('August 19, 1975 23:15:30'),
                quota: 10,
                expiry_date: new Date('2015-08-22 23:15:30'),
                gender: "M",
                role: "student",
                goal_id: goal[0],
                frequency_id: frequency[0],
                focus_id: focus[0],

            }, {
                displayname: "el",
                email: "el@tecky.io",
                password: await bcrypt.hash("123", SALT_ROUNDS),

                height: 161,
                weight: 50,
                DOB: new Date('August 19, 1975 23:15:30'),

                quota: 10,
                expiry_date: new Date('2015-08-22 23:15:30'),
                gender: "F",
                role: "pt",
                goal_id: goal[0],
                frequency_id: frequency[0],
                focus_id: focus[0],
            }]).into('user').returning('id');

            const pts = await trx.insert([{
                qualification: JSON.stringify(["a", "b", "c"]),
                speciality: JSON.stringify(["d", "e", "f"]),
                intro: "elelelelelel",

                user_id: users[1]
            }]).into('pt').returning('id')

        

            let files = await trx.insert([
                { filepath: "def", pt_id: pts[0], isVideo: true },
                { filepath: "abc", pt_id: pts[0] }


            ]).into("pt_file").returning("id")
        })
        //end of seed


    })

    it("can get user by id", async () => {
        const user = await loginService.getUserById(1)
        expect(user[0]).toMatchObject({
            id: 1,
            displayname: "ian",
            email: "ian@tecky.io",
            role: "student",
            height: 161,
            weight: 50,
        })
        

    })


    // it("can get user by email", async () => {
    //     const user = await loginService.getUserByEmail("ian@tecky.io")
    //     expect(user[0]).toMatchObject({
    //         displayname: "ian",
    //         email: "ian@tecky.io",
    //         height: 161,
    //         weight: 50,
    //         DOB: new Date('August 19, 1975 23:15:30'),
    //         quota: 10,
    //         expiry_date: new Date('2015-08-22 23:15:30'),
    //         gender: "M",
    //         role: "student",
    //         goal_id: 1,
    //         frequency_id: 1,
    //         focus_id: 1,
    //     })

    // })

    // it("return [] if no such email", async () => {
    //     const user = await loginService.getUserByEmail("jjj@tecky.io")
    //     expect(user).toEqual([])

    // })

    // it("can add user", async () => {
    //     const user = await loginService.addUser(
    //         {
    //             displayname: "a",
    //             email: "a@a.com",
    //             password: await loginService.hashPassword("123"),
    //             height: 100,
    //             weight: 100,
    //             DOB: new Date("2015-08-22"),
    //             gender: "M",
    //             role: "student",
    //             goal_id: 1,
    //             frequency_id: 1,
    //             focus_id: 1
    //         }
    //     )
    //     const findUser = await loginService.getUserByEmail("a@a.com")

    //     expect(user).toHaveLength(1)
    //     expect(findUser[0]).toMatchObject({
    //         displayname: "a",
    //         email: "a@a.com",
    //         height: 100,
    //         weight: 100,
    //         DOB: new Date("2015-08-22"),
    //         gender: "M",
    //         role: "student",
    //         goal_id: 1,
    //         frequency_id: 1,
    //         focus_id: 1
    //     })

    // })

    // it("can add PT whether form contain files or not", async () => {
    //     let pt1 = (await loginService.addPT(
    //         "b",
    //         "b@b.com",
    //         await loginService.hashPassword("123"),
    //         "100",
    //         "M",
    //         ["a", "b", "c"],
    //         ["a"],
    //         "xxx",
    //         [{ mimetype: 'video/mp4', key: 'ptVideo/pic-1612168172105.mp4', }, { mimetype: 'application/octet-stream', key: 'ptPic/pic-1612168172160.octet-stream' }]
    //     ))[0]

    //     let pt2 = (await loginService.addPT(
    //         "b",
    //         "b@b.com",
    //         await loginService.hashPassword("123"),
    //         "100",
    //         "M",
    //         ["a", "b", "c"],
    //         ["a"],
    //         "xxx",
    //         null
    //     ))[0]

    //     const findUser = await loginService.getUserByEmail("b@b.com")


    //     expect(pt1).toBe(2)
    //     expect(pt2).toBe(3)

    //     expect(findUser[0]).toMatchObject({
    //         displayname: "b",
    //         email: "b@b.com",
    //         height: 100,
    //     })


    // })


    // it("can hash and compare password", async () => {
    //     let plain = "123";
    //     let hashed = await loginService.hashPassword("123")
    //     let result = await loginService.checkPassword(plain, hashed)

    //     expect(result).toBeTruthy()
    // })

    afterAll(() => {
        knex.destroy()
    })

})