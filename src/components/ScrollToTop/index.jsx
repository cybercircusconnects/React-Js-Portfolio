import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 999;
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transform: translateY(${({ show }) => (show ? "0" : "20px")});
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    background-color: ${({ theme }) => theme.primary + 99};
  }

  svg {
    font-size: 24px;
  }
`;

const ProgressRing = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  pointer-events: none;
`;

const Circle = styled.circle`
  stroke: ${({ theme }) => theme.white + "40"};
  stroke-width: 4;
  fill: transparent;
`;

const ProgressCircle = styled.circle`
  stroke: ${({ theme }) => theme.white};
  stroke-width: 4;
  fill: transparent;
  stroke-dasharray: 150;
  stroke-dashoffset: ${({ offset }) => offset};
  transition: stroke-dashoffset 0.1s;
`;

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;

      setScrollProgress(scroll);

      if (totalScroll > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const offset = 150 - 150 * scrollProgress;

  return (
    <ScrollToTopButton 
      show={show} 
      onClick={scrollToTop}
      role="button"
      aria-label="Scroll to top"
      tabIndex={show ? 0 : -1}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          scrollToTop();
        }
      }}
    >
      <ProgressRing width="50" height="50" aria-hidden="true">
        <Circle cx="25" cy="25" r="23" />
        <ProgressCircle cx="25" cy="25" r="23" offset={offset} />
      </ProgressRing>
      <FaArrowUp aria-hidden="true" />
    </ScrollToTopButton>
  );
};

export default ScrollToTop;
