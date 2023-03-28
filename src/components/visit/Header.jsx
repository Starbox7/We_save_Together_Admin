/** import library */
import styled from 'styled-components';
/** import component */
import LogoImage from './LogoImage';
import LogoText from './LogoText';
import HeaderMenu from './HeaderMenu';
/** import Color */
import { AdminColor } from '../../asset/Colors';

/** styled-component */
const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  height: 10vh;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  padding: 10px;
  background-color: ${AdminColor.White};
`


function Header() {
  return (
    <Container>
      <LogoImage />
      <LogoText />
      <HeaderMenu menu="팀원" />
      <HeaderMenu menu="프로젝트" />
    </Container>
  )
}

export default Header