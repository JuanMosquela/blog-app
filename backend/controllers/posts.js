export const getAllPosts = (req,res) => {
    res.status(200).json({
        msg:'hola mundo'
    })
}

export const addPost = (req,res) => {
    const {title, description} = req.body

    const post = {
        title, 
        description
    }

     console.log(title, description)
    
    res.status(200).json({
        msg:'publicar un post',
        post
        
    })
}

export const editPost = (req,res) => {
    const {id} = req.params 
    res.status(200).json({
        msg:'editar un post',
        id
    })
}

export const removePost = (req,res) => {
    const {id} = req.params

    res.status(200).json({
        msg:'remover un post',
        id
    })
}

