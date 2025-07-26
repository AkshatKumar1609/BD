const userModel = require("../models/userModel");
const inventoryModel = require("../models/inventoryModel");

const createInventoryController = async (req,res)=>{
    try{
        const {email,inventoryType}=req.body;
        // validation
        const user=await userModel.findOne({email});
        if(!user){
            throw  new Error('User not found');
        }
        if(inventoryType==="in" && user.role!=='donar'){
            throw new Error('Not a donar account');
        }
        if(inventoryType==="out" && user.role!=='hospital'){
            throw new Error('Not a hospital account');
        }
        // save record
        const inventory =new inventoryModel(req.body);
        await inventory.save();
        return res.status(201).send({
            success:true,
            message:'New Blood record added successfully'
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error In Create Inventory API',
            error 
        })
    }
};

module.exports={ createInventoryController };