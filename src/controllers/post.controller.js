const post = require('../usecases/post.usecase')

async function getPost(request,response) {
    try {
        const allPosts = await post.getAllPosts()
        response.json({
            success: true,
            message: 'All posts',
            data: {
                post: allPosts,
            }
        })
    } catch (error) {
        console.error(error);
        response.statusCode = 500
        response.json({
            success: false,
            message: 'Could not get post',
            error,
        })
    }
  }

async function createPost(request,response) {
    console.log(request.query);
  try {
      const newPost = request.query
      const createPost = await post.createPost(newPost)
      response.json({
          success: true,
          message: 'Post created',
          data: {
              post: newPost,
          }
      })
  } catch (error) {
      console.error(error);
      response.statusCode = 500
      response.json({
          success: false,
          message: 'Could not create post',
          error,
      })
  }
}

async function deletePost(request,response) {
    console.log(request.query);
  try {
    const idPost = request.params.id
      const deletePost = await post.deletePost(idPost)
      response.json({
          success: true,
          message: 'Post deleted',
          data: {
              post: deletePost,
          }
      })
  } catch (error) {
      console.error(error);
      response.statusCode = 500
      response.json({
          success: false,
          message: 'Could not delete post',
          error,
      })
  }
}

  module.exports = {
      getPost,
      createPost,
      deletePost,
  }