/** import library */
import styled from 'styled-components';
/** import component */
import Header from '../visit/Header';
import { AdminColor } from '../../asset/Colors';

/** styled-component */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 90vh;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  padding: 30px;
  background-color: ${AdminColor.White};
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;


const SignInContainer = styled.div``

function SignInForm() {
    return (
        <Container>
            <Header />
            <SignInContainer>

            </SignInContainer>
        </Container>
    )
}

export default SignInForm;