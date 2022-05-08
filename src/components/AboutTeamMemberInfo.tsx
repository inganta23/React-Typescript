import React, { ReactNode } from 'react'
import styled from 'styled-components';

const StyledAboutTeamMemberInfo = styled.div`
    padding-left: 35px;
    text-align: left;

    @media (max-width: 650px) {
        padding-left: 15px;
    }
`;

interface AboutTeamMemberInfoProps {
    children: ReactNode
}

const AboutTeamMemberInfo = (props: AboutTeamMemberInfoProps) => {
    return <StyledAboutTeamMemberInfo>{props.children}</StyledAboutTeamMemberInfo>
}

export default AboutTeamMemberInfo;