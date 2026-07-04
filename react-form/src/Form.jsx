import { useState } from "react";
export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    console.log(fieldName); // fullName field, come when it triggers
    let newValue = event.target.value;
    console.log(newValue);

    setFormData((currData) => {
      // currData[fieldName] = newValue;
      // return { ...currData };
      return { ...currData, [fieldName]: newValue };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name: </label>
      {/* for will be not used, since it is used for looping */}
      <input
        placeholder="enter your full name"
        type="text"
        value={formData.fullName}
        id="fullName"
        name="fullName" // value for name should match with the state variables, we have made above
        onChange={handleInputChange}
      />

      <br></br>
      <br></br>

      <label htmlFor="username">Username: </label>
      <input
        placeholder="enter username"
        type="text"
        value={formData.username}
        id="username"
        name="username"
        onChange={handleInputChange}
      />

      <br></br>
      <br></br>

      <label htmlFor="password">Password: </label>
      <input
        placeholder="enter password"
        type="password"
        value={formData.password}
        id="password"
        name="password"
        onChange={handleInputChange}
      />

      <button>Submit</button>
    </form>
  );
}
