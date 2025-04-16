import styled from "@emotion/styled";
import { ReactNode } from "react";
import EmotionImg from "@/assets/images/home/EmotionsMockup.png";

import StyledLink from "@/components/ui/Link";

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

  @media (orientation: portrait) and (max-width: 576px) {
    max-height: -webkit-fill-available;
    max-width: 85vw;
    gap: var(--space-md);
  }
`;

const TextContainer = styled.div`
  width: 100%;

  @media (orientation: portrait) {
    width: 100%;
  }
`;

const ImgContainer = styled.div`
  width: 40vw;

  @media (orientation: portrait) {
    width: 65vw;
  }

  @media (orientation: portrait) and (max-width: 576px) {
    width: 80vw;
  }
`;

const Text = styled.p`
  margin-top: var(--space-lg);
  margin-bottom: var(--space-xxl);
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
