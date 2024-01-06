import { setRandomFallback } from 'bcryptjs';
import { Request, Response } from 'express';
import { isLoggedIn } from '../guards'
import { UserService } from "../service/UsersService";

// const hasUserQuota = (userQuota: any[]) => userQuota.length > 0 && userQuota[0] > 0

// const hasSeat = (seat: any[]) => seat.length > 0

// const handleSeat = async ({res, req, userService}) => {
//     const timeSlotId = req.body.timeslot_id
//     const seat = userService.checkSeat(timeSlotId)
//     if(!hasSeat(seat)){
//         return res.json({ result: "fail to get seat" })
//     } 

//     return await userService.checkParticipant(timeSlotId)
// }


// const noOfParticipant = handleSeat({
//     req: req,
//     res: res, 
//     userService: this.userService
// })

// const handleParticipants({

//     participant: noOfParticipant
// })

export class UserController {
    constructor(private userService: UserService) { }



    public applyCourse = async (req: Request, res: Response) => {
        let timeslot_id = req.body.timeslot_id
        let user_id = req["user"]?.id as number



        try {
            let seat = await this.userService.checkSeat(timeslot_id)

            if (seat.length > 0) {
                let no_of_participant = await this.userService.checkParticipant(timeslot_id)
                if (no_of_participant.length > 0) {
                    let quota = seat[0].seat - parseInt(no_of_participant[0].count as string)
                    if (quota > 0) {
                        let checkUserApplied = await this.userService.checkUserApplied([timeslot_id], user_id)
                        if (checkUserApplied.length == 0) {
                            let userQuota = await this.userService.checkUserQuota(user_id)
                            if (userQuota.length > 0 && userQuota[0].quota > 0) {
                                let appliedTimeslot = await this.userService.applyCourse({ timeslot_id, user_id })
                                if (appliedTimeslot.length > 0) {
                                    let deductResult = await this.userService.deductQuota(user_id)
                                    // let noticed = await this.userService.addNotice({`You have a lesson on ${appliedTimeslot[0].starttime}`,user_id)
                                    res.json({ result: "Successful" })
                                } else {
                                    res.json({ result: "try again" })
                                }
                            } else {
                                res.json({ result: "No credit" })
                            }
                        } else {
                            res.json({ result: "Applied before" })
                        }
                    } else {
                        res.json({ result: "Timeslot is full" })
                    }
                } else {
                    res.json({ result: "fail to get no of participant" })
                }
            } else {
                res.json({ result: "fail to get seat" })
            }
        } catch (e) {
            res.json({ result: e })
        }

    }

    public checkRegisteredTimeslot = async (req: Request, res: Response) => {
        let timeslot_id = req.body.timeslot_id
        console.log(timeslot_id)
        let user_id = req["user"]?.id as number


        try {
            let result = await this.userService.checkUserApplied(timeslot_id, user_id)
            console.log(result)
            res.json({ result: result })
        } catch (e) {
            res.json({ result: e })
        }
    }

    public fetchNotification = async (req: Request, res: Response) => {
        let user_id = req["user"]?.id as number

        try {
            let result = await this.userService.fetchNotification(user_id)

            return res.json({ result })
        } catch (e) {
            return res.json({ result: e })
        }
    }
    // public fetchUserCourse = async (req: Request, res: Response) => {
    //     let user_id = req["user"]?.id as number
    //     let result = await 
    // }



    public addRating = async (req: Request, res: Response) => {

        console.log(req.body.score)
        console.log(req.body.content)
        let score = req.body.score
        let content = req.body.content

        let user_id = req["user"]!.id;
        console.log('params for adding ratings', req.query)
        try {
            const result = await this.userService.addRating(content, user_id, parseInt(req.query.ptId + ""), score)
            if (result == 1) {
                res.json({ msg: "Successful" })
            } else if (parseInt(req.query.ptId + "") === user_id) {
                res.json({ msg: "error" })
            }
            else {
                res.json({ result: false })
            }

        } catch (e) {
            res.json({ result: e })
        }



    }


    public checkUserQuota = async (req: Request, res: Response) => {
        let user_id = req["user"]?.id as number

        try {
            let quota = await this.userService.checkUserQuota(user_id)
            return res.json({ result: quota })
        } catch (e) {
            return res.json({ result: e })
        }

    }


    public cancelCourse = async (req: Request, res: Response) => {
        let timeslot_id = req.body.timeslot_id
        try {
            let result = await this.userService.cancelCourse(timeslot_id)
            if (result.length > 0) {
                console.log(result, "result")
                res.json({ result: "Successful" })
            }

        } catch (e) {
            res.json({ result: e })
        }
    }

    public getUserPreference = async (req: Request, res: Response) => {
        let user_id = req["user"]?.id as number
        console.log("usr p", user_id)

        try {
            let preference = await this.userService.getUserPreference(user_id)
            if (preference.length == 0) {
                return res.json({ result: 0 })
            }
            return res.json({ result: { category1: preference[0].category1, category2: preference[0].category2 } })
        } catch (e) {
            return res.json({ result: e })
        }
    }




}