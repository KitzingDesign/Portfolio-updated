// src/components/Link.tsx
import styled from "@emotion/styled";
import { ReactNode } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

// Base styles matching your Button design
const StyledLink = styled(RouterLink)`
  background-color: none; /* Match the beige-ish background */
  color: black;
  border: 2px solid black;
  padding: 10px 20px;
  font-size: 16px;
  font-family: sans-serif;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  background: white;
  font-size: 2rem;
  box-shadow: 8px 8px 0 var(--color-primary); /* Orange shadow offset */
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  &:hover {
    background: white;
    border: 0.2rem solid black;
    color: black;
  }
`;

// Component props
interface LinkProps extends RouterLinkProps {
  size?: "m" | "sm" | "lg";
  to: string;
  children: ReactNode;
}

const Link = ({
  size = "m",
  className = "",
  children,
  ...props
}: LinkProps) => {
  // Combine size class with any additional className
  const sizeClass = size !== "m" ? size : "";
  const combinedClassName = `${className} ${sizeClass}`.trim();

  return <StyledLink {...props}>{children}</StyledLink>;
};

export default Link;
