/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";

function NumberSelector() {
  const arrayNums = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arrayNums.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: bolder;
  }
`;

const Box = styled.div`
  height: 65px;
  width: 65px;
  border: 1px solid black;
  font-size: 24px;
  font-weight: 700;
  display: grid;
  place-items: center;
  cursor: pointer;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
