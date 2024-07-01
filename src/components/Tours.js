import React from "react";
import Card from "./Card";

/// {tours , removeTourHandler} import karwaya ha
function Tours({ tours, removeTourHandler }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan With Love</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTourHandler={removeTourHandler}></Card>;
        })}
      </div>
    </div>
  );
}
export default Tours;
