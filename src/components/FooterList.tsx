import React, { ReactNode } from 'react'
import styled from 'styled-components';

const StyledFooterList = styled.ul`
    list-style: none;
    padding-left: 0;
`;

interface FooterListProps {
    children: ReactNode;
}

const FooterList = (props: FooterListProps) => {
    return <StyledFooterList>{props.children}</StyledFooterList>
}

export default FooterList;