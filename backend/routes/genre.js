const router = require("express").Router();
const genre = require("../models/genre");

//Get genre from db
router.get("/get",(req,res)=>{
    genre.find().exec((err,genre)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingenre:genre,
        });
    });
});

//Insert genre to db
router.post("/create" ,(req,res)=>{
 
    let newgenre = new genre(req.body);
 
    newgenre.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"genre save successfully"
        });
    });
});

module.exports = router;