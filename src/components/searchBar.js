import React from "react";

function Searchbar(props) {
  return (
<div className="row">
            <div className="col-12">
                <form className="input-group input-group-lg search-style">
                    <input
                        className="form-control"
                        value={props.searchState.searchTerm || ""}
                        name="searchTerm"
                        onChange={props.handleSearchInputChange}
                        type="text"
                        placeholder="Filter"
                    />
                    {/* <input type="submit" className="input-group-append input-group-text" value="Search" /> */}
                </form>
            </div>
        </div>
    );
  }
  
 export default Searchbar;