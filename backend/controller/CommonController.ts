import { Request, Response } from 'express';
import{CommonService} from "../service/CommonService"
import SocketIO from 'socket.io'


export class CommonController {

    constructor(private commonService: CommonService) { }


    public getPTInfo= async(req:Request,res:Response) =>{

        console.log(parseInt(req.query.ptId+"" +"get  pt info controller"))
      
         try{
            
         let result = await this.commonService.getptProfileInfo(parseInt(req.query.ptId+""))
         res.json(result)
        }catch(e){
            res.status(500).json({result:false})
        }

    }

        public getRating = async(req:Request,res:Response)=>{

          
            try{
                let result = await this.commonService.getRating(parseInt(req.query.ptId+""))
                res.json(result)
            }catch(e){
                res.status(500).json({result:false})
            }
    
        }


        public getPTCoursebyPublic = async(req: Request, res: Response) =>{
            let pt_id = parseInt(req.body.pt_id)
            try{
                let result = await this.commonService.getCourse(pt_id)
                res.json(result)
            }catch(e){
                res.json({msg:e})
            }
          
        
        }

        public getPTCoursebyPT = async(req: Request, res: Response) =>{
            let user_id = req["user"]?.id as number
    
            try{
                let result:{id:number}[] = await this.commonService.getPtId(user_id)
       
                if(result.length>0){
                let timeslot = await this.commonService.getCourse(result[0].id)
                res.json(timeslot)
                }else{
                    res.json({msg:"no pt id"})
                }
            }catch(e){
                res.json({msg:e})
            }
                
        }

        public getUserSelected = async(req: Request, res: Response) =>{
            let user_id = req["user"]?.id as number
          
            try{
                let timeslot = await this.commonService.getCourse(null,user_id)
                res.json(timeslot)
            }catch(e){
                res.json({msg:e})
            }
        
        }

        public getSearchCard = async(req: Request, res: Response) =>{
            console.log(req.body)
            let searchTerm = req.body.searchTerm

            try{
                let result = await this.commonService.getSearchCard(searchTerm)
                res.json({result})
            }
           catch(e){
            res.json({result:e})
           }
            
        }
}