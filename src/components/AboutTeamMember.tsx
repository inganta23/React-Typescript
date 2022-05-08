import React, { ReactNode } from 'react'
import styled from 'styled-components';

const StyledAboutTeamMember = styled.div`
    display: flex;
`;

interface AboutTeamMemberProps {
    children: ReactNode
}
const AboutTeamMember = (props: AboutTeamMemberProps) => {
    return <StyledAboutTeamMember>{props.children}</StyledAboutTeamMember>
}

export default AboutTeamMember;