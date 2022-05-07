import styled from 'styled-components';
import imgHero from '../media/img_hero.jpg'
import Container from './Container';
import MainWrapper from './MainWrapper';
import MainText from './MainText';

const StyledMain = styled.section`
    background-image: url(${imgHero});
    color: #fff;
    height: 65vh;
    background-position: right;
    background-size: cover;
`;

const Main = () => {
    return <StyledMain>
        <Container>
            <MainWrapper>
                <MainText>Hello, we’re gtd.</MainText>
            </MainWrapper>
        </Container>
    </StyledMain>
}

export default Main;