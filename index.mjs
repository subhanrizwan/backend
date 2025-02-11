import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

// middleware
app.use("/", (req, res, next) => {
  if (req.query.apiKey === "123") {
    next();
    console.log("request recieved", req.query);
  } else {
    res.status(200).send({status : 200, message: "not allowed" });
  }
});


app.post('/',(req,res)=>{

})


app.use("/api", router);

app.listen(PORT, () => {
  console.log("server is running", `${PORT}`);
});

// let arr = [
//   {
//     id : 1,
//     name: "subhan ahmed",
//     email: "subhanahmed@gmail.com",
//   },
//   {
//     id: 2,
//     name: "ahmed",
//     email: "ahmed@gmail.com",
//   },
// ];
// app.get("/user", (req, res) => {
// //   res.json(arr);
//   res.send(arr);
// });

// app.post("/users",(req,res)=>{
//   try{
//     let {name ,email} = req.body;
//     if(name.trim() && email.trim()){
//       arr.push({id:arr.length + 1 ,...req.body});
//       return res.status(200).send({status : 200 , message : "user added scuccesfully"});
//     }else{
//       return res.status(403).send({status :403, message : "name and email is required"});
//     }
//   }
//   catch (err){
//     return res.status(401).send({status :401, message : err.message});
//   }
// })
// app.post("/order",(req,res)=>{
//   console.log("data",req.body)
//     res.send("order recieved");
// })

// app.delete('/user/:id',(req,res)=>{
//   // let index = arr.findIndex(v => v.id === Number(req.params.id));
//   // if(index !== -1){
//   //     arr.splice(index,1)
//   //     res.send({delete : "delete succesfully"});
//   //   }else{
//   //     res.send({nfound : "user not found"});
//   //   }

//     let index = arr.findIndex(v => v.id === Number(req.params.id))
//     arr.splice(index,1)
//     res.send({delete : "delete succesfully"});

// })

// app.put('/user/:id',(req,res)=>{
//   let index = arr.findIndex(v => v.id === Number(req.params.id))
//   arr.splice(index,1,{id :Number(req.params.id),...req.body})
//     res.send({Update : "user updated succesfully"});
//   })

//   client side send data mean post data
// fetch("http://localhost:3000/users", {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     method: "post",
//     body: JSON.stringify({
//       name: "razar",
//       email: "raza@gmail.com"
//     })
//   })
//   .then(res =>res.json())
//   .then(res =>console.log(res))
//   .catch(err =>console.log(err))
