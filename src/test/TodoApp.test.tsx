import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders Todo App", () => {
    render(<App />);
    expect(screen.getByText(/Todo App/i)).toBeInTheDocument();
});

test("can add a new task", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/New Task/i), { target: { value: "New Task" } });
    fireEvent.click(screen.getByText(/Add/i));
    expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("can toggle a task completed state", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/New Task/i), { target: { value: "New Task" } });
    fireEvent.click(screen.getByText(/Add/i));
    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByText("New Task")).toHaveClass("Mui-checked");
});
