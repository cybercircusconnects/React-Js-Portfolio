import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyle";
import HeroImg from "../../images/Hero-Image.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import ParticleBackground from "../ParticleBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { slideIn, fadeIn } from "../../utils/animations";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="about" aria-label="About Jawad Ullah">
      <HeroContainer>
        <HeroBg aria-hidden="true">
          <ParticleBackground />
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <motion.header
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn("right", "spring", 0.2, 1)}
            >
              <Title as="h1">
                Hi, I am <br /> {Bio.name}
              </Title>
              <TextLoop role="text" aria-live="polite">
                I am a{" "}
                <Span aria-label={Bio.roles.join(", ")}>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <SubTitle as="p">
                Passionate MERN Stack Developer and programmer with 3+ years of experience building scalable web applications. Specialized in React.js, Node.js, Express.js, and MongoDB. Based in Lahore, Pakistan. Expert in creating high-performance, SEO-optimized web solutions.
              </SubTitle>
              <nav aria-label="Resume links">
                <ResumeButton
                  href={Bio.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View resume"
                >
                  Check Resume
                </ResumeButton>
              </nav>
            </motion.header>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <motion.figure
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={slideIn("right", "spring", 0.5, 1)}
              style={{ y }}
            >
              <Img 
                src={HeroImg} 
                alt="Jawad Ullah - Full Stack Developer and Programmer | MERN Stack Expert | React.js Specialist" 
                loading="eager"
                width="400"
                height="400"
              />
            </motion.figure>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </section>
  );
};

export default HeroSection;
