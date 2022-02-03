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
    commentId: [{type: mongoose.isValidObjectId, ref:'Comment'}],
}, { timestamps: true });
UserSchema.methods.toJSON = function() {
    const user = this._doc;
    delete user.tokens;
    delete user.password;
    return user;
}

const User = mongoose.model('User', UserSchema);

module.exports = User;