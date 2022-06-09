import React, { useEffect, useState } from 'react'

const Total = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
            fetch("http://localhost:3002/tododata")
            .then((res) => res.json())
            .then((res) => setData(res));
        
    },[])

  return (
    <div>
       {data.map((el) => (
           <div key={el.id} >
             <p>{el.isCompleted === false ? el.value : ""}</p>
             
           </div>
       ))}
    </div>
  )
}

export default Total