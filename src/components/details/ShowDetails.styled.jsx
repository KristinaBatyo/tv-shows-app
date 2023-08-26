import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
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
  color: #fff;
  background-color: #6bb9f0;
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
`;

export const LinkToShow = styled.a`
  text-decoration: none;
  color: #4fa2d1; /* Задайте колір для посилання */
  font-weight: bold;
  &:hover {
    color: #217dbb; /* Задайте колір для посилання при наведенні */
  }
`;

export const Paragraph = styled.p`
  margin: 10px 0;
  font-size: 16px;
  line-height: 1.5;
`;