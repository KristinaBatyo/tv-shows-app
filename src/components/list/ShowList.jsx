import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SearchContainer,
  ShowListContainer,
  ShowItem,
  ShowLink,
  ShowImage,
  ShowTitle,
  ShowRating,
  List,
  RatingContainer,
  StyledTextField,
  FullScreenAlert,
  FullScreenText,
} from "./ShowList.styled";
import { Alert, Container, Paper, Rating, } from "@mui/material";

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
    <Container>
      <SearchContainer>
        <StyledTextField
          id="outlined-basic"
          label="Search for a show..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText.length < 2 ? (
          <FullScreenText>
            <FullScreenAlert icon={false} severity="success">
              Type the show's name
            </FullScreenAlert>
          </FullScreenText>
        ) : (
          <ShowListContainer>
            {searchResults.length === 0 ? (
              <Alert severity="info">
                Sorry, nothing found with this search
              </Alert>
            ) : (
              <List>
                {searchResults.map((result) => (
                  <ShowItem key={result.show.id}>
                    <Paper
                      sx={{
                        p: 2,
                        margin: "auto",
                        maxWidth: 500,
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                      }}
                    >
                      <ShowLink to={`/details/${result.show.id}`}>
                        <ShowImage
                          src={
                            result.show.image ? result.show.image.medium : ""
                          }
                          alt={result.show.name}
                        />
                        <div>
                          <ShowTitle>{result.show.name}</ShowTitle>
                          <RatingContainer>
                            <Rating
                              name="read-only"
                              value={result.show.rating.average}
                              max={10}
                              precision={0.5}
                              readOnly
                            />
                            <ShowRating>
                              {result.show.rating.average}
                            </ShowRating>
                          </RatingContainer>
                        </div>
                      </ShowLink>
                    </Paper>
                  </ShowItem>
                ))}
              </List>
            )}
          </ShowListContainer>
        )}
      </SearchContainer>
    </Container>
  );
}

export default ShowList;
