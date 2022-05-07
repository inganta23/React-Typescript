import React, { ReactNode } from 'react'
import styled from 'styled-components';

const StyledMainWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;

    @media (max-width: 800px) {
        align-items: flex-start;
      }
`;

interface MainWrapperProps {
    children: ReactNode;
}

const MainWrapper = (props: MainWrapperProps) => {
    return <StyledMainWrapper>{props.children}</StyledMainWrapper>
}

export default MainWrapper;