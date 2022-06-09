import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Addtodo, Removetodo, Togglestatus } from "../Store/action";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const ref = useRef();

  const addnewTodo = () => {
    fetch(" http://localhost:3002/tododata", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        value: ref.current.value,
        isCompleted: false,
      }),
    });

    fetch(" http://localhost:3002/tododata")
      .then((res) => res.json())
      .then((res) => dispatch(Addtodo(res)));
  };

  useEffect(() => {
    fetch(" http://localhost:3002/tododata")
      .then((res) => res.json())
      .then((res) => dispatch(Addtodo(res)));
  }, []);

  const handledelete = (index) => {
    fetch(`http://localhost:3002/tododata/${index}`, {
      method: "DELETE",
    });

    fetch(" http://localhost:3002/tododata")
      .then((res) => res.json())
      .then((res) => dispatch(Removetodo(res)));
  };

  const togglestatus = (id, value) => {
    fetch(`http://localhost:3002/tododata/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        isCompleted: value,
      }),
    });

    fetch(" http://localhost:3002/tododata")
      .then((res) => res.json())
      .then((res) => dispatch(Togglestatus(res)));
  };

  return (
    <div>
      <input ref={ref} type="text" placeholder="todo here..." />
      <button onClick={() => addnewTodo()}>Add</button>

      <br />
      <br />
      <br />

      {todos.map((el) => (
        <div key={el.id}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <input
            checked={el.isCompleted === true ? true : false}
              onChange={(e) => togglestatus(el.id, e.target.checked)}
              type="checkbox"
            />

            <Link to={`/todo/${el.id}`}>
              {" "}
              <p className={el.isCompleted === true ? styles.strike : styles.nostrike}>{el.value}</p>{" "}
            </Link>
            <button onClick={() => handledelete(el.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
