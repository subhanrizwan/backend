import express from "express";
// const express =  require('express'); //es feature

// body parser middle ware
const app = express();

app.use(express.json());
// req.body ke ander data ata he

const PORT = process.env.PORT || 3000;

let arr = [
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
app.get("/user", (req, res) => {
//   res.json(arr);
  res.send(arr);
});

app.post("/users",(req,res)=>{
    arr.push({id:arr.length + 1 ,...req.body});
    res.send(arr);
    res.send("user added");
})

app.delete('/user/:id',(req,res)=>{
  // let index = arr.findIndex(v => v.id === Number(req.params.id));
  // if(index !== -1){
  //     arr.splice(index,1)
  //     res.send({delete : "delete succesfully"});
  //   }else{
  //     res.send({nfound : "user not found"});
  //   }

    // let index1 = Number(req.params.id);
    // let index2 = arr.findIndex(v => v.id === index1)
    // arr.splice(index2,1);
    // res.send({delete : "delete succesfully"});

    let index = arr.findIndex(v => v.id === Number(req.params.id))
    arr.splice(index,1)
})

app.put('/user/:id',(req,res)=>{
  let index = arr.findIndex(v => v.id === Number(req.params.id))
  arr.splice(index,1,{id :Number(req.params.id),...req.body})
    res.send({delete : "edit succesfully"});
  })

app.listen(PORT, () => {
    console.log("server is running", `${PORT}`);
  });
  




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