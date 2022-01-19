const express = require("express");

const router=express.Router();
const Data=require('../models/dataModel')


router.put('/getdata/:id',(req,res)=>{
    console.log(req.body)
    console.log(req.params.id)
    let query={id:parseInt(req.params.id)}
    let data={
        
        videoLength:req.body.videoLength,
        startTime:req.body.startTime,
        endTime:req.body.endTime,
        totalTime:req.body.totalTime,
        percentage:req.body.percentage
         
     }
     let dataSet={
         $set:data
     }

Data.updateOne(query,dataSet,(err,result)=>{
    if(err)throw err
    res.send(data)
})
    })



router.get('/getdata',(req,res)=>{
    Data.find({},(err,docs)=>{
        if(!err){
            return res.send(docs)
        }
        else{
            return res.status(400).json({message:'something went wrong'})
        }
    })
})
module.exports=router