
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

async function getPostById(id) {

  const getPostById = await Post.findById(id)
  return getPostById

}

module.exports = {
    getAllPosts,
    createPost,
    deletePost,
    getPostById,
}
