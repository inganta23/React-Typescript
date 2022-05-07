import styled from 'styled-components';
import Container from './Container';
import HeaderWrapper from './HeaderWrapper';

const StyledHeader = styled.header`
    background-color: #4f4d53;
    height: 48px;
`;

const Header = () => {
    return <StyledHeader>
        <Container>
            <HeaderWrapper>
                <div className="logo">
                    <img src={require('../media/gtd_logo.png')} alt="gtd" />
                </div>
            </HeaderWrapper>
        </Container>
    </StyledHeader>
}

export default Header;