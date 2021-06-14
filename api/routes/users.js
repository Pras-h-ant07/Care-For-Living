const express = require('express');

const mongoose = require('mongoose');
const app = express();
const User=require('../model/testquery');
const router = express.Router();
var bcrypt = require('bcryptjs');
var Signup=require('../model/register');
var subscription = require('../model/subscription');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  });

router.get('/',function(req,res){
    User.find(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
})


///////////////////////////////////////////// subscription ////////////////////////////////////////////

router.post('/addData',function(req,res){
  const Fullname=req.body.Fullname
  const Username=req.body.Username
  const Email=req.body.Email
  const Phone=req.body.Phone
  const Address=req.body.Address
  const Plan=req.body.Plan
  const Time=req.body.Time
  new subscription({
    Fullname : Fullname,
    Username : Username, 
    Email : Email, 
    Phone : Phone, 
    Address : Address, 
    Plan : Plan, 
    Time : Time

  }).save(function(err,data){
      if(err){
          console.log(err)
      }
      else{
          console.log(data)
          res.json(data)
      }
  })
})

// ============================================= GET ================================================== //
router.get('/getData', function(req,res){
  subscription.find(function(err,data){
    if(err){
      console.log(err)
    }
    else{
      res.json(data)
    }
  })
})

///////////////////////////////////////////subscription end////////////////////////////////////////////


router.post('/add',function(req,res){
    const Fullname=req.body.Fullname
    const Email=req.body.Email
    const Address=req.body.Address
    const Phone=req.body.Phone
    const Message=req.body.Message
    const Question=req.body.Question
    new User({
        Fullname:Fullname,
        Email:Email,
        Address:Address,
        Phone:Phone,
        Message:Message,
        Question:Question
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})
//////////////////////////////////////////////////////updating data///////////////////////////////////
router.post('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let UserUpdate = {
        _id :id,
        Fullname : req.body.Fullname,
        Email : req.body.Email,
        Address : req.body.Address,
        Phone : req.body.Phone,
        Message : req.body.Message,
        Question : req.body.Question
    };
    User.findOneAndUpdate({_id:id}, UserUpdate,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            // console.log(data)
            res.json(data)
        }
        
    })
})

/////////////////edit 
router.get('/edit/:id',(req,res)=>{
    let id = req.params.id;
    User.findById(id, function (err,data){
        res.json(data);
})
})

//////////////////////////////////////////////////delete data///////////////////////////////////////////////
router.get('/delete/:id',(req,res)=>{
    let id=req.params.id
    User.findOneAndRemove(id,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
            console.log(data)
        }
    })
})


/////////////////////////////////////////////////Signup//////////////////////////////////////////////////////////

router.post("/addSignup", (req, res) => {
    console.log(req.body.Username);
  
    Signup.findOne({ Email: req.body.Email }, (err, callbackData) => {
      if (err) console.log(err);
      else {
        if (callbackData) {
          res.json({ message: "Already Registered" });
        } else {
          if (req.body.Password == req.body.Reconfirmpassword) {
            var salt = bcrypt.genSaltSync(10);
            const hashing = bcrypt.hashSync(req.body.Password, salt);
            
  
            new Signup({
                Fullname: req.body.Fullname,
                Username: req.body.Username,
                Email: req.body.Email,
                Phone: req.body.Phone,
                Password: hashing,
                Reconfirmpassword: req.body.Reconfirmpassword
  
            }).save((err, callback) => {
              if (err) console.log(err);
              else res.json({ message: "registered" });
            });
          } else {
            res.json({ message: "Password doesn't matched" });
          }
        }
      }
    });
  }
  );

////////////////////////////////////////////////////login//////////////////////////////////////////////////

router.post('/login', (req, res) => {
    let regObj = {
      Username: req.body.Username,
      Password: req.body.Password
    }
    Signup.findOne({
      Username: regObj.Username
    },
      (err, cb) => {
        if (err) {
          res.json({ "message": err });
        }
        else {
          if (cb == null) {
            res.json({ "message": "Check Your Credentials" });
          }
          else {
            bcrypt.compare(regObj.Password, cb.Password, function (err, callbackData) {
              if (err) {
                // handle error
                console.log(err);
              }
              if (callbackData) {
                // Send JWT
                cb['token'] = cb.generateJwt();
                // console.log(cb.token);
                // console.log(data)
                // res.json(data);
                let responseObj = {
                  token: cb.token
                };
                console.log(responseObj);
                res.json(responseObj);
              }
              else {
                // response is OutgoingMessage object that server response http request
                res.json({ message: 'passwords do not match', success: false });
              }
            });
          }
        }
  
      })
  
    console.log(regObj);
  })


module.exports = router;