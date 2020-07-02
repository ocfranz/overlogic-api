const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
    username : {type : String, required: true},
    email : {type : String, required: false},
    password : {type : String, required: true},
    name : { type : String , required : true},
    joinDate : {type : Date, default: Date.now},
    createdAt: {type: Date, default: Date.now()}
})

UserSchema.pre("save", function(next){
    if ( this.password && this.isModified('password') ) {
        this.password = bcrypt.hashSync(this.password, 10);
    }
    next();
})
UserSchema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, Bcrypt.compareSync(plaintext, this.password));
};

module.exports = mongoose.model('Users', UserSchema);