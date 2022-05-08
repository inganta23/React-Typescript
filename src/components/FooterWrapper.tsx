import React, { ReactNode } from 'react'
import styled from 'styled-components';

const StyledFooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 50px;
    color: #fff;
`;

interface FooterWrapperProps {
    children: ReactNode;
}

const FooterWrapper = (props: FooterWrapperProps) => {
    return <StyledFooterWrapper>{props.children}</StyledFooterWrapper>
}

export default FooterWrapper;