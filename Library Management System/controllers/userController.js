const User=require('../models/index');

exports.createUser=async(req,res)=>{
    try {
        console.log(req.body);
        const user=await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({Error:'Adding book to library'});
    }
};
exports.getUsers=async(req,res)=>{
    try {
        const users=await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({Error:'Getting books from library'})
    }
};
exports.deleteUser=async(req,res)=>{
    try {
        const userId=req.params.id;
        await User.destroy({where:{id:userId}});
        res.status(204).json();
    } catch (error) {
        res.status(500).json({Error:'Returning book to library'});
    }
};