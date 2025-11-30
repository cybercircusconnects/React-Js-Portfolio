import React from "react";
import styled from "styled-components";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  /* Glassmorphism effect */
  background: ${({ theme }) => theme.card};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.card}88 0%,
    ${({ theme }) => theme.card_light || theme.card}88 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(133, 76, 230, 0.3);
  box-shadow: 
    rgba(23, 92, 230, 0.15) 0px 4px 24px,
    rgba(133, 76, 230, 0.1) 0px 0px 0px 1px inset;
  border-radius: 20px;
  padding: 24px 36px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  /* Animated gradient border on hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.primary}40,
      #ff00cc40,
      ${({ theme }) => theme.primary}40
    );
    background-size: 200% 200%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: gradient-border 3s ease infinite;
  }
  
  @keyframes gradient-border {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 16px 24px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 12px 20px;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 20px 60px rgba(133, 76, 230, 0.3),
      0 0 0 1px rgba(133, 76, 230, 0.2) inset;
    filter: brightness(1.1);
    
    &::before {
      opacity: 1;
    }
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled(motion.div)`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 30};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  background: ${({ theme }) => theme.card_light || theme.card};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-height: 44px; /* WCAG touch target */
  
  /* Shine effect on hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.primary}20,
      ${({ theme }) => theme.primary}10
    );
    border-color: ${({ theme }) => theme.primary};
    transform: scale(1.08) translateY(-2px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.primary}40;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  
  ${SkillItem}:hover & {
    transform: scale(1.2) rotate(5deg);
  }
`;

const SkillCard = ({ skill, variants }) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <Tilt options={defaultOptions}>
      <Card variants={variants} role="article" aria-label={`${skill.title} skills`}>
        <SkillTitle as="h3">{skill.title}</SkillTitle>
        <SkillList role="list">
          {skill.skills.map((item, index) => (
            <SkillItem
              key={index}
              role="listitem"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={item.name}
            >
              <SkillImage 
                src={item.image} 
                alt={`${item.name} icon`} 
                loading="lazy"
                width="24"
                height="24"
              />
              <span>{item.name}</span>
            </SkillItem>
          ))}
        </SkillList>
      </Card>
    </Tilt>
  );
};

export default SkillCard;
