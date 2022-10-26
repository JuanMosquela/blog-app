import { Router } from 'express'
const router = Router()
import { addPost, editPost, getAllPosts, removePost } from '../controllers/posts.js'

router.get('/', getAllPosts)
router.post('/', addPost)
router.put('/:id', editPost)
router.post('/:id', removePost)





export default router
