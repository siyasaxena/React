function printHello() {
  console.log("Hello!");
}
function printBye() {
  console.log("Bye");
}
function handleDblClick() {
  console.log("you double clicked");
}
// export default function Button() {
//   return (
//     <div>
//       <button onClick={printHello}>ClickMe!</button>
//       <p onClick={printBye}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illo dolor
//         consequatur rem similique reprehenderit fuga natus itaque, quas
//         inventore ipsam explicabo! Vitae saepe quisquam autem possimus earum
//         magnam tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Necessitatibus sit illo eveniet voluptates nemo optio similique est,
//         fugiat cum laudantium earum deserunt facere aperiam voluptate error
//         sapiente beatae deleniti. Reiciendis!
//       </p>
//     </div>
//   );
// }
export default function Button() {
  return (
    <div>
      <button onClick={printHello}>ClickMe!</button>
      <p onMouseOver={printBye}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illo dolor
        consequatur rem similique reprehenderit fuga natus itaque, quas
        inventore ipsam explicabo! Vitae saepe quisquam autem possimus earum
        magnam tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus sit illo eveniet voluptates nemo optio similique est,
        fugiat cum laudantium earum deserunt facere aperiam voluptate error
        sapiente beatae deleniti. Reiciendis!
      </p>
      <button onDoubleClick={handleDblClick}>double click me!</button>
    </div>
  );
}
