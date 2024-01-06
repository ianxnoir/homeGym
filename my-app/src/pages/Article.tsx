
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState } from '../store';

export function News() {

    const token = useSelector((state: RootState) => state.auth.token)
    const [category, setCategory] = useState(0)


    // const selectCommandLine = (category: number) => {
    //     switch (category) {
    //         case 1:
    //             return {
    //                 title: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*伸展.*|.*筋.*"}}, {"title":1}).skip(0).limit(1).map(d=>d.title)`,
    //                 date: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*伸展.*|.*筋.*"}}, {"date":1}).skip(0).limit(1).map(d=>d.date)`,
    //                 content: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*伸展.*|.*筋.*"}}, {"content":1}).skip(0).limit(1).map(d=>d.content)`
    //             }
            
    //         case 2:
    //             return {
    //                 title: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*瑜.*"}}, {"title":1}).skip(0).limit(1).map(d=>d.title)`,
    //                 date: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*瑜.*"}}, {"date":1}).skip(0).limit(1).map(d=>d.date)`,
    //                 content: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*瑜.*"}}, {"content":1}).skip(0).limit(1).map(d=>d.content)`
    //             }
            
    //         case 3:
    //             return {
    //                 title: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*拳.*"}}, {"title":1}).skip(0).limit(1).map(d=>d.title)`,
    //                 date: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*拳.*"}}, {"date":1}).skip(0).limit(1).map(d=>d.date)`,
    //                 content: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*拳.*"}}, {"content":1}).skip(0).limit(1).map(d=>d.content)`
    //             }
            
    //         case 4:
    //             return {
    //                 titie: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*核.*"}}, {"title":1}).skip(0).limit(1).map(d=>d.title)`,
    //                 date: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*核.*"}}, {"date":1}).skip(0).limit(1).map(d=>d.date)`,
    //                 content: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*核.*"}}, {"content":1}).skip(0).limit(1).map(d=>d.content)`
    //             }

            
    //         case 5:
    //             return {
    //                 titie: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*核.*"}}, {"title":1}).skip(0).limit(1).map(d=>d.title)`,
    //                 date: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*核.*"}}, {"date":1}).skip(0).limit(1).map(d=>d.date)`,
    //                 content: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*核.*"}}, {"content":1}).skip(0).limit(1).map(d=>d.content)`
    //             }

            
    //         case 6:
    //             return {
    //                 titie: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*健身.*"}}, {"title":1}).skip(0).limit(1).map(d=>d.title)`,
    //                 date: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*健身.*"}}, {"date":1}).skip(0).limit(1).map(d=>d.date)`,
    //                 content: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*健身.*"}}, {"content":1}).skip(0).limit(1).map(d=>d.content)`
    //             }

            
    //         case 7:
    //             return {
    //                 titie: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*增肌.*|.*肌肉.*|.*腹肌.*|.*肌力.*"}}, {"title":1}).skip(1).limit(1).map(d=>d.title)`,
    //                 date: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*增肌.*|.*肌肉.*|.*腹肌.*|.*肌力.*"}}, {"date":1}).skip(1).limit(1).map(d=>d.date)`,
    //                 content: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*增肌.*|.*肌肉.*|.*腹肌.*|.*肌力.*"}}, {"content":1}).skip(1).limit(1).map(d=>d.content)`
    //             }
            

    //         case 8:
    //             return {
    //                 titie: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*心肌.*"}}, {"title":1}).skip(6).limit(1).map(d=>d.title)`,
    //                 date: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*心肌.*"}}, {"date":1}).skip(6).limit(1).map(d=>d.date)`,
    //                 content: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*心肌.*"}}, {"content":1}).skip(6).limit(1).map(d=>d.content)`
    //             }
            
    //         case 0:
    //             return {
    //                 title: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*伸展.*|.*筋.*"}}, {"title":1}).skip(0).limit(1).map(d=>d.title)`,
    //                 date: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*伸展.*|.*筋.*"}}, {"date":1}).skip(0).limit(1).map(d=>d.date)`,
    //                 content: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*伸展.*|.*筋.*"}}, {"content":1}).skip(0).limit(1).map(d=>d.content)`
    //             }

            

    //         default:
    //             return {
    //                 title: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*伸展.*|.*筋.*"}}, {"title":1}).skip(0).limit(1).map(d=>d.title)`,
    //                 date: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*伸展.*|.*筋.*"}}, {"date":1}).skip(0).limit(1).map(d=>d.date)`,
    //                 content: `db.getSiblingDB('homegym').articles.find({ "title" : {$regex : ".*伸展.*|.*筋.*"}}, {"content":1}).skip(0).limit(1).map(d=>d.content)`
    //             }
    //     }
    // }

    useEffect(() => {

        const fetchPreference = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getUserPreference`,
                {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })

            const result = await res.json();
            if (result.result.category1) {
                let category = result.result
                for (let cat in result.result) {
                    if (category[cat]) {
                        setCategory(category[cat])
                    }
                }
            }
        }
        fetchPreference()
    }, [token])


    useEffect(() => {

        // const fetchNews = async () => {

        //     let command = selectCommandLine(category)

        //     const res = await fetch(`http://www.Lawrence-gym.tk/`,
        //         {
        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json"
        //             },
        //             body: JSON.stringify(command)
        //         }
        //     )
        //     const result = await res.json()
        // }


        // fetchNews()
    }, [category])


    return (
        <div>
            <div className="d-flex justify-content-around py-3">
                <div style={{ width: "40%", backgroundColor: "whitesmoke" }}>
                    <div className="title"></div>
                    <div className="date"></div>
                    <div className="content"></div>
                </div>
                <div style={{ width: "40%", backgroundColor: "whitesmoke" }}>
                    <div className="title"></div>
                    <div className="date"></div>
                    <div className="content"></div>
                </div>

            </div>
        </div>
    )
}
