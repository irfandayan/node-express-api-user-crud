import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
  },
];

// All routes in here are starting with /users
router.get("/", (req, res) => {
  // console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);

  res.send(`User with the name ${user.firstName} added to the database!`);
});

export default router;
