import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
export const Todo = ({ todos, setTodos }) => {
  function deleteTodo(id, todos, setTodos) {
    axios
      .delete(`https://todoapp-backend-d1ib.onrender.com/deleteTodo/${id}`)
      .then((response) => {
        if (response.data.msg) {
          const updatedTodos = todos.filter((todo) => todo._id !== id);
          setTodos(updatedTodos);
        }
      });
  }
  return (
    <div style={{ display: "flex" }}>
      {todos.map((todo) => {
        return (
          <Card
            key={todo._id}
            style={{
              backgroundColor: "#E4F1EC",
              margin: "10px",
              maxWidth: "300px",
            }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                {todo.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {todo.description}
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginTop: "10px" }}
                onClick={() => deleteTodo(todo._id, todos, setTodos)}
              >
                X
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
