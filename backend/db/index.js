const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Sagar:sagar%40MONGO2@cluster0.fwrinct.mongodb.net/mytodo-app"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const todos = mongoose.model("todosCollection", todoSchema);

module.exports = todos;
