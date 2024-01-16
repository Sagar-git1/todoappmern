import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

export const CreateTodo = ({ trigger, setTrigger }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  function onChangeDescription(e) {
    setDescription(e.target.value);
  }
  function addTodo(trigger, setTrigger) {
    console.log("Im in event handler");
    if (title !== "" && description !== "") {
      axios
        .post("http://localhost:3001/postTodo", {
          title: title.toLowerCase(),
          description: description.toLowerCase(),
        })
        .then((response) => {
          if (response.status !== 211) {
            alert("todo added successfully");
            console.log("before setTrigger");
            if (trigger === false) {
              setTrigger(true);
            } else {
              setTrigger(false);
            }
            console.log("after setTrigger");
          } else {
            alert("Avoid adding same todos again");
          }
        });
    } else {
      alert("Title or description is missing, please fill it");
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        margin: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Todo application
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        style={{ marginBottom: "10px" }}
        placeholder="Enter Title"
        onChange={onChangeTitle}
      />
      <TextField
        label="Description"
        variant="outlined"
        style={{ marginBottom: "10px" }}
        placeholder="Enter Description"
        onChange={onChangeDescription}
      />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => addTodo(trigger, setTrigger)}
      >
        Add todo
      </Button>
    </div>
  );
};
