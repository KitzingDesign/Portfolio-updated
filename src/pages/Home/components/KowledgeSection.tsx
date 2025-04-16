import styled from "@emotion/styled";
import conceptImg from "@/assets/images/home/KnowledgeSharingMockup.webp"; // Adjust path as needed
import StyledLink from "@/components/ui/Link";

interface KnowledgeSectionProps {
  fade?: boolean;
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

const KnowledgeSection: React.FC<KnowledgeSectionProps> = () => {
  return (
    <Container>
      <div>
        <TextContainer>
          <h2>
            Knowledge Sharing <br />
            Platform
          </h2>
          <Text>
            Within every company, there is a wealth of knowledge, knowledge that
            is invaluable but often forgotten. My classmate and I created a
            platform to easily share this knowledge with others, for a more
            efficient workplace.
          </Text>
          <StyledLink to="/knowledge">Read more</StyledLink>
        </TextContainer>
      </div>

      <div>
        <ImgContainer>
          <ConceptImg
            src={conceptImg}
            alt="Mockup of Knowledge Sharing Platform"
            loading="lazy"
          />
        </ImgContainer>
      </div>
    </Container>
  );
};

export default KnowledgeSection;
