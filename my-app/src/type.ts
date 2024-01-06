export interface Mapping {
  [propertyName: string]: null | string | string[] | File;
}

export interface PTForm extends Mapping {
    "username": string, "email": string, "password": string,
    "height": string, "gender": string, "quali": string[],
    "spec": string[], "image": string[], "intro": string,
    "video": File
}

export interface IMapping {
   [propertyName: string]: string;
 }

 export interface UserForm extends IMapping{
   "username": string, "email": string, "password": string,
   "gender": string,
   "height": string,
   "weight": string,
   "dob": string,
   "goal_id": string,
   "frequency_id": string,
   "focus_id": string
}

export interface CMapping {
  [propertyName: string]: null | string | number | Date
}


export interface CardForm extends CMapping{
        "nameOnCard":string,
        "type":string,
        "cardNumber" : number,
        "cardExpiry": Date,
        "cardCvc":number,
        "country": string,
        "zipCode" :number
      
      }

export interface pwMapping{
  [propertyName: string]: string |null ;

}

export interface resetPWForm extends pwMapping{
      "oldPassword" :string,
      "newPassword":string,
      "cPassword":string
}

export interface CourseForm{
  courseName:string;
  courseDes:string;
  category1:string;
  category2:string;
  seat:string;
 timeslot:Timeslot[]
  
}

export interface CommentForm {

  content: string,
  // score: number
}


export interface Timeslot{
  "date":string;
  "starttime":string;
  "endtime":string;
  "zoomlink":string;
}


export interface Rows{
  course_name: string;
  category1: string;
  category2: string;
  starttime: string;
  endtime: string;
  date: string;
  seat: number;
  detail: string;
  zoomlink:string;
  participant: {
      name: string;
      gender: string;
      height: number;
      weight: number;
      frequency: string;
      focus: string;
      goal: string;
  }[] | null;
  btnWord:string;
  btnWord2:string;
  clickBtn:()=>void;
  clickBtn2: ()=>void|null;
}

