import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Alert } from "@mui/material";


export const FullScreenAlert = styled(Alert)`
  min-width: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTextField = styled(TextField)`
  max-width: 100vq;
  margin-bottom: 10px;
  padding: 0;
  min-width: 80vw;

  & .MuiOutlinedInput-root {
    color: white;
    & .MuiOutlinedInput-notchedOutline {
      border-color: white;
    }
  }

  & .MuiOutlinedInput-root {
    color: white;
  }

  & .MuiInputLabel-root {
    color: rgb(70, 70, 32);
  }

  & .MuiInputLabel-root.Mui-focused {
    color: white;
  }

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
`;



export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ShowListContainer = styled.div`
  margin-top: 20px;
  width: 100%
`;
export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const List = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 15px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const ShowItem = styled.li`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    max-width: 100%;
    margin-bottom: 0px;
  }
`;

export const ShowLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
`;

export const ShowImage = styled.img`
  width: 80px;
  height: 120px;
  object-fit: cover;
  margin-right: 10px;
`;

export const ShowTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  white-space: normal;
   @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ShowRating = styled.p`
  font-size: 16px;
  margin-left: 10px;
  color: gold;
  @media (max-width: 768px) {
    font-size: 14px; 
`;