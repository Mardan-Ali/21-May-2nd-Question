import React, { useState } from "react";
import axios from "axios";
import "./App.css";
// Components
export default function App() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState({
    name: "",
    age: "",
  });
  const getData = async () => {
    const response = await axios.get(
      `http://localhost:3000/endpoint?name=${value.name}&age=${value.age}`
    );

    console.log(response.data);
    setData(response.data);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setValue({
      ...value,
      name: e.target.name.value,
      age: e.target.age.value,
    });
  };
  return (
    <div className="app">
      <div className="form-input">
        <form onSubmit={handleForm}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={value.name}
            onChange={(e) => setValue(e.target.value)}
          />

          <label>Age</label>
          <input
            type="number"
            name="age"
            value={value.name}
            onChange={(e) => setValue(e.target.value)}
          />
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
      {/* Getting Data */}
      <div className="get-form">
        <h1>Query Params</h1>
        <button onClick={getData}>Get </button>
        <br />
        <h2>{data && data.name}</h2>
        <h2>{data && data.age}</h2>
      </div>
    </div>
  );
}
