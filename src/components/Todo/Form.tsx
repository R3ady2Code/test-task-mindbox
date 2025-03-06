import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface TodoFormProps {
    addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
            <TextField
                value={text}
                onChange={(e) => setText(e.target.value)}
                label="New Task"
                variant="outlined"
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                Add
            </Button>
        </form>
    );
};

export default TodoForm;
