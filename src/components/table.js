import React from "react";

function Table(props) {
  return (
    <tbody>
      <tr className="header, section-head">
        <th style={{textAlign: "center"}} onClick={function(){props.sortTable("id")}} > Profile </th>
        <th onClick={function(){props.sortTable("firstName")}} > First Name </th>
        <th onClick={function(){props.sortTable("lastName")}} > Last Name </th>
        <th onClick={function(){props.sortTable("age")}} > Age </th>
        <th style={{textAlign: "center"}}> Cat </th>
        <th onClick={function(){props.sortTable("country")}} > Country </th>
        <th style={{textAlign: "center"}}> Flag </th>
      </tr>
      {props.table}
    </tbody>
    );
  }
  
export default Table;