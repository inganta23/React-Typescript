import React, { ReactNode } from 'react'
import styled from 'styled-components';

const StyledFooterHeading = styled.h3`
    color: #e8be02;
    font-weight: 900;
    font-size: 20px;
`;

interface FooterHeadingProps {
    children: ReactNode;
}

const FooterHeading = (props: FooterHeadingProps) => {
    return <StyledFooterHeading>{props.children}</StyledFooterHeading>
}

export default FooterHeading;