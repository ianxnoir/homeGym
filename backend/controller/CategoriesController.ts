import { Request, Response } from 'express';
import {isLoggedIn} from '../guards'
import { CategoryService } from '../service/CategoriesService';



export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    getCards = async(req:Request,res:Response) =>{
        console.log(req.body)
        let page =  req.body.page
        let category = req.body.category_id
        try{
            let result =  await this.categoryService.getCards(page, category)
    
            res.json(result)
        }catch(e){
            res.status(500).json({result:false})
        }

    }

    getCats = async(req:Request,res:Response)=>{
            let result = await this.categoryService.getCats()
            res.json(result)
    }

    

}
