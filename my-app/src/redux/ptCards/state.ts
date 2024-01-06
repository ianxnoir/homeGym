export interface CardState {
  
            result:{
            id: number,
            displayname: string,
            height: number,
            gender: string,
            qualification: string[],
            speciality: string[],
            intro: string,
            categories: string[]|null,
            photo: [],
            video: string,
            avgScore: number,
            ratingNo: number,
        }[]|null,
        count: number|null
}