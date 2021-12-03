
const Post = require ('../models/post.model')
async function getAllPosts() {
    const allPosts = await Post.find()

    return allPosts
  }

async function createPost(post) {
  const createPost = await Post.create(post)

}

module.exports = {
    getAllPosts,
    createPost
}
