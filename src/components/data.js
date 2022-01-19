import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
 import { useEffect,useState } from 'react';
const Data=()=>
{
    const [data,setData]=useState([])






  useEffect(()=>{
      axios.get('/api/data/getdata').then(res=>{
setData(res.data)
    }).catch(err=>{
          console.log(err)
      })

  }) 

  return(
      <div className='card container mt-3'>
           {data.map((e)=>{
       return (
<div>
TotalLength:{e.videoLength}<br/>
          StartTime:{e.startTime} <br/>
          EndTime:{e.endTime} <br/>
          TotalTime:{e.totalTime} <br/>
          Percentage:{e.percentage} <br/>
</div>
     );})}
         
      </div>
  )
}
 
export default Data;