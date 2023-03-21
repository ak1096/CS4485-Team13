const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = requite("bcrypt"); // for password hashing

const userSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        userId:{
            type: String,
            required: true,
            unique: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            min: 5,
            max: 255
        },
        // active is for if a user wants to be deleted, turn boolean to false
        active:{
            type: Boolean,
            default: true
        },
        password:{
            type: String,
            required: true,
            min: 5,
            max: 2048
        },
        /*resetPasswordToken:{
            type: String,
            default: null
        },*/
        date:{
            type: Date,
            default: Date.now
        }
    }
);

// Hash password
//userSchema.methods.comparePassword = function(password){
//    return bcrypt.compareSync(password, this.hash_password);
//}

module.exports = mongoose.model("User", userSchema);