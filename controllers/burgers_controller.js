var express=require('express');


var router= express.Router();

var burger=require("../models/burger.js");

router.get("/",function(req,res){
    burger.selectAll(function(data){
        var hbsObjecct={
            burgers:data
        };
        console.log(hbsObjecct);

            res.render("index", hbsObjecct);
        })
    });

router.post('/api/burgers',function(req,res){
    burger.insertOne([
        "burger_name","devoured"
    ],[
        req.body.name, req.body.devoured

    ], function(result){
        res.json({id: result.insertId});
    });
});
// what does put do?????

router.put('/api/burgers/:id',function(req,res){
    var condition="id="+req.params.id;
    console.log('condition',condition);
    burger.updateOne({
        devoured:true
    }, condition, function(result){
        if(result.changedRows==0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    })
})

module.exports=router

