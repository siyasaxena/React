import { useState } from "react";
export default function Form() {
  let [fullName, setFullName] = useState("siya");
  let handleNameChange = (event) => {
    console.log(event.target);
  };
  return (
    <form>
      <input
        placeholder="enter your full name"
        type="text"
        value={fullName}
        onChange={handleNameChange}
      />
      <button>Submit</button>
    </form>
  );
}
