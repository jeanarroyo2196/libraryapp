const router = require("express").Router();
const book = require("../models/book");

//Insert book to db
router.post("/create" ,(req,res)=>{
 
    let newbook = new book(req.body);
 
    newbook.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"book save successfully"
        });
    });
});

//Get book from db
router.get("/get",(req,res)=>{
    book.find().exec((err,book)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existinbook:book,
        });
    });
});

//Get one book
router.get("/get/:id", (req, res) => {
    const bookId = req.params.id;

    book.findById(bookId).exec((err, book) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        return res.status(200).json({
            success: true,
            book: book
        });
    });
});

//update Student
router.route('/update/:id').put((req,res)=>{
    book.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,book)=>{
            
        if(err){
            return res.status(400).json({error:err});
        }
            
            return res.status(200).json({
                success: "Update Successfully"
        });
    });
});

module.exports = router;