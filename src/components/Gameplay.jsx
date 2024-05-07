/* eslint-disable no-unused-vars */
import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    const randomNumber = randomNumberGenerator(1, 7);
    setCurrentDice((prev) => randomNumber);

    if(selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    }
    else {
      setScore((prev) => prev -2);
    }
  };

  return (
    <MainContainer>
      <div className="topSection">
        <TotalScore score={score}/>
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice}/>
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.main`
  padding-top: 30px;

  .topSection {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
