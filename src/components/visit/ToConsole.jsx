/** import library */
import styled from 'styled-components';

/** styled-component */
const Container = styled.div``;
const Console = styled.p`
  color: white;
  background-color: black;
  font-weight: bold;
  font-size: 15px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 20px;
`;

function ToConsole() {
  return (
    <Container>
      <Console>관리자 콘솔</Console>
    </Container>
  );
}

export default ToConsole;
