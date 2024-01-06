import React from "react";
import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp as faSolidThumb } from "@fortawesome/free-solid-svg-icons";
import Moment from 'react-moment';
import 'moment-timezone';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';



export function CommentBox(
    props: {
        displayname: string,
        rating: number,
        content: string
        created_at: Date

    },

) {


    return (
        <ul className="comments">

            <li >

                <div className="comment" >

                    <Row>
                        <div className="realComment">
                            {props.content}
                        </div>

                    </Row>
                    <Row>
                        <Col sm={4}>
                            {(() => {
                                    switch (props.rating) {
                                    case 1:   return  <div className="commentLikes">
                                                       
                                    <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon>
                                </div>;
                                    case 2: return  <div className="commentLikes">
                                <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon>
                                 <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon>
                                <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon>
                                <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon>
                                <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon></div>;
                                    case 3:  return <div className="commentLikes">
                                    <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon>
                                     <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon></div>;
                                    case 4: return <div className="commentLikes">
                                    <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon>
                                     <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon></div>;
                                    case 5: return <div className="commentLikes">
                                    <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon>
                                     <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumbed space2" icon={faSolidThumb}></FontAwesomeIcon></div>;

                                    default:      return <div className="commentLikes">
                                    <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon>
                                     <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="thumb space2" icon={faThumbsUp}></FontAwesomeIcon></div>;
                                    }
                                })()}
                           

                        </Col>
                        <Col sm={8}>
                            <div className="commentName">
                                 
                                    <Moment format="YYYY-MM-DD HH:mm">
                                        {props.created_at}
                                    </Moment>
                               

                                    <div className="displayName">  
                                     {props.displayname}
                                    </div>

                            </div>

                        </Col>



                    </Row>
                </div>
            </li>

        </ul>
    )
}