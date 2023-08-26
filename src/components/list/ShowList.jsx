import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ShowList() {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

        useEffect(() => {
          if (searchText.length >= 2) {
            axios
              .get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
              .then((response) => {
                // console.log(response.data);
                setSearchResults(response.data);
              })
              .catch((error) => {
                console.error("Error fetching data from API:", error);
              });
          } else {
            setSearchResults([]);
          }
        }, [searchText]);


  return (
    <div>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchText.length < 2 ? (
        <p>Type the show's name</p>
      ) : (
        <div>
          {searchResults.length === 0 ? (
            <p>Sorry, nothing found with this search</p>
          ) : (
            <ul>
              {searchResults.map((result) => (
                <li key={result.show.id}>
                  <Link to={`/details/${result.show.id}`}>
                    <img
                      src={result.show.image ? result.show.image.medium : ""}
                      alt={result.show.name}
                    />
                    <h3>{result.show.name}</h3>
                    <p>Rating: {result.show.rating.average || "N/A"}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default ShowList;
