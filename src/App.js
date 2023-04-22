// import React from 'react';
// import './App.css';

// function App() {
//   const handleAddition = () => {
//     const num1 = Number(document.getElementById("num1").value);
//     const num2 = Number(document.getElementById("num2").value);
//     if (isNaN(num1) ) {
//       document.getElementById("first").innerHTML = "Please enter first valid numbers";
//       return false;
//     }
//     if(isNaN(num2)){
//       document.getElementById("second").innerHTML = "Please enter second valid numbers";
//       return false;
//     } else if (num1 == ""  ) {
//       document.getElementById("first").innerHTML = "Please enter first numbers";
//       return false;
//     }
//     else if(num2 == ""){
//       document.getElementById("second").innerHTML = "Please enter second numbers";
//       return false;
//     } else {
//       const sum = num1 + num2;
//       document.getElementById("result").value = sum;
//     }
//   }

//   const handleSubtraction = () => {
//     const num1 = Number(document.getElementById("num1").value);
//     const num2 = Number(document.getElementById("num2").value);
//     if (isNaN(num1) ) {
//       document.getElementById("first").innerHTML = "Please enter first valid numbers";
//       return false;
//     }
//     if(isNaN(num2)){
//       document.getElementById("second").innerHTML = "Please enter second valid numbers";
//       return false;
//     } else if (num1 == ""  ) {
//       document.getElementById("first").innerHTML = "Please enter first numbers";
//       return false;
//     }
//     else if(num2 == ""){
//       document.getElementById("second").innerHTML = "Please enter second numbers";
//       return false;
//     }
//      else {
//       const difference = num1 - num2;
//       document.getElementById("result").value = difference;
//     }
//   }

//   const handleMultiplication = () => {
//     const num1 = Number(document.getElementById("num1").value);
//     const num2 = Number(document.getElementById("num2").value);
//     if (isNaN(num1) ) {
//       document.getElementById("first").innerHTML = "Please enter first valid numbers";
//       return false;
//     }
//     if(isNaN(num2)){
//       document.getElementById("second").innerHTML = "Please enter second valid numbers";
//       return false;
//     } else if (num1 == ""  ) {
//       document.getElementById("first").innerHTML = "Please enter first numbers";
//       return false;
//     }
//     else if(num2 == ""){
//       document.getElementById("second").innerHTML = "Please enter second numbers";
//       return false;
//     } else {
//       const product = num1 * num2;
//       document.getElementById("result").value = product;
//     }
//   }

//   const handleDivision = () => {
//     const num1 = Number(document.getElementById("num1").value);
//     const num2 = Number(document.getElementById("num2").value);
//     if (isNaN(num1) ) {
//       document.getElementById("first").innerHTML = "Please enter first valid numbers";
//       return false;
//     }
//     if(isNaN(num2)){
//       document.getElementById("second").innerHTML = "Please enter second valid numbers";
//       return false;
//     } else if (num1 == ""  ) {
//       document.getElementById("first").innerHTML = "Please enter first numbers";
//       return false;
//     }
//     else if(num2 == ""){
//       document.getElementById("second").innerHTML = "Please enter second numbers";
//       return false;
//     } else if (num2 === 0) {
//       document.getElementById("result").value = "Cannot divide by zero";
//       return false;
//     } else {
//       const quotient = num1 / num2;
//       document.getElementById("result").value = quotient;
//     }
//   }

//   const clearError = (id) => {
//     document.getElementById(id).innerHTML = "";
//   }
// const handlereset=()=>{
//   document.getElementById("result").value=""
// }
//   return (
//     <div className='main'>
//       <h1>Arithmetic Operations</h1><br /><br />
//       <form>
//         <label htmlFor="num1">First No:</label>
//         &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="num1" onChange={() => clearError("first")} /><br />
//         <p p id="first" className="error"></p><br />
//         <label htmlFor="num2">Second No:</label>
//         <input type="text" id="num2" onChange={() => clearError("second")} /><br />
//         <p id="second" className="error"></p><br />
//         <button type="button" onClick={handleAddition}>Add</button>
//         <button type="button" onClick={handleSubtraction}>Sub</button>
//         <button type="button" onClick={handleMultiplication}>Mul</button>
//         <button type="button" onClick={handleDivision}>Div</button>
//         <button type='reset'id='reset' onClick={handlereset} > Reset</button>
//       </form>
//       <span>
//         <h3>Result</h3>
//         <input type="text"  id="result"/>
//         {/* <strong id="result"></strong> */}
//       </span>
//     </div>
//   );
// }

// export default App;




import React, { useState } from "react";
import'./App.css';
function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2);
    setResult(`Result: ${num1} + ${num2} = ${sum}`);
  };

  const handleSubtraction = () => {
    const difference = Number(num1) - Number(num2);
    setResult(`Result: ${num1} - ${num2} = ${difference}`);
  };

  const handleMultiplication = () => {
    const product = Number(num1) * Number(num2);
    setResult(`Result: ${num1} * ${num2} = ${product}`);
  };

  const handleDivision = () => {
    const quotient = Number(num1) / Number(num2);
    setResult(`Result: ${num1} / ${num2} = ${quotient}`);
  };

  return (
    <div>
      <h1>Arithmetic Operations</h1>
      <label>
        Number 1:
        <input type="number" value={num1} onChange={handleNum1Change} />
      </label>
      <label>
        Number 2:
        <input type="number" value={num2} onChange={handleNum2Change} />
      </label>
      <button onClick={handleAddition}>Add</button>
      <button onClick={handleSubtraction}>Subtract</button>
      <button onClick={handleMultiplication}>Multiply</button>
      <button onClick={handleDivision}>Divide</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
