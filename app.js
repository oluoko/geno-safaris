import express from "express";
import cors from "cors";
import collection from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/login", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});

app.post("/signup", async (req, res) => {
  const { email, fullname, password } = req.body;

  const data = {
    email: email,
    fullname: fullname,
    password: password,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("notexist");
  }
});

app.listen(5147, () => {
  console.log("port connected");
});
