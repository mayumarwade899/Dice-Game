/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Button } from "../Style/Button";

const Homepage = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/diceimg.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  max-width: 1182px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100vh;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
      margin-bottom: 10px;
    }
  }
`;

