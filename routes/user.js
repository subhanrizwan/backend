import express from 'express';
import User from '../models/user.js';
const router = express.Router();

let Users = [
  {
    id : 1,
    name: "subhan ahmed",
    email: "subhanahmed@gmail.com",
  },
  {
    id: 2,
    name: "ahmed",
    email: "ahmed@gmail.com",
  },
];
router.get("/", (req, res) => {
//   res.json(arr);
  res.status(200).send( {users : Users})
});

router.post('/',async(req,res)=>{
  try{
    console.log("req--->>>",req.body);
    const user =  new User(req.body);
    await user.save();
    res.status(200).send({message:"succes"})
  }
  catch(err){
    res.status(400).send({status: 400 , message : err.message})
  }
})

export default router;