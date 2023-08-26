import styled from "@emotion/styled";
import { Link } from "react-router-dom";



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
`;

export const Message = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const ShowListContainer = styled.div`
  margin-top: 20px;
`;
export const List = styled.ul`
  list-style: none;
`;

export const ShowItem = styled.li`
  margin-bottom: 20px;
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
  margin: 5px 0;
`;