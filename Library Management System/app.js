const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const userRoutes=require('./routes/userRoutes');
const sequelize=require('./config/database');
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('views'));
app.use('/books',userRoutes);

sequelize.sync()
         .then((res)=>{
            console.log("Connected to database");
            app.listen(7000,()=>{
                console.log("Server started running on port 7000");
            })
         })
         .catch((err)=>console.log("Error connecting to database"));