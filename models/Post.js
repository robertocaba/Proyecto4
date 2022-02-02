const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Rellena el nombre']
    }, 
    
    image: String,
    like: Boolean,
    
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;