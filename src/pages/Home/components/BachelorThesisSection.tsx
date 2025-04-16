import styled from "@emotion/styled";
import thesisImg from "@/assets/images/home/BachelorThesisMockup.png"; // Adjust path as needed
import StyledLink from "@components/ui/Link";

interface BachelorThesisSectionProps {
  fade?: boolean;
}

const Container = styled.div`
  height: 100vh;
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: var(--space-xl);

  @media (orientation: portrait) {
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

  @media (orientation: portrait) and (max-width: 34.5em) {
    max-height: -webkit-fill-available;
    max-width: 85vw;
    gap: 1rem;
  }
`;

const TextContainer = styled.div`
  width: 100%;

  @media (orientation: portrait) {
    width: 100%;
    margin-left: 0;
  }
`;

const ImgContainer = styled.div`
  width: 40vw;

  @media (orientation: portrait) {
    width: 65vw;
    padding-bottom: 4.8rem;
  }

  @media (orientation: portrait) and (max-width: 34.5em) {
    width: 75vw;
  }
`;

const ThesisImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Text = styled.p`
  margin-top: var(--space-lg);
  margin-bottom: var(--space-xl);
`;

const BachelorThesisSection: React.FC<BachelorThesisSectionProps> = ({
  fade,
}) => {
  return (
    <Container>
      <div>
        <ImgContainer>
          <ThesisImg
            src={thesisImg}
            alt="Bachelor's Thesis Project"
            loading="lazy"
          />
        </ImgContainer>
      </div>

      <div>
        <TextContainer>
          <h1>Bachelor&apos;s Thesis</h1>
          <Text>
            As a bachelor thesis project, my group&apos;s mission was, together
            with the design company Boid, to develop the control room of the
            future for the alloy plant Vagrön Alloys. Our role in the project
            was to create a new workspace for the person overseeing the
            furnaces.
          </Text>
          <StyledLink to="bachelorThesis">Read more</StyledLink>
        </TextContainer>
      </div>
    </Container>
  );
};

export default BachelorThesisSection;
