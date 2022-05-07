import React, { ReactNode } from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 50%;
    margin: auto;
    height: 100%;

    @media (max-width: 1300px) {
          max-width: 65%;
      }
    @media (max-width: 1000px) {
          max-width: 75%;
      }
    @media (max-width: 650px) {
          max-width: 90%;
      }
`;

interface ContainerProps {
    children: ReactNode;
}

const Container = (props: ContainerProps) => {
    return <StyledContainer>{props.children}</StyledContainer>
}

export default Container;