import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
      <h2>How to play Dice Game?</h2>
      <div className="text">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          After click on dice if selected number is equal to dice number you
          will get same point as dice
        </li>
        <li>If you get wrong guess then 2 point will be dedcuted </li>
      </div>
    </RulesContainer>
  );
}

export default Rules;

const RulesContainer = styled.div`
    background-color: #FBF1F1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    margin-bottom: 20px;

    h2 {
        font-size: 24px;
    }

    .text {
        margin-top: 20px;
        line-height: 20px;
    }
`