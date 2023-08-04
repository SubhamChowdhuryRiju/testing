import express from "express";

const app = express();
const port = process.env.port || 3000;

const date = new Date().toLocaleDateString();

console.log(date);

app.get("/", (req, res) => {
  res.render("index.ejs", { day: date });
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
