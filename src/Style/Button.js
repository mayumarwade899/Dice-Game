import styled from "styled-components";

export const Button = styled.button`
  background: #000000;
  color: white;
  min-width: 200px;
  padding: 8px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  transition: 0.4s background ease-in;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
    font-weight: bold;
  }
`;

export const OutlineButton = styled(Button)`

    background-color: white;
    border: 1px solid black;
    color: black;
    font-weight: bold;

    &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`