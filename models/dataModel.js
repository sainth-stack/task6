const mongoose=require('mongoose')
const dataSchema=mongoose.Schema({
    videoLength:{
        type:String,
        require:true
    },
    startTime:{
        type:String,
        require:true
    },
    endTime:{
        type:String,
        require:true
    },
    totalTime:{
        type:String,
        require:true
    },
    percentage:{
        type:String,
        require:true
    }

},{
    timeStamps:true
}
)
const data=mongoose.model('products',dataSchema)
module.exports=data