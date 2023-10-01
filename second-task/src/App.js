import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [zero, setZero] = useState(0);
  const [one, setOne] = useState(1);
  const [two, setTwo] = useState(2);
  const [three, setThree] = useState(3);
  const [four, setFour] = useState(4);
  const [five, setFive] = useState(5);
  const [six, setSix] = useState(6);
  const [siven, setSiven] = useState(7);
  const [eight, setEight] = useState(8);
  const [nine, setNine] = useState(9);
  const [ten, setTen] = useState(10); 
  const handelClick =(e)=>{
  let value = parseInt(e.target.value);
  }
  return (
    <div class='parent'>
      <button>0</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>

      <button onClick={handelClick}>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>

      <button>8</button>
      <button>9</button>
      <button>10</button>
      <button>+</button>

      <button>-</button>
      <button>*</button>
      <button>/</button>
      <button>=</button>
    </div>
  );
};

export default App;
