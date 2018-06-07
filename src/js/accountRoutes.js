const router = require("express").Router();

router.use(function(req,res,next){
    next();
});

router.post('/login',function(req,res){
    res.send('login');
});

router.post('/register',function(req,res){
   res.send('register'); 
});

module.exports = router;