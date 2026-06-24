import styled from "@emotion/styled";
import StyledLink from "@/components/ui/Link";
import conceptImg from "@/assets/images/home/EricssonImage.webp";

interface EricssonSectionProps {
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

const EricssonSection: React.FC<EricssonSectionProps> = () => {
  return (
    <Container>
      <div>
        <TextContainer>
          <h1>Ericsson – Private 5G Platform</h1>
          <Text>
            The rollout of private 5G networks is transforming how enterprises
            connect and operate. I joined Ericsson as a contract UX Designer,
            working on their private 5G platform, leading complex features
            within the Radio Network domain and driving AI initiatives that
            introduced new ways of working across the design team.
          </Text>
          <StyledLink to="/ericsson">Read more</StyledLink>
        </TextContainer>
      </div>

      <div>
        <ImgContainer>
          <ConceptImg
            src={conceptImg}
            alt="Design concept for Ericsson private 5G platform"
          />
        </ImgContainer>
      </div>
    </Container>
  );
};

export default EricssonSection;
