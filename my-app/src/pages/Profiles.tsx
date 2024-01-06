import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp as faSolidThumb, faPen, faPlusCircle, faCheck, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { LiveCourseList } from '../component/LiveCourseList';
import { CommentBox } from '../component/commentBox';
import useReactRouter from 'use-react-router';
import { useSelector, useDispatch } from 'react-redux';
import { CommentForm } from '../type';

import { RootState } from '../store';
import BeautyStars from 'beauty-stars';
import { toast } from "react-toastify";
import { LoadingSpinner } from '../component/LoadingSpinner';
import { fetchProfileCourse } from "../redux/courseList/actions"

toast.configure();



export function Profile() {

    const dispatch = useDispatch();

    //user state
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    const role = useSelector((state: RootState) => state.userReducer.role)
    const ptId = useSelector((state: RootState) => state.userReducer.pt_id)
    const [loading, setLoadingReg] = useState(false);




    const [commentz, setCommentz] = useState<{
        id: number,
        content: string,
        displayname: string,
        score: number,
        created_at: Date


    }[] | null>(null)




    const [PTInfo, setPTInfo] = useState<
        {
            id: number,
            displayname: string,
            height: number,
            gender: string,
            qualification: string[] | null,
            speciality: string[] | null,
            intro: string,
            photo: string[],
            avgScore: number,
            ratingNo: number,
        } | null>(null)



    const { match: { params: { id } } } = useReactRouter<any>();

    const fetchComments = async function fetchComments(id: number) {


        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getComments?ptId=${id}`)


        const result = await res.json();


        //could be empty array as no record, return null
        if (Array.isArray(result.result) && result.result.length > 0) {
            setCommentz(result.result)

        } else {
            return setCommentz(null)
        }
    }
    //

    const fetchPTInfo = async function fetchPTInfo(id: number) {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getPTInfo?ptId=${id}`)


        const result: {
            result: {
                id: number,
                displayname: string,
                height: number,
                gender: string,
                qualification: string[],
                speciality: string[],
                intro: string,
                photo: string[],
                avgScore: number,
                ratingNo: number
            } | null
        } = await res.json();



        if (result.result?.id) {
            setPTInfo(result.result)

            let newImage = []
            for (let photo of result.result.photo) {
                photo = `https://cdn.ellie-lam.site/${photo}`
                newImage.push(photo)
            }
            console.log(result.result.photo, "after pushing")
            let photoLength = 3;
            let newPhotoArray = Array(photoLength - result.result.photo.length).fill("")

            setUpdateInfo({
                quali: result.result.qualification,
                spec: result.result.speciality,
                image: newImage.concat(newPhotoArray),
                intro: result.result.intro,
                video: null
            })
        }
    }




    const [change, setChange] = useState(0)
    const [ClickItem, onClickItem] = useState(0)
    const [ClickThumb, onClickThumb] = useState(0)
    const [apply, setApply] = useState(0)



    const align = "d-flex justify-content-center align-items-center "
    const align2 = " d-flex justify-content-center align-items-center editBox"
    const inputClass = " p-2 mb-3 bg-secondary text-white text-light comBox"
    const inputClass2 = " p-2 my-3 inputColor text-white text-light comBox2 editBox"
    const inputClass3 = " p-2 mb-3 inputColor text-white text-light comBox3"


    const [form, setForm] = useState<CommentForm>(

        {
            content: "",

        })


    const [star, setStar] = useState(0);

    const [commentFormClass, setCommentFormClass] = useState("translate")
    const [editClass, setEditClass] = useState("translate")
    const token = useSelector((state: RootState) => state.auth.token)
    const [updateInfo, setUpdateInfo] = useState({

        quali: [""],
        spec: [""],
        image: ["", "", ""],
        intro: "",
        video: null as any,
    })

    async function dataURLToFile(dataURL: string) {
        const res = await fetch(dataURL);
        const blob = await res.blob();
        const file = new File([blob], `ptpic`);
        return file

    }

    // function checkBase64(image: string) {
    //     const format = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/;
    //     if (!image.match(format)) {
    //         console.log(false)
    //         return false
    //     }
    //     console.log(true)
    //     return true
    // }

    async function fetchPtEdit(ptId: number) {


        const formData = new FormData();

        formData.append("quali", JSON.stringify(updateInfo.quali))
        formData.append("spec", JSON.stringify(updateInfo.spec))
        formData.append("intro", updateInfo.intro)
        formData.append("pic", updateInfo.video)

        const originalFile = []
        for (const image of updateInfo.image) {
            if (image.match("https://cdn.ellie-lam.site")) {
                originalFile.push(image)
            }
            else if (image !== "".trim()) {
                let pic = await dataURLToFile(image)
                formData.append("pic", pic)
            }
        }
        formData.append("originalFile", JSON.stringify(originalFile))

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/ptInfoUpdate?ptId=${ptId}`,
            {
                method: "POST",
                headers: {

                    'Authorization': 'Bearer ' + token

                },
                body: formData


            }
        )

        console.log('fetch response', res)

        let result = await res.json();
        console.log(result, 'hiresult')
        if (result.msg === "Successful".trim()) {
            setChange(change + 1)
            toast.info(' 👌🏻    Edit so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setLoadingReg(false)
            return setEditClass("none")

        } else {
            setLoadingReg(false)
            return toast.error(' Fail to edit..', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }

    async function fetchRating(id: number) {

        if (form.content.length < 1) {

            return toast.warn('Please input the content of comment before you submit it.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }



        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/addComment?ptId=${id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token

                }, body:
                    JSON.stringify({
                        ...form,
                        content: form.content,
                        score: `${star}`

                    }
                    )

            }
        )


        let result = await res.json();
        if (result.msg === "Successful".trim()) {
            toast.success(' ✅  Added comment successfully!  ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setForm({ content: "" })
            setChange(change + 1)
            return setCommentFormClass("none")

        } else if (result.msg === "error") {

            toast.error('You cannot add rating by yourself.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            return toast.error('You cannot add rating by yourself.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }


    useEffect(() => {
        fetchPTInfo(parseInt(id))
        fetchComments(parseInt(id))


        //eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [id, change, ClickItem, ClickThumb, loading])


    // eslint-disable-line react-hooks/exhaustive-deps


    // const [row, setRows] = useState<Rows[] | null>(null)
    const formClass = "d-flex flex-column justify-content-between align-items-center mt-4 "

    const refreshAfterApplied = () => setApply(apply + 1)

    //fetch course list
    useEffect(() => {
        dispatch(fetchProfileCourse(id, isAuthenticated, refreshAfterApplied))
        //eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [apply, isAuthenticated, id, token])






    return (


        <Container fluid>
            <div className="profileBorder">
                <Row className="d-flex justify-content-center pb-5">


                    <div className="highlight bigger mr-5">{PTInfo?.displayname}</div>




                    {role === "pt" && ptId === parseInt(id) &&
                        <div className="editBtn" onClick={() => setEditClass("")}>

                            <FontAwesomeIcon className="pen" icon={faPen}></FontAwesomeIcon>

                      Edit Profile

                      </div>
                    }


                </Row>
                <Row className="px-3">

                    <Col xs={12} sm={12} md={4} className="d-flex justify-content-center">
                        <div className="profileBox">
                            <Row>
                                <Col><div className="markFav">

                                    <div>
                                        {(() => {
                                            switch (PTInfo?.avgScore) {
                                                case 1: return <div className="ratingLikes">

                                                    <div className="p-1"> <FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                                    <div className="p-1"><FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                                    <div className="p-1"><FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                                </div>;
                                                case 2: return <div className="ratingLikes">
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                                    <div className="p-1"><FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div></div>;
                                                case 3: return <div className="ratingLikes">
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                                    <div className="p-1">  <FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div></div>;
                                                case 4: return <div className="ratingLikes">
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                                    <div className="p-1">  <FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                                    <div className="p-1">  <FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div></div>;
                                                case 5: return <div className="ratingLikes">
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                                    <div className="p-1">  <FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbeds space" icon={faSolidThumb}></FontAwesomeIcon></div></div>;

                                                default: return <div className="ratingLikes">
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div>
                                                    <div className="p-1"> <FontAwesomeIcon className="thumbs space" icon={faThumbsUp}></FontAwesomeIcon></div></div>;
                                            }
                                        })()}
                                    </div>

                                </div></Col></Row>
                            <Row>
                                <Col>
                                    {/*if no photo, show default photo*/}
                                    {PTInfo && PTInfo.photo && PTInfo.photo.length > 0 ? <Carousel className="profilePic" showIndicators={false}
                                        showArrows={true} onClickItem={onClickItem}
                                        showStatus={false} onClickThumb={onClickThumb}>

                                        {PTInfo.photo.map((link, no) =>

                                            <div key={no}>
                                                <img alt="profilePic1" src={`https://cdn.ellie-lam.site/${link}`} />

                                            </div>
                                        )}


                                    </Carousel> : <div>No photo</div>}

                                </Col>
                            </Row>
                            <Row className="opacity-5">
                                <Col>
                                    <div className="ratingsProfile opacity-5">


                                        <div className="highlight ratingFont"> {PTInfo?.ratingNo} Ratings</div>

                                        {/* <div onClick={()=> setFormClass("")}>
                                    <FontAwesomeIcon className="addComment" icon={faPlusCircle}></FontAwesomeIcon>
                                    </div> */}

                                        {ptId !== parseInt(id) &&
                                            <div className="addComBtn opacity-5">



                                                <span onClick={() => setCommentFormClass("")}>
                                                    <FontAwesomeIcon className="addComment" icon={faPlusCircle}></FontAwesomeIcon>
                                                </span>




                                            </div>
                                        }

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>



                    <Col xs={12} md={8}>
                        <div className="infoSide">

                            <Row>
                                <div className="forQS">
                                    <Col>
                                        <div className="qua">
                                            <div className="ptTitle">
                                                <div className="highlight">Qualification<br /></div>
                                            </div>




                                            {PTInfo?.qualification ? PTInfo.qualification.map((qualification, i) =>


                                                <div className="realQua">   <p key={i}><FontAwesomeIcon className="tick" icon={faCheck} />
                                                    {qualification}</p>

                                                </div>


                                            ) : null}


                                        </div>


                                    </Col>
                                    <Col>
                                        <div className="areas">
                                            <div className="ptTitle highlight">
                                                Specialty areas
                                             </div>
                                            <div className="realAreas">


                                                {PTInfo?.speciality ? PTInfo.speciality.map((area, o) =>
                                                    <p key={o}><FontAwesomeIcon className="tick" icon={faCheck} />{area}</p>

                                                ) : null}

                                            </div>


                                        </div>
                                    </Col>
                                </div>




                            </Row>
                            <Row>
                                <Col>

                                    <div className="aboutMe">
                                        <span className="highlight aboutmeTitle"> About me</span>
                                        <br />
                                        {/* 
                                        {
                                            (Array.isArray(PTInfo)) ? PTInfo.map((info) => {
                                            return <div className="realAbout"> {info?.intro}</div>
                                            }) : null
                                            } */}

                                        <div className="realAbout"> {PTInfo?.intro}</div>

                                    </div>

                                </Col>


                            </Row>

                            <Row>
                                <Col>
                                    <div className="commentBox">
                                        <Row>
                                            <Col>
                                                <div className="flexCenter">
                                                    <div className="highlight commentTitle ">Comments</div>
                                                </div>
                                            </Col>

                                        </Row>





                                        {commentz != null ? commentz.map((obj, k) =>
                                            <CommentBox

                                                displayname={obj.displayname}
                                                rating={obj.score}
                                                content={obj.content}
                                                created_at={obj.created_at}


                                                key={k}
                                            />

                                        ) : <div> Let's add a comment. </div>}




                                    </div>

                                </Col>
                            </Row>





                        </div>
                    </Col>

                </Row>

                <Row>

                    {ptId !== parseInt(id) &&
                        <LiveCourseList
                            tablename={"Course List"}

                            showTootip={false} />

                    }
                </Row>




                <div className={commentFormClass + " formshadow2 opacity-5 mt-5"}>
                    <div className="d-flex justify-content-center align-items-center opacity-5 ">
                        <form className="d-flex flex-column justify-content-center align-items-center w-20 opacity-5 comForm" style={{ backgroundColor: "white" }}>
                            <div className="align-self-end px-1" onClick={() => setCommentFormClass("none")}> <FontAwesomeIcon className="closeBtn" icon={faTimes}></FontAwesomeIcon></div>

                            <div className="py-2 highlight ratingTitle"> Rate this PT </div>

                            <div className="py-2 editTitle">Type Your Comment</div>

                            <div className="d-flex justify-content-center align-items-center w-100 py-3">

                                <textarea placeholder="Share your thoughts" className={inputClass} value={form.content!}
                                    onChange={(e) => {
                                        if (form) {
                                            setForm({
                                                ...form,
                                                content: e.currentTarget.value
                                            })
                                        }
                                    }
                                    }


                                ></textarea>
                            </div>

                            <div className="editTitle">How was everything?</div>
                            <div className="d-flex justify-content-center align-items-center w-75 flex-wrap m-3">
                                <BeautyStars
                                    activeColor="rgb(255,112,67)"
                                    value={star}
                                    onChange={star => {
                                        setStar(star)

                                    }}
                                />

                            </div>

                            <div className="btn btn-secondary mt-3 submitCom " onClick={(e) => {
                                console.log('onClick running')
                                e.preventDefault();
                                fetchRating(parseInt(id))
                            }}>Submit</div>

                        </form>
                    </div>
                </div>





                <div className={editClass + " formshadow2 opacity-5 mt-5"}>
                    <div className="d-flex justify-content-center align-items-center opacity-5 ">
                        <form className="d-flex flex-column justify-content-center align-items-center p-5 opacity-5 editForm" style={{ backgroundColor: "white" }}>
                            <div className="align-self-end px-1" onClick={() => setEditClass("none")}>

                                <FontAwesomeIcon className="closeBtn" icon={faTimes}></FontAwesomeIcon>

                            </div>

                            <div className="py-2 highlight ratingTitle"> Edit your PT Profile</div>

                            <div className="py-2 editTitle d-flex align-items-center">Please upload three photos.  
                            <label id="change-photo-button" htmlFor="upload" className={align + " m-3 circleBtn3 rounded-circle"} style={{ width: "30px", height: "30px" }}>

                            
                                <FontAwesomeIcon className="closeBtn2" icon={faPlus}></FontAwesomeIcon>

                            </label>

                                <input type="file" id="upload" accept="image/*" hidden onChange={(event) => {
                                    event.preventDefault()
                                    let reader = new FileReader();
                                    if (event.target.files?.[0]) {
                                        reader.readAsDataURL(event.target.files[0]);
                                        reader.onload = (e) => {
                                            let dataURL = reader.result as string;
                                            for (let i = 0; i < updateInfo.image.length; i++) {
                                                if (updateInfo.image[i] === "") {
                                                    updateInfo.image.splice(i, 1, dataURL)
                                                    let newImage = updateInfo.image
                                                    setUpdateInfo({
                                                        ...updateInfo,
                                                        image: newImage
                                                    })
                                                    return
                                                }

                                            }
                                        }
                                    }
                                    console.log(updateInfo)
                                }}></input>
                            </div>


                            <div className="width75 d-flex justify-content-between align-items-center my-3">



                                {updateInfo.image.map((image, i) => {


                                    return (
                                        <div className="imageBorder2 position-relative" key={i} style={{ backgroundImage: `url('${image}')`, backgroundPosition: "center", backgroundSize: "cover" }}>


                                            {image !== "" ?
                                                <div className={align + " m-3 circleBtn rounded-circle position-absolute"} key={i} style={{ width: "30px", height: "30px", right: "-28px", top: "-28px" }} onClick={() => {
                                                    updateInfo.image.splice(i, 1, "")
                                                    let newImage = updateInfo.image
                                                    setUpdateInfo(
                                                        {
                                                            ...updateInfo,
                                                            image: newImage
                                                        }
                                                    )

                                                    console.log(updateInfo.image, "updateImage")
                                                }}>
                                                    <FontAwesomeIcon className="closeBtn2" icon={faTimes}></FontAwesomeIcon>


                                                </div>
                                                : null}



                                        </div>

                                    )
                                })}
                            </div>

                            <div className={align + "flex-column w-75"}>
                                <div id="form2" className={formClass + " w-100"}>

                                    <div id="quali" className="w-100">
                                        <div className={align + "w-100"}>
                                            <div className="editTitle">Qualification</div>
                                            <div className={align + " mx-3 circleBtn3 rounded-circle"} onClick={() => setUpdateInfo(
                                                {
                                                    ...updateInfo,
                                                    quali: updateInfo.quali.concat([""])
                                                }
                                            )}>

                                                <FontAwesomeIcon className="closeBtn2" icon={faPlus}></FontAwesomeIcon>
                                            </div>
                                        </div>


                                        <div className={align + "w-100 flex-column"}>
                                            {updateInfo.quali.map((q, i) => <div className={align2}><input className={inputClass2} value={updateInfo.quali[i]} placeholder="Qualification" key={i}
                                                onChange={(event) => {
                                                    updateInfo.quali[i] = event.currentTarget.value
                                                    let newQ = updateInfo.quali
                                                    setUpdateInfo(
                                                        {
                                                            ...updateInfo,
                                                            quali: newQ
                                                        }
                                                    )
                                                    console.log()
                                                }
                                                }

                                            ></input>
                                                <button className="circleBtn2 rounded-circle mx-3" onClick={(e) => {
                                                    e.preventDefault();
                                                    updateInfo.quali.splice(i, 1)
                                                    let newQuali = updateInfo.quali
                                                    setUpdateInfo(
                                                        {
                                                            ...updateInfo,
                                                            quali: newQuali
                                                        }
                                                    )
                                                    console.log(updateInfo.quali, 'update.quali')
                                                }
                                                }>
                                                    <FontAwesomeIcon className="closeBtn2" icon={faTimes}></FontAwesomeIcon>
                                                </button></div>)}
                                        </div>

                                    </div>

                                </div>


                                <div id="form3" className={formClass + " w-100"}>

                                    <div id="spec" className="w-100">
                                        <div className={align + "w-100"}>
                                            <div className="editTitle">Speciality</div>

                                            <div className={align + " mx-3 circleBtn3 rounded-circle"} onClick={() => setUpdateInfo(
                                                {
                                                    ...updateInfo,
                                                    spec: updateInfo.spec.concat([""])
                                                }
                                            )
                                            }>
                                                <FontAwesomeIcon className="closeBtn2" icon={faPlus}></FontAwesomeIcon></div>
                                        </div>


                                        <div className={align + "w-100 flex-column"}>
                                            {updateInfo.spec.map((q, i) => <div className={align2}><input className={inputClass2} value={updateInfo.spec[i]} placeholder="Speciality" key={i}
                                                onChange={(event) => {
                                                    updateInfo.spec[i] = event.currentTarget.value
                                                    let newS = updateInfo.spec
                                                    setUpdateInfo(
                                                        {
                                                            ...updateInfo,
                                                            spec: newS
                                                        }
                                                    )
                                                }
                                                }

                                            ></input>
                                                <button className="circleBtn2 rounded-circle mx-3" onClick={(e) => {
                                                    e.preventDefault();
                                                    updateInfo.spec.splice(i, 1)
                                                    let newSpec = updateInfo.spec
                                                    setUpdateInfo(
                                                        {
                                                            ...updateInfo,
                                                            spec: newSpec
                                                        }
                                                    )
                                                    console.log("setUpdateSpec")
                                                }
                                                }>

                                                    <FontAwesomeIcon className="closeBtn2" icon={faTimes}></FontAwesomeIcon>

                                                </button></div>)}
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div id="form3" className={formClass+ " w-75"}>


                                <div className="editTitle">Self-intro</div>
                                <textarea className={inputClass3} placeholder="Introduce yourself" value={updateInfo.intro} style={{ minHeight: "50%" }}
                                    onChange={(event) => setUpdateInfo({ ...updateInfo, intro: event.currentTarget.value })}></textarea>

                                <div className="editTitle">Upload A New Preview Video</div>
                                <input type="file" accept="video/*" onChange={(event) => {
                                    if (event.target.files) {

                                        setUpdateInfo({
                                            ...updateInfo,
                                            video: event.target.files[0]
                                        })

                                        console.log("setUpdateIntro")
                                    }
                                }}></input>



                            </div>


                            {loading ? <LoadingSpinner /> : <div></div>}

                            <div className="btn btn-secondary mt-3 submitCom" onClick={(e) => {
                                console.log('onClick running')
                                e.preventDefault();
                                setLoadingReg(true)
                                fetchPtEdit(ptId!)

                                console.log("setUpdateddddd")
                            }}>Submit</div>

                        </form>
                    </div>
                </div>



            </div>

        </Container >

    )
}

