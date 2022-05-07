import styled from 'styled-components';
import Container from './Container';
import AboutTeamMembers from './AboutTeamMembers';
import AboutTeamMembersInfo from './AboutTeamMembersInfo';

const StyledAbout = styled.section`
    margin: 0;
    text-align: center;
`;

const StyledAboutHeading = styled.h2`
    color: #e8be02;
    font-size: 64px;
    font-weight: 900;

    @media (max-width: 860px) {
          font-size: 55px;
    }
    @media (max-width: 650px) {
          font-size: 45px;
    }
`;

const StyledAboutDescription = styled.p`
    color: #4f4d53;
    font-size: 20px;
    line-height: 1.5;

    @media (max-width: 860px) {
        font-size: 17px;
    }
`;

const About = () => {
    return <StyledAbout>
        <Container>
            <div className="about-us__wrapper">
                <AboutTeamMembers />
                <StyledAboutHeading>How it started</StyledAboutHeading>
                <StyledAboutDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris n isi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c
                    ulpa qui officia deserunt mollit anim id est laborum.
                </StyledAboutDescription>
                <AboutTeamMembersInfo />

            </div>
        </Container>
    </StyledAbout>
}

export default About;