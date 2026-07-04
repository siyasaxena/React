import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket.jsx";
function LotteryGame({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <button style={{ width: "50%", marginLeft: "25%" }} onClick={buyTicket}>
        Get new Ticket
      </button>
      <h3>{isWinning && "CONGRATULATIONS, You won!!"}</h3>
      {/* short circuit evaluation */}
    </>
  );
}
export default LotteryGame;
