import React, { useState, useEffect } from 'react';
import SearchBar from "../components/searchBar.js";
import Table from "../components/table.js";

function UserDirectory(props) {
  //state for search term and table from the user data
  const [searchState, setSearchState] = useState({
    searchTerm: "",
    tableList: []
  });

  //on page load, when the userState changes, or the searchTerm changes, fill out the table
  useEffect(function() {
    if(props.userState.userList.length > 0){
      setTableList(searchState.searchTerm);
    }
  }, [props.userState, searchState.searchTerm]);

  //set the table data based on the search term
  function setTableList(search){
    const data = props.userState.userList;
    const newArray2 = [];
      for(let i = 0; i < data.length; i++){
        //combine the first and last names as lower case letters for easier searching
        const name = `${data[i].firstName.toLowerCase()} ${data[i].lastName.toLowerCase()}`;
        //if the name can be added to the filtered table, do so
        if((search === "") || (name.indexOf(search.toLowerCase()) > -1)){
        newArray2.push(
          <tr key={i.toString()}>
            <td> <img src={data[i].pic} alt="pic{i}" /> </td>
            <td>{data[i].firstName}</td>
            <td>{data[i].lastName}</td>
            <td>{data[i].age}</td>
            <td> <img src={data[i].cat} alt="cat{i}" /></td>
            <td>{data[i].country}</td>
            <td> <img src={data[i].flag} alt="flag{i}" /></td>
          </tr> 
        );
      }
    }
    //set the table state
    setSearchState({ ...searchState, tableList: {data: newArray2} });
  }

  //sort the table based on the column name that was clicked on (hidden QoL)
  function sortTable(column){
    let change = false;
    // sort by id
    if(column === "id"){
      props.userState.userList.sort(function(b, a){
        if(a.id < b.id) { 
          change = true;
          return -1; 
        }
        if(a.id > b.id) { 
          return 1; 
        }
        return 0;
      });
      if(change === false){
        props.userState.userList.sort(function(a, b){
          if(a.id < b.id) { return -1; }
          if(a.id > b.id) { return 1; }
          return 0;
        });
      }
    }
    // sort by first name
    if(column === "firstName"){
      props.userState.userList.sort(function(b, a){
        if(a.firstName < b.firstName) { 
          change = true;
          return -1; 
        }
        if(a.firstName > b.firstName) { 
          return 1; 
        }
        return 0;
      });
      if(change === false){
        props.userState.userList.sort(function(a, b){
          if(a.firstName < b.firstName) { return -1; }
          if(a.firstName > b.firstName) { return 1; }
          return 0;
        });
      }
    }
    // sort by last name
    if(column === "lastName"){
      props.userState.userList.sort(function(b, a){
        if(a.lastName < b.lastName) { 
          change = true;
          return -1; 
        }
        if(a.lastName > b.lastName) { 
          return 1; 
        }
        return 0;
      });
      if(change === false){
        props.userState.userList.sort(function(a, b){
          if(a.lastName < b.lastName) { return -1; }
          if(a.lastName > b.lastName) { return 1; }
          return 0;
        });
      }
    }
    // sort by age
    if(column === "age"){
      props.userState.userList.sort(function(b, a){
        if(a.age < b.age) { 
          change = true;
          return -1; 
        }
        if(a.age > b.age) { 
          return 1; 
        }
        return 0;
      });
      if(change === false){
        props.userState.userList.sort(function(a, b){
          if(a.age < b.age) { return -1; }
          if(a.age > b.age) { return 1; }
          return 0;
        });
      }
    }
    // sort by country
    if(column === "country"){
      props.userState.userList.sort(function(b, a){
        if(a.country < b.country) { 
          change = true;
          return -1; 
        }
        if(a.country > b.country) { 
          return 1; 
        }
        return 0;
      });
      if(change === false){
        props.userState.userList.sort(function(a, b){
          if(a.country < b.country) { return -1; }
          if(a.country > b.country) { return 1; }
          return 0;
        });
      }
    }
    //after sorting is done, repopulate the table
    setTableList(searchState.searchTerm);
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