import Knex from 'knex';


export class CommonService {

    constructor(private knex: Knex) { }

    public getptProfileInfo = async (ptid: number) => {


        let ptProfileInfo = (await this.knex
            .select(
                "pt.id",
                "displayname",
                "height",
                "gender",
                "qualification",
                "speciality",
                "intro"
            )
            .from("pt")
            .innerJoin("user", "user.id", "=", "pt.user_id")
            .where("pt.id", ptid))[0]


        // let intro:string;

        let pt_id = ptProfileInfo.id

        let ptPhoto = await this.knex
            .select("*")
            .from("pt_file")
            .where("pt_id", pt_id);



        let rating = await this.knex
            .select("pt_id")
            .count("*")
            .avg("score")
            .from("rating")
            .where("pt_id", pt_id)
            .groupBy("pt_id");
            
            console.log("no_of_ratings",rating)





        let ratingNo = 0;
        let avgScore = 0;


        if (rating.length>0 && rating[0].count) {
            ratingNo = parseInt(rating[0].count);
        } 




        if (rating.length>0 && rating[0].avg) {
            avgScore = parseInt(rating[0].avg)
        } 

     
            let photo: string[] = [];
            let video;
          

            for (let k = 0; k < ptPhoto.length; k++) {
                if (ptProfileInfo.id == ptPhoto[k].pt_id) {
                    if (ptPhoto[k].isVideo == true) {
                        video = ptPhoto[k].filepath;
                    } else {
                        photo.push(ptPhoto[k].filepath);
                    }
                }
            }
            

        
            ptProfileInfo.photo = photo;
            ptProfileInfo.video = video;
            ptProfileInfo.avgScore = avgScore;
            ptProfileInfo.ratingNo = ratingNo;

        return { result: ptProfileInfo };
    };



    public getRating = async (
        pt_id: number,

    ) => {

        let ptComment = await this.knex.select(
            "rating.id",
            "rating.content",
            "rating.score",
            "rating.created_at",
            "user.id",
            "user.displayname"
        )
            .from("rating")
            .innerJoin("user", "rating.user_id", "=", "user.id")
            .innerJoin("pt", "rating.pt_id", "=", "pt.id")
            .where("rating.pt_id", pt_id)
            .orderBy("rating.id");



        console.log(ptComment)

        return { result: ptComment };
    };


    public getCourse = async (pt_id: number | null, user_id: number | null = null) => {
        // let timeslots = await this.knex.select("timeslot.id","course_name","category_id1","category_id2","to_char(start,'HH24:MI') as startTime",`to_char("end",'HH24:MI') as endTime`,"(to_char(start,'YYYY/MM/DD')) as date")
        // .from("timeslot")
        // .leftJoin("course","timeslot.course_id","=","course.id")
        // .where("course.pt_id",pt_id)

        // let timeslots = (await this.knex.raw(`select timeslot.id,course_name,(select category from category inner join course on course.category_id1 = category.id
        //   inner join timeslot on timeslot.course_id = course.id) as category1,
        //   (select category from category inner join course on course.category_id2 = category.id
        //     inner join timeslot on timeslot.course_id = course.id) as category2,to_char(start,'HH24:MI') as startTime,to_char("end",'HH24:MI') as endTime
        // , (to_char(start,'YYYY/MM/DD')) as date from timeslot left join course on timeslot.course_id = course.id where course.pt_id = ${pt_id}
        // `)).rows

        let timeslots;

        if (pt_id) {
            timeslots = (await this.knex.raw(`select distinct timeslot.id,course_name,detail,category_id1 as category1, category_id2 as category2 ,to_char(start,'HH24:MI') as startTime,to_char("end",'HH24:MI') as endTime
            , (to_char(start,'YYYY/MM/DD')) as date, seat, zoomlink from timeslot left join course on timeslot.course_id = course.id where course.pt_id = ${pt_id} order by timeslot.id DESC
                `)).rows
        }

        // console.log("log rows",timeslots )

        if (user_id) {
            timeslots = (await this.knex.raw(`select distinct timeslot.id,course_name,detail,category_id1 as category1, category_id2 as category2 ,to_char(start,'HH24:MI') as startTime,to_char("end",'HH24:MI') as endTime
            ,(to_char(start,'YYYY/MM/DD')) as date, seat, zoomlink from timeslot inner join course on timeslot.course_id = course.id inner join registered_timeslot on registered_timeslot.timeslot_id = timeslot.id where registered_timeslot.user_id = ${user_id} order by timeslot.id DESC
                `)).rows

            // console.log("timeslot", user_id, timeslots)
        }


        let timeslots_id: {}[] = []

        timeslots.forEach(timeslot => timeslots_id.push(timeslot.id))


        let participants = await this.knex.select("timeslot.id as timeslotId", "displayname as name", "gender", "height", "weight", "frequency", "focus", "goal").from("timeslot")
            .leftJoin("registered_timeslot", "registered_timeslot.timeslot_id", "timeslot.id")
            .innerJoin("user", "user.id", "registered_timeslot.user_id")
            .leftJoin("frequency", "frequency.id", "user.frequency_id")
            .leftJoin("focus", "focus.id", "user.focus_id")
            .leftJoin("goal", "goal.id", "user.goal_id")
            .whereIn("timeslot.id", timeslots_id)




        let categories = await this.knex.select("*").from("category")

        for (const timeslot of timeslots) {
            let user: any = []
            for (const participant of participants) {
                if (timeslot.id == participant.timeslotId) {
                    user.push(participant)
                }
            }
            for (const category of categories) {

                if (category.id == timeslot.category1)
                    timeslot.category1 = category.category

                if (category.id == timeslot.category2) {
                    timeslot.category2 = category.category
                }
            }

            timeslot.participant = user
        }


        return timeslots
    }

