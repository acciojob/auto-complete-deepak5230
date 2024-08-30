

import React, {useState} from "react";
import './../styles/App.css';

const fruits = ["apple","banana","cherry","date","elderberry","fig"];

const App = () => {
  const[value, setValue] = useState("");
  const fillteredFruits = fruits.filter((fruit) =>
  fruit.toLocaleLowerCase().includes(value.toLocaleLowerCase())
);
  return (
    <div>
      <input
        type ="text"
        value={value}
        onChange={(e) => setValue(e.target.value)} 
      />
      <ul>
          {fillteredFruits.map((fruit, i) => (
            <li key={i}>{fruit}</li>
          ))}
      </ul>
    </div>
  );
};

export default App;