import * as Knex from "knex";
import * as bcrypt from 'bcrypt';
import { textChangeRangeIsUnchanged } from "typescript";
import fs from 'fs'
const SALT_ROUNDS = 10

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries


    await knex.transaction(async (trx) => {

        const hash = await bcrypt.hash("123", SALT_ROUNDS);

        const goal = await trx.insert([{ goal: "Lose weight" }, { goal: "Stay healthy" }, { goal: "Build muscles" }]).into('goal').returning('id');
        const frequency = await trx.insert([{ frequency: "Just start exercising" }, { frequency: "2-3 times a week" }, { frequency: "Over 3 times a week" }])
            .into('frequency').returning('id');
        const focus = await trx.insert([{ focus: "Stretching" }, { focus: "Weight gain training" }, { focus: "Keep fit" }]).into('focus').returning('id');
        const category = await trx.insert([{ category: "Stretching" }, { category: "Yoga" }, { category: "Boxing" }, { category: "Core Fusion" }, { category: "Functional Training" }, { category: "Keep Fit" }, { category: "Body-Building" }, { category: "Cardio" }]).into('category').returning('id');
        const packages = await trx.insert([{ package_name: "Beginner Packege", price: 200, credit: 1, description: JSON.stringify(["Enjoy one lesson quota", "Access to all types of course"]) },
        { package_name: "Competent Packege", price: 800, credit: 5, description: JSON.stringify(["Enjoy 5 lesson quota", "Access to all types of course"]) },
        { package_name: "Proficient Packege", price: 1500, credit: 10, description: JSON.stringify(["Enjoy 10 lesson quota", "Access to all types of course"]) }]).into("package").returning("id")


        // Inserts seed entries

        // function usersSeed() {
        //     return new Promise(function (resolve, reject) {

        //         fs.readFile('./user.json', 'utf-8', (err, data) => {
        //             if (err) reject(err);
        //             resolve(data)
        //         })
        //     })

        // }


        // let userSeeds = await usersSeed()
// console.log(JSON.parse(userSeeds as string))

        const users = await trx.insert([
            {
              "displayname": "ayaChan",
              "email": "ayaChan@gmail.io",
              "password": "1wa5988k",
              "height": 170,
              "weight": 68,
              "DOB": "August 23, 1978 20:25:27",
              "quota": 10,
              "gender": "Female",
              "role": "pt"
            },
            {
              "displayname": "kellyChan",
              "email": "kellyChan@gmail.com",
              "password": "se1vsla6",
              "height": 173,
              "weight": 72,
              "DOB": "January 29, 1980 23:55:05",
              "quota": 10,
              "gender": "Female",
              "role": "pt"
            },
            {
              "displayname": "miuChoy",
              "email": "miuChoy@gmail.com",
              "password": "7ml3joyi",
              "height": 172,
              "weight": 72,
              "DOB": "February 21, 1980 00:59:14",
              "quota": 10,
              "gender": "Female",
              "role": "pt"
            },
            {
              "displayname": "claudiaChan",
              "email": "claudiaChan@gmail.com",
              "password": "os03ie0w",
              "height": 170,
              "weight": 55,
              "DOB": "June 5, 1981 14:26:50",
              "quota": 10,
              "gender": "Female",
              "role": "pt"
            },
            {
              "displayname": "cocoTsang",
              "email": "cocoTsang@gmail.com",
              "password": "qa0ye4jq",
              "height": 181,
              "weight": 57,
              "DOB": "October 20, 1981 04:54:51",
              "quota": 10,
              "gender": "Female",
              "role": "pt"
            },
            {
              "displayname": "colinaTang",
              "email": "colinaTang@gmail.com",
              "password": "vusepjch",
              "height": 177,
              "weight": 60,
              "DOB": "January 12, 1983 13:05:24",
              "quota": 10,
              "gender": "Female",
              "role": "pt"
            },
            {
              "displayname": "dorothyWong",
              "email": "dorothyWong@gmail.com",
              "password": "0t6ggpp4",
              "height": 167,
              "weight": 61,
              "DOB": "July 11, 1983 17:42:16",
              "quota": 10,
              "gender": "Female",
              "role": "pt"
            },
            {
              "displayname": "ellaLaw",
              "email": "ellaLaw@gmail.com",
              "password": "m0ns4xqg",
              "height": 168,
              "weight": 51,
              "DOB": "October 29, 1984 09:52:59",
              "quota": 10,
              "gender": "Female",
              "role": "pt"
            },
            {
              "displayname": "eunicelai",
              "email": "eunicelai@gmail.com",
              "password": "sml049xf",
              "height": 177,
              "weight": 54,
              "DOB": "December 11, 1984 05:48:44",
              "quota": 10,
              "gender": "Female",
              "role": "pt"
            },
            {
              "displayname": "cathyLuk",
              "email": "cathyLuk@gmail.com",
              "password": "n9e9sizi",
              "height": 183,
              "weight": 77,
              "DOB": "February 6, 1985 03:53:49",
              "quota": 10,
              "gender": "Female",
              "role": "pt"
            },
            {
              "displayname": "mabelyau",
              "email": "mabelyau@gmail.com",
              "password": "9wgl4qjb",
              "height": 184,
              "weight": 76,
              "DOB": "April 20, 1985 16:37:19",
              "quota": 10,
              "gender": "Female",
              "role": "pt"
            },
            {
              "displayname": "allenYue",
              "email": "allenYue@gmail.com",
              "password": "efhx0q47",
              "height": 165,
              "weight": 58,
              "DOB": "February 8, 1986 04:31:38",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "brianCheung",
              "email": "brianCheung@gmail.com",
              "password": "x67p34ce",
              "height": 181,
              "weight": 47,
              "DOB": "June 21, 1987 17:11:33",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "chungChan",
              "email": "chungChan@gmail.com",
              "password": "8t2w13sq",
              "height": 171,
              "weight": 67,
              "DOB": "July 26, 1987 17:11:33",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "chungHo",
              "email": "chungHo@gmail.com",
              "password": "4ka1wvnc",
              "height": 178,
              "weight": 48,
              "DOB": "August 2, 1987 20:35:58",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "danielCheng",
              "email": "danielCheng@gmail.com",
              "password": "0tphkhws",
              "height": 177,
              "weight": 57,
              "DOB": "September 25, 1988 01:53:24",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "daveWong",
              "email": "daveWong@gmail.com",
              "password": "wfmgwi00",
              "height": 171,
              "weight": 54,
              "DOB": "October 13, 1988 04:22:11",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "derrickCho",
              "email": "derrickCho@gmail.com",
              "password": "2yqwm0d4",
              "height": 178,
              "weight": 52,
              "DOB": "January 27, 1989 18:52:26",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "endySun",
              "email": "endySun@gmail.com",
              "password": "vyfm76r0",
              "height": 166,
              "weight": 49,
              "DOB": "February 9, 1990 14:58:35",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "ericLaw",
              "email": "ericLaw@gmail.com",
              "password": "iy5mdnp5",
              "height": 168,
              "weight": 71,
              "DOB": "August 11, 1991 13:37:52",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "georgeLee",
              "email": "georgeLee@gmail.com",
              "password": "7xm8ly66",
              "height": 172,
              "weight": 69,
              "DOB": "October 23, 1991 18:49:06",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "haniTsang",
              "email": "haniTsang@gmail.com",
              "password": "prx70gqv",
              "height": 166,
              "weight": 62,
              "DOB": "February 28, 1992 11:40:43",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "jimmyCheng",
              "email": "jimmyCheng@gmail.com",
              "password": "wswvknm8",
              "height": 167,
              "weight": 65,
              "DOB": "June 19, 1992 10:48:43",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "karlCheung",
              "email": "karlCheung@gmail.com",
              "password": "wb2l9yco",
              "height": 184,
              "weight": 72,
              "DOB": "October 17, 1993 20:24:10",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "lesYuen",
              "email": "lesYuen@gmail.com",
              "password": "u091wqtn",
              "height": 174,
              "weight": 51,
              "DOB": "October 28, 1994 01:37:02",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "louisChan",
              "email": "louisChan@gmail.com",
              "password": "vj0mfhay",
              "height": 174,
              "weight": 72,
              "DOB": "August 5, 1973 21:22:20",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "marcusTse",
              "email": "marcusTse@gmail.com",
              "password": "n4hv4q11",
              "height": 182,
              "weight": 71,
              "DOB": "April 11, 1974 17:19:33",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "matthewCheng",
              "email": "matthewCheng@gmail.com",
              "password": "edqiyq4z",
              "height": 173,
              "weight": 55,
              "DOB": "June 16, 1975 05:45:33",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "matthewLeung",
              "email": "matthewLeung@gmail.com",
              "password": "90l60ygg",
              "height": 180,
              "weight": 72,
              "DOB": "August 11, 1978 00:42:30",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "mingTang",
              "email": "mingTang@gmail.com",
              "password": "lownwbgl",
              "height": 177,
              "weight": 59,
              "DOB": "July 19, 1979 01:29:12",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "oscarChu",
              "email": "oscarChu@gmail.com",
              "password": "4vnvnjhv",
              "height": 182,
              "weight": 65,
              "DOB": "November 28, 1979 22:23:07",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "oscarWong",
              "email": "oscarWong@gmail.com",
              "password": "fgnr2ftg",
              "height": 165,
              "weight": 76,
              "DOB": "May 29, 1980 03:58:32",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "pongChan",
              "email": "pongChan@gmail.com",
              "password": "6jhemff8",
              "height": 185,
              "weight": 63,
              "DOB": "May 30, 1980 12:15:41",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "ringoLam",
              "email": "ringoLam@gmail.com",
              "password": "qyysyilr",
              "height": 180,
              "weight": 77,
              "DOB": "May 9, 1981 06:24:34",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "shingChow",
              "email": "shingChow@gmail.com",
              "password": "01vzjbq4",
              "height": 178,
              "weight": 65,
              "DOB": "May 22, 1981 06:55:09",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "sunnyYeung",
              "email": "sunnyYeung@gmail.com",
              "password": "0t6ggpp4",
              "height": 167,
              "weight": 69,
              "DOB": "August 7, 1982 10:14:44",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "tomYip",
              "email": "tomYip@gmail.com",
              "password": "qol8jqbc",
              "height": 168,
              "weight": 61,
              "DOB": "March 2, 1983 02:21:32",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "torresKo",
              "email": "torresKo@gmail.com",
              "password": "tavs3mjl",
              "height": 180,
              "weight": 58,
              "DOB": "March 18, 1983 22:28:15",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "vincentChan",
              "email": "vincentChan@gmail.com",
              "password": "kgn423ky",
              "height": 177,
              "weight": 56,
              "DOB": "March 7, 1984 23:19:38",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "yvesYue",
              "email": "yvesYue@gmail.com",
              "password": "vi3jc4yz",
              "height": 184,
              "weight": 49,
              "DOB": "July 14, 1984 23:36:40",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "benjaminLiu",
              "email": "benjaminLiu@gmail.com",
              "password": "6vduqy29",
              "height": 176,
              "weight": 74,
              "DOB": "April 8, 1985 04:44:44",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "ianCheung",
              "email": "ianCheung@gmail.com",
              "password": "7qo1015n",
              "height": 181,
              "weight": 59,
              "DOB": "August 1, 1985 22:48:55",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "osmondChiu",
              "email": "osmondChiu@gmail.com",
              "password": "0yytqhbm",
              "height": 167,
              "weight": 71,
              "DOB": "October 2, 1985 07:26:36",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "ryanShum",
              "email": "ryanShum@gmail.com",
              "password": "pij4ifzw",
              "height": 169,
              "weight": 63,
              "DOB": "November 4, 1986 17:28:46",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "isaacChau",
              "email": "isaacChau@gmail.com",
              "password": "gr9akgag",
              "height": 185,
              "weight": 71,
              "DOB": "November 23, 1988 11:47:11",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "alexChung",
              "email": "alexChung@gmail.com",
              "password": "31m4z21f",
              "height": 170,
              "weight": 68,
              "DOB": "June 18, 1989 23:46:28",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "shaunMelwani",
              "email": "shaunMelwani@gmail.com",
              "password": "myz866zp",
              "height": 183,
              "weight": 57,
              "DOB": "October 26, 1992 10:32:59",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "nickBrown",
              "email": "nickBrown@gmail.com",
              "password": "2a4mdou5",
              "height": 174,
              "weight": 51,
              "DOB": "December 31, 1993 08:55:14",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "kennethY",
              "email": "kennethmuaythai@gmail.com",
              "password": "avzy1n4y",
              "height": 176,
              "weight": 64,
              "DOB": "January 9, 1994 03:29:16",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "hugoSerge",
              "email": "hsed99@hotmail.com",
              "password": "elj0y4z6",
              "height": 173,
              "weight": 68,
              "DOB": "November 29, 1994",
              "quota": 10,
              "gender": "Male",
              "role": "pt"
            },
            {
              "displayname": "elizeTai",
              "email": "elizeTai@hotmail.com",
              "password": "ezx4qnl1",
              "height": 167,
              "weight": 46,
              "DOB": "July 5, 1965 01:55:39",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 1,
              "focus_id": 1
            },
            {
              "displayname": "jacquelineMak",
              "email": "jacquelineMak@hotmail.com",
              "password": "tb2b31xw",
              "height": 181,
              "weight": 52,
              "DOB": "December 20, 1965 15:50:46",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 1,
              "focus_id": 1
            },
            {
              "displayname": "wingKwok",
              "email": "wingKwok@hotmail.com",
              "password": "r99xw0h1",
              "height": 165,
              "weight": 60,
              "DOB": "August 6, 1968 02:39:17",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 1,
              "focus_id": 1
            },
            {
              "displayname": "tiffanyLai",
              "email": "tiffanyLai@hotmail.com",
              "password": "xyy4gsq2",
              "height": 159,
              "weight": 62,
              "DOB": "April 21, 1971 04:35:46",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 1,
              "focus_id": 1
            },
            {
              "displayname": "carolLo",
              "email": "carolLo@hotmail.com",
              "password": "u915ktnq",
              "height": 168,
              "weight": 59,
              "DOB": "September 29, 1971 11:41:21",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 1,
              "focus_id": 1
            },
            {
              "displayname": "mandyWong",
              "email": "mandyWong@hotmail.com",
              "password": "31iu886m",
              "height": 165,
              "weight": 55,
              "DOB": "January 11, 1976 16:27:56",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 1,
              "focus_id": 3
            },
            {
              "displayname": "caniFan",
              "email": "caniFan@hotmail.com",
              "password": "0jdjx30s",
              "height": 177,
              "weight": 59,
              "DOB": "February 4, 1980 22:38:14",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 1,
              "focus_id": 3
            },
            {
              "displayname": "estherYeung",
              "email": "estherYeung@hotmail.com",
              "password": "bn7q8e5z",
              "height": 176,
              "weight": 70,
              "DOB": "February 23, 1980 14:25:14",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 1,
              "focus_id": 3
            },
            {
              "displayname": "cannyHo",
              "email": "cannyHo@hotmail.com",
              "password": "pz16wm4t",
              "height": 156,
              "weight": 61,
              "DOB": "September 15, 1981 00:34:29",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 3
            },
            {
              "displayname": "valerieTam",
              "email": "valerieTam@hotmail.com",
              "password": "jgzxz5sn",
              "height": 167,
              "weight": 62,
              "DOB": "November 11, 1983 07:32:19",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 3
            },
            {
              "displayname": "charlotteYau",
              "email": "charlotteYau@hotmail.com",
              "password": "spqdo7cr",
              "height": 168,
              "weight": 55,
              "DOB": "December 1, 1983 00:19:56",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 3
            },
            {
              "displayname": "harrietNg",
              "email": "harrietNg@hotmail.com",
              "password": "py7fs61j",
              "height": 166,
              "weight": 60,
              "DOB": "November 11, 1985 04:46:12",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 3
            },
            {
              "displayname": "janiceWong",
              "email": "janiceWong@hotmail.com",
              "password": "6yb1g1h8",
              "height": 167,
              "weight": 48,
              "DOB": "June 2, 1987 16:37:13",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 3
            },
            {
              "displayname": "carlyFan",
              "email": "carlyFan@hotmail.com",
              "password": "y4m2anfq",
              "height": 181,
              "weight": 47,
              "DOB": "June 24, 1987 02:13:41",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 3
            },
            {
              "displayname": "karenMak",
              "email": "karenMak@hotmail.com",
              "password": "fm29x9z6",
              "height": 172,
              "weight": 47,
              "DOB": "July 4, 1988 13:23:09",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 3,
              "focus_id": 3
            },
            {
              "displayname": "katOr",
              "email": "katOr@hotmail.com",
              "password": "4uc288ib",
              "height": 177,
              "weight": 50,
              "DOB": "June 28, 1989 13:23:09",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 3,
              "focus_id": 3
            },
            {
              "displayname": "anitaTai",
              "email": "anitaTai@hotmail.com",
              "password": "mu3k8qoh",
              "height": 163,
              "weight": 45,
              "DOB": "October 17, 1990 14:32:46",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 1,
              "focus_id": 1
            },
            {
              "displayname": "annAu",
              "email": "annAu@hotmail.com",
              "password": "81f4vif0",
              "height": 166,
              "weight": 46,
              "DOB": "January 1, 1991 08:15:06",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 1,
              "focus_id": 1
            },
            {
              "displayname": "florenceMok",
              "email": "florenceMok@hotmail.com",
              "password": "54p4zzeo",
              "height": 168,
              "weight": 46,
              "DOB": "April 16, 1991 07:32:12",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 1,
              "focus_id": 1
            },
            {
              "displayname": "oliviaChan",
              "email": "oliviaChan@hotmail.com",
              "password": "d0u9hqaa",
              "height": 166,
              "weight": 47,
              "DOB": "October 12, 1991 02:22:37",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 1,
              "focus_id": 1
            },
            {
              "displayname": "graceYau",
              "email": "graceYau@hotmail.com",
              "password": "yb234wk6",
              "height": 167,
              "weight": 50,
              "DOB": "February 4, 1992 12:35:45",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "zoeMok",
              "email": "zoeMok@gmail.com",
              "password": "ekynt7wz",
              "height": 181,
              "weight": 45,
              "DOB": "April 13, 1993 05:05:36",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "lilianNg",
              "email": "lilianNg@gmail.com",
              "password": "fmapm25i",
              "height": 172,
              "weight": 46,
              "DOB": "April 23, 1993 06:12:35",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "audreyChan",
              "email": "audreyChan@gmail.com",
              "password": "9x8s732d",
              "height": 177,
              "weight": 46,
              "DOB": "October 16, 1995 09:42:22",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "noraLiu",
              "email": "noraLiu@gmail.com",
              "password": "cww8o1ns",
              "height": 162,
              "weight": 47,
              "DOB": "December 6, 1996 11:47:04",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "biancaTsang",
              "email": "biancaTsang@gmail.com",
              "password": "5ec5ayhg",
              "height": 163,
              "weight": 50,
              "DOB": "December 26, 1966 02:55:17",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "annaChow",
              "email": "annaChow@gmail.com",
              "password": "lyuwbf3p",
              "height": 169,
              "weight": 42,
              "DOB": "April 5, 1969 04:45:08",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "isabelLai",
              "email": "isabelLai@gmail.com",
              "password": "gdnct68y",
              "height": 178,
              "weight": 43,
              "DOB": "September 13, 1971 14:23:46",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 2,
              "focus_id": 3
            },
            {
              "displayname": "bettyTsang",
              "email": "bettyTsang@gmail.com",
              "password": "91hl8gpu",
              "height": 189,
              "weight": 47,
              "DOB": "December 1, 1971 17:52:55",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 3,
              "focus_id": 3
            },
            {
              "displayname": "roseCheng",
              "email": "roseCheng@gmail.com",
              "password": "889noh99",
              "height": 150,
              "weight": 50,
              "DOB": "January 9, 1972 21:08:05",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 3,
              "focus_id": 3
            },
            {
              "displayname": "amyHo",
              "email": "amyHo@gmail.com",
              "password": "5fl9i4ww",
              "height": 165,
              "weight": 45,
              "DOB": "January 28, 1972 22:04:51",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 3
            },
            {
              "displayname": "shirleyYuen",
              "email": "shirleyYuen@gmail.com",
              "password": "p8f1dc4w",
              "height": 179,
              "weight": 46,
              "DOB": "July 19, 1972 09:43:37",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 3
            },
            {
              "displayname": "lilySiu",
              "email": "lilySiu@gmail.com",
              "password": "9h9076j6",
              "height": 170,
              "weight": 52,
              "DOB": "October 11, 1974 19:14:23",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 3
            },
            {
              "displayname": "rebeccaYim",
              "email": "rebeccaYim@gmail.com",
              "password": "62j8d8gp",
              "height": 160,
              "weight": 53,
              "DOB": "July 28, 1976 19:19:42",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 3
            },
            {
              "displayname": "kateChan",
              "email": "kateChan@gmail.com",
              "password": "ye1cooiw",
              "height": 178,
              "weight": 47,
              "DOB": "August 2, 1976 23:21:39",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 3
            },
            {
              "displayname": "ceciliaWong",
              "email": "ceciliaWong@gmail.com",
              "password": "rd1m65h0",
              "height": 168,
              "weight": 50,
              "DOB": "September 22, 1976 02:27:33",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 2
            },
            {
              "displayname": "hazelNg",
              "email": "hazelNg@gmail.com",
              "password": "4plbzfid",
              "height": 164,
              "weight": 45,
              "DOB": "October 5, 1977 09:13:16",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 2
            },
            {
              "displayname": "vivianPoon",
              "email": "vivianPoon@gmail.com",
              "password": "r3h55bzy",
              "height": 187,
              "weight": 46,
              "DOB": "March 26, 1979 05:47:04",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "mariaTam",
              "email": "mariaTam@gmail.com",
              "password": "hf7n12ob",
              "height": 163,
              "weight": 52,
              "DOB": "October 15, 1983 16:35:52",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "christinaTang",
              "email": "christinaTang@gmail.com",
              "password": "aunk94e6",
              "height": 170,
              "weight": 53,
              "DOB": "July 28, 1985 00:28:22",
              "quota": 10,
              "gender": "Female",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "freddyMo",
              "email": "freddyMo@gmail.com",
              "password": "p95iwrt3",
              "height": 190,
              "weight": 89,
              "DOB": "March 29, 1986 05:22:58",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 2
            },
            {
              "displayname": "jackyCheung",
              "email": "jackyCheung@gmail.com",
              "password": "sb62m4ir",
              "height": 191,
              "weight": 70,
              "DOB": "April 3, 1986 16:24:07",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 2
            },
            {
              "displayname": "samuelBrown",
              "email": "samuelBrown@gmail.com",
              "password": "7ayp445c",
              "height": 182,
              "weight": 65,
              "DOB": "June 3, 1988 06:04:05",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 2
            },
            {
              "displayname": "keithWong",
              "email": "keithWong@gmail.com",
              "password": "givg083n",
              "height": 188,
              "weight": 65,
              "DOB": "August 22, 1988 14:23:21",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 2
            },
            {
              "displayname": "timTsang",
              "email": "timTsang@gmail.com",
              "password": "g2ge4ic5",
              "height": 181,
              "weight": 77,
              "DOB": "August 23, 1988 15:03:49",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 2
            },
            {
              "displayname": "jamesRedshaw",
              "email": "jamesRedshaw@gmail.com",
              "password": "w3kflf33",
              "height": 182,
              "weight": 71,
              "DOB": "December 29, 1988 13:31:00",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 2
            },
            {
              "displayname": "rickChung",
              "email": "rickChung@gmail.com",
              "password": "iszmoe6w",
              "height": 177,
              "weight": 69,
              "DOB": "August 27, 1990 20:51:43",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 2
            },
            {
              "displayname": "isaacHo",
              "email": "isaacHo@gmail.com",
              "password": "ezlzl6fz",
              "height": 176,
              "weight": 68,
              "DOB": "November 21, 1992 22:46:25",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 2
            },
            {
              "displayname": "ryanChoy",
              "email": "ryanChoy@gmail.com",
              "password": "c4t5u9dx",
              "height": 156,
              "weight": 64,
              "DOB": "May 21, 1993 19:13:38",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 2
            },
            {
              "displayname": "alvinTang",
              "email": "alvinTang@gmail.com",
              "password": "fe48ywvo",
              "height": 167,
              "weight": 63,
              "DOB": "February 15, 1997 03:36:48",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 2
            },
            {
              "displayname": "thomasLi",
              "email": "thomasLi@hotmail.com",
              "password": "l7b3di1q",
              "height": 168,
              "weight": 68,
              "DOB": "April 12, 1965 13:56:52",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 2
            },
            {
              "displayname": "kevinNg",
              "email": "kevinNg@hotmail.com",
              "password": "s9u1w0lo",
              "height": 166,
              "weight": 71,
              "DOB": "August 27, 1965 21:54:56",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 3
            },
            {
              "displayname": "terryChan",
              "email": "terryChan@hotmail.com",
              "password": "xyt7lqzx",
              "height": 167,
              "weight": 63,
              "DOB": "February 2, 1966 15:07:04",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 3
            },
            {
              "displayname": "geraldLeung",
              "email": "geraldLeung@hotmail.com",
              "password": "k5q0g15o",
              "height": 175,
              "weight": 72,
              "DOB": "March 5, 1969 18:32:07",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 3,
              "focus_id": 3
            },
            {
              "displayname": "victorLeung",
              "email": "victorLeung@hotmail.com",
              "password": "jxkswg5p",
              "height": 183,
              "weight": 73,
              "DOB": "September 15, 1972 02:05:12",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 3
            },
            {
              "displayname": "chrisLaw",
              "email": "chrisLaw@hotmail.com",
              "password": "3b5922v8",
              "height": 174,
              "weight": 89,
              "DOB": "March 1, 1975 15:45:51",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 1
            },
            {
              "displayname": "larryCheung",
              "email": "larryCheung@hotmail.com",
              "password": "j2vk9f7n",
              "height": 179,
              "weight": 70,
              "DOB": "February 19, 1976 02:21:21",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 1
            },
            {
              "displayname": "carterMa",
              "email": "carterMa@hotmail.com",
              "password": "rxb9uaf7",
              "height": 177,
              "weight": 65,
              "DOB": "September 12, 1976 17:10:16",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 1
            },
            {
              "displayname": "westleyCheung",
              "email": "westleyCheung@hotmail.com",
              "password": "jbb6lf06",
              "height": 167,
              "weight": 65,
              "DOB": "April 7, 1977 15:24:40",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 1
            },
            {
              "displayname": "icarusWong",
              "email": "icarusWong@hotmail.com",
              "password": "2os778ks",
              "height": 178,
              "weight": 77,
              "DOB": "August 8, 1977 07:57:32",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 1
            },
            {
              "displayname": "vincentLau",
              "email": "vincentLau@hotmail.com",
              "password": "42e47s71",
              "height": 175,
              "weight": 71,
              "DOB": "November 8, 1979 21:54:25",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 1
            },
            {
              "displayname": "benFong",
              "email": "benFong@hotmail.com",
              "password": "bu5n91rt",
              "height": 176,
              "weight": 69,
              "DOB": "May 18, 1983 01:35:33",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 1,
              "focus_id": 1
            },
            {
              "displayname": "ericLee",
              "email": "ericLee@hotmail.com",
              "password": "2q7ltj8i",
              "height": 164,
              "weight": 68,
              "DOB": "January 7, 1985 21:18:15",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 1,
              "focus_id": 2
            },
            {
              "displayname": "marcoLau",
              "email": "marcoLau@hotmail.com",
              "password": "hf62orh3",
              "height": 175,
              "weight": 64,
              "DOB": "January 16, 1985 13:40:08",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 1,
              "focus_id": 2
            },
            {
              "displayname": "dustinLeung",
              "email": "dustinLeung@hotmail.com",
              "password": "du74k5v0",
              "height": 183,
              "weight": 63,
              "DOB": "January 3, 1988 09:27:28",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 1,
              "focus_id": 2
            },
            {
              "displayname": "hinoLeung",
              "email": "hinoLeung@hotmail.com",
              "password": "wb5k0gvg",
              "height": 174,
              "weight": 68,
              "DOB": "December 20, 1988 00:10:23",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 1,
              "focus_id": 2
            },
            {
              "displayname": "arthurYuen",
              "email": "arthurYuen@hotmail.com",
              "password": "2cxmpc87",
              "height": 179,
              "weight": 71,
              "DOB": "November 5, 1990 23:17:36",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 1,
              "focus_id": 2
            },
            {
              "displayname": "jasonWong",
              "email": "jasonWong@hotmail.com",
              "password": "4gbwgnra",
              "height": 177,
              "weight": 63,
              "DOB": "August 29, 1991 06:36:51",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 1,
              "focus_id": 2
            },
            {
              "displayname": "wilfredKing",
              "email": "wilfredKing@hotmail.com",
              "password": "ky1wp5mf",
              "height": 167,
              "weight": 72,
              "DOB": "September 27, 1991 19:29:44",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 1,
              "focus_id": 2
            },
            {
              "displayname": "kenrySiu",
              "email": "kenrySiu@hotmail.com",
              "password": "t5zo7rxz",
              "height": 178,
              "weight": 73,
              "DOB": "August 22, 1992 13:17:52",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "dennisChan",
              "email": "dennisChan@hotmail.com",
              "password": "znqmnl6v",
              "height": 175,
              "weight": 70,
              "DOB": "August 11, 1994 09:34:47",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "dennisTsang",
              "email": "dennisTsang@hotmail.com",
              "password": "w05e4olb",
              "height": 176,
              "weight": 65,
              "DOB": "April 25, 1995 22:41:26",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "deeLeung",
              "email": "deeLeung@hotmail.com",
              "password": "51lenm81",
              "height": 164,
              "weight": 65,
              "DOB": "January 8, 1996 08:10:30",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "cyrusTang",
              "email": "cyrusTang@hotmail.com",
              "password": "e35c1skk",
              "height": 175,
              "weight": 77,
              "DOB": "January 21, 1996 16:55:57",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "zenkioFung",
              "email": "zenkioFung@hotmail.com",
              "password": "w3p2wtc5",
              "height": 183,
              "weight": 71,
              "DOB": "December 3, 1996 07:26:01",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "zekeNg",
              "email": "zekeNg@hotmail.com",
              "password": "4bqx5m1t",
              "height": 174,
              "weight": 69,
              "DOB": "September 17, 1967 19:02:36",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "gordonLau",
              "email": "gordonLau@hotmail.com",
              "password": "1lj2cmos",
              "height": 179,
              "weight": 68,
              "DOB": "August 13, 1969 20:39:20",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "alexLau",
              "email": "alexLau@hotmail.com",
              "password": "4g3qrk22",
              "height": 177,
              "weight": 64,
              "DOB": "September 27, 1969 13:29:41",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "lukeYeung",
              "email": "lukeYeung@hotmail.com",
              "password": "v2p4jxaa",
              "height": 167,
              "weight": 63,
              "DOB": "June 28, 1970 02:24:51",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 3,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "jasonLi",
              "email": "jasonLi@hotmail.com",
              "password": "eg623igw",
              "height": 178,
              "weight": 68,
              "DOB": "August 24, 1970 02:57:51",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 2,
              "focus_id": 2
            },
            {
              "displayname": "daragonLung",
              "email": "daragonLung@hotmail.com",
              "password": "a7bm40v9",
              "height": 175,
              "weight": 71,
              "DOB": "January 7, 1975 07:26:21",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 1,
              "focus_id": 2
            },
            {
              "displayname": "donnySiu",
              "email": "donnySiu@hotmail.com",
              "password": "v8jykmvn",
              "height": 176,
              "weight": 63,
              "DOB": "September 24, 1976 17:44:08",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 1,
              "focus_id": 2
            },
            {
              "displayname": "jamesFok",
              "email": "jamesFok@hotmail.com",
              "password": "poa8o2q5",
              "height": 164,
              "weight": 72,
              "DOB": "October 17, 1976 08:05:05",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 1,
              "focus_id": 2
            },
            {
              "displayname": "eltonLam",
              "email": "eltonLam@hotmail.com",
              "password": "dlalzy93",
              "height": 175,
              "weight": 73,
              "DOB": "June 10, 1958 07:00:08",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 1,
              "focus_id": 2
            },
            {
              "displayname": "samNg",
              "email": "samNg@hotmail.com",
              "password": "ju13wu5i",
              "height": 183,
              "weight": 65,
              "DOB": "August 8, 1979 03:37:36",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 1,
              "focus_id": 1
            },
            {
              "displayname": "lawrenceTsang",
              "email": "lawrenceTsang@hotmail.com",
              "password": "5mdo8a5d",
              "height": 179,
              "weight": 77,
              "DOB": "June 10, 1981 02:31:40",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 2,
              "frequency_id": 1,
              "focus_id": 1
            },
            {
              "displayname": "royLi",
              "email": "royLi@hotmail.com",
              "password": "eqdhtf49",
              "height": 177,
              "weight": 78,
              "DOB": "March 1, 1983 00:19:13",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 1,
              "focus_id": 3
            },
            {
              "displayname": "patrickTsoo",
              "email": "patrickTso@hotmail.com",
              "password": "7pa9akx6",
              "height": 167,
              "weight": 76,
              "DOB": "May 9, 1985 00:19:13",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 1,
              "focus_id": 3
            },
            {
              "displayname": "lucianChan",
              "email": "lucianChan@hotmail.com",
              "password": "na7z31hx",
              "height": 178,
              "weight": 77,
              "DOB": "May 19, 1985 04:05:25",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 3
            },
            {
              "displayname": "timTang",
              "email": "timTang@hotmail.com",
              "password": "2y7amxcx",
              "height": 175,
              "weight": 73,
              "DOB": "October 7, 1985 00:40:58",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 3
            },
            {
              "displayname": "vitoHui",
              "email": "vitoHui@hotmail.com",
              "password": "nb7q399z",
              "height": 176,
              "weight": 73,
              "DOB": "December 23, 1985 13:00:09",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 3
            },
            {
              "displayname": "hankLi",
              "email": "hankLi@hotmail.com",
              "password": "t8efxafk",
              "height": 164,
              "weight": 88,
              "DOB": "June 26, 1986 03:45:07",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 3
            },
            {
              "displayname": "boscoFung",
              "email": "boscoFung@hotmail.com",
              "password": "95cvnbo9",
              "height": 175,
              "weight": 77,
              "DOB": "November 15, 1986 04:12:58",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 3
            },
            {
              "displayname": "kenLam",
              "email": "kenLam@hotmail.com",
              "password": "8b1c3yo2",
              "height": 183,
              "weight": 78,
              "DOB": "October 17, 1989 09:19:38",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 3
            },
            {
              "displayname": "tomLau",
              "email": "tomLau@hotmail.com",
              "password": "nwdwlz60",
              "height": 174,
              "weight": 76,
              "DOB": "September 7, 1991 13:19:41",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 3,
              "focus_id": 3
            },
            {
              "displayname": "toddTong",
              "email": "toddTong@gmail.com",
              "password": "8vyng75k",
              "height": 179,
              "weight": 77,
              "DOB": "January 9, 1993 07:34:53",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 3,
              "focus_id": 3
            },
            {
              "displayname": "phoenixLaw",
              "email": "phoenixLaw@gmail.com",
              "password": "g92g74ua",
              "height": 177,
              "weight": 73,
              "DOB": "August 9, 1993 02:48:51",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 3,
              "focus_id": 1
            },
            {
              "displayname": "timmyKong",
              "email": "timmyKong@gmail.com",
              "password": "6nw2uz6q",
              "height": 167,
              "weight": 73,
              "DOB": "December 1, 1994 07:31:38",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 1
            },
            {
              "displayname": "barryLeung",
              "email": "barryLeung@gmail.com",
              "password": "rn136pwt",
              "height": 178,
              "weight": 86,
              "DOB": "May 6, 1995 07:23:13",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 1
            },
            {
              "displayname": "adamLi",
              "email": "adamLi@gmail.com",
              "password": "9gs7jk4g",
              "height": 175,
              "weight": 82,
              "DOB": "November 29, 1997 21:08:08",
              "quota": 10,
              "gender": "Male",
              "role": "student",
              "goal_id": 1,
              "frequency_id": 2,
              "focus_id": 1
            }
          ]).into("user").returning('id');








        // function ptSeed() {
        //     return new Promise(function (resolve, reject) {

        //         fs.readFile('./pt.json', 'utf-8', (err, data) => {
        //             if (err) reject(err);
        //             resolve(data)
        //         })
        //     })

        // }

        // let ptsSeed = await ptSeed()

        const pts = await trx.insert([
            {
                "qualification": JSON.stringify(["Yoga Alliance RYT250 Certified Teacher", "ACROVINYASA Level 1 & 2 Certified Teacher, ASI SUP Yoga Instructor"]),
                "speciality": JSON.stringify(["Yoga"]),
                "intro": "Aya's yoga journey began in 2005 as a substitute for gymnastics and acrobatics, but she quickly developed a passion for the practice and completed 250 hours of yoga teacher training in 2014. Jessica is also actively involved in the local acroyoga community, and is the only ACROVINYASA Level 2 certified teacher in the city. Primarily based in HK, she has had the privilege of teaching in China, Korea, Thailand, Singapore, Australia, and the UK. Naturally hypermobile, she’s made it her mission to find balance through a strong, powerful yoga practice and hopes to inspire others to discover their potential.",
                "user_id": 1
            },
            {
                "qualification": JSON.stringify(["AASFP Specialized Prescription Program: Pre- & Post-Natal Fitness", "PTA Global certified Personal Trainer", "AASFP Muay Thai Instructor (Foundation) Certification", "AASFP Exercise Ball Instructor Certification", "AASFP Pilates Instructor (Mat Work) Certification", "AASFP Advanced Personal Fitness Trainer Certification", "Sport Climbing Training Levels 1 & 2 Certification - Hong Kong Mountaineering Union", "Certified ViPR Instructor"]),
                "speciality": JSON.stringify(["Boxing, Stretching", "Kettlebell", "TRX", "Bulgarian Bag", "PTA Global", "Vipr", "Power Plate", "Sport Climbing Level 2"]),
                "intro": "Kelly started Pilates when she was diagnosed with scoliosis a few years ago. The exercise efficiently relieved her back pain and she realised the importance of core training. Since 2010, she has been a professional Pilates instructor and became a Personal Trainer soon after.\r\n\r\nHer training focuses on core, balance and coordination. With a versatile interest in sports, Kelly also achieved professional qualifications in Muay Thai, Fitball and ViPR, adding to her diverse repertoire of training skills.",
                "user_id": 2
            },
            {
                "qualification": JSON.stringify(["Bachelor of International Hotel and Tourism Management", "IPTFA Bronze Pro Personal Trainer Certification", "Certified in TRX RIP Trainer", "AASFP Stretch Trainer Certification"]),
                "speciality": JSON.stringify(["Metabolic Specialist (weight loss/gain)", "ProStretch", "Recovery"]),
                "intro": "Miy started her fitness journey at the age of 18 after gaining 10kg during high school. She finds that exercise not only helps her to achieve her fitness goal, it also helps her to build confidence and a positive mindset. Miu is especially interested in functional and corrective exercises that can prep the body for real-life activities. She pushes her clients to their limits while always maintaining a fun and motivational training environment. She strongly advocates exercise as the ‘medicine’ for both mental and physical health.\r\n\r\nTogether with her industry knowledge, Cherry believes that setting clear goals and creating effective personalised training programmes are the keys to achieving clients’ fitness objectives.",
                "user_id": 3
            },
            {
                "qualification": JSON.stringify(["IPTFA Bronze Pro Personal Trainer Certification", "Certified in TRX Suspension Trainer", "CPR & AED"]),
                "speciality": JSON.stringify(["Body-Building/ Figure Competition", "Endurance Sport (running/triathlon etc)", "Metabolic Specialist (weight loss/gain)", "Weightlifting"]),
                "intro": "Claudia had always been active growing up and participated in various sports during her school years, including swimming, basketball and running.\r\n\r\nAfter she graduated, Claudia discovered weight-training and fell in love with it immediately. Through the unexpected passion she discovered, she hopes to help others find a similar joy for it.",
                "user_id": 4
            },
            {
                "qualification": JSON.stringify(["RYT 500- FRC Mobility Specialist", "Champion of VIth International Yoga Championship 2017", "Founder of SUKHA Yoga & Wellness", "PADI Advanced FreediverCertified in TRX Suspension Trainer", "Red Cross CPR Certification"]),
                "speciality": JSON.stringify(["Body-Building/ Figure Competition", "Endurance Sport (running/triathlon etc)", "Metabolic Specialist (weight loss/gain)", "Pre-Post Natal","ProStretch, Recovery"]),
                "intro": "Coco is passionate about resistance training – striving towards a healthy body shape with fine muscle definition and increasing power in her yoga training. She believes training is a lifelong commitment and a process that will strengthen her body as well as her mind. She admires and is inspired by body-builders with steely determination. Now, training has become an inseparable part of her life.\r\n\r\nAs a Personal Trainer, Coco would like to share her passion and will apply her fitness knowledge to help her clients achieve all of their fitness ambitions.",
                "user_id": 5
            },
            {
                "qualification": JSON.stringify(["Certified Advanced Personal Trainer – AASFP", "Pre- & Post-Natal fitness – AASFP", "Certified CPR & AED – St. John"]),
                "speciality": JSON.stringify(["Pre-Post NatalSpeed", "Agility", "Quickness", "Strongman/ Strength Sport"]),
                "intro": "Having always maintained a casual relationship with sports and outdoor activities, Colina has adopted a more serious, passionate and systematic approach to a healthier lifestyle through fitness in recent years. She enjoys water activities, hiking, weight training and cooking. The message she wants to spread is that a healthy body makes for a healthy mind and by emphasising happiness in our lives, we are better positioned to reach our goals.",
                "user_id": 6
            },
            {
                "qualification": JSON.stringify(["AASFP Advanced Personal Trainer Certification", "PTA Global Certification 2012", "AASFP Stretch Trainer Certification", "Certificate of Power Plate", "Certificate of Kettle Bell Level 1", "Certificate of TRX", "CPR Certified", "Certificate of Bosu", "Rumble Roller Certification", "AASFP Exercise Ball Instructor Certification"]),
                "speciality": JSON.stringify(["Metabolic Specialist (weight loss/gain)", "Pre-Post Natal", "ProStretch", "Recovery"]),
                "intro": "Dorothy believes that exercise is the cornerstone of physical and mental health. More than just a way to make one look good, she emphasises the benefit of feeling good.\r\n\r\n\"If you commit to a healthy lifestyle now, I will do my best and your goals will become my goals.\"",
                "user_id": 7
            },
            {
                "qualification": JSON.stringify(["AASFP Foundation Personal Trainer Certified", "AASFP Advanced Personal Trainer Certified", "TRX Rip Training Course Level 1", "AASFP Stretch Trainer Certification", "Hong Kong St. John Ambulance First Aid Certification"]),
                "speciality": JSON.stringify(["Metabolic Specialist (weight loss/gain)","ProStretch", "Recovery"]),
                "intro": "Ella is an active and outgoing person. She loves hiking, walking and kayaking. Being in nature admiring the beautiful scenery of the sea makes her feel alive. Ella was inspired by her friends to start working out and trying different training styles. It helped her to enhance both her physique and fitness level.\r\n\r\nElla wants to share this experience, with her friends and clients, helping them to correct their postures, and build and maintain a healthy lifestyle. It’s never too late to get healthy and it should be everyone’s top priority.",
                "user_id": 8
            },
            {
                "qualification": JSON.stringify(["Personal Trainer Certification (National Academy of Sports Medicine)", "World Rugby Strength & Conditioning Level 1", "World Rugby Coaching 15-a-side Level 1", "EXOS Performance Specialist Phase 1", "Pivotal Mentorship", "Personal Training Academy Global Mentorship 1", "Pre/Post Natal Certificate", "First-aid Certificate"]),
                "speciality": JSON.stringify(["Prehab / Post InjurySpeed", "Agility", "Quickness","Strongman/ Strength Sport"]),
                "intro": "A rugby player since 2011, Eunice has also been training with the Hong Kong team in recent years. With the fast-changing physical demand in sports, Eunice learnt to adopt various gym methods to deal with the highly competitive needs of rugby as well as other sports. Besides fitness, Eunice is also a certified rugby coach.",
                "user_id": 9
            },
            {
                "qualification": JSON.stringify(["2017 HK Bodybuilding Beach Championships – 4th Place", "2018 Spartan Race", "Official Partner Ambassador", "Crossfit’s Level 1 trainer course", "Certified Personal Trainer-AASFP", "Sport Science & Fitness (Foundation)- AASFP", "SC (Honors) in Business Management- Plymouth University"]),
                "speciality": JSON.stringify(["Metabolic Specialist (weight loss/gain)","Speed", "Agility", "Quickness", "Weightlifting"]),
                "intro": "Even before becoming a Personal Trainer, Cathy has always been active. She started going to the gym at the Hong Kong College of Technology. Around the same time, Cathy discovered her interest in functional training and weight training, Pursuing this interest got her toned and strong. Since then, Cathy can’t imagine her life without exercise. She believes that everyone has the potential to be fit and healthy, and is an advocate of “healthy beauty”.",
                "user_id": 10
            },
            {
                "qualification": JSON.stringify(["Stretch Therapist Certificate Course", "Suspended Movement & TrainBar Instructor Certification", "Certified – Bronze (Professional Personal Fitness Trainer)", "Hong Kong Muay Thai Council Coaching Certificate", "Diploma in Applied Nutrition and Weight Management"]),
                "speciality": JSON.stringify(["ProBoxing Coach", "ProStretch", "Recovery Specialist"]),
                "intro": "Mabel has been a Personal Trainer since 2012. Mabel likes sports. Convinced that her years of experience can improve change guests exercise habits,To help guests get the expected result.",
                "user_id": 11
            },
            {
                "qualification": JSON.stringify(["Professional Certificate", "AASFP Muay Thai Instructor (Foundation) Certification", "NASM Certified Personal Trainer", "TRX GSTC Certificate", "HKBA Basketball Coach Certificate Level 1", "Hong Kong Mountaineering Union-Mountain Craft Coach (Level 1 & 2)", "Physical Fitness Association of Hong Kong-Physical Fitness Foundation Certification"]),
                "speciality": JSON.stringify(["Metabolic Specialist (weight loss/gain)", "ProBoxing", "ProStretch", "Recovery"]),
                "intro": "Allen started training to be better at what he liked to do, which is to play. The more he trained, the better he was at it. Then his friends got on board to follow this real-life example and that’s how he became a freelance trainer for 6 years in Los Angeles, California.\r\n\r\nNowadays, Allen trains to perform better in life. He wants to feel strong, to look good, to continue being healthy as life goes on. “The only thing stopping you from getting what you want is yourself,” – which is why there’s no stopping him!",
                "user_id": 12
            },
            {
                "qualification": JSON.stringify(["USA NPC IFBB 10-11-2018", "Master classic physique Champion", "Master men physique Champion", "Master men physique overall Champion", "2016 HKFBF Bodybuilding", "75kg below Champion", "2014 HKBPSF Bodybuilding 75kg Champion", "NASM CPT NASM Personal Trainer", "Certificate Rehab trainer","Certificate in Olympic lifting", "Certificate Bootcamp Instructor"]),
                "speciality": JSON.stringify(["Body-Building/ Figure Competition", "Metabolic Specialist (weight loss/gain)", "Weightlifting"]),
                "intro": "Brian was a scholarship athlete of the Hong Kong Rowing Team since 1996. After completing the Asian Games in 2002, he worked in the HK Rowing Association and as the head coach of the Hong Kong Institute of Education (HKIED) rowing team for 4 years. With his experience in sports and qualifications in fitness training, he strives to influence clients' workouts so he can guide them towards the results they want and expect. His ultimate career goal - motivate clients to stick with a fitness programme long-term so they can lead a healthier and happier life!",
                "user_id": 13
            },
            {
                "qualification": JSON.stringify(["Inter Academy (Hong Kong) Physical Training Coaching Certificate", "World Boxing Council(WBC) Advance Boxing (Fitness) Trainer Certificate", "International Personal Trainers and Fitness Academy Bronze", "2017 AIBA 馬來西亞國際拳擊邀請淘汰賽 – 亞洲第二位"]),
                "speciality": JSON.stringify(["ProBoxing", "Kettebell"]),
                "intro": "As a basketball player in high school, Chung didn't even have the stamina to endure a full match. He started running to make up for it and became easily bored. A friend then suggested Thai boxing and the fire of interest was ignited in Alirio - once he tried it, he never looked back. \"It was one of the best things that ever happened in my life.\"\r\nSince 2011, he has been coaching Thai boxing and believes that having fun and enjoying the class will help you learn faster.",
                "user_id": 14
            },
            {
                "qualification": JSON.stringify(["2007 HKCBBA Hong Kong Bodybuilding Championship – Junior over 75 kg (Third place)", "National Academy of Sports Medicine (NASM) International Certified Personal Trainer", "Asian Academy For Sports & Fitness Professionals (AASFP) Advanced Personal Fitness Trainer Certification", "Functional Movement Screen (FMS) Level 1 Certification"]),
                "speciality": JSON.stringify(["Gymnastic Movement", "Metabolic Specialist (weight loss/gain)", "Prehab / Post Injury","Strongman/ Strength Sport"]),
                "intro": "Chung worked as a designer before devoting himself 100% to the fitness industry. Along with incorrect posture and prolonged working hours, he suffered from myofascial pain in the neck and lower back and worsening overall health. But all those issues were resolved when he began playing sports in 2000. He simultaneously developed a keen interest and expertise in weight training.\r\n\r\nChung always emphasises the importance of maintaining correct posture during exercise to prevent injury. He is passionate about helping his students in bodybuilding through safe and engaging tailor-made training programmes.",
                "user_id": 15
            },
            {
                "qualification": JSON.stringify(["International Certificate In Professional Personal Trainer (IPTFA)", "Hong Kong China Bodybuilding & Fitness Association Certificate Of Coaching (HKCBBA)", "Sports Science & Fitness Foundation Certification (AASFP)", "Rehabilitation Trainer (REHAB)"]),
                "speciality": JSON.stringify(["Body-Building/ Figure Competition", "Endurance Sport (running/triathlon etc)", "Metabolic Specialist (weight loss/gain)", "Pre-Post NatalSpeed", "Agility", "Quickness"]),
                "intro": "Daniel is a competitive Spartan athlete and swimmer who has performed in numerous championship meets and races in different countries. He has placed in the top 3 in his Spartan age category since he started the global obstacle race back in 2018. Having accumulated personal athletic experience and knowledge since 2006, Daniel uses his competitive energy to motivate, coach and inspire others.\r\n\r\nWith a strong focus on athletic performance, confidence-building and mindset coaching, Daniel is passionate about helping each client to become more dedicated and disciplined in making positive lifestyle decisions that impact how they look and feel. His coaching strategy is to explore the details of his clients’ goals before creating a personalised plan to achieve them.\r\n\r\nParticularly important toDaniel is training sustainably and teaching his clients to form positive deep-rooted fitness habits that not only help to reach immediate goals but to maintain long-term results. Throughout the fitness journey, Daniel provides extensive support and guidance to educate his clients on tested methodologies of health and wellness.\r\n\r\nDaniel’s biggest motivation is seeing tangible progress in his clients – whether it be weight loss, increased strength or simply a bigger smile when they come to his training sessions. His training philosophy is ‘Train to be the best possible version of yourself.’",
                "user_id": 16
            },
            {
                "qualification": JSON.stringify(["IPTFA Bronze- Professional Personal Fitness Trainer Certificate"]),
                "speciality": JSON.stringify(["Body-Building/ Figure Competition", "Speed", "Agility", "Quickness"]),
                "intro": "An NASM International Certified Personal Trainer with years of gym experience, Dave provides proven ability to achieve client fitness goals, demonstrates by his impressive own result from a 85-pound gym novice to be the champion of 2016 HKBPSF Classic Bodybuilding (include 165 cm).\r\n\r\nArea of Dave’ expertise includes Muscle Building, Fat Loss, Functional Training and Corrective Posture Exercises.",
                "user_id": 17
            },
            {
                "qualification": JSON.stringify(["AASFP Advance Personal Trainer Certificate", "Adult Cardio Pulmonary Resuscitation Certificate Course (ACPR)"]),
                "speciality": JSON.stringify(["Body-Building/ Figure Competition","Endurance Sport (running/triathlon etc)","Metabolic Specialist (weight loss/gain)","Speed", "Agility","Quickness", "Weightlifting"]),
                "intro": "Derrick began learning Taekwondo in 2000 when he was only 6 years old. He also played different sports in high school and university, including football, sport climbing and rowing. He loves nature and believes that sport is a significant part of his life. So he decided to study Exercise Science and Health Education at university in order to explore the science behind sport.\r\n\r\n\r\nDerrick is serious about his training and he believes that everyone is unique. Therefore, he takes great care to design tailor-made programmes for clients to achieve their fitness goals based on his experience and scientific knowledge. If you are committed to making a transformation, Derrick is definitely the guy to help you get there!",
                "user_id": 18
            },
            {
                "qualification": JSON.stringify(["2017 HKFBF Classic Bodybuilding 170cm Below Champion", "2018 IFBB Asia Pro Qualifier 65kg Champion", "IFBB Personal Fitness Trainers Certification", "IPTFA Health and Fitness Trainer Certification", "Fundamentals of Mobility for Functional Training Certificate of Completion", "Fundamentals of Barbell Training Certificate of Completion", "Fundamentals of Battling Ropes Training", "Certificate of Completion", "Fundamentals of Barbell Training", "Certificate of Completion", "Fundamentals of Kettlebell Training", "Certificate of Completion Advanced Concepts in Kettlebell Training", "Certificate of Completion Fundamentals of Powerbag Training"]),
                "speciality": JSON.stringify(["Endurance Sport (running/triathlon etc)", "Prehab / Post InjurySpeed", "Agility", "Quickness","Weightlifting"]),
                "intro": "Endy stared his coaching career as a basketball coach for high school students. After he visited the Australian Institute of Sport, he unearthed his passion for being a fitness coach. Soon after, he gained much experience working in different places helping a variety of clients to achieve their goals.\r\n\r\nEndy always strives for effectiveness and efficiency – to maximise results with minimum effort, safely and as painlessly as possible.",
                "user_id": 19
            },
            {
                "qualification": JSON.stringify(["2016 WFF PRO & HKBPSF Championship Hong Kong Men Athletic First Place", "Master Functional Trainer", "Rehab Trainer", "Advanced Personal Fitness Trainer Certification (AASFP)", "REPS register of exercise professionals (AASFP)", "Certification of Sport Massage Techniques (ep-fitpro)", "Certified VIPR Instructor (ep-fitpro, Certificate of Taping for Sport Injury and Prevention Workshop (ep-fitpro)"]),
                "speciality": JSON.stringify(["Body-Building/ Figure Competition", "Endurance Sport (running/triathlon etc)", "Metabolic Specialist (weight loss/gain)", "Prehab / Post Injury", "ProStretch,RecoverySpeed", "Agility", "Quickness", "Strongman/ Strength Sport"]),
                "intro": "Eric has been an athlete all his life. He was a competitive swimmer from the age of 10, and started lifting weights in his transition from a swimmer to a rugby player at the age of 18. At first, he wanted the extra strength and body mass to prepare himself for the physically demanding sport. But he soon fell in love with strength training and developed the interest in helping others to achieve their goals.\r\n\r\nEric understands how an athlete’s strength and fitness level can affect one’s performance. Therefore, one of his mission is to help his clients to achieve a higher level in the gym. He also believes that trainings are more than just physical, but about mental capabilities too. Therefore, he truly believes that by putting the heart, mind and soul into every single workout, the person will not only grow stronger, but tougher inside too.",
                "user_id": 20
            },
            {
                "qualification": JSON.stringify(["AASFP Certified Personal Trainer", "Certified ViPR Instructor", "Certified BOSUInstructor", "Certified TRX Instructor", "International Bulgarian Bag Confederation-Certified", "Bulgarian Bag Specialist", "Certified Agatsu Kettlebell Instructor", "2014 HKFBF Men Novice 85KG below Champion", "2015 HKFBF Men’s Open 85KG below Champion", "2016 HKFBF Men’s Open 85KG below Champion", "2017 Mr Olympia Amateur Asia (Hong Kong ) Men’s bodybuilding open 85KG Below 3rd place"]),
                "speciality": JSON.stringify(["ProBoxing", "Speed", "Agility", "Quickness"]),
                "intro": "George has been training in Muay Thai Boxing since 2007. Although Muay Thai is a whole body movement exercise that’s excellent for keeping fit and losing weight, George believes it is equally effective for helping his clients to maintain their overall conditioning and fitness level.\r\n\r\n“Before settling into training, set out your goal and keep going till you reach it.”.",
                "user_id": 21
            },
            {
                "qualification": JSON.stringify(["Certified Professional Personal Fitness Trainer – AASFPFunctional Training Institute Fundamentals of Mobility for Functional Training", "Functional Training Institute Fundamentals of Barbell training", "Functional Training Institute Fundamentals of Bosu training", "Functional Training Institute Fundamentals of Kettle bell training", "Certified Muay Thai Trainer – International Personal Trainer & Fitness Academy", "Certified Stretching – International Personal Trainer & Fitness Academy"]),
                "speciality": JSON.stringify(["Endurance Sport (running/triathlon etc)", "Metabolic Specialist (weight loss/gain)", "Pre-Post Natal", "Speed", "Agility", "Quickness", "Strongman/ Strength Sport"]),
                "intro": "Having been a Personal Trainer since 2008, Hani equates a client’s success in achieving their fitness goals as his own. He finds it enjoyable to motivate clients to exercise regularly and to improve their physique and wellness.\r\n\r\nHani himself is incredibly active. He participates in a huge variety of sports and outdoor activities including marathons, triathlons, ultra-running, trail running, basketball, volleyball, sport climbing, snowboarding, wakeboarding, hiking and camping. His career goal is not only to train the fitness level of his clients but also to be a positive influence in their lives by sharing his knowledge and experience in sports.",
                "user_id": 22
            },
            {
                "qualification": JSON.stringify(["2010 HKCBBA Hong Kong Bodybuilding Contest Man’s Novice 70KG below -3rd place", "2011 HKCBBA Hong Kong Bodybuilding Contest Men’s 70KG below -3rd place", "2011 HKCBBA 港穗交流賽 男子70KG 以下第四名", "2017 HKFBF Hong Kong Bodybuilding & Fitness Championship Men’s Novice 75KG below- 5th place", "2018 HKFBF, Hong Kong Bodybuilding & Fitness Championship Men’s Novice 70KG below -1st place", "2018 HKFBF Hong Kong Bodybuilding & Fitness Championship Men’s 70KG below – 6th place", "N.A.S.M Certified Personal Trainer", "D.N.S basic A course by Rehabilitation Prague School", "Anatomy Trains Structure and Function", "CrossFit Lv.1"]),
                "speciality": JSON.stringify(["Core muscle Training", "TRX", "Posture and Muscle Imbalance Adjustment Program", "Power Plate", "Circuit Traning", "Sport Performance Improvement and Enhancement Training", "Muscle Toning", "Body Shaping", "General Conditioning"]),
                "intro": "Jimmy has been a sports and body-building enthusiast since he was a teenager. Due to his passion for developing a lifelong career in the fitness industry, Jimmy kept pursuing his studies in relevant training programmes and achieved qualification as a certified Personal Trainer.\r\n\r\nHe pays much attention to his clients' fitness goals, as he equates their success with his own success. Creating tailor-made workout schedules for each client is one of his most enjoyable and challenging tasks. His greatest pleasure is motivating clients to exercise more, and witnessing their improved body shape and health.",
               "user_id": 23
            },
            {
                "qualification": JSON.stringify(["International Personal Trainer Academy", "Personal Fitness Trainer Certificate", "Physical Fitness Association of Hong Kong Certificate", "Spartan Race inc – Spartan SGX Certificate"]),
                "speciality": JSON.stringify(["Gymnastic Movement","ProStretch,Recovery","Speed", "Agility", "Quickness"]),
                "intro": "Born in Hong Kong, Karl has wanted to be a professional athlete since he was a little kid. He’s come a long way to become who he is today and has had to overcome physical and mental weaknesses.  He feels that the greatest value in being a fitness trainer is sharing pertinent information and experience with people, motivating them and helping them to get results. \r\n\r\nOther than sports, Danny is also interested in reading, watching movies, and other social activities. ",
                "user_id": 24
            },
            {
                "qualification": JSON.stringify(["Global Classic M program 2019 Men’s body building open 80kg above -Champion", "HKFBF 2018 Men’s body building open 80kg below – 1st Runner Up", "HKFBF 2017 Men’s body building open 80kg below – Champion", "HKFBF 2015 Novice body building 75kg below -Champion & Men’s body building 75kg below- 1st Runner Up", "NASM Cert", "PTA Global Cert", "AASFP Advanced Personal Trainer Cert", "AASFP Fitball trainer Cert", "Pavi gym master trainer Cert", "Kettlebell Level 1 Cert", "YMCA Stretch & Sport Massage Cert"]),
                "speciality": JSON.stringify(["Endurance Sport (running/triathlon etc)","Metabolic Specialist (weight loss/gain)","Other MMA","Pre-Post Natal","ProBoxing","ProStretch","Recovery","Speed", "Agility", "Quickness", "Weightlifting"]),
                "intro": "Les was introduced to martial arts at a very young age. Not only is he an amateur boxer in Hong Kong, he is also trained in MMA.\r\nLes loves training and challenging himself to new heights and using the insights he gains along the way to help his clients train more effectively and efficiently.\r\nLes believes everyone should exercise and participate in sports as it boosts confidence and reinforces positive thinking.",
                "user_id": 25
            },
            {
                "qualification": JSON.stringify(["IPTFA Bronze- Professional Personal Fitness Trainer Certificate"]),
                "speciality": JSON.stringify(["Endurance Sport (running/triathlon etc)", "Metabolic Specialist (weight loss/gain)"]),
                "intro": "Louis started his career as a Personal Trainer in 2012. Prior to that, he was already keen in sports and was particularly devoted to basketball and football. Specialising in weight training and fat loss, Dennis gains the utmost gratification from helping clients to pursue their goals and achieve better results.",
                "user_id": 26
            },
            {
                "qualification": JSON.stringify(["2009 HKCBBA Hong Kong Bodybuilding Championship – Junior below 70 kg (Second place)", "Vipr instructor Certification", "Muay Thai instructor Certification", "Agatsu Kettlebell Certification", "TRX Suspension Training instructor Certification", "Fundamentals of Mobility For Functional Training Certification", "Triggger Point Performance", "Certificate of Completion SMRT-CORE", "IPTFA instructor Certification", "AASFP Advanced personal trainer Certification"]),
                "speciality": JSON.stringify(["Metabolic Specialist (weight loss/gain)","Speed", "Agility", "Quickness"]),
                "intro": "Marcus started playing sports when he was young. He loves running, swimming and cycling. As he trains to be a triathlete, Marcus finds out the benefits from endurance sports are more than physical training - a tough mind to always train harder. This became the reason why he wants to be a Personal Trainer and share with others this spirit.",
                "user_id": 27
            },
            {
                "qualification": JSON.stringify(["2010 Hong Kong Muay Thai Championship 63.5 Champion", "2011 Hong Kong Muay Thai Championship 63.5 Champion", "Certified – Bronze (Professional Personal Fitness Trainer)", "Stretch Therapist Certificate Course", "Hong Kong Muay Thai Council Coaching Certificate"]),
                "speciality": JSON.stringify(["Metabolic Specialist (weight loss/gain)","Speed", "Agility", "Quickness"]),
                "intro": "Matthew is an energetic and outgoing person. He loves going to the gym because he likes to challenge himself. He is passionate about sharing knowledge and experiences with his clients, in order to help them achieve their goals and enjoy the best quality of life.",
                "user_id": 28
            },
            {
                "qualification": JSON.stringify(["HKCBBA 2011 – Junior Men’s Bodybuilding Championship 70 kg & below (Third place)", "HKCBBA 2011 – Master Men’s Bodybuilding Championship (Champion)", "HKFBF 2012- International Bodybuilding Invitational Championship (Men’s Youth – 65 kg & below) Fifth place", "HKFBF 2013- International Bodybuilding Invitational Championship: Senior Men’s Bodybuilding Championship 65 kg & below"]),
                "speciality": JSON.stringify(["Bulgarian Bag", "TRX Training", "Kettlebell Training", "Sports Massage", "Muscle Toning", "Survival Fitness", "Defensive Tactics", "Close Quarters Battle (CQB)", "Close Quarters Combat (CQC)", "Eskrima", "Pressure Points Control Tactics (PPCT)"]),
                "intro": "With years of experience as a team coach for live tactical defence, Matthew has abundant expertise in the areas of survival fitness, defence techniques and combat – hence his previous ventures in the bodyguard industry.\r\n\r\nEnthusiastic about all things fitness, Matthew has developed a particular interest in bodybuilding and is currently a bodybuilder in addition to being a Personal Trainer.",
                "user_id": 29
            },
            {
                "qualification": JSON.stringify(["Hong Kong Champion 57 KG", "2 Times Hong Kong Champion 54KG", "Thai Fight The Venetian Macau 58KG Champion", "TopKing Champion 59KG", "TopKing Champion 60KG, E1 World Champion"]),
                "speciality": JSON.stringify(["Gymnastic Movement", "Metabolic Specialist (weight loss/gain)", "Prehab / Post Injury,ProStretch,Recovery"]),
                "intro": "Ming’s training programme aims to assist clients in achieving their fitness goals, for example, improving their muscle strength, flexibility, weight control and managing health issues. Ming hopes that clients can achieve their own goals upon his tailor-made programmes and promote healthy lifestyle.",
                "user_id": 30
            },
            {
                "qualification": JSON.stringify(["2015 Men Boxing 69KG of HKBA Athletes Rank No 3", "HKSAR Establishment Day Boxing championships Men Boxing 69KG champion", "Boxing novice Match 69KG champion"]),
                "speciality": JSON.stringify(["Body-Building/ Figure Competition", "Metabolic Specialist (weight loss/gain)", "Speed", "Agility", "Quickness", "Strongman/ Strength Sport"]),
                "intro": "Oscar has always loved sports. Before starting his fitness journey, he already played various sports like football and volleyball. Now Oscar can appreciate not only enhancement of his fitness but also relaxation of his mind. As a Personal Trainer, he mainly focuses on improving the strength, flexibility, mobility and posture of his clients. Since fitness is very important to Oscar, he hopes that everyone can understand the essence of sports and conquer all challenges with a healthy body.",
                "user_id": 31
            },
            {
                "qualification": JSON.stringify(["Certified TRX RIP training", "Certified-Trigger Point Performance Programming", "Certified- Muay Thai Instructor (Foundation) AASFP"]),
                "speciality": JSON.stringify(["Endurance Sport (running/triathlon etc)", "ProBoxing"]),
                "intro": "Oscar began martial arts when he was 15 years old. He studied Taekwondo, Karate and boxing but later felt a special connection with Muay Thai. He has participated in many large-scale Muay Thai competitions and was selected for the Hong Kong Muay Thai national team before being transferred to work as a boxing and Muay Thai coach. He’d like to share his vast experience and skills – honed since 1996 – to help and support his clients to achieve their fitness goals.",
                "user_id": 32
            },
            {
                "qualification": JSON.stringify(["HKBPSF – 2015 Hong Kong Excellence in Fitness Award", "AASFP- Advanced Personal Fitness Trainer Certificate", "AASFP- Kickboxing for Persona Trainer Certificate", "AASFP- Sports Massage Certificate"]),
                "speciality": JSON.stringify(["Body Building", "Endurance Sport"]),
                "intro": "Fitness has always been Pong’s passion since he was young. From an early age, he has taken part in various sports – rugby, dragon boat racing and running. Pong aims to create a positive and fun experience for clients by empowering them with his knowledge, skills, support, and guidance to help all individuals who are seeking a change in their health and fitness journey.\r\n\r\nPong has trained every type of individual you can imagine: young athletes, exercise rookies, older folks and more. No matter who you are or what you want to achieve, Pong will help you get there!",
                "user_id": 33
            },
            {
                "qualification": JSON.stringify(["NASM Certificated Personal Trainer", "EXOS Performance Specialist Certification", "IPTFA Certificated Boxing Trainer"]),
                "speciality": JSON.stringify(["Speed", "Agility", "Quickness","Strongman/ Strength Sport","Weightlifting"]),
                "intro": "Ringo was always the smallest and weakest among his friends and family - but this image no longer applied when he discovered how working out could change his life. Ever since then, he has been enthusiastic and dedicated to bodybuilding. This devotion and passion led him to enter the fitness industry to share his experience and knowledge with others, in hopes of inspiring them with his real-life personal triumph.",
                "user_id": 34
            },
            {
                "qualification": JSON.stringify(["International Personal Trainers & Fitness Academy (IPTFA) Certified (Professional Personal Fitness Trainer)", "ViPR LMT 1 Certification"]),
                "speciality": JSON.stringify(["Speed", "Agility", "Quickness,Strongman/ Strength Sport", "Weightlifting"]),
                "intro": "You can practise any skill 10 hours a day but if your technique is wrong, then all you become is very good at that skill in the wrong way. Get the fundamentals down and the level of everything you do will rise.\r\n\r\nShing started playing basketball in 1992. Without professional training or coaching and the knowledge of injury prevention, he hurt both his anterior cruciate ligaments a few years later. After that lesson learned, he realised the importance of fundamentals and rehab knowledge – which is why he then pursued advanced studies in Personal Training, basketball coaching and a post-injury certificate. Having gone through his own unfortunate experience, he become a Personal Trainer in the hopes of teaching others the safest, most efficient way to achieve their fitness goals and lifestyle.",
                "user_id": 35
            },
            {
                "qualification": JSON.stringify(["Fitness Academy (IPTFA)", "IPTFA Health and Fitness Trainer", "Rehab Trainer FX"]),
                "speciality": JSON.stringify(["ProBoxing"]),
                "intro": "Sunny started Muay Thai boxing in 2004. He has participated in over 30 professional Muay Thai fights in Hong Kong, Thailand and China.\r\nSunny has been coaching Thai boxing since 2006. He has trained many fighters over the years and designed fat loss programmes for his clients.",
                "user_id": 36
            },
            {
                "qualification": JSON.stringify(["2019 Junior Men’s Bodybuilding Championship (HKBPSF)", "2019 Men’s Bodybuilding Class 4 (HKBPSF)", "Stretch Instructor Certification Course (IPTFA)"]),
                "speciality": JSON.stringify(["Body-Building"]),
                "intro": "Tom is an energetic and outgoing person, especially enthusiastic about bodybuilding and fitness. He gets immense satisfaction from getting stronger and healthier. Even though fitness is his career, he understands how difficult it is to attain the highest level in one step – but he takes on every challenge with confidence and determination in order to achieve success. Tom likes to inspire and motivate people to reach their goals using his professional expertise and patient demeanour. He’s a good communicator who enjoys interacting with clients to better understand their needs. He believes that nothing is impossible and encourages clients to stay focused on why they started.",
                "user_id": 37
            },
            {
                "qualification": JSON.stringify(["IPTFA Bronze- Professional Personal Fitness Trainer Certificate", "IPTFA Stretch Therapist Certificate", "IPTFA Investigate of Chiropractic & Joint Care Workshop", "IPTFA Functional Training Workshop"]),
                "speciality": JSON.stringify(["stretching", "boxing", "weight-lifting"]),
                "intro": "Torres has been exercising since primary school and was a member of the track and field team. He has always loved doing sports because it transformed his strength and overall health. As a Personal Trainer,he believes that his passion coupled with a client’s commitment will change lifestyle habits for the better.",
                "user_id": 38
            },
            {
                "qualification": JSON.stringify(["Functional Training Institute Fundamentals of Mobility for Functional Training", "Functional Training Institute Fundamentals of Barbell Training", "Physical Fitness Association of Hong Kong Certification"]),
                "speciality": JSON.stringify(["Body-Building/ Figure" , "Movement"]),
                "intro": "Vincent comes from a family of professional athlete so growing up, he had an innate thirst to win. Being the best at whatever he does is in his nature and is reflected in his achievements. He believes that mental strength is the most important component of success and that if you work diligently yet intelligently, success will eventually come your way.",
                "user_id": 39
            },
            {
                "qualification": JSON.stringify(["2016 WFF PRO & HKBPST Championship Master Men 1st Place", "2016 WFF PRO & HKBPST Championship 3rd Place", "2015 Hong Kong Excellent in Fitness Award"]),
                "speciality": JSON.stringify(["Body-Building/ Figure", "Movement"]),
                "intro": "As a coach since 2008, Yves possesses an extensive repertoire of training skills under his belt. Specialising in weight training, gymnastics, circuit training and a wide range of functional training, Yves  enthusiastically leads a team of professionals to propel clients to their desired fitness destination. In addition, he was recognised as the Bronze Medalist in the Men’s Physique Contests 2019 (Mr Olympia), Silver Medalist in the Men’s Physique Contests 2019 (HKFBF) and the Top 5 Champions in the Men’s Physique Contests 2016 (HKFBF).\r\n\r\nYves  is observant and focuses on alignment to ensure proper training under professional guidance. Whether you are a first-timer or an experienced sportsman, whether you strive for weight loss, bodybuilding, or simply general improvement in sports performance — Yves  is excited about designing a personalised and achievable training programme to expedite reaching your fitness goals safely and effectively!",
                "user_id": 40
            },
            {
                "qualification": JSON.stringify(["TRX Suspension Training Certification", "Hong Kong Bodybuilding championship 2013 3rd", "Hong Kong Bodybuilding Championship 2014 2nd"]),
                "speciality": JSON.stringify(["Body-Building/ Figure Competition","Gymnastic Movement","Metabolic Specialist (weight loss/gain)","Strongman/ Strength Sport", "Weightlifting"]),
                "intro": "Benjamin has more than a decade of experience with weight training, picking up numerous awards along the way. He participated at the 2013 and 2014 Hong Kong Bodybuilding Championship, placing third and second place respectively.\r\n\r\nEven with all this recognition, Ben allows his actions and beliefs to speak for his passion towards fitness. He believes that fitness is a journey and the road may not be easy, but he is confident that he can inspire you to get the results you've always wanted.",
                "user_id": 41
            },
            {
                "qualification": JSON.stringify(["Diploma in Fitness and Health Promotion (Humber College Canada)", "Can-Fit-Pro Personal Trainer Specialist (Canada)", "Advance Personal Fitness Trainer Certification (AASFP)", "Metabolic Conditioning (AASFP)", "Muscle Gain Training for Body Build (AASFP)", "Ultimate Strength Enhancement (AASFP)", "Medicine Ball Training and Application (AASFP)", "TRX Certification", "Kettlebell Certification", "Purmotion Certification"]),
                "speciality": JSON.stringify(["Body-Building/ Figure Competition","Gymnastic Movement", "Metabolic Specialist (weight loss/gain)", "Strongman/ Strength Sport", "Weightlifting"]),
                "intro": "Osmond has been working in the fitness industry since 2004. He started his Personal Training career in 2006 when he moved back to Hong Kong from Canada. Throughout the years, he has gained a diversity of experience training various types of clients. Helpful and passionate, Osmond treats every client’s training journey with the devotion and enthusiasm that he would if it were his own.",
                "user_id": 42
            },
            {
                "qualification": JSON.stringify(["Hong Kong Rugby Union Qualified Coach", "Strength & Conditioning Pre-Level World Rugby", "Sports Science & Fitness foundation Certificate"]),
                "speciality": JSON.stringify(["Body-Building/ Figure", "Movement"]),
                "intro": "Osmomd was sporty from an early age. He started his boxing career after representing the Hong Kong Police Boxing Team in both amateur 4 professional levels at local & international boxing events. He is also an active rugby player and currently plays in the local rugby league. His expansive knowledge in sports and positive mindset will help you to reach your fitness goals.",
                "user_id": 43
            },
            {
                "qualification": JSON.stringify(["Physical Culture Association (PCA) HK PRO 4th Place 2019", "Hong Kong Bodybuilding & Physique Sports Federation (HKBPSF) Championship Men’s Physique (T Class) 4th Place 2019", "Certified-Bronze (Professional Personal Fitness Trainer) in International Personal Trainers and Fitness Academy (IPTFA)", "Sport Stretching Training Certification in International Personal Trainers and Fitness Academy (IPTFA)", "M3 Cycling Foundations Instructor Certification"]),
                "speciality": JSON.stringify(["TRX", "Purmotion", "Functional Training"]),
                "intro": "Ryan was passionate about muscle toning and wanted to have a perfect body shape since he was a little kid. In 2001 he became a Personal Trainer to fulfil his ambition of inspiring, helping and supporting people who want to reach their fitness goals. Ryan likes racing, swimming and playing basketball. His approach is to listen and lead by example.",
                "user_id": 44
            },
            {
                "qualification": JSON.stringify(["Exos Performance Mentorship Phase I", "AASFP Advanced Personal Fitness Trainer", "AASFP Sports Massage Certification", "AASFP Muay Thai Instructor Certification"]),
                "speciality": JSON.stringify(["Body-Building/ Figure Competition", "Endurance Sport (running/triathlon etc)", "Metabolic Specialist (weight loss/gain)", "Pre-Post Natal", "Prehab / Post Injury", "ProBoxing", "ProStretch","Recovery","Speed", "Agility", "Quickness","Strongman/ Strength Sport","Weightlifting"]),
                "intro": "Isaac has been into sports since his school days. His love of fitness inspired him to develop it into a career, one of the reasons he became a PT. He feels that many people don’t know much about well-being – and more importantly how to achieve it using correct and effective methods. He is determined to help this particular segment of the population, by instilling effective exercise habits and empowering them to pursue a healthier lifestyle.",
                "user_id": 45
            },
            {
                "qualification": JSON.stringify(["Post-Rehab Fitness Trainer (UL & Neck) – AASFP", "Pre- & Post-Natal Fitness Instructor Certification – AASFP", "Certified Bronze Professional Personal Fitness Trainer - International Personal Trainer & Fitness Academy (IPTFA)"]),
                "speciality": JSON.stringify(["body-building", "boxing"]),
                "intro": "Alex started working as a Personal Trainer in 2011, prior to which he was a football and swimming coach. From his days as a student, Alex had already developed an interest in sports and had started working out. He hopes his passion and dedication can help inspire those around him to live a healthy life.",
                "user_id": 46
            },
            {
                "qualification": JSON.stringify(["PTA Global Personal Trainer"]),
                "speciality": JSON.stringify(["Body-Building/ Figure Competition"]),
                "intro": "Since 2013, he has ventured into China's fitness market to continue his self-education and further his all-round experience.",
                "user_id": 47
            },
            {
                "qualification": JSON.stringify(["AASFP Advanced Personal Fitness Trainer"]),
                "speciality": JSON.stringify(["Metabolic Specialist (weight loss/gain)"]),
                "intro": "I am a Master Instructor at Flowcycle Shanghai and a regular guest instructor at XYZ in Hong Kong. I am originally from Hong Kong with an English background, I have multiple years of experience in the fitness industry. I specialise in Spinning, Personal Training, Group Fitness and competing in professional Golf and OCR events.\r\n\r\nI love to challenge people mentally and physically to get you striving for success and achieve greatness. I use my background in competitive sports to inspire and motivate my clients to do the best they possibly can in whatever situation.",
                "user_id": 48
            },
            {
                "qualification": JSON.stringify(["BOSU Trainer"]),
                "speciality": JSON.stringify(["Prehab / Post Injury"]),
                "intro": "Kenneth has over 10 yearspersonal training experience. Being a well-known champion in many international MuayThai competitions, he has built up a client base from Muaythai enthusiast to professional young fighters. If you aim is to bring your fitness to next level and transform your body to a lean machine, Kenneth is your man.",
                "user_id": 49
            },
            {
                "qualification": JSON.stringify(["ViPR Trainer"]),
                "speciality": JSON.stringify(["Strongman/ Strength Sport"]),
                "intro": "Ex Military instructor having served 6 years of active duty in the French army, completing two tours in Ivory coast and Afghanistan.\r\nResuming my career as a drill instructor, specialising in the physical and mental training of soldiers.\r\nToday as a qualified exercise professional, I specialise in body recomposition, nutrition and delivering personalised, tailored training programs to clients.\r\nHaving worked in gym environments throughout Australia and Asia combining the mastery I acquired in both the military and the fitness industry, my aim is to build an ultimate physique and lifestyle in a fun and holistic manner.",
                "user_id": 50
            }
        ]
    ).into('pt').returning('id');

        // function ptfileSeed() {
        //     return new Promise(function (resolve, reject) {

        //         fs.readFile('./pt_files.json', 'utf-8', (err, data) => {
        //             if (err) reject(err);
        //             resolve(data)
        //         })
        //     })
        // }

        // const ptfiles = await ptfileSeed()

        let files = await trx.insert([
            {
              "pt_id": 1,
              "filepath": "ptPic/pic-1613395196185.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 1,
              "filepath": "ptPic/pic-1613395196213.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 1,
              "filepath": "ptPic/pic-1613395196217.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 1,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 2,
              "filepath": "ptPic/pic-1613395196185.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 2,
              "filepath": "ptPic/pic-1613395196213.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 2,
              "filepath": "ptPic/pic-1613395196217.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 2,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 3,
              "filepath": "ptPic/pic-1613395196185.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 3,
              "filepath": "ptPic/pic-1613395196213.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 3,
              "filepath": "ptPic/pic-1613395196217.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 3,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 4,
              "filepath": "ptPic/pic-1613395196185.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 4,
              "filepath": "ptPic/pic-1613395196213.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 4,
              "filepath": "ptPic/pic-1613395196217.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 4,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 5,
              "filepath": "ptPic/pic-1613395196185.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 5,
              "filepath": "ptPic/pic-1613395196213.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 5,
              "filepath": "ptPic/pic-1613395196217.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 5,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 6,
              "filepath": "ptPic/pic-1613395196185.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 6,
              "filepath": "ptPic/pic-1613395196213.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 6,
              "filepath": "ptPic/pic-1613395196217.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 6,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 7,
              "filepath": "ptPic/pic-1613395196185.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 7,
              "filepath": "ptPic/pic-1613395196213.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 7,
              "filepath": "ptPic/pic-1613395196217.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 7,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 8,
              "filepath": "ptPic/pic-1613395196185.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 8,
              "filepath": "ptPic/pic-1613395196213.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 8,
              "filepath": "ptPic/pic-1613395196217.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 8,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 9,
              "filepath": "ptPic/pic-1613395196185.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 9,
              "filepath": "ptPic/pic-1613395196213.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 9,
              "filepath": "ptPic/pic-1613395196217.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 9,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 10,
              "filepath": "ptPic/pic-1613395196185.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 10,
              "filepath": "ptPic/pic-1613395196213.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 10,
              "filepath": "ptPic/pic-1613395196217.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 10,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 11,
              "filepath": "ptPic/pic-1613395196185.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 11,
              "filepath": "ptPic/pic-1613395196213.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 11,
              "filepath": "ptPic/pic-1613395196217.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 11,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 12,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 12,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 12,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 12,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 13,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 13,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 13,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 13,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 14,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 14,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 14,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 14,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 15,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 15,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 15,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 15,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 16,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 16,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 16,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 16,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 17,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 17,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 17,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 17,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 18,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 18,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 18,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 18,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 19,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 19,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 19,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 19,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 20,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 20,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 20,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 20,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 21,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 21,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 21,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 21,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 22,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 22,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 22,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 22,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 23,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 23,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 23,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 23,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 24,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 24,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 24,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 24,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 25,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 25,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 25,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 25,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 26,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 26,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 26,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 26,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 27,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 27,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 27,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 27,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 28,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 28,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 28,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 28,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 29,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 29,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 29,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 29,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 30,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 30,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 30,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 30,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 31,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 31,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 31,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 31,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 32,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 32,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 32,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 32,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 33,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 33,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 33,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 33,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 34,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 34,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 34,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 34,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 35,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 35,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 35,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 35,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 36,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 36,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 36,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 36,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 37,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 37,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 37,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 37,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 38,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 38,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 38,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 38,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 39,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 39,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 39,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 39,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 40,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 40,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 40,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 40,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 41,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 41,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 41,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 41,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 42,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 42,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 42,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 42,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 43,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 43,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 43,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 43,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 44,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 44,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 44,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 44,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 45,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 45,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 45,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 45,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 46,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 46,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 46,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 46,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 47,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 47,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 47,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 47,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 48,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 48,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 48,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 48,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 49,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 49,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 49,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 49,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            },
            {
              "pt_id": 50,
              "filepath": "ptPic/pic-1613385235835.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 50,
              "filepath": "ptPic/pic-1613385235822.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 50,
              "filepath": "ptPic/pic-1613385235831.octet-stream",
              "isVideo": "false"
            },
            {
              "pt_id": 50,
              "filepath": "ptVideo/pic-1613395844359.mp4",
              "isVideo": "true"
            }
          ]
        ).into("pt_file").returning("id")


        const courses = await trx.insert([
            {
              "pt_id": 1,
              "course_name": "伸展瑜珈 Gentle Stretch ",
              "detail": "Graceful for all levels, students are encouraged to go deeper and experience in a meditative way",
              "category_id1": 1,
              "category_id2": 1
            },
            {
              "pt_id": 2,
              "course_name": "有肌修身瑜伽 Yoga Workout",
              "detail": "揉合瑜伽伸展和普拉提深層肌肉力量訓練， 配合有節奏呼吸，從而加強身體適當柔靭度和關節穩定性。",
              "category_id1": 1,
              "category_id2": 1
            },
            {
              "pt_id": 3,
              "course_name": "普拉提 Pilates",
              "detail": "普拉提重點強化核心、鍛鍊肌肉、改善平衡及姿勢。墊上普拉提及普拉提塑身機兩者都是趣味及挑戰性兼備的課程，讓您雕琢出勻稱身段。此外，普拉提亦有助傷後恢復及預防受傷。",
              "category_id1": 1,
              "category_id2": 1
            },
            {
              "pt_id": 4,
              "course_name": "陰陽瑜珈 Yin Yang Yoga",
              "detail": "初級(適合初學者)︰溫和及放鬆的瑜伽班",
              "category_id1": 1,
              "category_id2": 1
            },
            {
              "pt_id": 5,
              "course_name": "墊上普拉提與塑身機 COMBO PILATES REFORMER & MAT",
              "detail": "此課程結合普拉提塑身機與墊上普拉提，透過多種功能運動和控制練習來調節身心。重點訓練核心和骨盆穩定性，以及脊柱和關節靈活度，力量訓練亦有助改善不良姿勢和肌膚結實度，令身體更挺拔。適合不同程度人士參加。",
              "category_id1": 1,
              "category_id2": 5
            },
            {
              "pt_id": 6,
              "course_name": "背部護理普拉提 Happy Back Pilates",
              "detail": "透過伸展背部肌肉，能夠消除疲勞、緩解背痛。普拉提運動能夠協助腰背痛患者加快康復進度，更可鍛煉背部肌肉能力，從而改善日常不良的姿勢。",
              "category_id1": 1,
              "category_id2": 1
            },
            {
              "pt_id": 7,
              "course_name": "墊上普拉提運動 Mat Pilates",
              "detail": "墊上普拉提運動源於德國大師Joseph Pilates，備受廣泛應用並創作不同的動作，以糾正錯誤姿勢，同時增加身體機能控制，呼吸節奏及肌肉力量。課程中將會使用不同工具配合，例如抗力球、抗力帶、瑜伽滾輪等。",
              "category_id1": 1,
              "category_id2": 1
            },
            {
              "pt_id": 8,
              "course_name": "普拉提塑身機 PILATES GROUP REFORMER",
              "detail": "課程採用普拉提塑身機，利用彈簧負載阻力，帶來具挑戰性的全身鍛煉。這獨一無二的課程有效增強核心、全身力量和關節靈活度。課堂有助活化身體，讓身體全方位活動。每位教練均有不同的教學方法，所以每堂課皆能給您全新的體驗。適合所有水平人士參與。",
              "category_id1": 1,
              "category_id2": 5
            },
            {
              "pt_id": 9,
              "course_name": "空中瑜伽 Aerial Yoga",
              "detail": "空中瑜伽是近年新興的瑜伽運動，利用柔軟的布索卸去部分身體重力，鍛煉身體柔軟度及張力，輕鬆練出空中倒吊姿勢。空中瑜伽適合任何人士，包括初學者或沒有經驗的學員，打破既有對瑜伽的觀念，帶來與別不同的全新體驗。",
              "category_id1": 1,
              "category_id2": 1
            },
            {
              "pt_id": 10,
              "course_name": "背部護理瑜伽 Back Care Yoga",
              "detail": "背部瑜伽重點改善脊柱和關節的強度及穩定性。這個課程旨在教導良好的姿勢習慣和身體意識，視乎個別學員的情況而施教，打造無痛而強壯的身軀。",
              "category_id1": 1,
              "category_id2": 1
            },
            {
              "pt_id": 11,
              "course_name": "哈達瑜伽 Hatha Yoga",
              "detail": "以練習式子為主的瑜伽課程。根據體位法及呼吸調息法等理論而設計的一系列瑜伽動作，有助淨化身體及心靈。",
              "category_id1": 1,
              "category_id2": 1
            },
            {
              "pt_id": 1,
              "course_name": "力量流瑜珈 Power Vinyasa",
              "detail": "This class is a fusion of the Barre technique and traditional Pilates strength and cardio exercises. Set to upbeat music, it will provide high-energy interval peaks to drive sweat-induced, continual fat-burning. Central to the workout are resistance exercises on and off the bar that are athletically-based to shape and tone the body. Pilates props are also incorporated to provide a comprehensive total body workout that results in muscles being worked to the point of fatigue for that all-important caloric burn. You will leave feeling energised, knowing how to safely regress and progress exercises. Join in the fun and experience a full body Barre workout.",
              "category_id1": 1,
              "category_id2": 3
            },
            {
              "pt_id": 2,
              "course_name": "養生瑜伽 Restorative Yoga",
              "detail": "一種節奏較慢的瑜伽練習，課程將使用各種輔具，讓身體在有外力支撐的狀況下，完全在體位法中獲得釋放。這類型練習能有助於刺激副交感神經，從而達到身心靈放鬆的狀態。",
              "category_id1": 1,
              "category_id2": 1
            },
            {
              "pt_id": 3,
              "course_name": "瘦身瑜珈 Slimming Yoga",
              "detail": "初級(適合初學者)︰綜合性的瘦身瑜伽班",
              "category_id1": 1,
              "category_id2": 5
            },
            {
              "pt_id": 6,
              "course_name": "ADVANCED FLOW YOGA",
              "detail": "Settle your mind with a longer, highly intense yoga session. We’ll challenge your limits with elaborate sequences made up of demanding postures and inversions, expanding, evolving and transform your experience through exploration and discovery. You’ll be encouraged to expand limiting belief, unlocking your potential and opening up new possibilities.\r\n\r\n \r\n\r\nYou’ll expand your perceptions and improve your discipline and determination, enabling a higher level of autonomy and self-sufficiency. You’ll walk away stronger, fitter and more flexible.",
              "category_id1": 1,
              "category_id2": 1
            },
            {
              "pt_id": 7,
              "course_name": "高温伸展 Hot Strench",
              "detail": "伸展平日繃緊的筋骨及肌肉，減少痛楚之餘更能改善柔軟度及姿勢，同時放鬆身心。於高溫環境下伸展能夠更有效放鬆肌肉及結締組織。",
              "category_id1": 1,
              "category_id2": 1
            },
            {
              "pt_id": 8,
              "course_name": "Zen Deep Stretch",
              "detail": "Zen Deep Stretch is a therapeutic based exercise class designed to awaken the spirit and focus the mind to guide your body into a place of relaxation, strength and wellness. The instructor uses therapeutic movement and hands-on assisted stretches to help you experience tension release, improved flexibility, better joint mobility and enhanced postural alignment.",
              "category_id1": 1,
              "category_id2": 1
            },
            {
              "pt_id": 2,
              "course_name": "\r\n高温流動瑜伽 Hot Flow ",
              "detail": "流動瑜伽是一種以呼吸配合一系列自由串連動作的瑜伽課程。在加溫教室進行，熱力會提升訓練強度，身體亦能更有效地使用肌肉和其他結締組織。",
              "category_id1": 1,
              "category_id2": 7
            },
            {
              "pt_id": 12,
              "course_name": "Sterench & Tone",
              "detail": "Strengthen connective tissue and stretch muscles you thought you never had. This class is designed to improve the elasticity of your muscles and restore and reaffirm comfortable muscle tone. An elasticized band and other fitness equipment may be used to enhance the toning workout. The result is a feeling of increased muscle control, flexibility and range of motion. Open to all levels.",
              "category_id1": 1,
              "category_id2": 5
            },
            {
              "pt_id": 13,
              "course_name": "STRETCH, ROLL & RELEASE",
              "detail": "使用滾軸配合策略性伸展運動，舒緩長期處於緊張狀態的肌肉，減低不必要的壓力。",
              "category_id1": 1,
              "category_id2": 5
            },
            {
              "pt_id": 14,
              "course_name": "核心伸展 CORE & STRETCH",
              "detail": "課程集中身體核心訓練，鍛煉肌肉及其穩定性。訓練主要針對腹部、下背部、肩部及臀圍的區域。根據個人的體質及姿勢，利用伸展動作幫助鍛煉身體的核心。",
              "category_id1": 1,
              "category_id2": 3
            },
            {
              "pt_id": 15,
              "course_name": "腹肌及伸展 ABS & STRETCH",
              "detail": "此綜合課程有助強化核心肌群、舒緩身體壓力及放鬆崩緊的肌肉，並且讓大家了解核心肌力及激痛點放鬆治療(trigger point release)。",
              "category_id1": 3,
              "category_id2": 1
            },
            {
              "pt_id": 16,
              "course_name": "背痛舒緩放鬆班 Back Pain Release",
              "detail": "教授為改善活動及身體姿勢而專門設計的運動，並讓參加者了解如何糾正不良姿勢及舒緩腰痛。",
              "category_id1": 1,
              "category_id2": 5
            },
            {
              "pt_id": 17,
              "course_name": "TRX Blast",
              "detail": "suitable for all levels. Like TRX, this workout incorporates exercises performed using your own bodyweight to provide resistance to a suspension trainer. TRX Blast is a nonstop workout set to music, with a continuous flow of exercises to maintain cardio intensity and develop core strength. Exercises are synchronised to music to help maintain momentum and rhythm.",
              "category_id1": 7,
              "category_id2": 8
            },
            {
              "pt_id": 18,
              "course_name": "Kickbox",
              "detail": "拳擊及強勁的健康舞音樂",
              "category_id1": 2,
              "category_id2": 5
            },
            {
              "pt_id": 19,
              "course_name": "Aero Dance",
              "detail": "隨著音樂，有節奏地透過簡單的踏板健康舞動作，增強心肺功能，加強身體協調，達至燃燒脂肪的效果。",
              "category_id1": 7,
              "category_id2": 1
            },
            {
              "pt_id": 20,
              "course_name": "FTL Circuit ",
              "detail": "針對修身增強肌力及改善平衡",
              "category_id1": 6,
              "category_id2": 3
            },
            {
              "pt_id": 21,
              "course_name": "BODYPUMP",
              "detail": "一個結合音樂及槓鈴運動的重量訓練課程。以連續做輕至中等強度的重量訓練，幫助您塑身與去掉身體脂肪，增加力量與強健。此課程適合每個想要增加基礎代謝率，加速消耗你的卡路里，將肌力訓練加入有氧訓練的人。",
              "category_id1": 6,
              "category_id2": 5
            },
            {
              "pt_id": 22,
              "course_name": "BODY COMBAT",
              "detail": "BODY COMBAT是以武術運動為靈感的高強度課程。利用來自空手道拳擊、跆拳道、太極與泰拳等多種不同門派的動作在激動人心的音樂下來獲得良好的心肺適能，消耗卡路里的同時提升身體的協調能力、反應和靈敏度。我們提供不同難度的訓練，讓所有人士都可以參與。",
              "category_id1": 5,
              "category_id2": 7
            },
            {
              "pt_id": 23,
              "course_name": "BODY BALANCE",
              "detail": "訓練融合音樂動感、瑜伽、太極和普拉提。透過控制呼吸、集中力及一系列特定的伸展動作，創造一個整體全面的鍛煉，調節身體的和諧及平衡。",
              "category_id1": 1,
              "category_id2": 1
            },
            {
              "pt_id": 24,
              "course_name": "STEP MOVES",
              "detail": "STEP MOVES訓練使用可調節踏板，學員將透過一連串低強度的動作有效地燃燒脂肪。配合音樂帶來的動感提升您的能量，來達到運動的多變性與趣味性，是一高強度、低衝擊且直接而有效的運動。",
              "category_id1": 7,
              "category_id2": 5
            },
            {
              "pt_id": 25,
              "course_name": "LEGS BUMS TUMS",
              "detail": "重點鍛鍊下半身的訓練，旨在打造纖瘦的下半身及改善軀幹線條。訓練配合一些小工具或利用自身體重作阻力訓練，適合健身初學者。",
              "category_id1": 4,
              "category_id2": 5
            },
            {
              "pt_id": 26,
              "course_name": "SHAPE UO",
              "detail": "利用身體重量和簡單器材的重量鍛鍊全身。運動強度由低至中等。適合初學人士。",
              "category_id1": 6,
              "category_id2": 5
            },
            {
              "pt_id": 27,
              "course_name": "懸吊訓練 SUSPENSION TRAINING\r\n",
              "detail": "使用懸吊訓練器材打造的全身鍛煉。透過使用自身體重對抗地心吸力，可以自由控制運動的強度，加強身體的動態穩定性，同時鍛煉出一個強健而纖細的身段。課程將配合音樂，讓訓練融入節奏。",
              "category_id1": 3,
              "category_id2": 5
            },
            {
              "pt_id": 28,
              "course_name": "BODY BLAST",
              "detail": "這是專為初學健身的會員而設的課程，透過循環式重量訓練提升整體的力量，打造更纖瘦和更緊實的線條。",
              "category_id1": 6,
              "category_id2": 5
            },
            {
              "pt_id": 29,
              "course_name": "HIIT高強度間歇訓練",
              "detail": "是燒脂減磅的最佳選擇。訓練會在功能性訓練區域進行，其間會展開一連串高強度訓練並在當中加入短時間的休息作為恢復體力階段，能夠挑戰及提升你的攝氧量。",
              "category_id1": 7,
              "category_id2": 5
            },
            {
              "pt_id": 30,
              "course_name": "CORE核心訓練",
              "detail": "核心肌肉訓練不只是提升腹部肌肉！在日常生活中，例如瑜伽、太極、行山、球類運動中，亦需要運用我們的核心肌肉。在訓練其間，我們會混合地使用自身體重、懸吊訓練和自由重量，針對性地為你強壯核心肌肉及提高肩膊的穩定性。",
              "category_id1": 3,
              "category_id2": 6
            },
            {
              "pt_id": 31,
              "course_name": "拳擊修身",
              "detail": "拳擊是最挑戰體力的運動之一。此課堂助您快速消耗卡路里和燃燒脂肪，超越自己的極限，學習新的技巧，同時亦有助釋放壓力。",
              "category_id1": 7,
              "category_id2": 5
            },
            {
              "pt_id": 32,
              "course_name": "循環訓練 CIRCUITS",
              "detail": "其中一種最受歡迎的阻力訓練，利用特定的重量及肌肉訓練配合，達致消耗卡路里和脂肪的最佳效果。全面地運用各種器械，包括啞鈴、壺鈴和槓鈴。循環訓練目的是令你在進行力量訓練時更有自信同時亦樂在其中。",
              "category_id1": 6,
              "category_id2": 7
            },
            {
              "pt_id": 33,
              "course_name": "塑身改造 GET LEAN",
              "detail": "透過阻力訓練增加淨肌肉量和減低脂肪。這課程會運用自由重量和自身重量，加上不同的訓練模式，達到增肌減脂的目的。如果你的目標是增肌減脂，這就是您的最佳選擇。",
              "category_id1": 6,
              "category_id2": 5
            },
            {
              "pt_id": 34,
              "course_name": "初階力量訓練(大力士訓練)",
              "detail": "農夫行、翻車胎、雪橇拖拉以及其他動作，能夠刺激你的心肺功能和力量。力量訓練能有效地減脂和提升力量，訓練的動作會因應不同參與者的程度而改變，即使初學者也能參加。",
              "category_id1": 6,
              "category_id2": 5
            },
            {
              "pt_id": 35,
              "course_name": "STRETCH",
              "detail": "This is a great class to prepare for your workout, or as a cool down. You’ll do a series of stretches that’ll focus on improve the flexibility of different muscle groups. The class will help improve your joint mobility and muscle flexibility, and leave you feeling calm and relaxed.",
              "category_id1": 1,
              "category_id2": 5
            },
            {
              "pt_id": 36,
              "course_name": "Abs, Butts & Thighs",
              "detail": "All Levels. A great class to start out with if you are new to exercise, are looking to work generally on your body and fitness, or to tone your lower body. Some classes use bands, tubes, weights or bars but equipment is always optional –every exercise can be done with or without. This class is also suitable for men.",
              "category_id1": 5,
              "category_id2": 6
            },
            {
              "pt_id": 37,
              "course_name": "Barre",
              "detail": "This class is a fusion of the Barre technique and traditional Pilates strength and cardio exercises. Set to upbeat music, it will provide high-energy interval peaks to drive sweat-induced, continual fat-burning. Central to the workout are resistance exercises on and off the bar that are athletically-based to shape and tone the body. Pilates props are also incorporated to provide a comprehensive total body workout that results in muscles being worked to the point of fatigue for that all-important caloric burn. You will leave feeling energised, knowing how to safely regress and progress exercises. Join in the fun and experience a full body Barre workout.",
              "category_id1": 1,
              "category_id2": 7
            },
            {
              "pt_id": 38,
              "course_name": "BodyTrack",
              "detail": "All levels. Talk about getting fit! BODYATTACK is a fast track to your personal peak condition. High powered music fires up a full-on workout, with contrasting styles and tempos adding novelty and variety to one of the best-loved programmes on the planet. Plenty of easy-to-follow options allows you the freedom to adjust your workout intensity, staying low in the moves for a lower impact class or going higher for the full cardio blast.",
              "category_id1": 5,
              "category_id2": 7
            },
            {
              "pt_id": 39,
              "course_name": "BodyCombat",
              "detail": "All Levels. BODYCOMBAT is a fiercely energetic program inspired by martial arts and draws from a wide array of disciplines such as karate, boxing, taekwondo, tai chi and muay thai. You strike, punch, kick and kata your way through calories to superior cardio fitness. There is no one-to-one contact or sparring and no equipment is necessary.",
              "category_id1": 2,
              "category_id2": 7
            },
            {
              "pt_id": 40,
              "course_name": "BodyPump",
              "detail": "All levels. Using barbell and weights, BODYPUMP is an awesome resistance training workout that improves strength whilst toning and shaping your muscles. The workout challenges all your major muscle groups by using the best weight-room exercises such as squats, presses, lifts and curls. You can adjust your own weights for a personalised workout.",
              "category_id1": 6,
              "category_id2": 5
            },
            {
              "pt_id": 41,
              "course_name": "Bosu Blast",
              "detail": "All Levels. Our BOSU Blast class helps establish and reinforce balance, stability, and core strength and can include aerobic and strength training routines, flexibility exercises, and balance training. The BOSU Ball is a 3 dimensional piece of equipment. Flat-soled trainers with lateral support are recommended when attending BOSU Blast to provide maximum foot stability and safety.",
              "category_id1": 3,
              "category_id2": 7
            },
            {
              "pt_id": 42,
              "course_name": "Circuit Blitz",
              "detail": "A Circuit Blitz class trains the body for activities performed in daily life and is also highly effective for fat burning. It utilises an array of equipment such as step boards, plates, bars, medicine balls, ropes and sometimes only your body weight for the workout, making it suitable for everyone of all fitness levels. Typically it takes a circuit-style format with 2-3 minutes on each of the various stations to simulate the interval-based training. A great way to strengthen the whole body, challenge coordination and improve balance. An easy-to-follow class that is not timed to music, so that each individual chooses the intensity and pace they wish to work at.",
              "category_id1": 5,
              "category_id2": 7
            },
            {
              "pt_id": 43,
              "course_name": "GRIT",
              "detail": "GRIT™ is Les Mills' answer to HIIT (High Intensity Interval Training). This thirty minute class is not for the faint hearted! GRIT™ demands short sharp bursts of effort to allow you to reach maximum training zones. With the use of plates, stepboards and bodyweight exercises, train your way to athletic performance in the fastest possible way. A reasonable level of fitness is recommended due to the high intensity nature of this programme. We recommend attending three to five BODYPUMP™ classes before attending GRIT™ in order to familiarize yourself with the basic moves.",
              "category_id1": 5,
              "category_id2": 6
            },
            {
              "pt_id": 44,
              "course_name": "Power Abs",
              "detail": "POWER ABS, An intensive class designed to hit your abdominals hard, concentrated on strengthening the abdominal muscles. Followed by ROLLER RELEASE, helping you release tension in the body by massaging away tight knots and improving flexibility. A great combination to improve your core strength and mobility.",
              "category_id1": 3,
              "category_id2": 6
            },
            {
              "pt_id": 45,
              "course_name": "Spartan Training",
              "detail": "A circuit style metabolic training that targets cardiovascular fitness, muscular endurance, agility, body composition, and fat loss. Every workout is a unique physical and mental challenge, with different exercises, time intervals and equipment, to keep your body on track for results.",
              "category_id1": 7,
              "category_id2": 6
            },
            {
              "pt_id": 46,
              "course_name": "Tabata",
              "detail": "Tabata was founded in Japan by Izumi Tabata. It is a high intensity interval training conducted typically in a circuit format. The method is designed so that each exercise lasts 4 minutes long, going through 8 intervals of 20 seconds at a very high intensity followed by 10 seconds of rest. Althernatively 2 exercises can be combined for an 8 min round at intervals of 40/20. Participants are encouraged to go at their max in each interval. Tabata training is known to improve both the aerobic system as well as the anaerobic system and is appropriate for participants looking for the next challenge in their fitness.",
              "category_id1": 7,
              "category_id2": 5
            },
            {
              "pt_id": 47,
              "course_name": "Terra Core",
              "detail": "Utilising the newest training platform to hit the market – Terra Core – this circuit-style class is a total body workout that focuses on compound, multi-joint exercises and engages all large muscle groups. With one flat side and one cushioned side, the Terra Core platform creates movement variability and forces muscles to work harder, whilst improving balance. New challenges are endless with the Terra Core’s versatility as a cushioned step, a flat or unstable bench, a weight, and with the functionality to incorporate resistance bands.",
              "category_id1": 3,
              "category_id2": 6
            },
            {
              "pt_id": 48,
              "course_name": "Total Body Conditioning ",
              "detail": "All Levels. A great class to start out with if you are new to exercise, are looking to work generally on your body and fitness, or to tone up both your upper and lower body. Some classes use bands, tubes, weights or bars but equipment is always optional –every exercise can be done with or without. This class is also suitable for men.",
              "category_id1": 5,
              "category_id2": 5
            },
            {
              "pt_id": 49,
              "course_name": "TRX Circuit",
              "detail": "This class again involves exercises performed using your own bodyweight and a suspension trainer. TRX Circuit runs through some challenging interval training, with recovery segments after each round. Exercises are largely not synchronised to music, and each circuit incorporates strength training and cardio, much like Boot Camp training. TRX Super Circuit involves an extra-long circuit class.",
              "category_id1": 7,
              "category_id2": 6
            },
            {
              "pt_id": 50,
              "course_name": "ViPR (Vitality, Performance, Reconditioning)",
              "detail": "All levels. ViPR is an acronym for Vitality, Performance, Reconditioning – the concept being to bridge the gap between movement and strength. A simple composite rubber tube with handles, the ViPR can be flipped, lifted, carried, thrown or rolled – over 9,000 different exercises that can be done with it. Come and experience this ingenious style of training.",
              "category_id1": 5,
              "category_id2": 6
            },
            {
              "pt_id": 12,
              "course_name": "Body Flow",
              "detail": "BODYFLOW is the Yoga, Tai Chi, Pilates workout that builds flexibility and strength and leaves you feeling centered and calm. Controlled breathing, concentration and a carefully structured series of stretches, moves and poses to music create a holistic workout that brings the body into a state of harmony and balance.",
              "category_id1": 3,
              "category_id2": 1
            },
            {
              "pt_id": 13,
              "course_name": "Cardio Blast",
              "detail": "A dynamic and energy-filled cardio/muscle training workout. Cycle through cardio and strength intervals on the step and BOSU, incorporating hand weights, body bars, and other equipment that will work your body head to toe. This low-impact, high-intensity class will not only increase your strength and balance, it will transform your body.",
              "category_id1": 7,
              "category_id2": 3
            },
            {
              "pt_id": 14,
              "course_name": "CXWORX",
              "detail": "it is an intense 30-minute core-training workout designed to tighten and tone your midsection in the shortest amount of time possible. The class utilizes your body weight, free weights, and resistance tubing to challenge your balance, coordination and improve your functional strength.",
              "category_id1": 3,
              "category_id2": 5
            },
            {
              "pt_id": 15,
              "course_name": "Yoga Pilates Fusion",
              "detail": "combines two popular mind body training styles to enhance core strength, flexibility and total body conditioning. A perfect mix of cardio and body sculpting exercises designed to lengthen lean muscles, increase stability and range of motion while decreasing the risk of injury.",
              "category_id1": 1,
              "category_id2": 3
            },
            {
              "pt_id": 16,
              "course_name": "POP Pilates",
              "detail": "POP Pilates® is an incredible fusion of ab-chiseling and total body defining moves choreographed to upbeat pop songs. This intense, mat-based workout challenges students to rhythmically flow from one exercise to the next, developing a rock solid core while leaving no muscle untouched",
              "category_id1": 1,
              "category_id2": 5
            },
            {
              "pt_id": 17,
              "course_name": "Strength & Mobility",
              "detail": "help improve functional strength for everyday living with mobility exercises that will help maintain flexibility and graceful movement patterns. These classes are great for all age groups as this format gives the instructor the ability to tailor their class to new exercisers while keeping it challenging to the most advanced students and everyone in between.  Millennials to seniors will learn new approaches to exercise using a variety of equipment in a safe, effective, friendly environment.",
              "category_id1": 3,
              "category_id2": 6
            },
            {
              "pt_id": 18,
              "course_name": "Taekwondo",
              "detail": "Improve your strength, speed, stamina, balance, and flexibility while learning effective methods of self-defense! This Olympic-style (World Taekwondo Federation) martial arts class combines kicking and punching techniques with stretching, calisthenics, aerobics, and occasional non-contact sparring drills to provide a great full-body workout. We invite participants of all skill levels and fitness levels. Beginners are always welcome!",
              "category_id1": 2,
              "category_id2": 3
            },
            {
              "pt_id": 19,
              "course_name": "Tai Chi",
              "detail": "Experience the moving meditative martial art of Yang Style Tai Chi. Tai Chi is an internal form of Kung Fu that has both health benefits and fighting applications. Tai Chi improves balance, strengthens bone density, lowers blood pressure, reduces arthritis inflammation, and stabilizes blood sugar. Tai Chi is a low impact workout perfect for all ages.",
              "category_id1": 2,
              "category_id2": 3
            },
            {
              "pt_id": 20,
              "course_name": "Muay Thai",
              "detail": "Learn the basics of the traditional Thai martial art or hone your technique. The sessions include a mix of pad work, bag work drills and functional circuit conditioning exercises.",
              "category_id1": 2,
              "category_id2": 3
            },
            {
              "pt_id": 21,
              "course_name": "Boxing Burn",
              "detail": "In this class trainers will teach you boxing techniques that strengthen your body, increase endurance and build muscle. Combined with cardio and toning exercises, this boxing workout produces unbelievable results.",
              "category_id1": 2,
              "category_id2": 7
            },
            {
              "pt_id": 22,
              "course_name": "BoxCore",
              "detail": "2 long rounds:1 round of boxing with integrated core/ab movements1 round of strength & coreFloor side is focused on dynamic and isolated core exercises",
              "category_id1": 2,
              "category_id2": 3
            },
            {
              "pt_id": 23,
              "course_name": "Piloxing KO",
              "detail": "PILOXING KNOCKOUT PILOXING Knockout is a 30-minute workout influenced by plyometrics, sports conditioning drills and functional training. Increase your fitness level, boost your confidence and strength, break boundaries and gain results. Knockout is a program that suits and challenges individuals of all fitness levels. It’s time to make your workout effective and FUN!",
              "category_id1": 3,
              "category_id2": 2
            },
            {
              "pt_id": 24,
              "course_name": "Regular Boxing Training",
              "detail": "In this class, the coaches will teach you boxing techniques that strengthen your body, increase endurance and build muscle. The class also focuses on all elements of fitness cardio, flexibility and coordination. This boxing workout produces unbelievable results. Come ready to sweat, and prepare to leave empowered and feeling strong.",
              "category_id1": 2,
              "category_id2": 5
            },
            {
              "pt_id": 25,
              "course_name": "Boom",
              "detail": "Boom is a martial arts inspired program designed to challenge your fitness and power incorporating strikes, boxing, kicking and strength exercises to give you a total body workout! This class is packed with metabolic circuits to increase your performance and conditioning all while having fun and varying your workout. Boxing gloves are provided but you can bring your own pair if you prefer.",
              "category_id1": 2,
              "category_id2": 5
            },
            {
              "pt_id": 26,
              "course_name": "Low Intensity Boxing Classes",
              "detail": "Our Low Intensity Boxing class is a slower paced circuit style workout. With extra rest and less high intensity and high impact exercises. This is a great class for Boxing or Fitness beginners who want to get started training with us, but don’t quite feel ready to hop in some of our more intense classes!",
              "category_id1": 2,
              "category_id2": 5
            },
            {
              "pt_id": 27,
              "course_name": "Fighter Fit",
              "detail": "Our Fighter Fit classes are an intense full body circuit style workout. Boxing will always be a big part of our classes, but also expect weights and other exercises too!",
              "category_id1": 2,
              "category_id2": 6
            },
            {
              "pt_id": 28,
              "course_name": "CARDIO KILLER",
              "detail": "Enter our most sweaty workout and prepare to be mentally + physically challenged. Expect quick fire rounds of high-powered treadmill sessions with dynamic bodyweight sequences and a whole lot of cardio.",
              "category_id1": 4,
              "category_id2": 7
            },
            {
              "pt_id": 29,
              "course_name": "Functional Fitness",
              "detail": "Carefully designed a wide range of drills for your abs, lower back, and legs. Different from the typical physical trainer who focus on a set of muscles on different machines, functional fitness starts from the core, with dynamic exercise to motivate different groups of muscles and joints, improving coordination, balance, stimulating your overall physical function. You will feel better, healthier,",
              "category_id1": 3,
              "category_id2": 4
            },
            {
              "pt_id": 30,
              "course_name": "BodyBalance",
              "detail": "Find your centre in this yoga-based workout that’ll improve your mind, body and life. This class uses a series a simple yoga moves and embraces elements of Tai Chi and Pilates. You will bend and stretch to an inspiring soundtrack filled with songs that will help you relax and calm yourself. Controlled breathing, concentration and the carefully structured series of moves and poses are essential to creating a sense of calm.\r\n\r\n \r\n\r\nThis class is a great introduction to yoga. If you’ve already done some form of yoga before, you’ll love the variety of poses in this class. You’ll increase your core strength and improve your flexibility while reducing your stress levels. Walk away from class with a strengthened body and a lasting sense of wellbeing and calm. ",
              "category_id1": 3,
              "category_id2": 5
            },
            {
              "pt_id": 31,
              "course_name": "Core Flow Yoga",
              "detail": "This yoga workout focuses on strengthening your core, for better spinal integrity and postural support. We’ll take you through a series of poses that are designed to transition from one to another so seamlessly you’ll feel like you’re flowing through them. You’ll repeat each pose several times, with small adjustments in intensity to build a stronger, more stable core.\r\n\r\nYour stronger core will give you better support for your spine and help improve your posture. You’ll also gain better awareness of your body, so that you’ll be able to move more efficiently in your everyday activities. The more you practice, the more control you’ll gain for all your movements, giving you more energy and learning you with a sense of personal empowerment.",
              "category_id1": 3,
              "category_id2": 1
            },
            {
              "pt_id": 32,
              "course_name": "REP FIT | Upper Body Strength",
              "detail": "Medium-intensity weight training program focused on building core strength, stamina and aesthetics. - The classes are 100% dedicated to weighted superset movements with a focus on functional fitness, where aesthetics meets stamina. Monday and Thursday: Upper body Tuesday and Friday: Lower body Weekends: Full body",
              "category_id1": 3,
              "category_id2": 4
            },
            {
              "pt_id": 33,
              "course_name": "Muaythai - HIIT",
              "detail": "Muaythai Fitness - all levels (suitable for anyone regardless of experience) Their classes will be divided into 2 parts, Muaythai training and circuit Fitness. Muaythai training Aim: -To Strengthen cardiac and respiratory muscles and improve the Muaythai technique. Method: -Through doing Muaythai Pad training and heavy bag training with our trainers. Circuit Training Aims: -To strengthen muscle de",
              "category_id1": 4,
              "category_id2": 2
            },
            {
              "pt_id": 34,
              "course_name": "Body Sculpt - AbsFocus & Beyond",
              "detail": "This is an elevated version of AbsFocus™. Your core burns but better. It’s a full body exercise that still targets the core. With the use of equipment, weights, sliders, resistance bands, it’s a mobility and core focus class to the music beat. Great for sculpting and toning your overall physique",
              "category_id1": 3,
              "category_id2": 4
            },
            {
              "pt_id": 35,
              "course_name": "Weight Training",
              "detail": "Weight training is a type of strength training that uses weights for resistance. By creating a stress to the muscles performed with free weights (e.g. barbells and dumbbells) or by using weight machines, these exercises will enable muscles to be activated and get stronger. Weight training is a great way to burn calories, gain muscle mass, increase flexibility, decrease body fat,",
              "category_id1": 6,
              "category_id2": 5
            },
            {
              "pt_id": 36,
              "course_name": "Strength and conditioning",
              "detail": "A full body stretch using movements that flow smoothly to increase flexibility, decrease muscle tension, develop core strength and improve muscular balance.",
              "category_id1": 6,
              "category_id2": 5
            },
            {
              "pt_id": 37,
              "course_name": "Infusion",
              "detail": "This is a bootcamp type of training consisting of total body circuit and weights through different stations. Each station is strategically laid out so that no single muscle group or exercise type is performed in succession allowing you to maximize each minute. Challenge yourself with this calorie-blasting workout.",
              "category_id1": 5,
              "category_id2": 7
            },
            {
              "pt_id": 38,
              "course_name": "LES MILLS TONE",
              "detail": "Welcome to Les Mills Tone, an inclusive workout that lets you train at your own pace, no matter your fitness level. In this class, you’ll find an optimal mix of strength, cardio and core training, along with different training concepts to make sure everyone gets the best results. With a challenging combination of lunges, squats, functional training and tubing exercises, you’ll take your fitness to another level in just 45 minutes. The instructor is there to help you master the proper technique and exercise effectively at your current fitness level.\r\n\r\nThe class will help you build your fitness and strength, while improving your energy levels, flexibility, speed, balance, agility and your core strength. With this great foundation class, you’ll walk away with a sense of accomplishme",
              "category_id1": 5,
              "category_id2": 6
            },
            {
              "pt_id": 39,
              "course_name": "Training Circuit ",
              "detail": "Use your bodyweight in this circuit-style training. We’ll teach you how to use resistance techniques to work your whole body, so you’ll leave with improved upper body strength and balance, core stability and flexibility. \r\n",
              "category_id1": 5,
              "category_id2": 6
            },
            {
              "pt_id": 40,
              "course_name": "CrossFit Lite",
              "detail": "These classes are designed to give you an all-around workout and improve your fitness level. These hour-long sessions include various kinds of circuit-training, functional exercises to improve strength, and highly-varied movements to maximize your cardio-vascular and overall conditioning. This is a great way to get accustomed to group fitness training and prepare for CrossFit! Everyone is welcome",
              "category_id1": 7,
              "category_id2": 5
            },
            {
              "pt_id": 41,
              "course_name": "Step(I/A)",
              "detail": "We’ll put you through your paces in this 30-minute fast paced workout. Inspired by a mix of various training concepts, this class is a High Intensity Interval Training (HIIT) session that incorporates dynamic movement training and athletic drills. We also manipulate the length of the work bouts and recovery periods to challenge your cardio endurance and maximize the amount of calories you burn.\r\n\r\nDynamic movement training helps improve your mobility, strength, balance and coordination. Athletic drills help your speed, agility, and explosive power. The cardio aspect of the workout will improve your endurance and energy levels. This full body workout also maximizes your body’s ability to burn calories, and also makes sure you keep burning hours after it’s over.\r\n\r\nKeep doing this class and you’ll get fitter, recover faster and work more efficiently.",
              "category_id1": 7,
              "category_id2": 5
            },
            {
              "pt_id": 42,
              "course_name": "Step Moves",
              "detail": "Welcome to a freestyle aerobics class based around a raised platform. This workout involves fast-paced choreography with complex moves that’ll challenge you both physically and mentally. You’ll build both cardiovascular fitness and improve your coordination.",
              "category_id1": 7,
              "category_id2": 5
            },
            {
              "pt_id": 43,
              "course_name": "Body Combat",
              "detail": "Punch and kick your way to fitness in this high-energy martial-arts inspired workout. The class is completely non-contact, with easy-to-follow moves inspired by a wide array of mixed martial arts, such as karate, boxing, taekwondo, tai chi and MuayThai. With each round, you’ll be motivated to up the intensity to make the most out of your workout. \r\n\r\n \r\n\r\nYou’ll work your legs, and tone your arms, backs and shoulders. Your core will also get a phenomenal core workout while you burn calories, and develop your coordination, agility and speed. This class with get you fit, fast, and strong, and leave you feeling empowered. \r\n\r\n \r\n\r\nAnd if you’re just starting out, you’ll be given low-impact options that’ll tailor each workout to your fitness level. We suggest that you start with 1 to 2 classes a week and work your way up from there.",
              "category_id1": 3,
              "category_id2": 7
            },
            {
              "pt_id": 44,
              "course_name": "BodyTrack",
              "detail": "Welcome to a high-energy, whole body workout that caters to everyone, from total beginners to total addicts. You’ll push yourself to the limits from combining athletic moves such as running, lunging and jumping, with strength exercises such as push-ups and squats.\r\n\r\n\r\nYou’ll tone and shape your body while you work out to music that’ll energize and uplift you. At the end of the class, you’ll have burned plenty of calories and improved your stamina. The sports-inspired moves will also help improve your coordination, agility and, best of all, your functional fitness – the fitness that you need for everyday life. You’ll be quicker off the mark in everything you do.\r\n\r\nAnd if you’re just starting out, you’ll be given low-impact options that’ll tailor each workout to your fitness level. We suggest that you start with 1 to 2 classes a week and work your way up from there.",
              "category_id1": 7,
              "category_id2": 5
            },
            {
              "pt_id": 45,
              "course_name": "BODYSTEP® ATHLETIC",
              "detail": "It’s time to take basic stepping to a new level. In this full-body cardio workout, it’s more than walking up and down a step. You’ll combine basic stepping movements with moves like burpees, pushups, and weight plate exercises to work both your lower and upper body. All of this is set to a mix of invigorating, hit music which will motivate you and add a whole lot of fun to your workout. \r\n\r\n \r\n\r\nDuring the workout, you’ll get your heart pumping, and increase your cardio fitness. You’ll shape and tone your butt and legs, and improving your coordination and agility. Best of all, you’ll keep burning calories long after the workout is over. \r\n\r\n \r\n\r\nAnd if you’re just starting out, you’ll be given low-impact options that’ll tailor each workout to your fitness level. We suggest that you start with 1 to 2 classes a week and work your way up from there.",
              "category_id1": 7,
              "category_id2": 5
            },
            {
              "pt_id": 46,
              "course_name": "BODYATTACK",
              "detail": "Welcome to a high-energy, whole body workout that caters to everyone, from total beginners to total addicts. You’ll push yourself to the limits from combining athletic moves such as running, lunging and jumping, with strength exercises such as push-ups and squats.\r\n\r\n\r\nYou’ll tone and shape your body while you work out to music that’ll energize and uplift you. At the end of the class, you’ll have burned plenty of calories and improved your stamina. The sports-inspired moves will also help improve your coordination, agility and, best of all, your functional fitness – the fitness that you need for everyday life. You’ll be quicker off the mark in everything you do.\r\n\r\nAnd if you’re just starting out, you’ll be given low-impact options that’ll tailor each workout to your fitness level. We suggest that you start with 1 to 2 classes a week and work your way up from there.",
              "category_id1": 7,
              "category_id2": 5
            },
            {
              "pt_id": 47,
              "course_name": "TRX Bodyweight Workout: Build Muscle And Get Fit At Home | Home Workout Muscle Building Course",
              "detail": "TRX to build muscle ",
              "category_id1": 6,
              "category_id2": 4
            },
            {
              "pt_id": 48,
              "course_name": "BODYPUMP",
              "detail": "This full-body barbell workout targets all your major muscle groups. Based on ‘The Rep Effect’, this proven formula will have you exhausting your muscles using light to moderate weights to perform high repetitions, which is the secret to developing lean, athletic muscle. Combined with invigorating music and instructors who pump out encouragement and motivation, you’ll get lean and fit, fast.\r\n\r\n \r\n\r\nDuring the class, you’ll tone and shape your entire body, without adding bulky muscles. You’ll also increase your core strength and improve your bone health. You’ll leave the class feeling challenged, motivated, and ready to come back for more. \r\n\r\n ",
              "category_id1": 6,
              "category_id2": 5
            },
            {
              "pt_id": 49,
              "course_name": "HIIT X STRENGTH",
              "detail": "Build your functional body strength in this focused strength training class. You’ll challenge yourself with a combination of loaded and body weight exercises, alternating between muscular endurance and balance exercises. You’ll build functional strength for your whole body, as well as enhance your muscular endurance and metabolism. Walk away feeling pumped and with more lean muscle mass.",
              "category_id1": 6,
              "category_id2": 4
            },
            {
              "pt_id": 50,
              "course_name": "HIIT X POWER",
              "detail": "It’s time to add more power to your workouts. In this class, we focus on short but explosive workout periods, combined with adequate rest periods. You’ll use your body’s natural movement patterns in exercises that will use either body weight or loaded weights in fast-paced moves that will push your limits. You’ll work your whole body for a dynamic balance between speed and muscle strength, and with an enhanced athletic performance.",
              "category_id1": 6,
              "category_id2": 4
            },
            {
              "pt_id": 27,
              "course_name": "GO HARDCORE",
              "detail": "This 30-minute class is an effective workout that specifically targets and strengthens your core muscles. We combine standing core exercises that’ll have you bending, lifting and twisting, with strength exercises to build a leaner, fitter waistline. The exercises will consist of wholly integrated movements that will have engage multiple muscles.\r\n\r\nYou’ll leave the class with a stronger core, which will give you getter balance, mobility, stability and improved posture. You’ll also build a strong foundation that will help to increase your muscle efficiency and power. You can use this class as a warm up to your own workout, as a total workout or even to recover after a period of heavy training.\r\n\r\nHARDCORE+\r\n\r\nWe go hardcore for a full 45 minutes. We’ll target and strengthen your core muscles, which is the powerhouse for all your body movements. You’ll get better flexibility, while building a strong foundation to increase muscle efficiency and power.",
              "category_id1": 6,
              "category_id2": 4
            },
            {
              "pt_id": 28,
              "course_name": "HARDCORE CHALLENGE",
              "detail": "Get your heart pumping in this total body strength and conditioning workout. This class focuses on functional movements for the whole, to build your strength, muscular endurance and cardiovascular strength. We’ll show you dynamic movements that’ll improve your mobility, coordination and speed. You’ll walk away feeling stronger, and energised.",
              "category_id1": 6,
              "category_id2": 4
            },
            {
              "pt_id": 29,
              "course_name": "HARDCORE MAXX",
              "detail": "We’ll put you through your paces in this 30-minute fast paced workout. Inspired by a mix of various training concepts, this class is a High Intensity Interval Training (HIIT) session that incorporates dynamic movement training and athletic drills. We also manipulate the length of the work bouts and recovery periods to challenge your cardio endurance and maximize the amount of calories you burn.\r\n\r\nDynamic movement training helps improve your mobility, strength, balance and coordination. Athletic drills help your speed, agility, and explosive power. The cardio aspect of the workout will improve your endurance and energy levels. This full body workout also maximizes your body’s ability to burn calories, and also makes sure you keep burning hours after it’s over.\r\n\r\nKeep doing this class and you’ll get fitter, recover faster and work more efficiently.",
              "category_id1": 6,
              "category_id2": 4
            },
            {
              "pt_id": 30,
              "course_name": "BODYBLAST",
              "detail": "Work your whole body to enhance your strength, balance, core stability and flexibility. Working as a group for more motivation, we’ll use resistance techniques through multiple drills and exercises for this bodyweight suspension training.  ",
              "category_id1": 6,
              "category_id2": 5
            }
          ]).into("course").returning("id")



          const timeslots = await trx.insert([
            {
              "start": "2021-02-21 09:00:00.000",
              "end": "2021-02-21 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/802940854",
              "course_id ": 1
            },
            {
              "start": "2021-02-25 09:00:00.000",
              "end": "2021-02-25 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/289146115",
              "course_id ": 1
            },
            {
              "start": "2021-02-22 09:00:00.000",
              "end": "2021-02-22 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/305547935",
              "course_id ": 2
            },
            {
              "start": "2021-02-23 10:00:00.000",
              "end": "2021-02-23 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/5452557221",
              "course_id ": 2
            },
            {
              "start": "2021-02-27 18:00:00.000",
              "end": "2021-02-27 19:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/447055924",
              "course_id ": 3
            },
            {
              "start": "2021-02-28 08:00:00.000",
              "end": "2021-02-28 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/366733387",
              "course_id ": 3
            },
            {
              "start": "2021-02-27 19:00:00.000",
              "end": "2021-02-27 20:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/228833566",
              "course_id ": 4
            },
            {
              "start": "2021-02-24 12:00:00.000",
              "end": "2021-02-24 13:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/489801972",
              "course_id ": 4
            },
            {
              "start": "2021-02-22 12:00:00.000",
              "end": "2021-02-22 13:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/68421017",
              "course_id ": 5
            },
            {
              "start": "2021-02-27 11:00:00.000",
              "end": "2021-02-27 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/286013705",
              "course_id ": 5
            },
            {
              "start": "2021-02-28 11:00:00.000",
              "end": "2021-02-28 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/580487860",
              "course_id ": 6
            },
            {
              "start": "2021-02-28 10:00:00.000",
              "end": "2021-02-28 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/897430799",
              "course_id ": 6
            },
            {
              "start": "2021-02-21 08:00:00.000",
              "end": "2021-02-21 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/75165354",
              "course_id ": 7
            },
            {
              "start": "2021-02-23 18:00:00.000",
              "end": "2021-02-23 19:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/823160035",
              "course_id ": 7
            },
            {
              "start": "2021-02-24 21:00:00.000",
              "end": "2021-02-24 22:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/258622171",
              "course_id ": 8
            },
            {
              "start": "2021-02-21 09:00:00.000",
              "end": "2021-02-21 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/744308536",
              "course_id ": 8
            },
            {
              "start": "2021-02-23 11:00:00.000",
              "end": "2021-02-23 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/790924822",
              "course_id ": 9
            },
            {
              "start": "2021-02-24 09:00:00.000",
              "end": "2021-02-24 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/802560834",
              "course_id ": 9
            },
            {
              "start": "2021-02-25 09:00:00.000",
              "end": "2021-02-25 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/524956223",
              "course_id ": 10
            },
            {
              "start": "2021-02-24 21:00:00.000",
              "end": "2021-02-24 22:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/30693160",
              "course_id ": 10
            },
            {
              "start": "2021-02-27 11:00:00.000",
              "end": "2021-02-27 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/121021442",
              "course_id ": 11
            },
            {
              "start": "2021-02-24 09:00:00.000",
              "end": "2021-02-24 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/380518108",
              "course_id ": 11
            },
            {
              "start": "2021-02-23 23:00:00.000",
              "end": "2021-02-24 00:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/997030179",
              "course_id ": 12
            },
            {
              "start": "2021-02-21 11:00:00.000",
              "end": "2021-02-21 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/81144322",
              "course_id ": 12
            },
            {
              "start": "2021-02-28 20:00:00.000",
              "end": "2021-02-28 21:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/761040879",
              "course_id ": 13
            },
            {
              "start": "2021-02-28 14:00:00.000",
              "end": "2021-02-28 15:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/300111825",
              "course_id ": 13
            },
            {
              "start": "2021-02-27 09:00:00.000",
              "end": "2021-02-27 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/100184211",
              "course_id ": 14
            },
            {
              "start": "2021-02-26 08:00:00.000",
              "end": "2021-02-26 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/267931944",
              "course_id ": 14
            },
            {
              "start": "2021-02-24 17:00:00.000",
              "end": "2021-02-24 18:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/640283897",
              "course_id ": 15
            },
            {
              "start": "2021-02-22 14:00:00.000",
              "end": "2021-02-22 15:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/447432349",
              "course_id ": 15
            },
            {
              "start": "2021-02-23 22:00:00.000",
              "end": "2021-02-23 23:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/297250630",
              "course_id ": 16
            },
            {
              "start": "2021-02-26 12:00:00.000",
              "end": "2021-02-26 13:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/208382516",
              "course_id ": 16
            },
            {
              "start": "2021-02-27 09:00:00.000",
              "end": "2021-02-27 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/607713404",
              "course_id ": 17
            },
            {
              "start": "2021-02-23 11:00:00.000",
              "end": "2021-02-23 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/443582716",
              "course_id ": 17
            },
            {
              "start": "2021-02-23 10:00:00.000",
              "end": "2021-02-23 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/422725564",
              "course_id ": 18
            },
            {
              "start": "2021-02-28 10:00:00.000",
              "end": "2021-02-28 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/180620455",
              "course_id ": 18
            },
            {
              "start": "2021-02-24 11:00:00.000",
              "end": "2021-02-24 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/210242371",
              "course_id ": 19
            },
            {
              "start": "2021-02-21 22:00:00.000",
              "end": "2021-02-21 23:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/996059155",
              "course_id ": 19
            },
            {
              "start": "2021-02-24 10:00:00.000",
              "end": "2021-02-24 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/215991417",
              "course_id ": 20
            },
            {
              "start": "2021-02-25 08:00:00.000",
              "end": "2021-02-25 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/956124059",
              "course_id ": 20
            },
            {
              "start": "2021-02-22 13:00:00.000",
              "end": "2021-02-22 14:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/755055262",
              "course_id ": 21
            },
            {
              "start": "2021-02-21 08:00:00.000",
              "end": "2021-02-21 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/253816813",
              "course_id ": 21
            },
            {
              "start": "2021-02-26 03:00:00.000",
              "end": "2021-02-26 04:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/467141817",
              "course_id ": 22
            },
            {
              "start": "2021-02-21 12:00:00.000",
              "end": "2021-02-21 13:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/536901449",
              "course_id ": 22
            },
            {
              "start": "2021-02-21 08:00:00.000",
              "end": "2021-02-21 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/429279989",
              "course_id ": 23
            },
            {
              "start": "2021-02-27 10:00:00.000",
              "end": "2021-02-27 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/854845688",
              "course_id ": 23
            },
            {
              "start": "2021-02-27 10:00:00.000",
              "end": "2021-02-27 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/878657078",
              "course_id ": 23
            },
            {
              "start": "2021-02-27 20:00:00.000",
              "end": "2021-02-27 21:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/687200406",
              "course_id ": 24
            },
            {
              "start": "2021-02-20 19:00:00.000",
              "end": "2021-02-20 20:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/64541165",
              "course_id ": 24
            },
            {
              "start": "2021-02-23 09:00:00.000",
              "end": "2021-02-23 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/660616891",
              "course_id ": 25
            },
            {
              "start": "2021-02-21 08:00:00.000",
              "end": "2021-02-21 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/83081192",
              "course_id ": 25
            },
            {
              "start": "2021-02-23 15:00:00.000",
              "end": "2021-02-23 16:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/958391897",
              "course_id ": 26
            },
            {
              "start": "2021-02-26 08:00:00.000",
              "end": "2021-02-26 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/272985239",
              "course_id ": 26
            },
            {
              "start": "2021-02-27 12:00:00.000",
              "end": "2021-02-27 13:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/794674903",
              "course_id ": 27
            },
            {
              "start": "2021-02-26 22:00:00.000",
              "end": "2021-02-26 23:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/423580223",
              "course_id ": 27
            },
            {
              "start": "2021-02-26 09:00:00.000",
              "end": "2021-02-26 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/572072642",
              "course_id ": 28
            },
            {
              "start": "2021-02-26 23:00:00.000",
              "end": "2021-02-27 00:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/559648457",
              "course_id ": 28
            },
            {
              "start": "2021-02-25 08:00:00.000",
              "end": "2021-02-25 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/826780578",
              "course_id ": 29
            },
            {
              "start": "2021-02-20 20:00:00.000",
              "end": "2021-02-20 21:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/101937148",
              "course_id ": 29
            },
            {
              "start": "2021-02-22 23:00:00.000",
              "end": "2021-02-23 00:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/692325539",
              "course_id ": 30
            },
            {
              "start": "2021-02-25 10:00:00.000",
              "end": "2021-02-25 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/800939162",
              "course_id ": 30
            },
            {
              "start": "2021-02-22 10:00:00.000",
              "end": "2021-02-22 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/777209216",
              "course_id ": 31
            },
            {
              "start": "2021-02-22 15:00:00.000",
              "end": "2021-02-22 16:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/450173758",
              "course_id ": 31
            },
            {
              "start": "2021-02-20 18:00:00.000",
              "end": "2021-02-20 19:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/567694793",
              "course_id ": 32
            },
            {
              "start": "2021-02-23 10:00:00.000",
              "end": "2021-02-23 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/346126075",
              "course_id ": 32
            },
            {
              "start": "2021-02-24 10:00:00.000",
              "end": "2021-02-24 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/241006883",
              "course_id ": 33
            },
            {
              "start": "2021-02-21 11:00:00.000",
              "end": "2021-02-21 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/645324765",
              "course_id ": 33
            },
            {
              "start": "2021-02-22 23:00:00.000",
              "end": "2021-02-23 00:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/942305438",
              "course_id ": 34
            },
            {
              "start": "2021-02-20 23:00:00.000",
              "end": "2021-02-21 00:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/750015423",
              "course_id ": 34
            },
            {
              "start": "2021-02-24 12:00:00.000",
              "end": "2021-02-24 13:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/481093409",
              "course_id ": 35
            },
            {
              "start": "2021-02-25 10:00:00.000",
              "end": "2021-02-25 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/424629500",
              "course_id ": 35
            },
            {
              "start": "2021-02-27 18:00:00.000",
              "end": "2021-02-27 19:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/485586799",
              "course_id ": 36
            },
            {
              "start": "2021-02-28 22:00:00.000",
              "end": "2021-02-28 23:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/124136204",
              "course_id ": 36
            },
            {
              "start": "2021-02-27 19:00:00.000",
              "end": "2021-02-27 20:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/268696047",
              "course_id ": 37
            },
            {
              "start": "2021-02-21 20:00:00.000",
              "end": "2021-02-21 21:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/358104340",
              "course_id ": 37
            },
            {
              "start": "2021-02-20 12:00:00.000",
              "end": "2021-02-20 13:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/125197296",
              "course_id ": 38
            },
            {
              "start": "2021-02-28 11:00:00.000",
              "end": "2021-02-28 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/999372913",
              "course_id ": 38
            },
            {
              "start": "2021-02-23 11:00:00.000",
              "end": "2021-02-23 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/911642437",
              "course_id ": 39
            },
            {
              "start": "2021-02-26 09:00:00.000",
              "end": "2021-02-26 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/517110322",
              "course_id ": 39
            },
            {
              "start": "2021-02-22 10:00:00.000",
              "end": "2021-02-22 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/405997982",
              "course_id ": 40
            },
            {
              "start": "2021-02-21 19:00:00.000",
              "end": "2021-02-21 20:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/47073957",
              "course_id ": 40
            },
            {
              "start": "2021-02-22 12:00:00.000",
              "end": "2021-02-22 13:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/956234270",
              "course_id ": 41
            },
            {
              "start": "2021-02-22 09:00:00.000",
              "end": "2021-02-22 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/601157709",
              "course_id ": 41
            },
            {
              "start": "2021-02-22 19:00:00.000",
              "end": "2021-02-22 20:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/438584770",
              "course_id ": 42
            },
            {
              "start": "2021-02-24 15:00:00.000",
              "end": "2021-02-24 16:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/60796222",
              "course_id ": 42
            },
            {
              "start": "2021-02-22 11:00:00.000",
              "end": "2021-02-22 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/269260502",
              "course_id ": 43
            },
            {
              "start": "2021-02-22 18:00:00.000",
              "end": "2021-02-22 19:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/653270570",
              "course_id ": 43
            },
            {
              "start": "2021-02-23 08:00:00.000",
              "end": "2021-02-23 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/998078715",
              "course_id ": 44
            },
            {
              "start": "2021-02-25 13:00:00.000",
              "end": "2021-02-25 14:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/498407131",
              "course_id ": 44
            },
            {
              "start": "2021-02-27 22:00:00.000",
              "end": "2021-02-27 23:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/207242438",
              "course_id ": 45
            },
            {
              "start": "2021-02-25 20:00:00.000",
              "end": "2021-02-25 21:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/917492178",
              "course_id ": 45
            },
            {
              "start": "2021-02-25 18:00:00.000",
              "end": "2021-02-25 19:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/209915845",
              "course_id ": 45
            },
            {
              "start": "2021-02-27 09:00:00.000",
              "end": "2021-02-27 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/168548811",
              "course_id ": 46
            },
            {
              "start": "2021-02-22 09:00:00.000",
              "end": "2021-02-22 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/803381694",
              "course_id ": 46
            },
            {
              "start": "2021-02-20 09:00:00.000",
              "end": "2021-02-20 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/450886474",
              "course_id ": 46
            },
            {
              "start": "2021-02-23 11:00:00.000",
              "end": "2021-02-23 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/494612771",
              "course_id ": 47
            },
            {
              "start": "2021-02-24 19:00:00.000",
              "end": "2021-02-24 20:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/892129886",
              "course_id ": 47
            },
            {
              "start": "2021-02-28 12:00:00.000",
              "end": "2021-02-28 13:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/372556225",
              "course_id ": 48
            },
            {
              "start": "2021-02-27 21:00:00.000",
              "end": "2021-02-27 22:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/969069051",
              "course_id ": 48
            },
            {
              "start": "2021-02-20 09:00:00.000",
              "end": "2021-02-20 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/841566210",
              "course_id ": 49
            },
            {
              "start": "2021-02-22 16:00:00.000",
              "end": "2021-02-22 17:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/879147406",
              "course_id ": 49
            },
            {
              "start": "2021-02-24 08:00:00.000",
              "end": "2021-02-24 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/412067484",
              "course_id ": 50
            },
            {
              "start": "2021-02-24 21:00:00.000",
              "end": "2021-02-24 22:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/360198491",
              "course_id ": 50
            },
            {
              "start": "2021-02-22 12:00:00.000",
              "end": "2021-02-22 13:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/658944852",
              "course_id ": 51
            },
            {
              "start": "2021-02-23 20:00:00.000",
              "end": "2021-02-23 21:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/185012654",
              "course_id ": 51
            },
            {
              "start": "2021-02-25 10:00:00.000",
              "end": "2021-02-25 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/207280263",
              "course_id ": 52
            },
            {
              "start": "2021-02-28 17:00:00.000",
              "end": "2021-02-28 18:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/775232864",
              "course_id ": 52
            },
            {
              "start": "2021-02-22 15:00:00.000",
              "end": "2021-02-22 16:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/463738611",
              "course_id ": 53
            },
            {
              "start": "2021-02-20 10:00:00.000",
              "end": "2021-02-20 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/854414633",
              "course_id ": 53
            },
            {
              "start": "2021-02-22 08:00:00.000",
              "end": "2021-02-22 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/820820194",
              "course_id ": 54
            },
            {
              "start": "2021-02-28 19:00:00.000",
              "end": "2021-02-28 20:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/538287904",
              "course_id ": 54
            },
            {
              "start": "2021-02-23 19:00:00.000",
              "end": "2021-02-23 20:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/917049871",
              "course_id ": 55
            },
            {
              "start": "2021-02-26 09:00:00.000",
              "end": "2021-02-26 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/101327008",
              "course_id ": 56
            },
            {
              "start": "2021-02-27 07:00:00.000",
              "end": "2021-02-27 08:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/369318362",
              "course_id ": 56
            },
            {
              "start": "2021-02-27 20:00:00.000",
              "end": "2021-02-27 21:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/69612982",
              "course_id ": 57
            },
            {
              "start": "2021-02-27 08:00:00.000",
              "end": "2021-02-27 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/397551659",
              "course_id ": 57
            },
            {
              "start": "2021-02-25 13:00:00.000",
              "end": "2021-02-25 14:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/66639486",
              "course_id ": 58
            },
            {
              "start": "2021-02-23 10:00:00.000",
              "end": "2021-02-23 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/862813741",
              "course_id ": 58
            },
            {
              "start": "2021-02-24 08:00:00.000",
              "end": "2021-02-24 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/833654676",
              "course_id ": 59
            },
            {
              "start": "2021-02-28 10:00:00.000",
              "end": "2021-02-28 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/194270121",
              "course_id ": 59
            },
            {
              "start": "2021-02-24 11:00:00.000",
              "end": "2021-02-24 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/318768323",
              "course_id ": 60
            },
            {
              "start": "2021-02-24 08:00:00.000",
              "end": "2021-02-24 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/323507773",
              "course_id ": 60
            },
            {
              "start": "2021-02-23 18:00:00.000",
              "end": "2021-02-23 19:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/874400147",
              "course_id ": 61
            },
            {
              "start": "2021-02-27 19:00:00.000",
              "end": "2021-02-27 20:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/161955422",
              "course_id ": 61
            },
            {
              "start": "2021-02-28 20:00:00.000",
              "end": "2021-02-28 21:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/36296949",
              "course_id ": 62
            },
            {
              "start": "2021-02-27 08:00:00.000",
              "end": "2021-02-27 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/984822720",
              "course_id ": 62
            },
            {
              "start": "2021-02-22 15:00:00.000",
              "end": "2021-02-22 16:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/722273460",
              "course_id ": 63
            },
            {
              "start": "2021-02-20 19:00:00.000",
              "end": "2021-02-20 20:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/558703996",
              "course_id ": 63
            },
            {
              "start": "2021-02-24 01:00:00.000",
              "end": "2021-02-24 02:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/741017023",
              "course_id ": 64
            },
            {
              "start": "2021-02-27 07:00:00.000",
              "end": "2021-02-27 08:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/359791250",
              "course_id ": 64
            },
            {
              "start": "2021-02-22 17:00:00.000",
              "end": "2021-02-22 18:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/501788994",
              "course_id ": 65
            },
            {
              "start": "2021-02-27 09:00:00.000",
              "end": "2021-02-27 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/179040233",
              "course_id ": 65
            },
            {
              "start": "2021-02-23 08:00:00.000",
              "end": "2021-02-23 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/451616908",
              "course_id ": 66
            },
            {
              "start": "2021-02-21 07:00:00.000",
              "end": "2021-02-21 08:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/403992402",
              "course_id ": 66
            },
            {
              "start": "2021-02-22 11:00:00.000",
              "end": "2021-02-22 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/754342861",
              "course_id ": 67
            },
            {
              "start": "2021-02-20 17:00:00.000",
              "end": "2021-02-20 18:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/110613489",
              "course_id ": 67
            },
            {
              "start": "2021-02-24 13:00:00.000",
              "end": "2021-02-24 14:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/586104563",
              "course_id ": 68
            },
            {
              "start": "2021-02-21 16:00:00.000",
              "end": "2021-02-21 17:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/486968840",
              "course_id ": 68
            },
            {
              "start": "2021-02-25 09:00:00.000",
              "end": "2021-02-25 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/288997779",
              "course_id ": 69
            },
            {
              "start": "2021-02-23 23:00:00.000",
              "end": "2021-02-24 00:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/242668381",
              "course_id ": 69
            },
            {
              "start": "2021-02-27 15:00:00.000",
              "end": "2021-02-27 16:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/553473414",
              "course_id ": 70
            },
            {
              "start": "2021-02-26 07:00:00.000",
              "end": "2021-02-26 08:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/967344116",
              "course_id ": 70
            },
            {
              "start": "2021-02-24 10:00:00.000",
              "end": "2021-02-24 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/997249084",
              "course_id ": 71
            },
            {
              "start": "2021-02-21 07:00:00.000",
              "end": "2021-02-21 08:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/285828199",
              "course_id ": 71
            },
            {
              "start": "2021-02-27 12:00:00.000",
              "end": "2021-02-27 13:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/272480885",
              "course_id ": 72
            },
            {
              "start": "2021-02-28 11:00:00.000",
              "end": "2021-02-28 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/157936874",
              "course_id ": 72
            },
            {
              "start": "2021-02-28 08:00:00.000",
              "end": "2021-02-28 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/841884268",
              "course_id ": 73
            },
            {
              "start": "2021-02-28 22:00:00.000",
              "end": "2021-02-28 23:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/651000169",
              "course_id ": 73
            },
            {
              "start": "2021-02-21 09:00:00.000",
              "end": "2021-02-21 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/47825506",
              "course_id ": 74
            },
            {
              "start": "2021-02-28 15:00:00.000",
              "end": "2021-02-28 16:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/474759744",
              "course_id ": 74
            },
            {
              "start": "2021-02-28 09:00:00.000",
              "end": "2021-02-28 10:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/297838758",
              "course_id ": 75
            },
            {
              "start": "2021-02-24 07:00:00.000",
              "end": "2021-02-24 08:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/550374910",
              "course_id ": 75
            },
            {
              "start": "2021-02-21 12:00:00.000",
              "end": "2021-02-21 13:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/587659337",
              "course_id ": 76
            },
            {
              "start": "2021-02-22 18:00:00.000",
              "end": "2021-02-22 19:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/500385417",
              "course_id ": 76
            },
            {
              "start": "2021-02-23 08:00:00.000",
              "end": "2021-02-23 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/357424351",
              "course_id ": 77
            },
            {
              "start": "2021-02-23 16:00:00.000",
              "end": "2021-02-23 17:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/953716543",
              "course_id ": 77
            },
            {
              "start": "2021-02-20 20:00:00.000",
              "end": "2021-02-20 21:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/463929959",
              "course_id ": 78
            },
            {
              "start": "2021-02-20 18:00:00.000",
              "end": "2021-02-20 19:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/472982388",
              "course_id ": 78
            },
            {
              "start": "2021-02-26 07:00:00.000",
              "end": "2021-02-26 08:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/719441198",
              "course_id ": 79
            },
            {
              "start": "2021-02-25 08:00:00.000",
              "end": "2021-02-25 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/77249203",
              "course_id ": 79
            },
            {
              "start": "2021-02-28 20:00:00.000",
              "end": "2021-02-28 21:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/141098312",
              "course_id ": 80
            },
            {
              "start": "2021-02-21 08:00:00.000",
              "end": "2021-02-21 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/105025317",
              "course_id ": 80
            },
            {
              "start": "2021-02-22 07:00:00.000",
              "end": "2021-02-22 08:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/973935183",
              "course_id ": 81
            },
            {
              "start": "2021-02-26 21:00:00.000",
              "end": "2021-02-26 22:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/481284298",
              "course_id ": 81
            },
            {
              "start": "2021-02-21 13:00:00.000",
              "end": "2021-02-21 14:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/911566700",
              "course_id ": 82
            },
            {
              "start": "2021-02-21 08:00:00.000",
              "end": "2021-02-21 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/132934972",
              "course_id ": 82
            },
            {
              "start": "2021-02-24 22:00:00.000",
              "end": "2021-02-24 23:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/791821669",
              "course_id ": 83
            },
            {
              "start": "2021-02-24 13:00:00.000",
              "end": "2021-02-24 14:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/950067577",
              "course_id ": 83
            },
            {
              "start": "2021-02-20 19:00:00.000",
              "end": "2021-02-20 20:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/229604187",
              "course_id ": 84
            },
            {
              "start": "2021-02-28 17:00:00.000",
              "end": "2021-02-28 18:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/924694049",
              "course_id ": 84
            },
            {
              "start": "2021-02-21 08:00:00.000",
              "end": "2021-02-21 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/273273607",
              "course_id ": 85
            },
            {
              "start": "2021-02-22 14:00:00.000",
              "end": "2021-02-22 15:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/431642538",
              "course_id ": 85
            },
            {
              "start": "2021-02-20 17:00:00.000",
              "end": "2021-02-20 18:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/505339829",
              "course_id ": 86
            },
            {
              "start": "2021-02-20 18:00:00.000",
              "end": "2021-02-20 19:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/652363242",
              "course_id ": 86
            },
            {
              "start": "2021-02-26 15:00:00.000",
              "end": "2021-02-26 16:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/377647283",
              "course_id ": 87
            },
            {
              "start": "2021-02-21 16:00:00.000",
              "end": "2021-02-21 17:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/16825572",
              "course_id ": 87
            },
            {
              "start": "2021-02-21 23:00:00.000",
              "end": "2021-02-22 00:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/293096309",
              "course_id ": 88
            },
            {
              "start": "2021-02-23 18:00:00.000",
              "end": "2021-02-23 19:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/911850969",
              "course_id ": 88
            },
            {
              "start": "2021-02-26 08:00:00.000",
              "end": "2021-02-26 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/435920370",
              "course_id ": 89
            },
            {
              "start": "2021-02-23 07:00:00.000",
              "end": "2021-02-23 08:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/951938040",
              "course_id ": 89
            },
            {
              "start": "2021-02-27 11:00:00.000",
              "end": "2021-02-27 12:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/176161449",
              "course_id ": 90
            },
            {
              "start": "2021-02-25 08:00:00.000",
              "end": "2021-02-25 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/889529171",
              "course_id ": 90
            },
            {
              "start": "2021-02-21 15:00:00.000",
              "end": "2021-02-21 16:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/301186690",
              "course_id ": 91
            },
            {
              "start": "2021-02-25 07:00:00.000",
              "end": "2021-02-25 08:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/539222947",
              "course_id ": 91
            },
            {
              "start": "2021-02-26 08:00:00.000",
              "end": "2021-02-26 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/652972444",
              "course_id ": 92
            },
            {
              "start": "2021-02-20 17:00:00.000",
              "end": "2021-02-20 18:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/249799672",
              "course_id ": 92
            },
            {
              "start": "2021-02-27 08:00:00.000",
              "end": "2021-02-27 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/714557307",
              "course_id ": 93
            },
            {
              "start": "2021-02-27 10:00:00.000",
              "end": "2021-02-27 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/16871122",
              "course_id ": 93
            },
            {
              "start": "2021-02-24 12:00:00.000",
              "end": "2021-02-24 13:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/204632438",
              "course_id ": 94
            },
            {
              "start": "2021-02-21 10:00:00.000",
              "end": "2021-02-21 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/49333751",
              "course_id ": 94
            },
            {
              "start": "2021-02-24 10:00:00.000",
              "end": "2021-02-24 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/757399758",
              "course_id ": 95
            },
            {
              "start": "2021-02-28 07:00:00.000",
              "end": "2021-02-28 08:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/266456796",
              "course_id ": 95
            },
            {
              "start": "2021-02-20 15:00:00.000",
              "end": "2021-02-20 16:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/432287619",
              "course_id ": 96
            },
            {
              "start": "2021-02-25 08:00:00.000",
              "end": "2021-02-25 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/254923622",
              "course_id ": 96
            },
            {
              "start": "2021-02-22 18:00:00.000",
              "end": "2021-02-22 19:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/795323029",
              "course_id ": 97
            },
            {
              "start": "2021-02-23 15:00:00.000",
              "end": "2021-02-23 16:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/210354345",
              "course_id ": 97
            },
            {
              "start": "2021-02-24 13:00:00.000",
              "end": "2021-02-24 14:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/623753425",
              "course_id ": 97
            },
            {
              "start": "2021-02-24 22:00:00.000",
              "end": "2021-02-24 23:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/505238097",
              "course_id ": 98
            },
            {
              "start": "2021-02-27 08:00:00.000",
              "end": "2021-02-27 09:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/128183289",
              "course_id ": 98
            },
            {
              "start": "2021-02-27 15:00:00.000",
              "end": "2021-02-27 16:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/293511227",
              "course_id ": 99
            },
            {
              "start": "2021-02-22 18:00:00.000",
              "end": "2021-02-22 19:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/474270150",
              "course_id ": 99
            },
            {
              "start": "2021-02-25 10:00:00.000",
              "end": "2021-02-25 11:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/649345497",
              "course_id ": 100
            },
            {
              "start": "2021-02-21 12:00:00.000",
              "end": "2021-02-21 13:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/847174938",
              "course_id ": 100
            },
            {
              "start": "2021-02-24 19:00:00.000",
              "end": "2021-02-24 20:00:00.000",
              "zoomlink": "https://us02web.zoom.us/j/853363678",
              "course_id ": 100
            }
          ]).into("timeslot").returning("id")
        // const users = await trx.insert([{
        //     displayname: "ian",
        //     email: "ian@tecky.io",
        //     password: hash,
        //     height: 161,
        //     weight: 50,
        //     DOB: new Date('August 19, 1975 23:15:30'),
        //     quota: 10,

        //     gender: "M",
        //     role: "student",
        //     goal_id: goal[1],
        //     frequency_id: frequency[1],
        //     focus_id: focus[1],
        // }
        //     , {
        //     displayname: "el",
        //     email: "el@tecky.io",
        //     password: hash,

        //     height: 161,
        //     weight: 50,
        //     DOB: new Date('August 19, 1975 23:15:30'),

        //     quota: 10,

        //     gender: "F",
        //     role: "pt",

        // },

        // {
        //     displayname: "el2",
        //     email: "el2@tecky.io",
        //     password: hash,

        //     height: 161,
        //     weight: 50,
        //     DOB: new Date('August 19, 1975 23:15:30'),

        //     quota: 10,

        //     gender: "F",
        //     role: "pt",

        // },

        // {
        //     displayname: "el3",
        //     email: "el3@tecky.io",
        //     password: hash,

        //     height: 161,
        //     weight: 50,
        //     DOB: new Date('August 19, 1975 23:15:30'),

        //     quota: 10,

        //     gender: "F",
        //     role: "pt",

        // },
        // {
        //     displayname: "el4",
        //     email: "el4@tecky.io",
        //     password: hash,

        //     height: 161,
        //     weight: 50,
        //     DOB: new Date('August 19, 1975 23:15:30'),

        //     quota: 10,

        //     gender: "F",
        //     role: "pt",

        // },
        // {
        //     displayname: "el5",
        //     email: "el5@tecky.io",
        //     password: hash,

        //     height: 161,
        //     weight: 50,
        //     DOB: new Date('August 19, 1975 23:15:30'),

        //     quota: 10,

        //     gender: "F",
        //     role: "pt",
        //     goal_id: goal[1],
        //     frequency_id: frequency[1],
        //     focus_id: focus[1],
        // }, {
        //     displayname: "el6",
        //     email: "el6@tecky.io",
        //     password: hash,

        //     height: 161,
        //     weight: 50,
        //     DOB: new Date('August 19, 1975 23:15:30'),

        //     quota: 10,

        //     gender: "F",
        //     role: "pt",
        //     goal_id: goal[1],
        //     frequency_id: frequency[1],
        //     focus_id: focus[1],
        // }, {
        //     displayname: "el7",
        //     email: "el7@tecky.io",
        //     password: hash,

        //     height: 161,
        //     weight: 50,
        //     DOB: new Date('August 19, 1975 23:15:30'),

        //     quota: 10,

        //     gender: "F",
        //     role: "pt",
        //     goal_id: goal[1],
        //     frequency_id: frequency[1],
        //     focus_id: focus[1],
        // }, {
        //     displayname: "el8",
        //     email: "el8@tecky.io",
        //     password: hash,

        //     height: 161,
        //     weight: 50,
        //     DOB: new Date('August 19, 1975 23:15:30'),

        //     quota: 10,

        //     gender: "F",
        //     role: "pt",
        //     goal_id: goal[1],
        //     frequency_id: frequency[1],
        //     focus_id: focus[1],
        // }
        // ]).into('user').returning('id');




        // const pts = await trx.insert([
        //     {
        //         qualification: JSON.stringify(["a", "b", "c"]),
        //         speciality: JSON.stringify(["d", "e", "f"]),
        //         intro: "elelelelelel",

        //         user_id: users[1]
        //     },
        //     {
        //         qualification: JSON.stringify(["a", "b", "c"]),
        //         speciality: JSON.stringify(["d", "e", "f"]),
        //         intro: "elelelelelel",

        //         user_id: users[2]
        //     },
        //     {
        //         qualification: JSON.stringify(["a", "b", "c"]),
        //         speciality: JSON.stringify(["d", "e", "f"]),
        //         intro: "elelelelelel",

        //         user_id: users[3]
        //     },
        //     {
        //         qualification: JSON.stringify(["a", "b", "c"]),
        //         speciality: JSON.stringify(["d", "e", "f"]),
        //         intro: "elelelelelel",

        //         user_id: users[4]
        //     },
        //     {
        //         qualification: JSON.stringify(["a", "b", "c"]),
        //         speciality: JSON.stringify(["d", "e", "f"]),
        //         intro: "elelelelelel",

        //         user_id: users[5]
        //     },
        //     {
        //         qualification: JSON.stringify(["a", "b", "c"]),
        //         speciality: JSON.stringify(["d", "e", "f"]),
        //         intro: "elelelelelel",

        //         user_id: users[6]
        //     },
        //     {
        //         qualification: JSON.stringify(["a", "b", "c"]),
        //         speciality: JSON.stringify(["d", "e", "f"]),
        //         intro: "elelelelelel",

        //         user_id: users[7]
        //     }



        // ]).into('pt').returning('id');

        // console.log(pts[1])

        //     let courses: {}[] = []
        //     courses.push({
        //         pt_id: 1, course_name: `a+`, detail:
        //             `+cat1+2
        //  First of all, std::vector, cv::Mat, and other data structures used by the functions and methods have destructors that deallocate the underlying memory buffers when needed. This means that the destructors do not always deallocate the buffers as in case of Mat. They take into account possible data sharing. A destructor decrements the reference counter associated with the matrix data buffer. The buffer is deallocated if and only if the reference counter reaches zero, that is, when no other structures refer to the same buffer. Similarly, when a Mat instance is copied, no actual data is really copied. Instead, the reference counter is incremented to memorize that there is another owner of the same data. There is also the Mat::clone method that creates a full copy of the matrix data. See the example below`,
        //         category_id1: 1,
        //         category_id2: 2
        //     })

        //     for (let i = 1; i < 8; i++) {
        //         courses.push(
        //             {
        //                 pt_id: 2, course_name: `a+${i}`, detail:
        //                     `${i}+cat1+2
        //          First of all, std::vector, cv::Mat, and other data structures used by the functions and methods have destructors that deallocate the underlying memory buffers when needed. This means that the destructors do not always deallocate the buffers as in case of Mat. They take into account possible data sharing. A destructor decrements the reference counter associated with the matrix data buffer. The buffer is deallocated if and only if the reference counter reaches zero, that is, when no other structures refer to the same buffer. Similarly, when a Mat instance is copied, no actual data is really copied. Instead, the reference counter is incremented to memorize that there is another owner of the same data. There is also the Mat::clone method that creates a full copy of the matrix data. See the example below`,
        //                 category_id1: 1,
        //                 category_id2: 2
        //             })
        //     }



        //     for (let i = 1; i < 8; i++) {
        //         courses.push({
        //             pt_id: 3, course_name: `a+${i}`, detail:
        //                 `${i}+
        //         First of all, std::vector, cv::Mat, and other data structures used by the functions and methods have destructors that deallocate the underlying memory buffers when needed. This means that the destructors do not always deallocate the buffers as in case of Mat. They take into account possible data sharing. A destructor decrements the reference counter associated with the matrix data buffer. The buffer is deallocated if and only if the reference counter reaches zero, that is, when no other structures refer to the same buffer. Similarly, when a Mat instance is copied, no actual data is really copied. Instead, the reference counter is incremented to memorize that there is another owner of the same data. There is also the Mat::clone method that creates a full copy of the matrix data. See the example below`,
        //             category_id1: 1,
        //             category_id2: 2,
        //         })
        //     }

        //     for (let i = 1; i < 8; i++) {
        //         courses.push({
        //             pt_id: 4, course_name: `a+${i}`, detail:
        //                 `${i}+cat5+6
        //         First of all, std::vector, cv::Mat, and other data structures used by the functions and methods have destructors that deallocate the underlying memory buffers when needed. This means that the destructors do not always deallocate the buffers as in case of Mat. They take into account possible data sharing. A destructor decrements the reference counter associated with the matrix data buffer. The buffer is deallocated if and only if the reference counter reaches zero, that is, when no other structures refer to the same buffer. Similarly, when a Mat instance is copied, no actual data is really copied. Instead, the reference counter is incremented to memorize that there is another owner of the same data. There is also the Mat::clone method that creates a full copy of the matrix data. See the example below`,
        //             category_id1: 1,
        //             category_id2: 2,
        //         })
        //     }

        //     for (let i = 1; i < 8; i++) {
        //         courses.push({
        //             pt_id: 5, course_name: `a+${i}`, detail:
        //                 `${i}+cat7+8
        //         First of all, std::vector, cv::Mat, and other data structures used by the functions and methods have destructors that deallocate the underlying memory buffers when needed. This means that the destructors do not always deallocate the buffers as in case of Mat. They take into account possible data sharing. A destructor decrements the reference counter associated with the matrix data buffer. The buffer is deallocated if and only if the reference counter reaches zero, that is, when no other structures refer to the same buffer. Similarly, when a Mat instance is copied, no actual data is really copied. Instead, the reference counter is incremented to memorize that there is another owner of the same data. There is also the Mat::clone method that creates a full copy of the matrix data. See the example below`,
        //             category_id1: 1,
        //             category_id2: 2,
        //         })
        //     }

        //     for (let i = 1; i < 8; i++) {
        //         courses.push({
        //             pt_id: 6, course_name: `a+${i}`, detail:
        //                 `${i}+cat6+7
        //         First of all, std::vector, cv::Mat, and other data structures used by the functions and methods have destructors that deallocate the underlying memory buffers when needed. This means that the destructors do not always deallocate the buffers as in case of Mat. They take into account possible data sharing. A destructor decrements the reference counter associated with the matrix data buffer. The buffer is deallocated if and only if the reference counter reaches zero, that is, when no other structures refer to the same buffer. Similarly, when a Mat instance is copied, no actual data is really copied. Instead, the reference counter is incremented to memorize that there is another owner of the same data. There is also the Mat::clone method that creates a full copy of the matrix data. See the example below`,
        //             category_id1: 1,
        //             category_id2: 3,
        //         })

        //     }
        // console.log(courses)



        //     let course = await trx.insert(courses).into("course").returning("id")

        // let files = await trx.insert([
        //     { filepath: "def", pt_id: 1, isVideo: true },
        //     { filepath: "abc", pt_id: 1 },
        //     { filepath: "abc", pt_id: 1 },
        //     { filepath: "abc", pt_id: 1 },
        //     { filepath: "def", pt_id: 2, isVideo: true },
        //     { filepath: "abc", pt_id: 2 },
        //     { filepath: "abc", pt_id: 2 },
        //     { filepath: "abc", pt_id: 2 },
        //     { filepath: "def", pt_id: 3, isVideo: true },

        // ]).into("pt_file").returning("id")





        // let rating = await trx.insert([
        //     { pt_id: 1, user_id: 2, content: "xxx", score: 5 },
        //     { pt_id: 1, user_id: 2, content: "xxx", score: 2 },
        //     { pt_id: 2, user_id: 2, content: "xxx", score: 5 }
        // ]).into("rating").returning("id")

        // const course = await trx.insert([
        //     {
        //         pt_id: pts[1],
        //         course_name: "abc",
        //         detail: "xxx",
        //         category_id1: 3,
        //         category_id2: 6
        //     },
        //     {
        //         pt_id: pts[1],
        //         course_name: "abc",
        //         detail: "xxx",
        //         category_id1: 3,
        //         category_id2: 6
        //     },
        //     {
        //         pt_id: pts[2],
        //         course_name: "abc",
        //         detail: "xxx",
        //         category_id1: 3,
        //         category_id2: 6
        //     }
        // ]).into("course").returning("id")

        // const timeslot = await trx.insert([
        //     {
        //         course_id: course[1],
        //         start: new Date(),
        //         end: new Date(),
        //         zoomlink: "abc"
        //     }
        // ]).into("timeslot").returning("id")

        // const registered_timeslot = await trx.insert([{
        //     timeslot_id: timeslot[1],
        //     user_id: users[1],
        // },
        // {
        //     timeslot_id: timeslot[1],
        //     user_id: users[1],
        // },
        // {
        //     timeslot_id: timeslot[1],
        //     user_id: users[2],
        // },
        // ]).into("registered_timeslot").returning("id")

        // const notification = await trx.insert([
        //     {
        //         content: "ttt",
        //         user_id: 2,
        //         is_read: false
        //     },
        //     {
        //         content: "i wanna sleep",
        //         user_id: 2,
        //         is_read: false
        //     }
        // ]).into("notification")

    }


    )
}





