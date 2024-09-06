/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const SidebarContainer = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? "18rem" : "3rem")};
  background-image: linear-gradient(
    to right bottom,
    #203636,
    #1e2d29,
    #1b241f,
    #171b16,
    #11120e
  );
  height: 90vh;
  padding: 1rem;
  padding-top: 2rem;
  border-top-right-radius: 1.5rem;
  position: relative;
  transition: width 0.3s;
  border-right: 8px solid rgb(235, 235, 235);
  @media (max-width: 768px) {
    width: ${(props) => (props.open ? "12rem" : "3rem")};
  }
`;

export const ControlImage = styled.img<{ open: boolean }>`
  position: absolute;
  background: white;
  cursor: pointer;
  top: 2.25rem;
  right: -0.75rem;
  width: 1.75rem;
  border: 2px solid white;
  border-radius: 50%;
  border: 2px solid black;
  transition: transform 0.5s;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const LogoImage = styled.img`
  width: 2.5rem;
  cursor: pointer;
`;

export const Title = styled.h1<{ open: boolean }>`
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  display: ${(props) => (props.open ? "block" : "none")};
`;

export const MenuList = styled.ul`
  padding-top: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li<{ gap: boolean; active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  color: #d1d5db;
  font-size: 1.2rem;
  gap: 1rem;
  font-weight: 500;
  margin-top: ${(props) => (props.gap ? "2.25rem" : "0.5rem")};
  background-color: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.2)" : "transparent"};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const MenuIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  fill: white;
`;

export const MenuTitle = styled.span<{ open: boolean }>`
  transition: transform 0.2s;
  transform-origin: left;
  transform: ${(props) => (!props.open ? "scale(0)" : "none")};
`;