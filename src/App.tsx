import React, { useState } from "react";
import TodoForm from "./components/Todo/Form";
import TodoList from "./components/Todo/List";
import { Todo } from "./types/todo";
import { Container, Typography, Tabs, Tab } from "@mui/material";

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [tab, setTab] = useState(0);

    const addTodo = (text: string) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
        setTab(newTab);
    };

    const filteredTodos =
        tab === 0
            ? todos
            : tab === 1
            ? todos.filter((todo) => !todo.completed)
            : todos.filter((todo) => todo.completed);

    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Todo App
            </Typography>
            <TodoForm addTodo={addTodo} />
            <Tabs value={tab} onChange={handleTabChange}>
                <Tab label="All" />
                <Tab label="Active" />
                <Tab label="Completed" />
            </Tabs>
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </Container>
    );
};

export default App;
