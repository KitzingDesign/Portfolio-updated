// src/components/MasterThesisSection.tsx
import styled from "@emotion/styled";
import StyledLink from "@/components/ui/Link";
import conceptImg from "@/assets/images/home/ThesisImage.png";

interface MasterThesisSectionProps {
  fade?: boolean;
}

const Container = styled.div`
  height: 100dvh;
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: var(--space-lg);

  @media (orientation: portrait) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: 100dvh;
  }

  @media (orientation: portrait) and (max-width: 576px) {
    height: 100dvh;
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
    width: 65dvw;
  }

  @media (orientation: portrait) and (max-width: 34.5em) {
    width: 80dvw;
  }
`;

const ConceptImg = styled.img`
  width: 100%;
  height: auto;
  layout: responsive;
  object-fit: contain;
`;

const Text = styled.p`
  margin-top: var(--space-lg);
  margin-bottom: var(--space-xxl);
`;

const MasterThesisSection: React.FC<MasterThesisSectionProps> = () => {
  return (
    <Container>
      <div>
        <TextContainer>
          <h1>Master&lsquo;s Thesis</h1>
          <Text>
            The autonomous vehicles sector has brought computerization into
            driving, a task that previously was solely for humans. This results
            in companies providing software and annotation services for machine
            learning, helping with labeling, categorizing, and tracking data.
            This Master&lsquo;s thesis was conducted at one of these annotation
            companies, Kognic.
          </Text>
          <StyledLink to="/thesis">Read more</StyledLink>
        </TextContainer>
      </div>

      <div>
        <ImgContainer>
          <ConceptImg
            src={conceptImg}
            alt="Computer displaying the master's thesis project"
          />
        </ImgContainer>
      </div>
    </Container>
  );
};

export default MasterThesisSection;
