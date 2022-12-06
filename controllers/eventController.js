const express =require('express');
var router =express.Router();
var ObjectId= require('mongoose').Types.ObjectId;

var {Event} = require('../models/event');


//=>localhost:3000/events/
//getting all event data
router.get('/',(req,res)=>{
    Event.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in Retriving Events :'+JSON.stringify(err,undefined,2));}
    });
});

//getting data by id
router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`NO Record with given id : ${req.params.id}`);
Event.findById(req.params.id,(err,doc)=>{
if(!err){res.send(doc);}
else{console.log('Error in retriving Event :'+JSON.stringify(err,undefined,2));}
});
});



//saving the event
router.post('/',(req,res)=>{
    var ev = new Event({
        title:req.body.title,
        description:req.body.description,
        date:req.body.date,
        address:req.body.address,
        image:req.body.image,
    });
    ev.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in event save:'+JSON.stringify(err,undefined,2));}
    });  
});


//updating event record
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id :${req.params.id}`);
    var ev ={
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        address: req.body.address,
        image: req.body.image,
    };
    Event.findByIdAndUpdate(req.params.id,{$set: ev},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in Event update:'+JSON.stringify(err,undefined,2));}
    });
});
//deleting event record
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

    Event.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('error in event delete :'+JSON.stringify(err,undefined,2));}
    })
})
module.exports= router;