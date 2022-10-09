import "../App.css";
import fakeData from "../fakeData";

export default function TopTickets() {
  return (
    <div className="App ticket-container">
      <div className="ticket">
        <h2>{fakeData()[0].id1.subject}</h2>
        <p>{fakeData()[0].id1.description}</p>
        <p>{fakeData()[0].id1.score}</p>
        <p>{fakeData()[0].id1.coords}</p>
      </div>
      <h2>task 2</h2>
      <h2>task 3</h2>
      <h2>task 4</h2>
      <h2>task 5</h2>
    </div>
  );
}
console.log(fakeData()[0].id1);
