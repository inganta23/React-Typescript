import React, { ReactNode } from 'react'
import styled from 'styled-components';

const StyledHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

interface HeaderWrapperProps {
    children: ReactNode;
}

const HeaderWrapper = (props: HeaderWrapperProps) => {
    return <StyledHeaderWrapper>{props.children}</StyledHeaderWrapper>;
}

export default HeaderWrapper;