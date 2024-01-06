import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
// import picture1 from './class2.jpg'
import { Container, Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faCheck, faChevronCircleRight, faChevronCircleLeft, faThumbsUp as faSolidThumb, faTimes } from "@fortawesome/free-solid-svg-icons";

import { faThumbsUp, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

export function PtBox(

    props: {

        displayname: string;
        categories: string[] | null;
        avgScore: number;
        ratingNo: number;
        intro: string;
        photo: string[];
        video: string;
        referId: number;


    },


) {


    console.log("video", props.video)

    const [VideoFormClass, setVideoFormClass] = useState("none")
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    }
    const elementLeft = (<FontAwesomeIcon icon={faChevronCircleLeft}></FontAwesomeIcon>)
    const elementRight = (<FontAwesomeIcon icon={faChevronCircleRight}></FontAwesomeIcon>)

    const directionButtons = (direction: {} | null | undefined) => {
        return (
            <span
                aria-hidden="true"
                className={direction === "Next" ? "button-next" : "button-prev"}
            >
                {direction}
            </span>
        );
    };
    return (


        <Container className="ptBorder">

            <Row style={{ "margin": 0 }}>

                <Col sm={4} style={{ "padding": 0 }}>
                    <div className="ptPic">
                        <Carousel className="board"
                            nextLabel={"Next"}
                            prevLabel={"Previous"}
                            controls={true} activeIndex={index} onSelect={handleSelect} indicators={false} nextIcon={directionButtons(elementRight)}
                            prevIcon={directionButtons(elementLeft)}>
                            {props.photo.length > 0 ?
                                props.photo.map((p, i) =>


                                    <Carousel.Item className="carIndex" interval={2000} key={i}>
                                        <img
                                            key={i}
                                            className="d-block w-100"
                                            alt="The Personal Trainer"
                                            src={`https://cdn.ellie-lam.site/${p}`}
                                        />
                                    </Carousel.Item>)
                                : <img alt="no pic" src="../logo192.png"></img>}



                        </Carousel>
                    </div>
                    <Row className="align-items-center justify-content-center mx-0 my-4">
                        <div className="rating">
                            {(() => {
                                switch (props.avgScore) {
                                    case 1: return <div className="ratingLikes">

                                        <div className="p-1"><FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                    </div>;
                                    case 2: return <div className="ratingLikes">
                                        <div className="p-1"><FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div></div>;
                                    case 3: return <div className="ratingLikes">
                                        <div className="p-1"><FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div></div>;
                                    case 4: return <div className="ratingLikes">
                                        <div className="p-1"><FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                        <div className="p-1"> <FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div></div>;
                                    case 5: return <div className="ratingLikes">
                                        <div className="p-1"><FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                        <div className="p-1"> <FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumbed space" icon={faSolidThumb}></FontAwesomeIcon></div></div>;

                                    default: return <div className="ratingLikes">
                                        <div className="p-1"><FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                        <div className="p-1"> <FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                        <div className="p-1"><FontAwesomeIcon className="thumb space" icon={faThumbsUp}></FontAwesomeIcon></div></div>;
                                }
                            })()}
                            <div className="catRating d-flex justify-content-center align-items-center">{props.ratingNo?props.ratingNo:"0"} Rating(s)</div>

                        </div>

                    </Row>
                </Col>


                <Col sm={8} className="pr-0 pb-0 pl-3">
                    <Row className="displayFlexC">

                        <div className="ptName">{props.displayname}</div>



                    </Row>

                    <Row>
                        <div className="catallbox">
                            {props.categories && props.categories.map((cat, i) => {
                                cat = cat.replace(" ", "")
                                cat = cat.replace("-", "")
                                return (<div className="catBox">
                                    <FontAwesomeIcon className="tick" icon={faCheck} key={i} /> {cat}</div>)
                            }



                            )}

                        </div></Row>
                    <Row className="align-items-center justify-content-center">
                        <div className="intro">
                            {props.intro}


                        </div>
                    </Row>

                    <Row className="justify-content-end align-items-center seeMoreRow">
                        <div className="seeMoreBox">
                            <Link className="seeMore" to={{
                                pathname: `/pt-profile/${props.referId}`,

                            }}>

                                Get Your Lesson!<FontAwesomeIcon className="next" icon={faArrowAltCircleRight} /></Link>
                        </div>

                        <div className="preview ml-3" onClick={() => setVideoFormClass("")}>

                            <div >

                                <FontAwesomeIcon className="playBtn" icon={faPlayCircle}></FontAwesomeIcon>
                            </div>


                        </div>

                    </Row>



                </Col>
            </Row>

            <div className={VideoFormClass + " opacity-5"} style={{ position: "fixed", top: "0", left: "0", right: "0", bottom: "0", zIndex: 60 }}>

                <div className="d-flex justify-content-center align-items-center opacity-5 video1">

                    <form className="d-flex flex-column justify-content-center align-items-center p-4  opacity-5 videoForm ">
                        <div className="align-self-end px-1" onClick={() => setVideoFormClass("none")}> <FontAwesomeIcon className="closeBtn" icon={faTimes}></FontAwesomeIcon></div>


                        <div className="py-2 highlight ratingTitle"> Preview Video of {props.displayname} </div>



                        <div className="d-flex justify-content-center align-items-center videoForm2">

                            <ReactPlayer

                                className='react-player'
                                url={`https://cdn.ellie-lam.site/${props.video}`}
                                width='100%'
                                height='100%'
                                pip={false}
                                controls
                                light={false}
                                loop={false}
                                playbackRate={1.0}
                                volume={0.8}
                                muted={false}

                            />

                        </div>



                    </form>
                </div>
            </div>



        </Container>


    )
}

