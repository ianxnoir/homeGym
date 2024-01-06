import Knex from 'knex';
import bcrypt from 'bcryptjs'
import { fromJSON } from 'postcss';


interface Mapping {
  [propertyName: string]: string;
}

export class LoginService {

  private static SALT_ROUNDS = 10
  constructor(private knex: Knex, private sse_std_register: any,
    private sse_pt_register: any
  ) { }


  getUserById = async (id: number) => {

    // return (await this.knex.select("user.id", "user.displayname", "user.email", "user.role", "user.height", "user.weight", "user.gender", "goal.goal","frequency.frequency","focus.focus", "pt.id as pt_id")
    // .from('user')
    // .leftJoin("goal", "user.goal_id", "=", "goal.id")
    // .leftJoin("focus", "user.focus_id", "=", "focus.id")
    // .leftJoin("frequency", "user.frequency_id", "=", "frequency.id")
    // .leftOuterJoin("pt","user.id","=","pt.user_id")
    // .where('user.id',id));

    // let user = await this.knex.select("id","displayname","email","role","height","weight","gender","goal_id", "frequency_id","focus_id").from('user') .where('user.id',"=",id);
    // return user


    let user = await this.knex.select("user.id", "user.displayname", "user.email", "user.role", "user.height", "user.weight", "user.gender", "user.goal_id", "user.frequency_id", "user.focus_id", "pt.id as pt_id").from('user').leftOuterJoin("pt", "user.id", "=", "pt.user_id").where('user.id', "=", id);
    return user

  }

  getUserByEmail = async (email: string) => {
    return (await this.knex.select("*").from('user').where('email', email));
    
  }

  private calculateAge = (birthday: Date) => {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    let result = Math.abs(ageDate.getUTCFullYear() - 1970)
    return result;
  }

  addUser = async (userinfo: {
    displayname: string,
    email: string,
    password: string,
    height: number,
    weight: number,
    DOB: Date,
    gender: string,
    role: string,
    goal_id: number,
    frequency_id: number,
    focus_id: number
  }) => {
    let userid: { id: number }[] = (await this.knex.insert(userinfo).into("user").returning("id"))
    userinfo['userid'] = userid[0]

    try {
      let result = (await this.knex.raw(`
        SELECT * FROM "user" 
        INNER JOIN goal ON "user".goal_id = goal.id
        INNER JOIN frequency ON "user".frequency_id = frequency.id
        INNER JOIN focus ON "user".focus_id = focus.id
        WHERE "user".id = ${userid[0]};
      `)).rows[0]
      result['age'] = this.calculateAge(new Date(result.DOB));
      delete result.id
      delete result.DOB
      delete result.password
      delete result.quota
      delete result.role
      delete result.goal_id
      delete result.frequency_id
      delete result.focus_id
      delete result.updated_at
      if (result.gender == "M" || result.gender == "m" || result.gender == "male") {
        result.gender = "Male"
      } else if (result.gender == "F" || result.gender == "f" || result.gender == "female") {
        result.gender = "Female"
      }
      await this.sse_std_register.send(result)
      console.log(result)
      console.log("The above json has been sent through SSE:")
    } catch (e) {
      console.log(e)
    }




    return (userid)
  }

  addPT = async (displayname: string
    , email: string,
    password: string,
    height: string,
    gender: string,
    qualification: string[],
    speciality: string[],
    intro: string,
    files: Mapping[] | null,
  ) => {

    console.log("In add pt service", qualification, speciality)
    let heights = parseInt(height)
    let josn = { displayname, email, gender, height: heights, password, role: "pt", qualification, speciality, intro }
    let res1 = (await this.knex.insert({ displayname, email, gender, height: heights, password, role: "pt" }).into("user").returning("id"))
    let res2 = (await this.knex.insert({ qualification, speciality, intro, user_id: res1[0] }).into("pt").returning("id"))
    josn['pt_id'] = res2[0]

    try {
      await this.sse_pt_register.send(josn)
    } catch (e) {
      console.log(e)
    }

    let filePath: {}[] = []



    let res3;
    // if (filePath.length != 0) {
    //   res3 = (await this.knex.insert(filePath).into("pt_file").returning("id"))
    //   return res3.length
    // } else {
    //   return res2.length
    // }

    if (files && files.length > 0) {
      for (const file of files!) {
        console.log(files)
        if (file.mimetype.includes("octet-stream")) {
          filePath.push({ filepath: file.key, pt_id: res2[0] })
        } else {
          filePath.push({ filepath: file.key, isVideo: true, pt_id: res2[0] })
        }
      }
      res3 = (await this.knex.insert(filePath).into("pt_file").returning("id"))

    }
    // sharp mediainfo 

    return res2
  }



