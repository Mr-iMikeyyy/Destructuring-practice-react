// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const carsObj = cars;
console.log(carsObj);
const [a, b] = cars;
console.log(a);
console.log(b);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{b.model}</td>
      <td>{b.speedStats.topSpeed}</td>
      <td>{b.coloursByPopularity[0]}</td>
    </tr>
    <tr>
      <td>{a.model}</td>
      <td>{a.speedStats.topSpeed}</td>
      <td>{a.coloursByPopularity[0]}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
