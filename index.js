const express=require ('express')
var dbconnection=require('./db')
const app=express()
const bodyParser=require('body-parser');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
let cors = require('cors')
app.use(cors())

var dataRoutes=require('./routes/dataRoutes')
app.use('/api/data',dataRoutes)
app.get('/',(req,res)=>{
    res.send('this is from backend')
})

app.listen(5000,()=>{
    console.log('server started')
})