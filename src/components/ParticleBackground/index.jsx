import React from "react";
import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(20px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
`;

const Particle = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  opacity: ${({ opacity }) => opacity};
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  animation: ${move} ${({ duration }) => duration}s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay}s;
  box-shadow: 0 0 10px ${({ theme }) => theme.primary};
`;

const ParticleBackground = () => {
  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <ParticleContainer>
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          size={particle.size}
          top={particle.top}
          left={particle.left}
          opacity={particle.opacity}
          duration={particle.duration}
          delay={particle.delay}
        />
      ))}
    </ParticleContainer>
  );
};

export default ParticleBackground;
