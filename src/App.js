import React, { useState } from "react";
import "./App.css";
import "./components/element/elem.css";
import "./components/todo/todo.css";
import Todo from "./components/todo/Todo";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [err, setErr] = useState("");
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="container">
        <Todo
          input={input}
          list={list}
          setInput={setInput}
          setList={setList}
          err={err}
          setErr={setErr}
        />
      </div>
    </div>
  );
}

export default App;
