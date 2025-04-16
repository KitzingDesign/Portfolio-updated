import { useState, useEffect } from "react";
import styles from "./DigitalizationSection.module.scss";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import AppItem from "@/components/ui/AppItem"; // Renamed import to match component

// Import SVGs correctly
import EldlerLogo from "@/assets/images/home/digitalization/eldlerLogo.svg";
import ElyLogo from "@/assets/images/home/digitalization/elyLogo.svg";
import JuryLogo from "@/assets/images/home/digitalization/juryLogo.svg";
import GynoLogo from "@/assets/images/home/digitalization/gynoLogo.svg";
import BoiLogo from "@/assets/images/home/digitalization/boiLogo.svg";

interface DigitalizationSectionProps {
  fade?: boolean;
}

interface AppIconProps {
  url: string;
  header: string;
  alt: string;
  id?: string;
}

const Container = styled.div`
  height: 100vh;
  background-color: black;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-xxxl);

  @media (orientation: portrait) {
    height: 100vh;
    max-height: -webkit-fill-available;
  }
`;

const Content = styled.div`
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-xxxl);

  & > h1 {
    width: 80vw;
    margin: 0 auto;
    color: white;
  }

  @media (max-width: 51em) and (orientation: landscape) {
    gap: 4rem;
  }

  @media (orientation: portrait) {
    gap: 6vh;
    justify-content: center;
  }
`;

const AppGrid = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-lg);

  @media (orientation: portrait) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const GridItem = styled.div`
  @media (orientation: portrait) {
    grid-column: span 2;

    &:nth-last-of-type(2) {
      grid-column: 2 / span 2;
    }
  }
`;

const StyledLink = styled.div`
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

const ProjectLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-sizing: inline-block;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: var(--font-weight-semi-bold);
    color: white;
    text-decoration: none;
  }
`;

const LinkText = styled.p`
  text-decoration: none;
  font-size: var(--font-size-xxl);

  @media (orientation: portrait) and (max-width: 34.5em) {
    font-size: var(--font-size-xl);
  }
`;

const Arrow = styled(ArrowRightIcon)`
  color: white;
  height: var(--font-size-xxxl);
  margin-left: 1rem;
  height: 6.4rem;

  @media (max-width: 51em) and (orientation: landscape) {
    height: 6rem;
  }

  @media (orientation: portrait) {
    height: 4rem;
  }
`;

const apps = [
  {
    image: EldlerLogo, // Directly use the imported SVG
    header: "Eldler",
    alt: "Eldler logo",
    animationClass: styles.animationOne,
  },
  {
    image: ElyLogo, // Directly use the imported SVG
    header: "Ely",
    alt: "Ely logo",
    animationClass: styles.animationTwo,
  },
  {
    image: JuryLogo, // Directly use the imported SVG
    header: "Jury",
    alt: "Jury logo",
    animationClass: styles.animationThree,
  },
  {
    image: GynoLogo, // Directly use the imported SVG
    header: "Gyno",
    alt: "Gyno logo",
    animationClass: styles.animationFour,
  },
  {
    image: BoiLogo, // Directly use the imported SVG
    header: "Boi",
    alt: "Boi logo",
    animationClass: styles.animationFive,
  },
];

const DigitalizationSection = ({
  fade = false,
}: DigitalizationSectionProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (fade) {
      setShouldAnimate(true);
    }
  }, [fade]);

  return (
    <Container>
      <Content>
        <h1>A Digitalized World</h1>
        <AppGrid>
          {apps.map((app, index) => (
            <GridItem key={index}>
              <div
                className={`${styles.item} ${
                  shouldAnimate ? app.animationClass : ""
                }`}
              >
                <AppItem // Changed from AppIcon to AppItem
                  image={app.image} // Changed from url to image
                  header={app.header}
                  alt={app.alt}
                  id={index.toString()}
                />
              </div>
            </GridItem>
          ))}
        </AppGrid>
        <StyledLink>
          <ProjectLink to="/digitalization">
            <LinkText>Read more</LinkText>
            <Arrow />
          </ProjectLink>
        </StyledLink>
      </Content>
    </Container>
  );
};

export default DigitalizationSection;