  public getPasswordbyID = async (id: number) => {
    let password = await this.knex.select('password').from("user").where("id", id)
    console.log("password", password)
    return password
  }



  public resetPassword = async (id: number, newPassword: string) => {

    let result = await this.knex('user')
      .where({ id: id })
      .update({ password: newPassword }).returning("id")
    return (result.length)
  }




  public changeInfo = async (
    newHeight: number,
    newWeight: number,
    newUsername: string,
    newGoal: number,
    newFrequency: number,
    newFocus: number,
    id: number) => {
    let result = await this.knex('user')
      .where({ id: id })
      .update({
        height: newHeight,
        weight: newWeight,
        displayname: newUsername,
        goal_id: newGoal,
        frequency_id: newFrequency,
        focus_id: newFocus
      }).returning("*")

    return (result.length)
  }


  public async hashPassword(plainPassword: string) {
    const hash = await bcrypt.hash(plainPassword, LoginService.SALT_ROUNDS);
    return hash;
  }
  public async checkPassword(plainPassword: string, hashPassword: string) {
    const match = await bcrypt.compare(plainPassword, hashPassword);
    return match;
  }
}



// # image: node:latest

// # stages:
// #   - server-testing
// #   # - react-testing
// #   - server-build
// #   - react-build
// #   - server-deploy
// #   - react-deploy

// # variables:
// #   POSTGRES_DB: gym
// #   POSTGRES_USER: postgres
// #   POSTGRES_PASSWORD: postgres
// #   POSTGRES_HOST: postgres
// #   REPOSITORY_URL: ellielam/deployment
// #   IMAGE_TAG: latest

// # server-testing:
// #   services:
// #     - postgres:latest

// #   before_script:
// #     - cd backend
// #     - yarn install
// #     - yarn knex migrate:latest --env testing
// #   stage: server-testing
// #   script:
// #     - yarn jest

// # # react-testing:
// # #   before_script:
// # #     - cd react
// # #     - yarn install
// # #   stage: react-testing
// # #   script:
// # #     - CI=true yarn test


// # server-build:
// #   image: "docker:18.09"
// #   stage: server-build
// #   services:
// #     - docker:18.09.7-dind
// #   before_script:
// #     - docker login -u ellielam -p 69696969@
// #   script:
// #     - cd server/
// #     - docker build  -t deployment:$IMAGE_TAG -f Dockerfile .
// #     - docker tag deployment:$IMAGE_TAG $REPOSITORY_URL:$IMAGE_TAG
// #     - docker push $REPOSITORY_URL:$IMAGE_TAG

// # react-build:
// #   stage: react-build
// #   before_script:
// #     - cd react/
// #   script:
// #     - yarn install
// #     - yarn build
// #   artifacts:
// #     paths:
// #       - react/build

// # server-deploy:
// #   before_script:
// #     - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'
// #     - eval $(ssh-agent -s)
// #     - echo "$SSH_PRIVATE_KEY" | tr -d '\r' > private.pem
// #     - chmod 400 private.pem
// #     - ssh-add private.pem > /dev/null
// #     - mkdir -p ~/.ssh
// #     - chmod 700 ~/.ssh
// #     - ssh-keyscan -H  ellie-lam.com > ~/.ssh/known_hosts
// #     - chmod 644 ~/.ssh/known_hosts
// #   stage: server-deploy
// #   only:
// #     - production
// #   script:
// #     - ssh ubuntu@ellie-lam.com 
// #         "docker login -u ellielam -p 69696969@;
// #           docker pull $REPOSITORY_URL:$IMAGE_TAG;
// #           docker stop deployment || :;
// #           docker rm deployment || :;
// #           docker run -d -it --name=deployment --network host $REPOSITORY_URL:$IMAGE_TAG;"


// # react-deploy:
// #   image: "python:3.6"
// #   stage: react-deploy
// #   before_script:
// #     - pip install awscli
// #   dependencies:
// #     - react-build
// #   only:
// #     - production
// #   script:
// #     - aws s3 sync react/build s3://gympj --delete
// #     - aws cloudfront create-invalidation --distribution-id E1H963L55U8MCQ --paths "/*"



// let timeslot;
// let timeslotId = await this.knex.select("id").from("timeslot")


// expect outcome [{id:1},{id:2},{id:3}]

// let ids = []
// for(const id of timeslotId ){
//   ids.push(id.id)
// }
// expect ids = [1,2,3,4]
// timeslot.username = 
// await this.knex.select("displayname").from("user").join...... innerjoin("timeslot").whereIn(timeslot.id,ids)


// expect[{displayname:"a"},{displayname:"c"}]
// timeslot.ptname =  await this.knex.select("displayname").from("user").join("pt"),join.....innerjoin("timeslot").whereIn(timeslot.id,ids)