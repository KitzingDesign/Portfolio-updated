import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { CSSProperties } from "react";
import headerImg from "@/assets/images/knowledgeSharing/KnowledgeHeader.webp"; // Adjust the path as necessary

// Styled components
const Container = styled.div`
  height: 100vh;
  max-width: 95vw;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 84em) {
    height: inherit;
  }
`;

const Headings = styled.div`
  padding-bottom: 100px;
  position: relative;
`;

const Vertical = styled.div`
  padding-bottom: 50px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`;

// Animations
const AnimationYear = keyframes`
  from {
    opacity: 0;
    transform: translate(10vw, 0);
  }
  to {
    opacity: 0.4;
    transform: translate(0, 0);
  }
`;

const AnimationSeason = keyframes`
  from {
    opacity: 0;
    transform: translate(10vw, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const AnimationAbove = keyframes`
  from {
    opacity: 0;
    transform: translate(-10vw, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

// Animated Elements
const Year = styled.h1`
  color: #3b6575;
  font-weight: 500;
  font-size: 20vw;
  opacity: 0;
  animation-name: ${AnimationYear};
  animation-duration: 0.4s;
  animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
`;

const Season = styled.h2`
  text-transform: uppercase;
  text-align: right;
  font-weight: 400;
  line-height: 30%;
  font-size: 7vw;
  margin-bottom: 20px;
  opacity: 0;
  animation-name: ${AnimationSeason};
  animation-duration: 0.4s;
  animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
  animation-fill-mode: forwards;
  animation-delay: 0.7s;

  @media (max-width: 84em) {
    bottom: 70px;
  }
  @media (max-width: 75em) {
    bottom: 40px;
  }
  @media (max-width: 50em) {
    bottom: 20px;
  }
`;

const Above = styled.h2`
  position: absolute;
  z-index: 5;
  left: 7vw;
  font-size: 5vw;
  bottom: 120px;
  opacity: 0;
  animation-name: ${AnimationAbove};
  animation-duration: 0.4s;
  animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
  animation-fill-mode: forwards;
  animation-delay: 0.9s;

  @media (max-width: 84em) {
    bottom: 100px;
  }
  @media (max-width: 75em) {
    bottom: 90px;
  }
`;

const Img = styled.div`
  width: 55vw;
  z-index: -1;
`;

const imageStyle: CSSProperties = {
  width: "90%",
  borderRadius: "10px",
  objectFit: "contain",
};

const KnowledgeHeader = () => {
  return (
    <Container>
      <Headings>
        <Vertical>
          <Year>2023</Year>
          <Season>Spring</Season>
        </Vertical>
        <Above>Knowledge Sharing</Above>
      </Headings>
      <Img>
        <img
          src={headerImg}
          alt="Mockup of the application"
          style={imageStyle}
          loading="lazy"
        />
      </Img>
    </Container>
  );
};

export default KnowledgeHeader;
