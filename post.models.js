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
        maxlength:1000,
        required: true,
    },
    url: {
        type: String,
        min:2,
        max:120,
        required:true,
    },
    tags: {
        type:Array,
        required:true,
        maxlength:50,
    },
    date: {
        type:String,
        required:true,
        maxlength:10,
    },
    likes: {
        type:Number,
        required:true,
        maxlength:100,
    },
});

const Post = mongoose.model('post',postSchema);

module.exports = Post;