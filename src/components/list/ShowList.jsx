import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SearchContainer,
  SearchInput,
  Message,
  ShowListContainer,
  ShowItem,
  ShowLink,
  ShowImage,
  ShowTitle,
  ShowRating,
  List,
} from "./ShowList.styled";

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
      <SearchContainer>
        <SearchInput
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for a show..."
        />
        {searchText.length < 2 ? (
          <Message>Type the show's name</Message>
        ) : (
          <ShowListContainer>
            {searchResults.length === 0 ? (
              <Message>Sorry, nothing found with this search</Message>
            ) : (
              <List>
                {searchResults.map((result) => (
                  <ShowItem key={result.show.id}>
                    <ShowLink to={`/details/${result.show.id}`}>
                      <ShowImage
                        src={result.show.image ? result.show.image.medium : ""}
                        alt={result.show.name}
                      />
                      <div>
                        <ShowTitle>{result.show.name}</ShowTitle>
                        <ShowRating>
                          Rating: {result.show.rating.average || "N/A"}
                        </ShowRating>
                      </div>
                    </ShowLink>
                  </ShowItem>
                ))}
              </List>
            )}
          </ShowListContainer>
        )}
      </SearchContainer>
  );

}

export default ShowList;
