
import { Col, Container, Row, } from 'reactstrap';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import React, { useEffect, useState } from 'react';
import { PtBox } from '../component/PtBox'
import useReactRouter from 'use-react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store";
import { fetchCards } from "../redux/ptCards/actions"

export function Category() {
    const { match: { params: { activeKey } } } = useReactRouter<{ activeKey: string }>();

    // const [category, setCategory] = useState(activeKey);
    const [key, setKey] = useState(activeKey || "1");
    const [page, setCurrentPage] = useState(1)
    // const [pageNum, setPageNum] = useState(1)
    console.log(page + "page")
    console.log(key + "category")
    const dispatch = useDispatch();
    const pageNum = useSelector((state: RootState) => state.cardReducer.count)
    const cards = useSelector((state: RootState) => state.cardReducer.result)

    // const [cards, setCards] = useState<
    //     {
    //         id: number,
    //         displayname: string,
    //         height: number,
    //         gender: string,
    //         qualification: string[],
    //         speciality: string[],
    //         intro: string,
    //         categories: string[],
    //         photo: [],
    //         video: string,
    //         avgScore: number,
    //         ratingNo: number,

    //     }[] | null>(null)

    const tabList = ["Stretching", "Yoga", "Boxing", "Core Fusion", "Functional training", "Keep fit", "BodyBuilding", "Cardio"]

    // const fetchCards = async function fetchCards(category: string, page: number) {
    //     console.log(category,'cat')
    //     const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getCards`,
    //         {
    //             method: "POST",
    //             headers: {

    //                 "Content-Type": "application/json; charset=utf-8",
    //             },
    //             body: JSON.stringify({
    //                 page: page,
    //                 category_id: parseInt(category)
    //             })

    //         })

    //     const result = await res.json();

    //     //could be empty array as no record, return null
    //     if (Array.isArray(result.result) && result.result.length > 0) {
    //         setCards(result.result)
    //         setPageNum(result.count)
    //     } else {
    //         return setCards(null)
    //     }

    // }

    useEffect(() => {
        // fetchCards(key, page)
        dispatch(fetchCards(key, page))


    }, [page, key, dispatch])



    return (


        <Container fluid="md" >
            <Row>
                <Col><h3 className="catTitle">Category list of Personal Trainer</h3></Col>
            </Row>
            <Row>
                <Col>

                <div className="ptlists">
                <Tabs
                    id="controlled-tab-example"
                    className="tab"
                    activeKey={key}
                    onSelect={(k) => {
                        setKey(k as string)
                        setCurrentPage(1)
                        // setCategory(k as string)
                    }}
                >
               
                        {tabList.map((tab, i) =>

                            <Tab eventKey={(i + 1).toString()} title={tab} key={i}>

                            </Tab>

                        )}

                    </Tabs>




                    {cards != null ? cards.map((card, i) =>
                        <PtBox
                            displayname={card.displayname}
                            categories={card.categories}
                            avgScore={card.avgScore}
                            ratingNo={card.ratingNo}
                            intro={card.intro}
                            photo={card.photo}
                            video={card.video}
                            referId={card.id}
                            key={i}
                        />

                    ) : <div>Be our first PT</div>}

            </div>


                </Col>
            </Row>
            <Row >

                <Col className="d-flex justify-content-center align-items-center py-3">
                    <select  className="select-css" name="pagination" id="pagination" value={page} onChange={(e) => {
                        setCurrentPage(parseInt(e.currentTarget.value))
                        window.scrollTo(0,0);
                    }} >

                        {pageNum && pageNum>0 ? Array(Math.ceil(pageNum)).fill("").map((p, i) =>
                            <option key={i} value={i + 1}> Page {i + 1}</option>
                        ) : <option value="1">Page 1</option>}


                    </select>

                    {/* <button type="button" className="btn btn-secondary backBtn" onClick={() => setCurrentPage(i-1)}> previous</button>
                        <button type="button" className="btn btn-secondary nextBtn" onClick={() => setCurrentPage(i+1)}> next </button> */}
                </Col>
            </Row>
        </Container >


    )
}

