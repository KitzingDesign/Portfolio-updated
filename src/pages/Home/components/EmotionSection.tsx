import styled from "@emotion/styled";
import { ReactNode } from "react";
import EmotionImg from "@/assets/images/home/EmotionsMockup.png";

import StyledLink from "@components/ui/Link";

interface EmotionSectionProps {
  title?: string;
  description?: ReactNode;
  link?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const Container = styled.div`
  height: 100vh;
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (orientation: portrait) {
    flex-direction: column-reverse;
    justify-content: center;
    height: 100vh;
  }

  @media (orientation: portrait) and (max-width: 34.5em) {
    max-height: -webkit-fill-available;
    max-width: 80vw;
    gap: 1rem;
  }
`;

const TextContainer = styled.div`
  width: 100%;

  & > h2 {
    font-size: var(--font-size-xxxl);
  }

  @media (orientation: portrait) {
    width: 100%;
  }
`;

const ImgContainer = styled.div`
  width: 40vw;

  @media (orientation: portrait) {
    width: 65vw;
  }

  @media (orientation: portrait) and (max-width: 34.5em) {
    width: 80vw;
  }
`;

const Text = styled.p`
  margin: 2.4rem 0;
  font-size: var(--font-size-lg);
`;

const ConceptImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const EmotionSection = ({
  title = "Calmyfly",
  description = (
    <>
      I have always been afraid of flying, and something I&apos;ve heard
      countless times is &apos;Why are you afraid of flying? It&apos;s much more
      dangerous to travel by car than by plane.&apos; This app was created to
      challenge this statement and illustrate what that sentence actually means.
    </>
  ),
  link = "/calmifly",
  imageSrc = EmotionImg,
  imageAlt = "Mockup of the Calmyfly app",
}: EmotionSectionProps) => {
  return (
    <Container>
      <div>
        <TextContainer>
          <h2>{title}</h2>
          <Text>{description}</Text>
          <StyledLink to={link}>Read more</StyledLink>
        </TextContainer>
      </div>

      <div>
        <ImgContainer>
          <ConceptImg src={imageSrc} alt={imageAlt} loading="lazy" />
        </ImgContainer>
      </div>
    </Container>
  );
};

export default EmotionSection;
