import { Book } from '../models/book.js'

function index (req,res){
  Book.find({}, function(err,books){
    res.render('books/index',{
      books,
      err,
    })
  })
}

function newBook(req,res){
  res.render('books/new',{
    title:'Add a Book'
  })
}

function create(req,res){
  const book = new Book(req.body)
  book.save(function(err) {
    if (err) return res.render('books/new')
    res.redirect('/books')
  })
}

function deleteBook(req,res){
  Book.findByIdAndDelete(req.params.id, function(err,book){
    res.redirect('/books')
  })
}



export{
  index,
  newBook as new,
  create,
  deleteBook as delete,
}