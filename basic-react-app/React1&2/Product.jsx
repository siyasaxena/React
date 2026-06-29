import "./Product.css";
// function Product(props) {
//   console.log(props.title);
//   return (
//     <div className="Product">
//       <h3>{props.title}</h3>
//       <h5>Product Description</h5>
//     </div>
//   );
// }
// function Product({ title, price, features, features2 }) {
//   //console.log(features);

//   return (
//     <div className="Product">
//       <h3>{title}</h3>
//       <h5>Price: {price}</h5>
//       <p>{features}</p>
//       <p>{features2.a}</p>
//     </div>
//   );
// }

//map
// function Product({ title, price, features }) {
//   const list = features.map((feature) => <li>{feature}</li>);

//   return (
//     <div className="Product">
//       <h3>{title}</h3>
//       <h5>Price: {price}</h5>
//       <p>{list}</p>
//     </div>
//   );
// }

//conditionals
// function Product({ title, price = 1 }) {
//   if (price > 30000) {
//     return (
//       <div className="Product">
//         <h3>{title}</h3>
//         <h5>Price: {price}</h5>
//         <p>Discount of 5% </p>
//       </div>
//     );
//   } else {
//     return (
//       <div className="Product">
//         <h3>{title}</h3>
//         <h5>Price: {price}</h5>
//       </div>
//     );
//   }
// }

// function Product({ title, price = 1 }) {
//   let isDiscount = price > 30000 ? "Discount of 5%" : "";

//   return (
//     <div className="Product">
//       <h3>{title}</h3>
//       <h5>Price: {price}</h5>
//       <p>{isDiscount}</p>
//     </div>
//   );
// }

//extra <p> tag will not unneccessary come in the outcome of console of browser
// function Product({ title, price = 1 }) {
//   return (
//     <div className="Product">
//       <h3>{title}</h3>
//       <h5>Price: {price}</h5>
//       {price > 30000 ? <p>"Discount of 5%"</p> : <a href="/">Get Discount</a>}
//     </div>
//   );
// }

function Product({ title, price = 1, features }) {
  let isDiscount = price > 30000;
  let styles = { backgroundColor: isDiscount ? "red" : "pink" }; // camelCase
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>Price: {price}</h5>
      {isDiscount ? <p>"Discount of 5%"</p> : <a href="/">Get Discount</a>}
    </div>
  );
}

export default Product;
