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
  min-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 10px;

  & .MuiOutlinedInput-root {
    background-color: rgb(237, 247, 237);
  }

  & .MuiInputLabel-root {
    color: #18333e;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: #18333e;
  }

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #18333e;
    background-color: white;
  }
`;



export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

export const SearchInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 16px;
  background-color: #18333e;
  color: white;
  border-radius: 25px;
  margin-bottom: 20px;
  border: 2px solid transparent; 
  transition: border-color 0.3s; 

  &:focus {
    border-color: #18333e; 
  }
`;

export const Message = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const ShowListContainer = styled.div`
  margin-top: 20px;
  width: 100%
`;
export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const List = styled.ul`
  list-style: none;
  height: 100%;
  background-color: rgb(237, 247, 237);
  margin: 0px;
  padding: 15px;
`;

export const ShowItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
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
`;

export const ShowRating = styled.p`
  font-size: 16px;
  margin-left: 20px;
  color: gold;
`;