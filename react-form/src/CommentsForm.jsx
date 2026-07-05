// import { useState } from "react";
import { useFormik } from "formik"; // for formik validation

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username cannot be empty!";
  }

  return errors;
};

export default function CommentsForm() {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });

  // let [isValid, setIsValid] = useState(true);

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };
  // let handlesubmit = (event) => {
  //   // if (!formData.username) {
  //   //   console.log("username is null");
  //   //   setIsValid(false);                               // scratch validation
  //   //   event.preventDefault();
  //   //   return;
  //   // }
  //   event.preventDefault();
  //   console.log(formData);
  //   addNewComment(formData);
  //   setFormData({
  //     // State Reset: While the parent is processing the new comment, the child finishes its handlesubmit function by resetting its own fields back to blank values (username: "", etc.).
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };

  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          placeholder="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
        />
        {/* {!isValid && <p>username cannot be empty</p>} */}
        {formik.errors.username ? (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}
        <br></br>
        <br></br>
        <br></br>
        <label htmlFor="remarks">Remarks: </label>
        <textarea
          value={formik.values.remarks}
          placeholder="add few remarks"
          onChange={formik.handleChange}
          id="remarks"
          name="remarks"
        ></textarea>
        <br></br>
        <br></br>
        <br></br>
        <label htmlFor="rating">Rating: </label>
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        />
        <br></br>
        <br></br>
        <br></br>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
