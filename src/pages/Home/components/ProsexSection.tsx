import { FC } from "react";
import styled from "@emotion/styled";
import StyledLink from "@components/ui/Link";
import prosexImage from "@/assets/images/home/ProsexMockup.png"; // Update path to your image

interface ProsexSectionProps {
  fade?: boolean;
}

const Container = styled.div`
  max-width: 90vw;
  margin-left: auto;
  height: 100vh;
  display: flex;
  align-items: center;

  @media (orientation: portrait) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
    max-height: -webkit-fill-available;
  }
`;

const Title = styled.h2`
  font-size: var(--font-size-xxxl);
`;

const ContentText = styled.div`
  width: 100%;
  padding-bottom: 10rem;

  @media (orientation: portrait) {
    width: 80vw;
  }
`;

const Text = styled.p`
  margin: 2.4rem 0;
`;

const ContentImg = styled.div`
  @media (orientation: portrait) {
    border: solid black 2px;
    width: 65vw;
    margin-top: 64px;
    padding-bottom: 22px;
    margin-bottom: 24px;
  }
`;

const ImgContainer = styled.div`
  width: 50vw;

  @media (orientation: portrait) {
    width: 100%;
  }
`;

const ProsexImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const ProsexSection = ({ fade = false }: ProsexSectionProps) => {
  return (
    <Container>
      <ContentText>
        <Title>prosex.</Title>
        <Text>
          During 2019-2020, I served as the PR Manager for the Technical
          Design&apos;s PR and Event committee. Working in such a close-knit
          group was incredibly rewarding, and I also gained valuable skills in
          Adobe Suite and graphic design.
        </Text>
        <StyledLink to="/prosex">Learn more</StyledLink>
      </ContentText>

      <ContentImg>
        <ImgContainer>
          <ProsexImage
            src={prosexImage}
            alt="prosex. BeerBottle"
            loading="lazy"
          />
        </ImgContainer>
      </ContentImg>
    </Container>
  );
};

export default ProsexSection;
