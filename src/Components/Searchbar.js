import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";


const  SearchBar=()=> {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    // navigate(`/Weather?city=${encodedSearchTerm}`);
    navigate(`/Weather/${encodedSearchTerm}`);

  };

  return (
    <>
    <div className="container">
    <h1 className="heading">Weather Api</h1>

    
    
        
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-input">Search city:</label>
      <input
      className="search"
        type="text"
        id="search-input"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="searchbtn" type="submit">Search</button>
    </form>
    </div>
    </>
  );
}

export default SearchBar;
