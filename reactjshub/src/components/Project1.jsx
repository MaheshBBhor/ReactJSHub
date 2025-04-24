import React from "react";

// function Project1() {
//   return (
//     <>
//       <h1>Hello</h1>
//     </>
//   );
// }
// export default Project1;
import { useState } from "react";
// import "h8k-components";

import "./Project1.css";

function Project1() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    // TODO: Add logic to add input to items list
  };

  return (
    <>
      <h8k-navbar header="Item List Manager"></h8k-navbar>
      <div className="App">
        <h3>Item List</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          data-testid="input-field"
        />
        <button onClick={handleAddItem} data-testid="add-button">
          Add Item
        </button>
        <ul data-testid="item-list">
          {items.map((item, index) => (
            <li key={index} data-testid="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Project1;
