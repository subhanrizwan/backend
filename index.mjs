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
    // console.log(req.body);
    res.send(arr);
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