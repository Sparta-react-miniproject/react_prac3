import React, { useState } from "react";
import Form from "../components/form/Form.jsx";
import Header from "../components/header/Header.jsx";
import Layout from "../components/layout/Layout.jsx";
import List from "../components/list/List.jsx";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "리엑트 공부하기",
            body: "리엑트 기초를 공부해봅시다",
            isDone: false,
        },
        {
            id: 2,
            title: "리엑트 공부하기",
            body: "리엑트 기초를 공부해봅시다",
            isDone: true,
        },
    ]);
    return (
        <Layout>
            <Header />
            <Form todos={todos} setTodos={setTodos} />
            <List todos={todos} setTodos={setTodos} />
        </Layout>
    );
};

export default TodoList;
