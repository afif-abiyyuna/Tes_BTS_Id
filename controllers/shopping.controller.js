const Shopping = require("../models/shopping.model");


class shoppingController{
    static createShopping (req,res,next){
        const { name, createdAt} = req.body;
        Shopping.create({ name, createdAt})
        .then(result=>{
            res.status(201).json({message:"Success to create shopping", result});
        })
        .catch(next);
    }
    static getAllShopping (req,res,next){
        Shopping.find()
        .then(result=>{
            res.status(200).json({message:"Success to get all shopping", result});
        })
        .catch(next);
    }
    static getShoppingById (req,res,next){
        const {shoppingId} = req.params;
        Shopping.findById(shoppingId)
        .then(result=>{
            res.status(200).json({message:'success get shopping ID', result});
        })
        .catch(next);
    }
    static updateShopping (req,res,next){
        const { name, createdAt} = req.body;
        const {shoppingId} = req.params;
        const updatedData = { name, createdAt};
        for (let key in updatedData){
            if(!updatedData[key]){
              delete updatedData[key]
            }
        }
        Shopping.findByIdAndUpdate(shoppingId, updatedData, {new:true})
        .then(result=>{
            res.status(200).json({message:'success updated shopping data', result});
        })
        .catch(next);
    }
    static deleteShopping (req,res,next){
        const {shoppingId} = req.params;
        Shopping.findByIdAndDelete(shoppingId)
        .then(result=>{
            res.status(200).json({message:'success deleted shopping data', result});
        })
        .catch(next);
    }
}

module.exports = shoppingController;