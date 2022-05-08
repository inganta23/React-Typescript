import React from 'react';
import styled from 'styled-components';

const StyledAboutTeamMembers = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: -100px;

    @media (max-width: 1200px) {
          margin-top: -80px;
      }
    @media (max-width: 860px) {
        margin-top: -65px;
    }
    @media (max-width: 650px) {
          margin-top: -50px;
    }
`;

const StyledAboutTeamMembersImg = styled.img`
    height: 200px;
    border-radius: 50%;
    width: 200px;

    @media (max-width: 1200px) {
          height: 160px;
          width: 160px;
    }
    @media (max-width: 860px) {
          height: 130px;
          width: 130px;
    }
    @media (max-width: 650px) {
          height: 100px;
          width: 100px;
    }
`;

const AboutTeamMembers = () => {
    return <StyledAboutTeamMembers>
        <StyledAboutTeamMembersImg src={require('../media/img_lisa_circle.png')} alt="lisa" />
        <StyledAboutTeamMembersImg src={require('../media/img_danielle_circle.png')} alt="danielle" />
        <StyledAboutTeamMembersImg src={require('../media/img_brian_circle.png')} alt="brian" />
    </StyledAboutTeamMembers>
}

export default AboutTeamMembers;
