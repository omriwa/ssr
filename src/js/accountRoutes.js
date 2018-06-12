const router = require("express").Router();
const User = require("../schemas/user.js");

router.use(function(req, res, next) {
    next();
});

router.post('/login', function(req, res) {
    var userData = req.body,
        userRes;

    User.find({ $and: [{ password: userData.pass }, { username: userData.uName }] }).exec(function(e, user) {
        console.log(user);
        if (user.length != 0)
            userRes = 'Login';
        else
            userRes = 'Username or Password are incorrect';
        res.send(userRes);
    });
});

router.post('/register', function(req, res) {
    var userData = req.body,
        userRes;

    console.log(userData);

    User.find({ $or: [{ username: userData.uName }, { email: userData.email }] }).exec(function(e, user) {
        if (user.length == 0) {
            let newUser = new User({ //create new user obj
                username: userData.uName,
                name: userData.fName,
                lastName: userData.lName,
                password: userData.pass,
                email: userData.email
            });
            //save it to db
            newUser.save(newUser, function(err) {
                if (err)
                    userRes = 'error with registeration';

                else
                    userRes = 'successful registeration';

                res.send(userRes);
            });
        }

        else {
            userRes = 'Username or Email exist'
            res.send(userRes);
        }

    });
});

module.exports = router;
