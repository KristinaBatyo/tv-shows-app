import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

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
    <div>
      <Link to="/">Back to Show List</Link>
      <img
        src={show.image ? show.image.medium : ""}
        alt={show.name}
        style={{ height: "30vh" }}
      />
      <h2>{show.name}</h2>
      <p>Genres: {show.genres.join(", ")}</p>
      <p>Rating: {show.rating.average || "N/A"}</p>
      <p>
        <a href={show.officialSite} target="_blank" rel="noopener noreferrer">
          Link to show
        </a>
      </p>
      <p>Status: {show.status}</p>
      <p>
        Schedule: {show.schedule.days.join(", ")} at {show.schedule.time}
      </p>
      <p>Summary: {show.summary}</p>
    </div>
  );
}

export default ShowDetails;
