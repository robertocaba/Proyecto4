const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
      
    },
    email:{
        type:String,
        required: [true, 'Rellena el mail']
    }, 
    password:{
        type:String,
        required: [true, 'Rellena la clave']
    }, 

    age:{
        type:Number,
       
    }, 

    tokens: [],
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;