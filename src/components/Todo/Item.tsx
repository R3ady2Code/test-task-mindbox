import React from "react";
import { Todo } from "../../types/todo";
import { Checkbox, ListItem, ListItemText, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <ListItem>
            <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            <ListItemText primary={todo.text} />
            <IconButton onClick={() => deleteTodo(todo.id)}>
                <Delete />
            </IconButton>
        </ListItem>
    );
};

export default TodoItem;
