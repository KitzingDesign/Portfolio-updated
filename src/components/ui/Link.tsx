// src/components/Link.tsx
import styled from "@emotion/styled";
import { ReactNode } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

// Base styles matching your Button design
const StyledLink = styled(RouterLink)`
  background-color: white;
  color: var(--color-text);
  border: 2px solid black;
  padding: 10px 20px;
  font-size: var(--font-size-lg);
  font-family: sans-serif;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  box-shadow: 6px 6px 0 var(--color-primary);
  transition: transform 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 9px 9px 0 var(--color-primary);
    padding: 12px 24px;
    color: var(--color-text);

    text-decoration: none;
  }

  &:active {
    transform: translate(0px, 0px);
    box-shadow: 4px 4px 0 var(--color-primary);
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
