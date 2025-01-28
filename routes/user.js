import express from 'express';

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

export default router;