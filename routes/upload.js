import express from 'express'
import multer from 'multer';
import fs from 'fs-extra'

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
  
    router.post('/',upload.single('file'),(req,res)=>{
        fs.remove('images/snippet.png', err => {
            if (err) return console.error(err)
            console.log('success!')
          });
        res.send({message : "uploaded"})
    })

    router.delete('/',(req,res)=>{
        res.send({message : "delete"})
    })

    export default router;