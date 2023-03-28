/** import library */
import styled from 'styled-components';
/** import Icon */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/** styled-component */
const Container = styled.div``;
const CountText = styled.p``;

function Count() {
  return (
    <Container>
      <CountText>visits today</CountText>
      <CountText>number of visits</CountText>
      <CountText>number of visitors</CountText>
    </Container>
  );
}

export default Count;
