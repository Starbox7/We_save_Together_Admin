/** import library */
import styled from 'styled-components';

/**  styled-component */
const Container = styled.div`
    
`
const Menu = styled.p`
    
`


function HeaderMenu(props) {
    return (
        <Container>
            <Menu>{props.menu}</Menu>
        </Container>
    )
}

export default HeaderMenu