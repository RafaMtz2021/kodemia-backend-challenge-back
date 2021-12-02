
const Post = require ('../models/post.model')
async function getAllPosts() {
    const allPosts = await Post.find()

    return allPosts
  }

async function postPost(post) {
  const postPost = await Post.create(post)

}

module.exports = {
    getAllPosts,
    postPost
}
