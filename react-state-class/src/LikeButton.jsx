import { useState } from "react";
export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [count, setClicks] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    setClicks(count + 1);
    console.log("we are going to toggle");
  };
  let likeStyle = { color: "red" };
  return (
    <div>
      <p>Clicks = {count}</p>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}

// ek component mein more than one state variables can be made and its value can also be updated
