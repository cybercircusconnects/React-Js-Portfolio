import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 100px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  z-index: 999;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 8px 20px rgba(37, 211, 102, 0.6);
    background: linear-gradient(135deg, #128c7e 0%, #25d366 100%);
  }

  &:active {
    transform: translateY(-2px) scale(1.05);
  }

  svg {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 80px;
    width: 45px;
    height: 45px;

    svg {
      font-size: 24px;
    }
  }
`;

const WhatsApp = () => {
  const openWhatsApp = () => {
    const phoneNumber = "923029825213";
    const message = "Hello! I'm interested in your services. Can we discuss?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <WhatsAppButton
      onClick={openWhatsApp}
      aria-label="Contact via WhatsApp"
      title="Contact via WhatsApp"
    >
      <FaWhatsapp />
    </WhatsAppButton>
  );
};

export default WhatsApp;

