/** import library */
import styled from 'styled-components';
/** import Container component */
import Header from "../../components/visit/Header";
import Footer from "../../components/visit/Footer";

/** styled-component */
const Container = styled.div`
    height: 85vh;
`


function Home() {
    return (
        <Container>
            <Header />
            <Container />
            <Footer />
        </Container>
    )
}

export default Home;