import React, { useState, useEffect } from 'react';
import SearchBar from "../components/searchBar.js";
import Table from "../components/table.js";

function UserDirectory(props) {

  const [searchState, setSearchState] = useState({
    searchTerm: "",
    tableList: [],
    sortedTable: [],
    filteredTable: []
  });

  useEffect(function() {
    if(props.userState.userList.length > 0){
      setTableList(searchState.searchTerm);
    }
  }, [props.userState, searchState.searchTerm]);

  function setTableList(search){
    const data = props.userState.userList;
    const newArray2 = [];
    const newKey = [];
      for(let i = 0; i < data.length; i++){
        const name = `${data[i].firstName} ${data[i].lastName}`;
        if((search === "") || (name.indexOf(search) > -1)){
        newArray2.push(
          <tr>
            <td> <img src={data[i].pic} alt="pic{i}" /> </td>
            <td>{data[i].firstName}</td>
            <td>{data[i].lastName}</td>
            <td>{data[i].age}</td>
            <td> <img src={data[i].cat} alt="cat{i}" /></td>
            <td>{data[i].country}</td>
            <td> <img src={data[i].flag} alt="flag{i}" /></td>
          </tr> 
        );
        newKey.push(i.toString());
      }
    }
    setSearchState({ ...searchState, tableList: {data: newArray2, key: newKey} });
  }

  function sortTable(column){

  }

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h1>
            User Directory
          </h1>
        </div>
      </div>

      <SearchBar searchState={searchState} setSearchState={setSearchState} setTableList={setTableList}/>

      <br />

      <div className="row">
        <div className="col-12">
          <table id="myTable">
            <Table table={searchState.tableList.data} sortTable={sortTable}/>
          </table>
        </div>
      </div>

    </div>
  );
}

export default UserDirectory;