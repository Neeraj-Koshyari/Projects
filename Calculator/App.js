import react, { useState } from 'react';
import './App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");

  //Storing pressed number
  const operant = (number) => {
    setSecondNumber(secondNumber + number);
  };

  //Storing pressed operator
  const operation = (opt) => {
    setFirstNumber(secondNumber);
    setSecondNumber("");
    setOperator(opt);
  };

  //Performing the operation
  const equalTo = () => {
    let val;
    if(operator == "+")  val = Number(firstNumber) + Number(secondNumber);
    else if(operator == "-") val = Number(firstNumber) - Number(secondNumber);
    else if(operator == "*") val = Number(firstNumber) * Number(secondNumber);
    else if(operator == "/") val = Number(firstNumber) / Number(secondNumber);
    else{
      alert("Enter Both Number!!");
      return;
    }
    
    setSecondNumber(val.toString());
    setFirstNumber("");
    setOperator("");
  };

  const clearAll = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
  }

  return (
    <center>
    <div className="whole_box">
      <input className="output_screen" type="text" value={firstNumber + " " + operator + " " + secondNumber} readOnly/><br/>
      <button className="btn" onClick={() => operant("1")}>1</button>
      <button className="btn" onClick={() => operant("2")}>2</button>
      <button className="btn" onClick={() => operant("3")}>3</button>
      <button className="btn operation" onClick={() => operation("+")}>+</button><br/>
      <button className="btn" onClick={() => operant("4")}>4</button>
      <button className="btn" onClick={() => operant("5")}>5</button>
      <button className="btn" onClick={() => operant("6")}>6</button>
      <button className="btn operation" onClick={() => operation("-")}>-</button><br/>
      <button className="btn" onClick={() => operant("7")}>7</button>
      <button className="btn" onClick={() => operant("8")}>8</button>
      <button className="btn" onClick={() => operant("9")}>9</button>
      <button className="btn operation" onClick={() => operation("*")}>*</button><br/>
      <button className="btn ac" onClick={() => clearAll()}>AC</button>
      <button className="btn" onClick={() => operant("0")}>0</button>
      <button className="btn operation" onClick={() => operation("/")}>/</button><br/>
      <button className="btn eql" onClick={() => equalTo()}>=</button>
    </div>
    </center>
  );
}

export default App;
