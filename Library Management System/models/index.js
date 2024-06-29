const Sequelize=require('sequelize');
const sequelize=require('../config/database');
const User=sequelize.define('library',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
        
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=User;