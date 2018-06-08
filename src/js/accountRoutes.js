const router = require("express").Router();
const User = require("../schemas/user.js");

router.use(function(req,res,next){
    next();
});

router.post('/login',function(req,res){
    res.send('login');
});

router.post('/register',function(req,res){
    var userData = req.body;
    User.find({$or: [{username: userData.uName},{email: userData.email}]}).exec(function(e,user){
        console.log('search for ' + user);
        if(user != null)
            res.send('create');
        else
            res.send('exist');
    });
});

module.exports = router;