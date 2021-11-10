import { Router } from 'express'
const router = Router()
import * as booksCtrl from '../controllers/books.js'
/* GET users listing. */
router.get('/',booksCtrl.index)
router.get('/new',booksCtrl.new)
router.post('/',booksCtrl.create)
router.delete('/:id',booksCtrl.delete)


export {
  router
}
