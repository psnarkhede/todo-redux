import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

const Todo = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const [flag, setFlag] = useState(false);

  const ref = useRef();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3002/tododata/${id}`)
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, [id]);

  const handleflag = () => {
    setFlag(!flag);
  };

  const handletodo = (value) => {
    
    setFlag(!flag);

    fetch(`http://localhost:3002/tododata/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        value: ref.current.value,
      }),
    }).then((res) => res.json())
    .then((res) => setData(res));
  };  

  return (
    <div>
      <h1 hidden={flag === false ? false : true}>Todo: {data.value}</h1>
      <input
        ref={ref}
        type="text"
        placeholder="todo here..."
        hidden={flag === true ? false : true}
      />
      <button
        onClick={() => {
          flag === false ? handleflag() : handletodo(data.id);
        }}
      >
        {flag === false ? "Edit" : "Submit"}
      </button>
    </div>
  );
};

export default Todo;
