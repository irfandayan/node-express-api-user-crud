import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => res.send("Hello from home page"));

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
