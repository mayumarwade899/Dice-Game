/* eslint-disable react/prop-types */
import styled from "styled-components";

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
const Button = styled.button`
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
    /* font-weight: 700; */
  }
`;