    public getPtId = async (user_id: number) => {

        let pt_id = await this.knex.select("pt.id").from("pt").where("user_id", user_id)
        return pt_id
    }

    public getSearchCard = async(searchTerm:string)=>{
        let ptInfo = await this.knex.select(
            "pt.id",
            "displayname",
            "height",
            "gender",
            "qualification",
            "speciality",
            "intro")
            .from("pt")
            .innerJoin("user", "user.id", "=", "pt.user_id")
            .orderBy("pt.id", "ASC")
            .where("displayname","like",`%${searchTerm}%`)




            console.log(ptInfo, "get search ptinfo")
        let pt_id: number[] = []

        for (const info of ptInfo) {
            pt_id.push(info.id)
        }

  
        console.log(ptInfo, "ptId array")

        let ptPhoto = await this.knex.select("*").from("pt_file").whereIn('pt_id', pt_id);

        console.log(ptPhoto, "ptPhoto array")

        let categories = await this.knex.select("category_id1", "category_id2", "pt_id").from("course").whereIn('pt_id', pt_id)
        console.log(categories, `await this.knex.select("category_id1", "category_id2", "pt_id").from("course").whereIn('pt_id', pt_id)`)

        let rating = await this.knex.select("pt_id").count("*").avg('score').from("rating").whereIn('pt_id', pt_id).groupBy("pt_id")
        console.log("score and number of rating", rating)


        //change to get from db

        
        function switched(cat_id, category: (string)[]) {
            if (cat_id == 1) {
                category.push("Stretching")
            } else if (cat_id == 2) {
                category.push("Yoga")
            }
            else if (cat_id == 3) {
                category.push("Boxing")
            }
            else if (cat_id == 4) {
                category.push("Core Fusion")
            }
            else if (cat_id == 5) {
                category.push("Functional Training")
            }
            else if (cat_id == 6) {
                category.push("Keep Fit")
            }
            else if (cat_id == 7) {
                category.push("Body-Building")
            }
            else if (cat_id == 8) {
                category.push("Cardio")
            }
        }


        

        for (let i = 0; i < ptInfo.length; i++) {

            let photo: string[] = []
            let video;
            let category: string[] = []
            let ratingNo;
            let avgScore;



            for (let k = 0; k < ptPhoto.length; k++) {

                if (ptInfo[i].id == ptPhoto[k].pt_id) {
                    if (ptPhoto[k].isVideo == true) {
                        video = ptPhoto[k].filepath

                    } else {
                        photo.push(ptPhoto[k].filepath)
                    }
                }

            }


            if(categories.length>0){
                for (let h = 0; h < categories.length; h++) {
                    if (ptInfo[i].id == categories[h].pt_id) {
    
                        switched(categories[h].category_id1, category)
                        switched(categories[h].category_id2, category)
                    }
                }
            }
            
            console.log("first log category", category)

            for (let j = 0; j < rating.length; j++) {
                if (ptInfo[i].id == rating[j].pt_id) {
                    if (rating[j].avg) {
                        avgScore = rating[j].avg
                    } else {
                        avgScore = 0
                    }

                    if (rating[j].count) {
                        ratingNo = rating[j].count
                    } else {
                        ratingNo = 0
                    }

                }
            }
            console.log("first log category", category)
            let categorySet = new Set(category)

            ptInfo[i].categories = Array.from(categorySet);
            ptInfo[i].photo = photo;
            ptInfo[i].video = video;
            ptInfo[i].avgScore = parseInt(avgScore);
            ptInfo[i].ratingNo = parseInt(ratingNo);
        }

 
        console.log(ptInfo,"ptInfo")
        return ptInfo
        //count is page number

    }


}