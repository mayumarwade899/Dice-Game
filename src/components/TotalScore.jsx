import styled from "styled-components";

const TotalScore = () => {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;

    h1 {
        font-size: 100px;
        line-height: 0px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    p {
        font-size: 24px;
        font-weight: 600;
    }
`