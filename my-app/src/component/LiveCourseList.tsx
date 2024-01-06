
import React from 'react';
import { CourseListRow } from './CourseListRow'
// import picture1 from './class2.jpg'
import { Container, Row, Col, Table } from 'reactstrap';
import { useSelector } from "react-redux"
import { RootState } from "../store";
// import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// import Popover from 'react-bootstrap/Popover'

export function LiveCourseList(
    props: {
        tablename: string;

    //     rows:{
    //         course_name:string;
    //         category1:string;
    //         category2:string;
    //         starttime:string;
    //         endtime:string;
    //         date:string;
    //         seat:number;
    //         detail:string;
    //         participant:{
    //             name:string;
    //             gender:string;
    //             height:number;
    //             weight:number;
    //             frequency:string;
    //             focus:string;
    //             goal:string;
    //         }[]|null;
    //         btnWord:string;
    //         btnWord2:string;
    //     clickBtn:()=>void;
    //     clickBtn2:()=>void;
    //     }[]|null;
   
        showTootip:boolean
    }
) {


    const rows = useSelector((state: RootState) => state.courseListReducer)
    return (
        <Container fluid>
            <Row>
                <Col className="colTable"><div className=" highlight tableName">{props.tablename}</div></Col>
            </Row>

            <Row>
                <Table responsive striped borderless hover variant="dark">
                    <thead>

                        <tr>


                            <th className="tableFont">Course Name</th>
                            <th className="tableFont">Categories</th>
                            <th className="tableFont">Start Time</th>
                            <th className="tableFont">End Time</th>
                            <th className="tableFont">Dates</th>
                            <th className="tableFont">Quota of Live Joining</th>
                            <th className="tableFont">Live</th>
                          

                        </tr>

                    </thead>
                    <tbody>

            {rows? 
                    rows.map((row,i)=>
                    
                    <CourseListRow 
                    course_name={row.course_name}
                    category1 = {row.category1}
                    category2 ={row.category2}
                    starttime = {row.starttime}
                    endtime = {row.endtime}
                    date = {row.date}
                    seat={row.seat}
                    detail={row.detail}
                    participant = {row.participant}
                    key={i}
                    clickBtn={row.clickBtn}
                    clickBtn2 = {row.clickBtn2}
                    btnWord={row.btnWord}
                    btnWord2 = {row.btnWord2}
                    showTootip = {props.showTootip}
                    ></CourseListRow>)
                    :null}
                    
            

                    </tbody>
                </Table>
            </Row>

        </Container >

    )
}