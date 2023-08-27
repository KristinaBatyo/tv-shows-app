import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100%
`;
export const BlurredImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(10px);
  opacity: 0.7;
  z-index: -1;
`;

export const ContentWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BackLink = styled(Link)`
  width: 150px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin-bottom: 10px;
  text-decoration: none;
  color: rgba(0, 127, 255, 0.4);
  background-color: rgb(237, 247, 237);
  border: 2px solid #6bb9f0;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: #4fa2d1;
    border-color: #4fa2d1;
  }
`;

export const ShowImage = styled.img`
  height: 30vh;
`;

export const ShowName = styled.h2`
  margin-top: 10px;
`;

export const Genres = styled.p`
  margin-top: 5px;
  font-weight: bold;
`;

export const LinkToShow = styled.a`
  text-decoration: none;
  color: #4fa2d1; 
  font-weight: bold;
  &:hover {
    color: #217dbb;
  }
`;

export const Paragraph = styled.p`
  margin: 10px 0;
  font-size: 16px;
  line-height: 1.5;
  font-weight: bold;
  color: grey;
`;

export const ShowRating = styled.p`
  font-size: 20px;
  margin-left: 20px;
  color: gold;
  font-weight: bold;
  padding: 5px;
  border-radius: 50%;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SummaryContainer = styled.div`
  display: flex;
  color: grey;
`;
export const SummaryParagraph = styled.p`
  margin-right: 10px;
  font-weight: bold;
  color: grey;
`;