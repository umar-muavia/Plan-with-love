import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

function App() {
  const [tours, setTours] = useState(data);
  //// link with Card.js # 26
  function removeTourHandler(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  /// no tours left
  if (tours.length === 0) {
    return (
      <div className="refresh-div">
        <h2>No Tours Left</h2>
        <button className="refresh-btn" onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} removeTourHandler={removeTourHandler}></Tours>
    </div>
  );
}

export default App;
