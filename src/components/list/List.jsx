import React from "react";
import Todo from "../todo/Todo.jsx";
import "../../css/list/style.css";

function List({ todos, setTodos }) {
    // console.log('todos: ', todos);
    const onDeleteHandler = (todoId) => {
        console.log("todoId: ", todoId);
        const newTodos = todos.filter((todo) => {
            return todo.id !== todoId;
        });
        console.log("newTodos: ", newTodos);
        setTodos(newTodos);
    };

    const onEditHandler = (todoId) => {
        console.log("todoId: ", todoId);
        const newTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    isDone: !todo.isDone,
                };
            } else {
                return { ...todo };
            }
        });
        console.log("newTodos: ", newTodos);
        setTodos(newTodos);
    };

    return (
        <div className="list-container">
            <h2 className="list-title">Working.. 🔥</h2>
            <div className="list-wrapper">
                {todos.map((todo) => {
                    if (!todo.isDone) {
                        return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHandler={onDeleteHandler}
                                onEditHandler={onEditHandler}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <h2 className="list-title">Done.. 🎉</h2>
            <div className="list-wrapper">
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHandler={onDeleteHandler}
                                onEditHandler={onEditHandler}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default List;
