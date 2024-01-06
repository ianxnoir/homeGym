import Knex from "knex";
import { fromJSON } from "postcss";
import { PTForm } from '../../my-app/src/type';

interface Mapping {
  [propertyName: string]: string;
}

export interface User {
  id: number,
  email: string,
  password: string
  username: string
  userIcon: string,
  admin: number,
  created_at: string


}

export class PtService {
  constructor(private knex: Knex) { }


  regCourse = async (course: {}, timeslots) => {

    console.log(course, timeslots, "regcourse")
    let course_id = (await this.knex.insert(course).into("course").returning("id"))[0]

    console.log(course_id, "course_id")
    let dbTimeslot: {}[] = []
    for (const timeslot of timeslots) {
      let newTimeslot = {
        course_id,
        start: timeslot.date + " " + timeslot.starttime,
        end: timeslot.date + " " + timeslot.endtime,
        zoomlink: timeslot.zoomlink
      }
      dbTimeslot.push(newTimeslot)
    }

    console.log(dbTimeslot, "db timslot")

    if (!course_id) {
      return
    }

    const timeslot_id = (await this.knex.insert(dbTimeslot).into("timeslot").returning("id")) as number[]
    return timeslot_id

  }



  public getPtId = async (user_id: number) => {

    let pt_id = (await this.knex.select("pt.id").from("pt").where("user_id", user_id))
    return pt_id
  }


  public cancelCoursebyPT = async (timeslot_id) => {
    // const hasKicked = (kickedUserId: number[] | null) => kickedUserId && kickedUserId.length >= 0
    
      let kickedUserId: number[] | null = await this.knex("registered_timeslot").del().where({ timeslot_id }).returning("id")

      if (Array.isArray(kickedUserId)) {
        let cancelCourseId: number[] = (await this.knex("timeslot").del().where({ id: timeslot_id }).returning("course_id"))
        if (cancelCourseId.length == 1) {
          console.log(cancelCourseId, "cancel this course")
          let cancelledCourseId = await this.knex("course").del().where({ id: cancelCourseId[0] }).returning("id")
          console.log(cancelledCourseId, "cancelled course")
          return cancelledCourseId
        } else {
          return cancelCourseId
        }
      }
      return 
    } 
    
 

  

  public changePTInfo = async (
    qualification: string[],
    speciality: string[],
    intro: string,
    newFiles: Mapping[] | null,
    originalFile: string[],
    id: number) => {

    let result1 = (await this.knex('pt')
      .where({ id: id })
      .update({
        qualification,
        speciality,
        intro,

      }).returning("id"))


    console.log("change pt info service result 1", result1)


    let ptFiles: { filepath: string }[] = await this.knex.select("*").from("pt_file").where("pt_id", "=", id)
    let originalFilePathLength = "https://cdn.ellie-lam.site/".length

    console.log(ptFiles, "ptFiles")

    let filePath: { filepath: string, isVideo: boolean, pt_id: number }[] = []
    //use original file forming new db pt_file record
    if (originalFile.length > 0) {
      for (const ptfile of ptFiles) {
        for (const file of originalFile) {
          //words after domain match with db filepath
          if (file.slice(originalFilePathLength) == ptfile.filepath) {

            console.log(file.slice(originalFilePathLength))
            filePath.push({ filepath: ptfile.filepath, isVideo: false, pt_id: id })
          }
        }
      }
    }

    //use new uploaded file forming new pt_file record
    if (newFiles && newFiles.length > 0) {
      for (const file of newFiles!) {
        if (file.mimetype.includes("octet-stream")) {
          filePath.push({ filepath: file.key, isVideo: false, pt_id: result1[0] })

        } else {
          filePath.push({ filepath: file.key, isVideo: true, pt_id: result1[0] })
        }
      }

    }


    console.log("filepath", filePath)
    let deleted;
    if (!hasUploadedVideo(filePath)) {
      deleted = await this.knex("pt_file").del().where({ pt_id: id }).andWhere({ isVideo: false }).returning("*")
    } else {
      deleted = await this.knex("pt_file").del().where({ pt_id: id }).returning("*")
    }

    console.log(deleted, "deleted")

    let result2 = await this.knex.insert(filePath).into("pt_file").returning("id")

    console.log(result2, "result2")



    return (result1)
  }




}


function hasUploadedVideo(filePath: { filepath: string, isVideo: boolean, pt_id: number }[]) {

  for (const file of filePath) {
    if (file.isVideo) {

      console.log("isVideo", true)
      return true
    }
  }
  console.log("isVideo", false)
  return false
}