import React, { useState } from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/animations";
import SkillCard from "../Cards/SkillCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, active }) => (active ? theme.primary : theme.text_primary + 50)};
  background: ${({ theme, active }) =>
    active ? theme.primary + 20 : "transparent"};
  color: ${({ theme, active }) =>
    active ? theme.primary : theme.text_primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.primary + 20};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Skills = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(skills.map((item) => item.title))];

  const filteredSkills =
    filter === "All"
      ? skills
      : skills.filter((skill) => skill.title === filter);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  return (
    <Container id="skills" role="main">
      <Wrapper>
        <Title as="h2">Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the
          past 3 years plus.
        </Desc>

        <FilterContainer role="tablist" aria-label="Skill categories">
          {categories.map((category) => (
            <FilterButton
              key={category}
              role="tab"
              aria-selected={filter === category}
              aria-controls={`skills-${category.toLowerCase().replace(/\s+/g, '-')}`}
              active={filter === category}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>

        <SkillsContainer
          key={filter}
          role="region"
          aria-label="Skills list"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={`${skill.title}-${index}`}
              skill={skill}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            />
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
