import React from 'react';
import styled from 'styled-components';
import AboutTeamMember from './AboutTeamMember';
import AboutTeamMemberInfo from './AboutTeamMemberInfo';

const StyledAboutTeamMembersInfo = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 80px 0;
`;

const StyledAboutTeamMemberInfoHeading = styled.h4`
    margin-bottom: 0;
    color: #e8be02;
`;

const StyledAboutTeamMemberInfoParagraph = styled.p`
    margin-top: 3px;
    margin-bottom: 0;
`;

const StyledAboutTeamInfoImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;

    @media (max-width: 860px) {
        width: 85px;
        height: 85px;
    }
    @media (max-width: 650px) {
        width: 75px;
        height: 75px;
    }
`;

const AboutTeamMembersInfo = () => {
    return <StyledAboutTeamMembersInfo>
        <AboutTeamMember>
            <StyledAboutTeamInfoImg src={require('../media/img_lisa_circle.png')} alt='lisa' />
            <AboutTeamMemberInfo>
                <StyledAboutTeamMemberInfoHeading>Lisa</StyledAboutTeamMemberInfoHeading>
                <StyledAboutTeamMemberInfoParagraph>lisa@gtd.co</StyledAboutTeamMemberInfoParagraph>
            </AboutTeamMemberInfo>
        </AboutTeamMember>
        <AboutTeamMember>
            <StyledAboutTeamInfoImg src={require('../media/img_danielle_circle.png')} alt='danielle' />
            <AboutTeamMemberInfo>
                <StyledAboutTeamMemberInfoHeading>Danielle</StyledAboutTeamMemberInfoHeading>
                <StyledAboutTeamMemberInfoParagraph>danielle@gtd.co</StyledAboutTeamMemberInfoParagraph>
                <StyledAboutTeamMemberInfoParagraph>(123) 456-7890</StyledAboutTeamMemberInfoParagraph>
            </AboutTeamMemberInfo>
        </AboutTeamMember>

    </StyledAboutTeamMembersInfo>
}

export default AboutTeamMembersInfo;