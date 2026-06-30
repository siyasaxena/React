function handleClick(event) {
  console.log("Hello!");
  console.log(event);
}
function handleMouseOver() {
  console.log("Bye!");
}
function handleDblClick() {
  console.log("you double clicked");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>ClickMe!</button>
      <p onMouseOver={handleMouseOver}>
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
