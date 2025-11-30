import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonBase = styled.div`
  background: ${({ theme }) => theme.card_light};
  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.card_light} 0px,
    ${({ theme }) => theme.bgLight} 40px,
    ${({ theme }) => theme.card_light} 80px
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "20px"};
  margin: ${({ margin }) => margin || "0"};
`;

const LoadingSkeleton = ({ width, height, borderRadius, margin }) => {
  return (
    <SkeletonBase
      width={width}
      height={height}
      borderRadius={borderRadius}
      margin={margin}
    />
  );
};

export default LoadingSkeleton;
