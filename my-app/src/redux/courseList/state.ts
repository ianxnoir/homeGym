export interface CourseList{
        course_name: string;
        category1: string;
        category2: string;
        starttime: string;
        endtime: string;
        date: string;
        seat: number;
        detail: string;
        zoomlink: string;
        participant: {
            name: string;
            gender: string;
            height: number;
            weight: number;
            frequency: string;
            focus: string;
            goal: string;
        }[] | null;
        btnWord: string;
        btnWord2: string;
        clickBtn: () => void;
        clickBtn2: () => void | null;    
}

export type CourseListState = CourseList[]|null

