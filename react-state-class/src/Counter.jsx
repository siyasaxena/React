// import { useState } from "react";

// function Counter() {
//   // let [stateVariable, setStateVariable] = useState(10);
//   let [count, setCount] = useState(0); // initialization line, this line while re-rendering does not get re-initialized
//   console.log("component is rendered!");
//   console.log(`count = ${count}`);

//   function incCount() {
//     setCount(count + 1);
//     console.log(`inside incCount , count = ${count}`);
//     // console.log(count);
//   }

//   return (
//     <div>
//       <h3>Count = {count}</h3>
//       <button onClick={incCount}>Increase Count</button>
//     </div>
//   );
// }

// export default Counter;

// // callback in set state function is used when we want to update the state variable based on its previous value, because the state variable is not updated immediately after calling the setState function, so if we want to update the state variable based on its previous value, we can use the callback function in setState function.
// import { useState } from "react";

// function Counter() {
//   let [count, setCount] = useState(0); // initialization line, this line while re-rendering does not get re-initialized

//   let incCount = () => {
//     // setCount((prevCount) => prevCount + 1); // callback function in setState function
//     // setCount((prevCount) => prevCount + 3); // callback function in setState function

//     //direct
//     setCount(25);
//   };

//   return (
//     <div>
//       <h3>Count = {count}</h3>
//       <button onClick={incCount}>Increase Count</button>
//     </div>
//   );
// }

// export default Counter;

// more abot state variable, when we call the setState function, the component is re-rendered and the state variable is re-initialized with the initial value, but the value of the state variable is not lost, it is preserved across re-renders. so if we want to update the state variable based on its previous value, we can use the callback function in setState function.
import { useState } from "react";

function init() {
  console.log("init was executed");
  return Math.random();
}

function Counter() {
  //pass refernece to funtion method

  let [count, setCount] = useState(init); // initialization line, this line while re-rendering does not get re-initialized
  console.log("component is rendered!");

  let incCount = () => {
    setCount((prevCount) => prevCount + 1); // callback function in setState function
    // setCount((prevCount) => prevCount + 3); // callback function in setState function

    // //direct
    // //setCount(25);
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}

export default Counter;
