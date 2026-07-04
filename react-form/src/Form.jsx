import { useState } from "react";
export default function Form() {
  let [fullName, setFullName] = useState("");
  let [username, setUsername] = useState("");
  let handleNameChange = (event) => {
    // console.log(event.target.value);
    setFullName(event.target.value);
  };
  let handleUsername = (event) => {
    setUsername(event.target.value);
  };
  return (
    <form>
      <label htmlFor="fullName">Full Name: </label>
      {/* for will be not used, since it is used for looping */}
      <input
        placeholder="enter your full name"
        type="text"
        value={fullName}
        id="fullName"
        onChange={handleNameChange}
      />

      <br></br>
      <br></br>

      <label htmlFor="username">Username: </label>
      <input
        placeholder="enter username"
        type="text"
        value={username}
        id="username"
        onChange={handleUsername}
      />
      <button>Submit</button>
    </form>
  );
}
