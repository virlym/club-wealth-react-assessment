import React from "react";

function Searchbar(props) {

  function handleSearchInputChange(event){
    event.preventDefault();
    console.log(event.target.value);
    const value = event.target.value;
    props.setSearchState({ ...props.searchState, searchTerm: value});
  }

  return (
    <div className="row">
      <div className="col-12">
          <form className="input-group input-group-lg search-style">
              <input
                  className="form-control"
                  value={props.searchState.searchTerm || ""}
                  name="searchTerm"
                  onChange={handleSearchInputChange}
                  type="text"
                  placeholder="Filter by name"
              />
              {/* <input type="submit" className="input-group-append input-group-text" value="Search" /> */}
          </form>
      </div>
    </div>
  );
}
  
export default Searchbar;