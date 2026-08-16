import "./Todo.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() === "") return; // Khali task add na ho
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        // Fix: prevTodos ka use kiya hai filter ke liye
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    let markAllDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo,
                isDone: true,
            }))
        );
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: true };
                }
                return todo;
            })
        );
    };

    return (
        <div className="todo-container">
            <h4>Task Manager</h4>
            
            <div className="input-group">
                <input 
                    placeholder="add a task" 
                    value={newTodo} 
                    onChange={updateTodoValue} 
                />
                <button className="add-btn" onClick={addNewTask}>Add Task</button>
            </div>

            <hr className="divider" />

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        <span className={`task-text ${todo.isDone ? "done-text" : ""}`}>
                            {todo.task}
                        </span>
                        <div className="action-btns">
                            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>delete</button>
                            <button className="done-btn" onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                        </div>
                    </li>
                ))}
            </ul>

            <button className="mark-all-btn" onClick={markAllDone}>
                Mark All As Done 
            </button>
        </div>
    );
}