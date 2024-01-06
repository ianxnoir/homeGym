import { Request, Response } from 'express';
import { PtService } from "../service/PTsService";
import SocketIO from 'socket.io'


export class PtController {
    constructor(private ptService: PtService) { }



    //frontend send token
    public regCourse = async (req: Request, res: Response) => {

        let course_name = req.body.courseName
        let detail = req.body.courseDes
        let category_id1 = req.body.category1
        let category_id2 = req.body.category2
        let timeslot = req.body.timeslot
        let seat = req.body.seat
        let user_id = req["user"]?.id as number


        try {
            let pt_id = await this.ptService.getPtId(user_id)
            console.log("pt_id",pt_id)
            if (!(pt_id.length > 0)) {
                return res.json({msg:"no pt id"})
            }

            let result = await this.ptService.regCourse({ pt_id: pt_id[0].id, course_name, seat, detail, category_id1, category_id2 }, timeslot)
             console.log(result)
                if (!result || !(result.length > 0)) {
                    return res.json({ msg: "fail" })
                }
                return res.json({ msg: "Successful" })
            
        }
        catch (e) {
            return res.json({ msg: e })


        }
    }

    public cancelCoursebyPT = async(req:Request, res:Response)=>{
        let timeslot_id = req.body.timeslot_id
        try{
            let result = await this.ptService.cancelCoursebyPT(timeslot_id)

            console.log("result",result)
            if(result && result.length>0){
                res.json({msg:"Successful"})
            }else{
                res.json({msg:"Try again"})
            }
    
        }catch(e){
            res.status(501).json({msg:"fail"})
        }
        
    }


    public changePTInfo = async (req:Request, res:Response) => {
        console.log(req.body, 'fdsfsd')
        console.log(req.files, 'files')
      
       let result = await this.ptService.changePTInfo(
            req.body.quali,
            req.body.spec,
            req.body.intro, 
            req.files as any, 
            JSON.parse(req.body.originalFile),
            parseInt(req.query.ptId+""))
        
            
            
            if (result.length > 0) {
                console.log("result:",result)
                res.json({msg:"Successful"})
                return
              }else{
                return res.json({ msg: "try again" })
              }
           
    }



}