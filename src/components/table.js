import React from "react";

function Table(props) {
  return (
    <tbody>
      <tr className="header, section-head">
        <th style={{textAlign: "center"}}> Profile </th>
        <th> First Name </th>
        <th> Last Name </th>
        <th> Age </th>
        <th style={{textAlign: "center"}}> Cat </th>
        <th> Country </th>
        <th style={{textAlign: "center"}}> Flag </th>
      </tr>
      {props.table}
    </tbody>
    );
  }
  
export default Table;