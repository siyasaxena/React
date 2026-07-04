import TicketNum from "./TicketNum";
import "./Ticket.css";
export default function Ticket({ ticket }) {
  return (
    <>
      <h1>Ticket</h1>
      <div className="ticket">
        {ticket.map((num, idx) => (
          <TicketNum num={num} key={idx} />
        ))}
      </div>
    </>
  );
}
