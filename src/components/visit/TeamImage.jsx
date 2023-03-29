/** import library */
import styled from 'styled-components';
/** import asset */
import TeeamLogo from '../../asset/resource/teamlogo.png';

/** styled-component */
const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 70px;
`;
const Logo = styled.img`
  width: 70px;
  height: 70px;
`;

function TeamImage() {
    return (
        <Container>
            <Logo src={TeeamLogo} alt="image logo" />
        </Container>
    );
}

export default TeamImage;
