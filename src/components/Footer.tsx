import styled from 'styled-components';
import Container from './Container';
import FooterWrapper from './FooterWrapper';
import FooterHeading from './FooterHeading';
import FooterList from './FooterList';

const StyledFooter = styled.footer`
    background-color: #4f4d53;
    border-top: 12px solid #e8be02;
    height: 320px;
`;

const StyledFooterLink = styled.a`
    color: #fff;
    text-decoration: none;
`;

const StyledFooterHeading = styled.h4`
    margin: 5px 0;
`;

const Footer = () => {
    return <StyledFooter>
        <Container>
            <FooterWrapper>
                <div className="footer_column">
                    <FooterHeading>Team</FooterHeading>
                    <FooterList>
                        <li>
                            <StyledFooterLink href='#'><StyledFooterHeading>Lisa</StyledFooterHeading></StyledFooterLink>
                        </li>
                        <li>
                            <StyledFooterLink href='#'><StyledFooterHeading>danielle</StyledFooterHeading></StyledFooterLink>
                        </li>
                        <li>
                            <StyledFooterLink href='#'><StyledFooterHeading>Brian</StyledFooterHeading></StyledFooterLink>
                        </li>
                    </FooterList>
                    <FooterList>
                        <li>
                            <StyledFooterLink href='#'><StyledFooterHeading>Join us!</StyledFooterHeading></StyledFooterLink>
                        </li>
                    </FooterList>
                </div>
                <div className="footer_column">
                    <FooterHeading>Learn More</FooterHeading>
                    <FooterList>
                        <li>
                            <StyledFooterLink href='#'><StyledFooterHeading>Manifesto</StyledFooterHeading></StyledFooterLink>
                        </li>
                        <li>
                            <StyledFooterLink href='#'><StyledFooterHeading>Works</StyledFooterHeading></StyledFooterLink>
                        </li>
                        <li>
                            <StyledFooterLink href='#'><StyledFooterHeading>Stories</StyledFooterHeading></StyledFooterLink>
                        </li>
                    </FooterList>
                </div>
                <div className="footer_column">
                    <FooterHeading>Meet us</FooterHeading>
                    <FooterList>
                        <li>
                            <StyledFooterLink href='#'><StyledFooterHeading>Studio</StyledFooterHeading></StyledFooterLink>
                        </li>
                        <li>
                            <StyledFooterLink href='#'><StyledFooterHeading>Community</StyledFooterHeading></StyledFooterLink>
                        </li>
                        <li>
                            <StyledFooterLink href='#'><StyledFooterHeading>Workshops</StyledFooterHeading></StyledFooterLink>
                        </li>
                    </FooterList>
                </div>
                <div className="footer_column">
                    <FooterHeading>Contact</FooterHeading>
                    <FooterList>
                        <li>
                            <StyledFooterLink href='#'><StyledFooterHeading>Twitter</StyledFooterHeading></StyledFooterLink>
                        </li>
                        <li>
                            <StyledFooterLink href='#'><StyledFooterHeading>Facebook</StyledFooterHeading></StyledFooterLink>
                        </li>
                        <li>
                            <StyledFooterLink href='#'><StyledFooterHeading>Instagram</StyledFooterHeading></StyledFooterLink>
                        </li>
                    </FooterList>
                </div>
            </FooterWrapper>
        </Container>
    </StyledFooter>
}

export default Footer;