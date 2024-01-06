import pg from 'pg'
const user_json = require('./user.json')


let calculateAge = (birthday: Date) => {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    let result = Math.abs(ageDate.getUTCFullYear() - 1970)
    return result;
}

for (let i = 50; i < user_json.user.length; i++) {
    delete user_json.user[i].role
    delete user_json.user[i].password
    delete user_json.user[i].quota

    if (user_json.user[i].goal_id == 1) {
        user_json.user[i]['goal'] = "Lose weight"
    } else if (user_json.user[i].goal_id == 2) {
        user_json.user[i]['goal'] = "Stay healthy"
    } else if (user_json.user[i].goal_id == 3) {
        user_json.user[i]['goal'] = "Build muscles"
    }

    if (user_json.user[i].focus_id == 1) {
        user_json.user[i]['focus'] = "Stretching"
    } else if (user_json.user[i].focus_id == 2) {
        user_json.user[i]['focus'] = "Weight gain training"
    } else if (user_json.user[i].focus_id == 3) {
        user_json.user[i]['focus'] = "Keep fit"
    }

    if (user_json.user[i].frequency_id == 1) {
        user_json.user[i]['frequency'] = "Just start exercising"
    } else if (user_json.user[i].frequency_id == 2) {
        user_json.user[i]['frequency'] = "2-3 times a week"
    } else if (user_json.user[i].frequency_id == 3) {
        user_json.user[i]['frequency'] = "Over 3 times a week"
    }

    if(user_json.user[i].gender == "M"){
        user_json.user[i].gender = "Male"
    }else{
        user_json.user[i].gender = "Female"
    }

    delete user_json.user[i].goal_id
    delete user_json.user[i].frequency_id
    delete user_json.user[i].focus_id

    user_json.user[i]['age'] = calculateAge(new Date(user_json.user[i].DOB))
    delete user_json.user[i].DOB

    let randMiliSec = Date.now() - Math.floor(Math.random() * 1209600 * 1000) // random time in the pass two weeks
    let date = new Date(randMiliSec)
    user_json.user[i]['created_at'] = date
}

let myData = user_json.user.slice(50, user_json.user.length)
const client = new pg.Client({
    database:"dw_homegym",
    host:"localhost",
    port:5434,
    user:"abc",
    password:"123"
})

async function seed(){
    await client.connect()
    for(const data of myData){
        await client.query(`
            INSERT INTO staging_student (displayname, email, height, weight, gender, created_at, goal, frequency, focus, age)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
        `, [data.displayname, data.email, data.height, data.weight, data.gender, data.created_at, data.goal, data.frequency, data.focus, data.age])
    }
}

seed()