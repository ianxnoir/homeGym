import React from 'react';
// import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { faUser as solidUser } from "@fortawesome/free-solid-svg-icons";
import { faUser, } from '@fortawesome/free-regular-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Tooltips } from './Tooltips';



export function CourseListRow(
    props: {
        course_name: string;
        category1: string;
        category2: string;
        starttime: string;
        endtime: string;
        date: string;
        seat: number;
        detail: string;
        participant: {
            name: string;
            gender: string;
            height: number;
            weight: number;
            frequency: string;
            focus: string;
            goal: string;
        }[]
        | null;
        clickBtn: () => void;
        clickBtn2: () => void;
        btnWord: string;
        btnWord2: string;
        showTootip: boolean;
    }

) {


    const showCategory = (cat:string)=>{
        if(cat==="Body-Building"){
            return "BodyBuilding"
        }else if(cat==="Functional Training"){
            return "FunctionalTraining"
        }else if(cat==="Core Fusion"){
            return "CoreFusion"
        }
        else{
            return cat
        }
    }

    return (
        <tr>
            <td className="colContent">
                <div className="nameRow">
                    {props.course_name}

                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Tooltip bsPrefix="tooltip" className="tooltip2" id="button-tooltip-3">
                                <p>Course details : </p>
                                <p>{props.detail}</p>
                            </Tooltip>}>
                        <div className="detailLabel">
                            <FontAwesomeIcon className="detailFont" icon={faInfoCircle} />
                        </div>
                    </OverlayTrigger>

                </div>

            </td>
            <td className="colContent">
                <div className="tags">
                    <div className="catTag">
                        {showCategory(props.category1)}
              
                    </div>

                    {props.category2 ? <div className="catTag">
                        {showCategory(props.category2)}
           
                    </div> : null}

                </div>


            </td>
            <td className="colContent">{props.starttime}</td>
            <td className="colContent">{props.endtime}</td>
            <td className="colContent">{props.date}</td>
            <td className="colContent">
                <div className="displayFlexC2">

                    {props.showTootip && props.participant ?
                        props.participant.map((p, i) =>

                            <Tooltips
                                name={p.name}
                                gender={p.gender}
                                height={p.height}
                                weight={p.weight}
                                frequency={p.frequency}
                                focus={p.focus}
                                goal={p.goal}

                                key={i}
                            />
                        ) : null}

                    {props.participant ?
                        props.showTootip && Array(props.seat - props.participant.length).fill("").map((p, i) => <div className="userLabel" key={i}>
                            <FontAwesomeIcon className="countUser" icon={faUser} />
                        </div>) :
                        props.showTootip && Array(3).fill("").map((p, i) =>
                            <div className="userLabel" key={i}>
                                <FontAwesomeIcon className="countUser" icon={faUser} />

                            </div>
                        )}
                        
                    {props.showTootip === false && props.participant ?
                        Array(props.participant?.length).fill("").map((p, i) => <div className="userLabel">
                            <FontAwesomeIcon className="countUser" icon={solidUser}></FontAwesomeIcon>
                        </div>):null}
                        
                    {props.showTootip === false && props.participant ?
                        Array(props.seat - props!.participant.length).fill("").map((p, i) => <div className="userLabel" key={i}> <FontAwesomeIcon className="countUser" icon={faUser} /></div>) : null}

                </div>

            </td>
            <td className="colContent">
                <div className="joinBtn">
                    <div className="realJoin" onClick={(e) => {
                        e.preventDefault();
                        props.clickBtn()
                    }}>
                        {props.btnWord ?? "Apply"}
                    </div>

                    {
                        props.btnWord2 ?
                            <div className="realJoin2" onClick={
                                (e) => {
                                    e.preventDefault();
                                    props.clickBtn2()
                                }}>
                                {props.btnWord2 ?? null}
                            </div>

                            : null
                    }

                </div>
            </td>




        </tr>

    )
}