import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import {
  Container,
  BackLink,
  ShowImage,
  ShowName,
  Genres,
  LinkToShow,
  Paragraph,
  BlurredImage,
  ContentWrapper,
  ShowRating,
  RatingContainer,
  SummaryContainer,
  SummaryParagraph,
} from "./ShowDetails.styled";
import { Rating } from "@mui/material";

function ShowDetails() {
  const { showId } = useParams();
    const [show, setShow] = useState(null);
    
      useEffect(() => {
        axios
          .get(`https://api.tvmaze.com/shows/${showId}`)
          .then((response) => {
            setShow(response.data);
          })
          .catch((error) => {
            console.error("Error fetching show details:", error);
          });
      }, [showId]);

      if (!show) {
        return <p>Loading...</p>;
      }

  return (
    <Container backgroundImage={show.image ? show.image.original : ""}>
      <BlurredImage backgroundImage={show.image ? show.image.original : ""} />
      <BackLink to="/">Back to Show List</BackLink>
      <ContentWrapper>
        <ShowImage src={show.image ? show.image.medium : ""} alt={show.name} />
        <ShowName>{show.name}</ShowName>
        <Genres>Genres: {show.genres.join(", ")}</Genres>
        <RatingContainer>
          <Rating
            name="read-only"
            value={show.rating.average}
            max={10}
            precision={0.5}
            readOnly
          />
          <ShowRating>{show.rating.average}</ShowRating>
        </RatingContainer>
        <Paragraph>
          <LinkToShow
            href={show.officialSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to show
          </LinkToShow>
        </Paragraph>
        <Paragraph> Status: {show.status}</Paragraph>
        <Paragraph>
          Schedule: {show.schedule.days.join(", ")} at {show.schedule.time}
        </Paragraph>
        <SummaryContainer>
          <SummaryParagraph>Summary:</SummaryParagraph>
          {parse(`${show.summary}
  `)}
        </SummaryContainer>
      </ContentWrapper>
    </Container>
  );
}

export default ShowDetails;
