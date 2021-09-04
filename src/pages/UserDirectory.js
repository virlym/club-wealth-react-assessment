import React, { useState, useEffect } from 'react';

function UserDirectory() {
  const [searchState, setSearchState] = useState({
    searchTerm: "",
    userList: [],
    tableList: [],
    sortedTable: [],
    filteredTable: []
  });

  useEffect(function() {
    searchAPIs();
  });

  function searchAPIs(){

  }

  return (
    <div>
      <h1>Hello.</h1>
    </div>
  );
}

export default UserDirectory;