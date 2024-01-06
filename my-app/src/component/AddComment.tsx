export{}

// import React, { useState, useEffect, constructor, Component } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { push } from 'connected-react-router';
// import { useForm } from 'react-hook-form';

// import { CommentForm } from '../type'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faThumbsUp as faSolidThumb, faPlusCircle,faTimes } from "@fortawesome/free-solid-svg-icons";
// import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
// import { RootState } from '../store';
// import BeautyStars from 'beauty-stars';

  
// export function AddComment() {
  
    

    
//     // const { addCom, handleSubmitComment } = useForm<ICommentForm>();
//     const [messageForComment, setMessageForComment] = useState("")
//     const inputClass = "w-100 p-2 mb-3 bg-secondary text-white text-light"

//     const [star, setStar] = useState(0);
    
//     const [form, setForm] = useState<CommentForm>(

//         {
//             content: "",
//             // score: star,

//         }
//     )
//     const [catList, setCatList] = useState<{ id: string, category: string }[]>([])
//     const [checkedBox, setCheckedBox] = useState([] as string[]);
//     // const [categories, setCategories] = useState<(null | string)[]>([])


//     const [commentFormClass, setCommentFormClass] = useState("translate")
//     const token = useSelector((state: RootState) => state.auth.token)

//     async function fetchComment() {

//         if (form.content.length < 1) {
//             return setMessageForComment("Please input the content of comment before you submit it.")
//         }
//         // if (checkedBox.length === 0) {
//         //     return setMessage("select at least one category")
//         // }


//         console.log(form)
//         const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/addComment`,
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     'Authorization': 'Bearer ' + token

//                 },
//                 body: JSON.stringify({
//                     ...form,
//                     // category1: parseInt(checkedBox[0]),
//                     // category2: parseInt(checkedBox[1])
//                 })
//             }
//         )

//         let result = await res.json();
//         if (result.msg === "Successful") {
//             setMessageForComment("Successful")
//             setTimeout(() => { setCommentFormClass("none") }, 1000)
//             return setMessageForComment("")

//         } else {
//             return setMessageForComment("try again")
//         }

//     }   


    
//     useEffect(() => {
       
//     }, [star])


//     return (
//         <div>


//             {/* <span onClick={() => setCommentFormClass("")}>
//                 <FontAwesomeIcon className="addComment" icon={faPlusCircle}></FontAwesomeIcon>
//             </span> */}

//             <div>
//                 <div className={commentFormClass+" formshadow2 opacity-5" }onClick={() => setCommentFormClass("translate")}>
//                     <div className="d-flex justify-content-center align-items-center opacity-5 ">
//                     <form className="d-flex flex-column justify-content-center align-items-center p-5 w-20 opacity-5  " style={{ backgroundColor: "white" }}>
//                         <div className="align-self-end px-1" onClick={() => setCommentFormClass("none")}> <FontAwesomeIcon className="closeBtn" icon={faTimes}></FontAwesomeIcon></div>

//                             <div className="py-2 highlight ratingTitle"> Rate this PT </div>

//                             <div className="py-2">Type Your Comment</div>

//                             <div className="d-flex justify-content-center align-items-center w-100 py-3">
                               
//                                 <textarea placeholder="Share your thoughts" className={inputClass} value={form.content!}
//                                     onChange={(e) => {
//                                         if (form) {
//                                             setForm({
//                                                 ...form,
//                                                 content: e.currentTarget.value
//                                             })
//                                         }
//                                     }
//                                     }

//                                 ></textarea>
//                             </div>

//                             <div>How was everything?</div>
//                             <div className="d-flex justify-content-center align-items-center w-75 flex-wrap m-3">
//                                 <BeautyStars
//                                 activeColor="rgb(255,112,67)"
//                                     value={star}
//                                     onChange={star => setStar(star)} 
//                                 />
                                                                
//                             </div>

//                             <button type="submit" className="btn btn-secondary mt-3" onClick={(e) => {
//                                 e.preventDefault();
//                                 fetchComment()
//                             }}>Submit</button>
//                              <div>{messageForComment}</div>
//                         </form>
//                     </div>
//                 </div>
//             </div>


//         </div>





//     )
// }


