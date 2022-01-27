const post = require('../usecases/post.usecase')
const Post = require ('../models/post.model')

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

async function updatePost(req,res){
    //entidades,casos de usos, controladores, router
    console.log('Updating Post: ');
    const modelId = req.body._id;
    const newName = req.body.title;
    const newBody = req.body.body;
    const newTags = req.body.tags

    console.log(modelId + ' : Modelo')
    console.log('name ' + newName )
    

    Post.findById(modelId).then((model) => {
        console.log('Returning Model: ' + model)
        return Object.assign(model, {
            title: newName,
            body: newBody,
            tags: newTags
        });
    }).then((model) => {
        return model.save();
    }).then((updatedModel) => {
        res.json({
            msg: 'post updated',
            updatedModel
        });
    }).catch((err) => {
        res.send(err);
    });
}

async function getPostById(request,response) {
    console.log(request.query);
  try {
    const idPost = request.params.id
   
      const getPostById = await post.getPostById(idPost)
      response.json({
          success: true,
          message: idPost,
          data: {
              post: getPostById,
          }
      })
  } catch (error) {
      console.error(error);
      response.statusCode = 500
      response.json({
          success: false,
          message: 'Could not get post: ',
          error,
      })
  }
}

  module.exports = {
      getPost,
      updatePost,
      createPost,
      getPostById,
  }
