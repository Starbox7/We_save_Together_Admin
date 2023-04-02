/** import library */
import styled from 'styled-components';
/** import component */
import Footer from '../../components/visit/Footer';
import SignAuthForm from '../../components/admin/SignAuthForm';
/** import Color */
import { AdminColor } from '../../asset/Colors';

/** styled-component */
const Container = styled.div`
  padding: 10px;
  background-color: ${AdminColor.Orange};
`;

function SignAuth() {
  return (
    <Container>
      <SignAuthForm />
      <Footer />
    </Container>
  );
}

export default SignAuth;
