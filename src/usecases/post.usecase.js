
const Post = require ('../models/post.model')
async function getAllPosts() {
    const allPosts = await Post.find()
    return allPosts
  }

async function createPost(post) {
  const createPost = await Post.create(post)
}

async function deletePost(id) {

  const deletePost = await Post.findByIdAndDelete(id)

}

//Cual es el punto?
async function updatePost(){
  
}
module.exports = {
    getAllPosts,
    postPost,
    updatePost,
    createPost,
    deletePost,
}
