import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styled from "styled-components";

const Gameplay = () => {
  return (
    <MainContainer>
      <div className="topSection">
        <TotalScore />
        <NumberSelector />
      </div>
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.main`

    padding-top: 50px;

    .topSection {
        display: flex;
        justify-content: space-around;
        align-items: end;
        
    }
`;
