/** import library */
import styled from 'styled-components';
/** import Icon */
import { BsDoorOpenFill, BsFillPersonCheckFill, BsFillSearchHeartFill } from 'react-icons/bs'

/** styled-component */
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 300px;
  `;
const CountText = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
  margin-right: 30px;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`

const todayVisitNum = 10;
const totalVisitNum = 30;
const totalVisitorNum = 7;

function Count() {
  return (
    <Container>
      <CountText>Visits today
        <IconContainer>
          <BsFillSearchHeartFill size="27" color='red' />
        </IconContainer>
        {todayVisitNum}
      </CountText>
      <CountText>Total visits
        <IconContainer>
          <BsDoorOpenFill size="27" color='brown' />
        </IconContainer>
        {totalVisitNum}
      </CountText>
      <CountText>Total visitors
        <IconContainer>
          <BsFillPersonCheckFill size="27" color='green' />
        </IconContainer>
        {totalVisitorNum}
      </CountText>
    </Container>
  );
}

export default Count;
