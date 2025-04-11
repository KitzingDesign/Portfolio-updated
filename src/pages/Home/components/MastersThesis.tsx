// src/components/MasterThesisSection.tsx
import ProjectLink from "../../UI/Project-link";
import styled from "@emotion/styled";
import StyledLink from "@components/ui/Link";
import conceptImg from "@/assets/images/home/ThesisImg.png"; // Adjust the path as necessary

interface MasterThesisSectionProps {
  fade?: boolean;
}

const Container = styled.div`
  height: 100vh;
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (orientation: portrait) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  @media (orientation: portrait) and (max-width: 34.5em) {
    height: 100vh;
    max-height: -webkit-fill-available;
    max-width: 80vw;
    gap: 0px;
  }
`;

const TextContainer = styled.div`
  width: 100%;

  @media (orientation: portrait) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: var(--font-size-xxxl);
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

const ConceptImg = styled.img`
  width: 100%;
  height: auto;
  layout: responsive;
  object-fit: contain;
`;

const Text = styled.p`
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
`;

const MasterThesisSection: React.FC<MasterThesisSectionProps> = ({ fade }) => {
  return (
    <Container>
      <div>
        <TextContainer>
          <Title>Master&lsquo;s Thesis</Title>
          <Text>
            The autonomous vehicles sector has brought computerization into
            driving, a task that previously was solely for humans. This results
            in companies providing software and annotation services for machine
            learning, helping with labeling, categorizing, and tracking data.
            This Master&lsquo;s thesis was conducted at one of these annotation
            companies, Kognic.
          </Text>
          <StyledLink link="/Thesis">Learn more</StyledLink>
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
