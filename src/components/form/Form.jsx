import React, { useState } from "react";
import "../../css/form/style.css";

let number = 3;
function Form({ setTodos, todos }) {
    const initialState = {
        id: 0,
        title: "",
        body: "",
        isDone: false,
    };
    // console.log('todos: ', todos);

    const [todo, setTodo] = useState(initialState);
    // console.log('todo: ', todo)
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        // console.log("name: ", name);
        // console.log("value: ", value);
        setTodo({ ...todo, [name]: value });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (todo.title.trim() === "" || todo.body.trim() === "") return;
        console.log("todo: ", todo);
        setTodos([...todos, { ...todo, id: number }]);
        console.log("todos: ", todos);
        setTodo(initialState);
        number++;
    };

    return (
        <form onSubmit={onSubmitHandler} className="add-form">
            <div className="input-group">
                <label className="form-label">제목</label>
                <input
                    type="text"
                    name="title"
                    value={todo.title}
                    className="add-input input-body"
                    onChange={onChangeHandler}
                />
                <label className="form-label">내용</label>
                <input
                    type="text"
                    name="body"
                    value={todo.body}
                    className="add-input"
                    onChange={onChangeHandler}
                />
            </div>
            <button className="add-button">추가하기</button>
        </form>
    );
}

export default Form;
