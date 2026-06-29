import "./Activity.css";
import Price from "./Price.jsx";
function Activity({ title, img, li1, li2, oldp, newp }) {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={img} alt={title}></img>
      <ul>
        <li>{li1}</li>
        <li>{li2}</li>
      </ul>
      <div className="price">
        <Price oldPrice={oldp} newPrice={newp} />
      </div>
    </div>
  );
}
export default Activity;
