import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Container,
  BackLink,
  ShowImage,
  ShowName,
  Genres,
  LinkToShow,
  Paragraph,
} from "./ShowDetails.styled";

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
    <Container>
      <BackLink to="/">Back to Show List</BackLink>
      <ShowImage
        src={show.image ? show.image.medium : ""}
        alt={show.name}
      />
      <ShowName>{show.name}</ShowName>
      <Genres>Genres: {show.genres.join(", ")}</Genres>
      <Paragraph>Rating: {show.rating.average || "N/A"}</Paragraph>
      <Paragraph>
        <LinkToShow href={show.officialSite} target="_blank" rel="noopener noreferrer">
          Link to show
        </LinkToShow>
      </Paragraph>
      <Paragraph>Status: {show.status}</Paragraph>
      <Paragraph>
        Schedule: {show.schedule.days.join(", ")} at {show.schedule.time}
      </Paragraph>
      <Paragraph>Summary: {show.summary}</Paragraph>
    </Container>
  );
}

export default ShowDetails;
