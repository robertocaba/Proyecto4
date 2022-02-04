const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
    name:{
        type:String,
    }, 
    reviews:[{
        userId: {
            type:ObjectId,
            ref:'User',
        },
        comment: String,
    }],
    image: String,
    like: Boolean,
    wishList: {ObjectId},
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;