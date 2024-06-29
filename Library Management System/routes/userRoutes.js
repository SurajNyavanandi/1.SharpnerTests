const userController=require('../controllers/userController');
const express=require('express');
const router=express.Router();

router.post('/',userController.createUser);
router.get('/',userController.getUsers);
router.delete('/:id',userController.deleteUser);

module.exports=router;