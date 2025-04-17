import React from "react";
import styled from "@emotion/styled";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  margin: 0 auto;
  width: 100vw;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
