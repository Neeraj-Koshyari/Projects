import react, { useState } from 'react';
import './App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [preOperator, setPreOperator] = useState("");

  //Storing pressed number
  const operant = (number) => {
    setSecondNumber(secondNumber + number);
  };

  //Storing pressed operator
  const operation = (opt) => {
    if(secondNumber == "" && opt == "-"){   // for -ve values
      setPreOperator("-");
      return;
    }
    if(secondNumber == ""){     // if operator is pressed before any number
      alert("Please Enter the First Number!!");
      return;
    }
    if(operator == ""){   //if any operation is types multiple times
      setFirstNumber(secondNumber);
      setSecondNumber("");
    }
    setOperator(opt);
  };

  //Performing the operation
  const equalTo = () => {
    let val;
    let x = Number(firstNumber);
    let y = Number(secondNumber);

    if(preOperator == "-") x = -1*x;
    
    if(operator == "+")  val = x + y;
    else if(operator == "-") val = x - y;
    else if(operator == "*") val = x * y;
    else if(operator == "/"){
      if(y == 0){     //check if Dinominator is zero or not
        alert("Can't Divide by Zero");
        clearAll();   // set to empty inputs
        return;       // no further process
      }
      else val = x/y;
    }
    else{
      alert("Enter Both Number!!");
      return;
    }
    
    setSecondNumber(val.toString());
    setFirstNumber("");
    setOperator("");
    setPreOperator("");
  };

  const clearAll = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setPreOperator("");
  }

  return (
    <center>
    <div className="whole_box">
      <input className="output_screen" type="text" value={preOperator + firstNumber + " " + operator + " " + secondNumber} readOnly/><br/>
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
