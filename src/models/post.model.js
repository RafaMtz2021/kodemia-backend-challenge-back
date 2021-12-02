const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength:2,
        maxlength:100,
        required: true,
    },
    body: {
        type: String,
        minlength:2,
        maxlength:10000,
        required: true,
    },
    url: {
        type: String,
        min:2,
        max:200,
        required:true,
    },
    tags: {
        type:Array,
        required:true,
        maxlength:4,
    },
    date: {
        type:String,
        required:true,
        maxlength:10,
    },
    likes: {
        type:Number,
        required:true,
        max:100000,
    },
});

const Post = mongoose.model('post',postSchema);

module.exports = Post;