
import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser as solidUser } from "@fortawesome/free-solid-svg-icons";
export function Tooltips(
    props:{
        name:string;
        gender:string;
        height:number;
        weight:number;
        frequency:string;
        focus:string;
        goal:string;
      
    }
){

    return(

        <OverlayTrigger
        placement="bottom"
        overlay={
            <Tooltip bsPrefix="tooltip" className="tooltip" id="button-tooltip-2">
                <p>Name : {props.name}</p>
                <p>Gender : {props.gender}</p>
                <p>height : {props.height}</p>
                <p>weight : {props.weight}</p>
                <p>Frequency : {props.frequency}</p>
                <p>Focus part : {props.focus}</p>
                <p>Goal : {props.goal}</p>

            </Tooltip>}>



        <div className="userLabel">
            <FontAwesomeIcon className="countUser" icon={solidUser}></FontAwesomeIcon>
        </div>



    </OverlayTrigger>
    )
}