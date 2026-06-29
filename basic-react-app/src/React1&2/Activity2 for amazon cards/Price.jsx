import "./Price.css";

function Price({ oldPrice, newPrice }) {
  return (
    <div className="price-container">
      <span className="old-price">{oldPrice}</span>
      <span className="new-price">{newPrice}</span>
    </div>
  );
}

export default Price;
