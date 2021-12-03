
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

module.exports = {
    getAllPosts,
    createPost,
    deletePost,
}
