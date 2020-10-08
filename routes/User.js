const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const Todo = require('../models/Todo');
var cors = require('cors')

userRouter.use(cors({origin: 'http://localhost:3000'}));


const signToken = userID =>{
    return JWT.sign({
        iss : "Maskify",
        sub : userID
    },"Maskify", {expiresIn : "1h"});
}

userRouter.post('/register',(req, res)=>{
    const { username, password, role } = req.body;
    User.findOne({username},(err, user)=>{
        if(err){
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        }
        if(user){
            res.status(400).json({message : {msgBody : "Username is already taken", msgError: true}});
        }
        else{
            const newUser = new User({username, password, role});
            newUser.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(201).json({message : {msgBody : "Account successfully created", msgError: false}});
            });
        }
    });
});

userRouter.post('/login',passport.authenticate('local', {session : false}),(req, res)=>{
    if(req.isAuthenticated()){
       const {_id,username,role} = req.user;
       const token = signToken(_id);
       //for prod, make the cookies secure, and change the domain OR ELSE!!!!!
       //res.cookie('access_token',token,{secure: false, sameSite: 'strict', path:'/'}); 
       //convert to nextjs api routes :)
       res.setHeader('set-cookie', `access_token=${token}`)
       res.status(200).json({isAuthenticated : true,user : {username,role}});
    }
});

userRouter.get('/logout',passport.authenticate('jwt',{session : false}),(req,res)=>{
    res.clearCookie('access_token');
    res.json({user:{username : "", role : ""},success : true});
});

userRouter.post('/todo',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const todo = new Todo(req.body);
    todo.save(err=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            req.user.todos.push(todo);
            req.user.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(200).json({message : {msgBody : "Successfully created todo", msgError : false}});
            });
        }
    })
});

userRouter.get('/todos',passport.authenticate('jwt',{session : false}),(req,res)=>{
    User.findById({_id : req.user._id}).populate('todos').exec((err,document)=>{
        if(err){
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        }
        else{
            res.status(200).json({todos : document.todos, authenticated : true});
        }
    });
});

userRouter.get('/admin',passport.authenticate('jwt',{session : false}),(req,res)=>{
    if(req.user.role === 'admin'){
        res.status(200).json({message : {msgBody : 'You are an admin', msgError : false}});
    }
    else
        res.status(403).json({message : {msgBody : "Login as admin to access", msgError : true}});
});

userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const {username,role} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username,role}});
});


module.exports = userRouter;