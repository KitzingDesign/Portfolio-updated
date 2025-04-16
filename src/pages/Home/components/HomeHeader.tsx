import TextLoop from "@/components/ui/TextLoop";
import StyledLink from "@/components/ui/Link";
import BlobBackground from "@/components/ui/BlobBackground";
import styled from "@emotion/styled";

import profilePicture from "@/assets/images/home/Startbild.svg"; // Adjust the path as necessary

// TypeScript interface for props (if needed)
interface HomeHeaderProps {
  // Add any props you might need in the future
}

const Container = styled.div`
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (orientation: portrait) {
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

  @media (orientation: portrait) and (max-width: 576px) {
    height: 100vh;
    width: 85vw;
    max-height: -webkit-fill-available;
  }
`;

const HeaderElement = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (orientation: portrait) {
    height: 100%;
    gap: var(--space-xl);
    flex-direction: column-reverse;
  }
`;

const HeaderText = styled.div`
  width: 80%;

  & > p {
    width: 90%;
    margin-top: var(--space-lg);
    margin-bottom: var(--space-xxl);
  }

  @media (orientation: portrait) {
    width: 100%;

    & > p {
      width: 100%;
    }
  }
`;

const HeaderImg = styled.div`
  width: 80%;
`;

const HomeHeader: React.FC<HomeHeaderProps> = () => {
  return (
    <Container>
      <HeaderElement>
        <HeaderText>
          <h1>Jakob Kitzing</h1>
          <TextLoop />
          <p>
            I'm a UX Designer with roots in product development. My philosophy,
            and what I am truly passionate about, is developing creative
            products and services where the user is at the center.
          </p>
          <StyledLink to="/about">More about me</StyledLink>
        </HeaderText>
        <HeaderImg>
          <BlobBackground
            imageSrc={profilePicture}
            imageAlt="Jakob Kitzing"
            blobColor="var(--color-secondary)"
            blobOpacity={0.8}
          />
        </HeaderImg>
      </HeaderElement>
    </Container>
  );
};

export default HomeHeader;
