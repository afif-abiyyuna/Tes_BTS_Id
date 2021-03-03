const User = require("../models/user.model");
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');

class userController{
    static userRegister (req,res,next){
        const { username, email, password, phone, city, country, postcode, name, address} = req.body;
        User.create({username, email, password, phone, city, country, postcode, name, address})
        .then((result)=>{
            res.status(201).json({message:'Welcome New User', result });
        })
        .catch(next)
    }
    static userLogin(req, res, next) {
        const { email, password } = req.body;
        User.findOne({ email })
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.password)) {
              const access_token = jwt.sign({ _id: user._id }, 'Shopping');
              res.status(200).json({ success: true, access_token, user });
            } else throw { name: "LOGIN_FAILED" };
        })
        .catch(next);
    }
    static getAllUser(req,res,next){
        User.find()
        .then(result=>{
            res.status(200).json({message:'List of User', result});
        })
        .catch(next);
    }

}

module.exports = userController;