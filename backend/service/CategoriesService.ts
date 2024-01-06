import Knex from 'knex';
import bcrypt from 'bcryptjs'
import { DH_NOT_SUITABLE_GENERATOR } from 'constants';

export class CategoryService {

    private static SALT_ROUNDS = 10
    constructor(private knex: Knex) { }


    getCards = async (page: number, category: number) => {
        console.log(page, category)
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
            .innerJoin("course", "course.pt_id", "=", "pt.id")
            .where({ category_id1: category })
            .orWhere({ category_id2: category })
            .orderBy("pt.id", "ASC")
            .distinctOn("pt.id")
            .limit(5)
            .offset((page - 1) * 5)




        let pt_id: number[] = []

        for (const info of ptInfo) {
            pt_id.push(info.id)
        }

        let countPage = (await this.knex.select("*").from("course")
            .where({ category_id1: category })
            .orWhere({ category_id2: category })
            .distinctOn("pt_id")).length

       

        let ptPhoto = await this.knex.select("*").from("pt_file").whereIn('pt_id', pt_id);



        let categories = await this.knex.select("category_id1", "category_id2", "pt_id").from("course").whereIn('pt_id', pt_id)

        let rating = await this.knex.select("pt_id").count("*").avg('score').from("rating").whereIn('pt_id', pt_id).groupBy("pt_id")

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



            for (let h = 0; h < categories.length; h++) {
                if (ptInfo[i].id == categories[h].pt_id) {

                    switched(categories[h].category_id1, category)
                    switched(categories[h].category_id2, category)
                }
            }


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

            let categorySet = new Set(category)

            ptInfo[i].categories = Array.from(categorySet);
            ptInfo[i].photo = photo;
            ptInfo[i].video = video;
            ptInfo[i].avgScore = parseInt(avgScore);
            ptInfo[i].ratingNo = parseInt(ratingNo);
        }

 

        return { result: ptInfo, count: countPage/5}
        //count is page number

    }


    getCats = async()=>
    {
        let result = await this.knex.select("*").from("category")
        return result
    }

}



//         .orderBy('pt.id', 'desc')   
//         .offset(page-1)
//         .limit(5)


// "pt.id", 
//         "displayname", 
//         "height",
//         "gender",
//         "qualification",
//         "speciality",
//         "intro"








                    // category.push(categories[h][1])



                    // switch (categories[h][0]) {

                    //     case 1:
                    //         category.push("Stretching")
                    //         break;

                    //     case 2:
                    //         category.push("Yoga")
                    //         break;

                    //     case 3:
                    //         category.push("Boxing")
                    //         break

                    //     case 4:
                    //         category.push("Core Fusion")
                    //         break;

                    //     case 5:
                    //         category.push("Functional Training")
                    //         break;

                    //     case 6:
                    //         category.push("Keep Fit")
                    //         break;

                    //     case 7:
                    //         category.push("Body-Building")
                    //         break;
                    //     case 8:
                    //         category.push("Cardio")
                    //         break;
                    // }


                    // switch (categories[h][1]) {

                    //     case 1:
                    //         category.push("Stretching")
                    //         break;

                    //     case 2:
                    //         category.push("Yoga")
                    //         break;

                    //     case 3:
                    //         category.push("Boxing")
                    //         break

                    //     case 4:
                    //         category.push("Core Fusion")
                    //         break;

                    //     case 5:
                    //         category.push("Functional Training")
                    //         break;

                    //     case 6:
                    //         category.push("Keep Fit")
                    //         break;

                    //     case 7:
                    //         category.push("Body-Building")
                    //         break;
                    //     case 8:
                    //         category.push("Cardio")
                    //         break;
                    // }
