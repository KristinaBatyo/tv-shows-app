import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Alert } from "@mui/material";


export const FullScreenAlert = styled(Alert)`
  min-width: 200px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FullScreenText = styled.div`
  max-width: 100%;
  max-height: 100%;
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
    background-color: rgb(237, 247, 237);
    color: #18333e;
  }

  & .MuiInputLabel-root {
    color: #18333e;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: #18333e;
  }

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #18333e;
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
  background-color: rgb(237, 247, 237);
  margin: 0px;
  padding: 15px;
`;

export const ShowItem = styled.li`
  white-space: nowrap;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    max-width: 100%; 
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