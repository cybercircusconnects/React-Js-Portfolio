import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/animations";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="projects" role="main">
      <Wrapper>
        <Title as="h2">Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              WEB APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "android app" ? (
            <ToggleButton
              active
              value="android app"
              onClick={() => setToggle("android app")}
            >
              ANDROID APP'S
            </ToggleButton>
          ) : (
            <ToggleButton
              value="android app"
              onClick={() => setToggle("android app")}
            >
              ANDROID APP'S
            </ToggleButton>
          )}
        </ToggleButtonGroup>

        <CardContainer
          key={toggle}
          as={motion.div}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {(() => {
            const filteredProjects = projects.filter((item) => toggle === "all" || item.category === toggle);
            return filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id || index}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                />
              ))
            ) : (
              <div style={{ color: '#fff', textAlign: 'center', padding: '40px', width: '100%' }}>
                No projects found in this category.
              </div>
            );
          })()}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
