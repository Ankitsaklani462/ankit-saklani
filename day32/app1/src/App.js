import { useState } from "react";

 function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [result, setResult] = useState("");

  const add = () => {
    setResult(Number(num1) + Number(num2)+Number(num3));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2)-Number(num3));
  };

  const multiply = () => {
    setResult(Number(num1) * Number(num2)*Number(num3));
  };

  const divide = () => {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2)/Number(num3));
    }
  };

  return (
    <div>
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br />
      <br />
      <input
        type="number"
        placeholder="Third Number"
        value={num3}
        onChange={(e) => setNum3(e.target.value)}
      />

      <br />
      <br />

      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>

      <h3>Result: {result}</h3>
    </div>
  );
}


export default App;



// function App() {
//   const[count, setcount]=useState(0);
//   const[count1, setcount1]=useState(0);
//   return (
//     <div onClick={()=>setcount1(count1+1)} id='on' className="box">
//       <h2>{count}</h2>
//       <button onClick={()=>setcount(count+1)}>Increment</button>
//       <button onClick={()=>setcount(count-1)}>Decrement</button>
//       <button onClick={()=>setcount(0)}>Reset</button>
//       <h2>Click count:{count1}</h2>
      
//     </div>
//   );
// }

// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div>
//       <h2>Password Toggle</h2>

//       <input
//         type={showPassword ? 'text' : 'password'}
//         placeholder="Enter Password"
//       />

//       <button onClick={() => setShowPassword(!showPassword)}>
//         {showPassword ? 'Hide' : 'Show'} Password
//       </button>
//     </div>
//   );
// }