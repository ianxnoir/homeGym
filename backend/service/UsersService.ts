import { NumberList } from 'aws-sdk/clients/iot';
import Knex from 'knex';

export class UserService {
  constructor(private knex: Knex) { }

  public applyCourse = async (record: { timeslot_id: number, user_id: number }) => {
    let id = await this.knex.insert(record).into("registered_timeslot").returning("*")
    return id
  }

  public checkSeat = async (timeslot_id: number) => {
    let seat = await this.knex.select("seat")
      .from("timeslot")
      .leftJoin("course", "course.id", "=", "timeslot.course_id")
      .where("timeslot.id", timeslot_id)
    console.log("seat is", seat)
    return seat
  }

  public checkParticipant = async (timeslot_id: number) => {
    let no_of_participant = await this.knex.count("*")
      .from("registered_timeslot")
      .leftJoin("timeslot", "registered_timeslot.timeslot_id", "timeslot.id")
      .where("timeslot.id", timeslot_id)
    return no_of_participant
  }

  public checkUserApplied = async (timeslot_id: number[], user_id: number) => {
    let record = await this.knex.select("*").from("registered_timeslot")
      .whereIn("timeslot_id", timeslot_id)
      .andWhere("user_id", user_id)

    return record
  }


  public checkUserQuota = async (user_id: number) => {
    let quota = await this.knex.select("quota").from("user").where("id", user_id)
    return quota
  }

  public deductQuota = async (user_id: number) => {
    let result = (await this.knex.raw(`update "user" set quota = quota-1 where id = ${user_id} returning id`)).rows
    return result

  }



  public addRating = async (
    content: string,
    user_id: number,
    pt_id: number,
    score: number
  ) => {
    let result = await this.knex
      .insert({
        pt_id: pt_id,
        user_id: user_id,
        content: content,
        score: score
      })
      .into("rating")
      .returning("*");
    return result.length;
  };

  public cancelCourse = async (timeslot_id: NumberList) => {
    let result = await this.knex("registered_timeslot").del().where("timeslot_id", "=", timeslot_id).returning("id")
    return result
  }

  public fetchNotification = async (user_id: number) => {
    let result = await this.knex.select("*")
      .from("notification")
      .where("user_id", "=", user_id)
      .orderBy("created_at", "desc")
    return result
  }

  public getUserPreference = async(user_id:number) =>{
    let result = (await this.knex.raw(`select timeslot.id, registered_timeslot.user_id as user_id ,course_name,detail,category_id1 as category1, category_id2 as category2 from timeslot inner join course on timeslot.course_id = course.id inner join registered_timeslot on registered_timeslot.timeslot_id = timeslot.id where registered_timeslot.user_id = ${user_id} order by timeslot.id DESC`)).rows
    return result
  }

}