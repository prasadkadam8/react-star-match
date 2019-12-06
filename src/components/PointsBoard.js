/* eslint-disable linebreak-style */
import React from "react";

const PointsBoard = props => (
  <div>
    <table>
      <thead>
        <tr>
          <td>Attempt</td>
          <td>Seconds</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.pointsBoardData[0].attempt}</td>
          <td>{[props.pointsBoardData[0].seconds]}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PointsBoard;
