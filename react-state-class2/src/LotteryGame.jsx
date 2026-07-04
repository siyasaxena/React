import { useState } from "react";
function LotteryGame() {
  let [ticket, setTicket] = useState(248);
  let [message, setMessage] = useState(""); // State to show win/loss on UI

  let addTicket = () => {
    let randomNum = Math.floor(Math.random() * 1000);
    let newTicket = String(randomNum).padStart(3, "0");

    let sum = 0;
    for (let i = 0; i < newTicket.length; i++) {
      sum += parseInt(newTicket[i], 10); // 10 is the radix (or base) argument for the parseInt() function.
    }

    if (sum == 15) {
      setMessage("'Congratulations, you won!🎉'");
      console.log("Winning ticket!");
    } else {
      setMessage("");
      console.log("Better luck next time!");
    }
    console.log("new ticket is " + newTicket);
    setTicket(newTicket);
  };

  return (
    <>
      <h1>Lottery {message}</h1>
      <h6>Lottery Ticket = {ticket}</h6>
      <button style={{ width: "50%", marginLeft: "25%" }} onClick={addTicket}>
        Get new Ticket
      </button>
    </>
  );
}
export default LotteryGame;
