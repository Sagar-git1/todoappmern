const express = require("express");
const cors = require("cors");
const todos = require("./db/index");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/getTodos", async (req, res) => {
  try {
    const todoList = await todos.find({});
    res.json({
      todoList,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/postTodo", async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    console.log(title, description);
    const todoOne = await todos.findOne({
      title: title,
      description: description,
    });
    if (!todoOne) {
      await todos.create({
        title: title,
        description: description,
      });
      res.json("updated todo successfully");
    } else {
      console.log("Im in another loop");
      res.status(211).json({
        msg: "It contains same data as previous one",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/deleteTodo/:id", async (req, res) => {
  try {
    const deletedTodo = await todos.deleteOne({
      _id: req.params.id,
    });
    res.json({
      msg: deletedTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});
app.listen(3001, () => {
  console.log(`Server is listening at port 3001 successfully `);
});
