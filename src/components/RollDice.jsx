/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";

function RollDice({ currentDice, rollDice }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice${currentDice}.png`} alt="diceImg" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  .dice {
    cursor: pointer;
  }

  img {
    width: 170px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
  }
`;
