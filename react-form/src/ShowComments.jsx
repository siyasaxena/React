import { useState } from "react";
import "./ShowComments.css";
import CommentsForm from "./CommentsForm";
export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@sk",
      remarks: "great job!",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]); //This creates a brand new array, copies all previous comments into it using the spread operator (...), and appends the new comment object to the end.
  };

  return (
    <>
      <div>
        <h3>All Comments</h3>
        {comments.map((comment, idx) => {
          return (
            <div className="comment" key={idx}>
              <span>{comment.remarks}</span> &nbsp;
              <span>(rating = {comment.rating})</span>
              <br></br>
              <span>{comment.username}</span>
            </div>
          );
        })}
      </div>
      <hr></hr>
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
