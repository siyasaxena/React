import "./App.css";
import Product from "./Product.jsx";
// function ProductTab() {
//   return (
//     <>
//       <Product title="phone" price="30,000" />
//       <Product title="laptop" price="40,000" />
//       <Product title="pen" price="50,000" />
//     </>
//   );
// }
// function ProductTab() {
//   let features = ["hi-tech", "durable", "fast"];
//   let features2 = { a: "hi-tech", b: "durable", c: "fast " };
//   return (
//     <>
//       <Product
//         title="phone"
//         price={30000}
//         features={features}
//         features2={features2}
//       />
//       {/* <Product title="laptop" price={40000} />
//       <Product title="pen" price={50000} /> */}
//     </>
//   );
// }

// function ProductTab() {
//   let features = [<li>hi-tech</li>, <li>durable</li>, <li>fast</li>];
//   let features2 = { a: "hi-tech", b: "durable", c: "fast " };
//   return (
//     <>
//       <Product
//         title="phone"
//         price={30000}
//         features={features}
//         features2={features2}
//       />
//       {/* <Product title="laptop" price={40000} />
//       <Product title="pen" price={50000} /> */}
//     </>
//   );
// }

//map
// function ProductTab() {
//   let features = [<li>hi-tech</li>, <li>durable</li>, <li>fast</li>];
//   return (
//     <>
//       <Product title="phone" price={30000} features={features} />
//       {/* <Product title="laptop" price={40000} />
//       <Product title="pen" price={50000} /> */}
//     </>
//   );
// }

//conditionals-
function ProductTab() {
  return (
    <>
      <Product title="phone" price={30000} />
      <Product title="laptop" price={40000} />
      <Product title="pen" />
    </>
  );
}

export default ProductTab;
