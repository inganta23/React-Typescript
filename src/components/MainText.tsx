import React from 'react';
import styled from 'styled-components';

const StyledMainText = styled.h1`
    margin: -50px 0 0;
    color: #4f4d53;
    font-size: 100px;
    font-weight: 900;

    @media (max-width: 1000px) {
          font-size: 80px;
      }

    @media (max-width: 800px) {
          font-size: 60px;
          margin-top: 110px;
      }
`;

interface MainTextProps {
    children: string;
}

const MainText = (props: MainTextProps) => {
    return <StyledMainText>{props.children}</StyledMainText>
}

export default MainText;