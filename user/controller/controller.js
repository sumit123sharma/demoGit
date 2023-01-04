// //all the api's of user is made here


const express = require('express');
const mongoose = require('mongoose');
const model = require('../model/model')
const bcrypt = require('bcrypt');

// all the api's of user
const user = {}


// user signup api
user.signup = async(req,res)=>{
    try{
        let data = req.body
        let hashPassword = bcrypt.hashSync(req.body.password , 10)
        hashPassword = data.password 


        let emailExist =await model.findOne({email:req.body.email})
        if(emailExist){
            res.send({
                succuss:false,
                message:"email already exist"
            })
        }else{
            new model(data).save(function(err,doc){
                if(err)console.log(err)
                res.send({
                    succuss:true,
                    message:"signup succussful" , doc
                
                })
                console.log(doc)

            })
        }
    }
    
    catch(err){
        res.send({
            succuss:false,
            message:err.message
        })
    }
}                      // now give route to signup in index.js/routes file


//user login api

user.login = async(req,res)=>{
    try{
        let data = req.body
        let emailcheck = await model.findOne({email:req.body.email})
        
        if(!emailcheck){
            res.send({
                success:false,
                message:"user not found"
            })
        }else{
            let pwdcheck = await bcrypt.compare(req.body.password , emailcheck)
            if(pwdcheck){
                res.send({
                    success:true,
                    message:"password matched login succussful" , emailcheck
                })
            }else{
                res.send({
                    success:false,
                    message:"incorrect password"
                })
            }
        }
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
}                           // now give the login route in index.js/routes


module.exports= user;