const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        default: "example@gmail.com",
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email'],
    },
    password: {
        type: String,
        required: true,
        minlength: [4, 'Password is too short']
    },
    phone: {type:String},
    country:{type:String},
    city: {type:String},
    postcode: {type:Number},
    name: {type:String},
    address: {type:String}



});

userSchema.pre('save', function (next) {
    Member.findOne({ email: this.email })
    .then((result) => {
        if (result) {
            next({ name: 'EMAIL ALREADY EXIST' });
        }
        else {
            const salt = bcrypt.genSaltSync(10);
            this.password = bcrypt.hashSync(this.password, salt);
            next();
        }
    })
    .catch((err) => next({ name: 'MONGOOSE DATABASE ERROR' }));
});

const User = mongoose.model('User', userSchema);
module.exports = User;