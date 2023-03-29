/** import library */
import styled from 'styled-components';
/** import component */
import Footer from '../../components/visit/Footer';
import SignInForm from '../../components/admin/SignInForm';

/** styled-component */
const Container = styled.div`
    
`

function SignIn() {
    return (
        <Container>
            <SignInForm />
            <Footer />
        </Container>
    )
}

export default SignIn;