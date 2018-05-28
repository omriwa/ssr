var router = require("express").Router();

router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});

router.get('/1',function(req,res){
    res.send(req.url);
});
router.get('/2',function(req,res){
    res.send(req.url);
});
router.get('/3',function(req,res){
    res.send(req.url);
});
router.get('/4',function(req,res){
    res.send(req.url);
});
router.get('/5',function(req,res){
    res.send(req.url);
});

module.exports = router;