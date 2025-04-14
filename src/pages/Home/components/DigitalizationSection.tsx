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
  gap: 10rem;

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
  justify-content: space-around;

  & > h2 {
    width: 80vw;
    margin: 0 auto;
    color: white;
    font-size: 8rem;
  }

  @media (max-width: 51em) and (orientation: landscape) {
    gap: 4rem;

    & > h2 {
      font-size: 6.4rem;
    }
  }

  @media (orientation: portrait) {
    gap: 6vh;
    justify-content: center;

    & > h2 {
      font-size: 6.4rem;
    }
  }
`;

const AppGrid = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-xxl);

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
    font-style: italic;
    cursor: pointer;
  }
`;

const ProjectLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-sizing: inline-block;
  text-decoration: none;
  cursor: pointer;
`;

const LinkText = styled.p`
  font-size: 4.8rem;

  @media (max-width: 51em) and (orientation: landscape) {
    font-size: 3.6rem;
  }

  @media (orientation: portrait) {
    font-size: 4.8rem;
  }
`;

const Arrow = styled(ArrowRightIcon)`
  color: white;
  height: 9.6rem;
  margin-left: 1rem;

  @media (max-width: 51em) and (orientation: landscape) {
    height: 6.4rem;
  }

  @media (orientation: portrait) {
    height: 6.4rem;
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
        <h2>A Digitalized World</h2>
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
          <Link to="/Digitalization">
            <ProjectLink>
              <LinkText>Learn more</LinkText>
              <Arrow />
            </ProjectLink>
          </Link>
        </StyledLink>
      </Content>
    </Container>
  );
};

export default DigitalizationSection;
