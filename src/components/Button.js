import react from 'react'
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const Button = () => {


    const [storagedata, setData] = useState([])



    useEffect(() => {
        axios.get("/api/data/getdata").then(
            res => {
                setData(res.data)
            }
        )
    })

    return (
        <div className='text-center mt-5'>
            <Link to='/video-player'><button className='btn btn-primary ms-3  '>Play Video</button></Link>


            {storagedata.map((e) => {
                return (

                    <div className="card container text-start mt-5 p-3">
                        <h5> videoLength={e.videoLength} </h5>
                        <h5>    startTime={e.startTime}
                        </h5>
                        <h5>
                            endTime={e.endTime}</h5>
                        <h5>
                            totalTime={e.totalTime} minutes</h5>
                        <h5>    percentage={e.percentage}%
                        </h5></div>
                );
            })}
        </div>
    )
}
export default Button;