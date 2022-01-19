import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
const StorageData=()=>{

    
    const [storagedata, setData] = useState([])



    useEffect(() => {
        axios.get("/api/data/getdata").then(
            res => {
                setData(res.data)
            }
        )
    })

   
    return(
        <div>

             
{storagedata.map((e)=>{
       return (

<div className="card">
    videoLength={e.videoLength}<br/>
    startTime={e.startTime}<br/>
    endTime={e.endTime}<br/>
    totalTime={e.totalTime}<br/>
    percentage={e.percentage}<br/>
</div>
     );})}

        </div>
        
    )

}
export default StorageData