const express = require("express");
const { BookModel } = require("./bookModel");
const bookRouter = express.Router();



bookRouter.post("/addBook",async(req,res)=>{

const Book  = new BookModel(req.body); 
await Book.save();
res.send({msg:"New Book has been added"})


})


bookRouter.get("/getBooks",async(req,res)=>{

const books = await BookModel.find()

res.send(books)


})


bookRouter.delete("/deleteBook/:id",async(req,res)=>{
const id  = req.params.id
    const books = await BookModel.findByIdAndDelete({_id:id})
    res.send({msg:"Book has been deleted"})
        
    })


    bookRouter.get("/getAGenreBook",async(req,res)=>{
        const {Genre}  = req.query;
        const books = await BookModel.find({Genre})
        
        res.send(books)
        
        
        })


        bookRouter.get("/getAfilteredBook",async(req,res)=>{
            const {Price}  = req.query;
            // const books = await BookModel.find({Price :   {Price:{$lte:min}}     })

            const books = await BookModel.find({Price})
            
            res.send(books)
            
            
            })
        




module.exports = {
    bookRouter
};
