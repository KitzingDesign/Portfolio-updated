import { Link } from "react-router-dom"; // or use your preferred routing solution
import TextLoop from "@components/ui/TextLoop";
import BlobBackground from "@components/ui/BlobBackground";
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

  @media (orientation: portrait) and (max-width: 34.5em) {
    height: 100vh;
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
    flex-direction: column-reverse;
  }
`;

const HeaderText = styled.div`
  width: 80%;

  & > p {
    line-height: 1.6;
    width: 90%;
    margin-bottom: 4.8rem;
    margin-top: 3.2rem;
    font-size: 2rem;
  }

  & > h1 {
    font-size: clamp(3rem, 5vw, 5.2rem); // Responsive font size
  }

  @media (orientation: portrait) {
    width: 100%;

    & > p {
      width: 100%;
    }
  }
`;

const Button = styled(Link)`
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
  background-color: black;
  border: none;
  padding: 1.6rem 3.2rem;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    padding: 1.4rem 3rem;
    border: 0.2rem solid black;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    color: black;
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
          <Button to="/about">More about me</Button>
        </HeaderText>
        <HeaderImg>
          <BlobBackground
            imageSrc={profilePicture}
            imageAlt="Jakob Kitzing"
            blobColor="#3a86ff"
            blobOpacity={0.8}
          />
        </HeaderImg>
      </HeaderElement>
    </Container>
  );
};

export default HomeHeader;
