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

async function postPost(request,response) {
    console.log(request.query);
  try {
      const newPost = request.query
      const postPost = await post.postPost(newPost)
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

  module.exports = {
      getPost,
      postPost,
  }