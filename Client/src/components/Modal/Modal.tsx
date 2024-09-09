import styled from "@emotion/styled";
import React from "react";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const ModalContent = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  max-width: 400px;
  z-index: 1000;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const CloseButton = styled.button`
 position: absolute;
  top: 15px;
  right: 12px;
  background: none;
  border-radius:50%;
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 0.5rem;
  z-index: 1001;

  &:hover {
    color: black;
    background-color: #f57f74;

  }

`;

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

function Modal({ children, isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null;
  }
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
