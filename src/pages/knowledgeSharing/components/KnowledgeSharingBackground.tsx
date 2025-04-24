import styled from "@emotion/styled";

// Styled components
const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 70vw;
  margin: 0 auto;

  & > p {
    padding-top: var(--space-md);
    padding-bottom: var(--space-xl);
  }

  @media (max-width: 992px) {
    width: 90vw;
  }
`;

const BackgroundTitle = styled.h2`
  padding-top: var(--space-xxxl);

  @media (max-width: 84em) {
    padding-top: 0rem;
  }

  @media (orientation: portrait) {
    padding-bottom: 0px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: black;
`;

const CopyRightText = styled.p`
  text-align: right;
  font-weight: var(--font-weight-semi-bold);
  font-size: var(--font-size-base);
`;

const KnowledgeBackground = () => {
  return (
    <Container>
      <Content>
        <BackgroundTitle data-aos="fade-up">Background</BackgroundTitle>
        <p data-aos="fade-up">
          Within the depths of every company lies a wealth of knowledge, often
          overlooked or forgotten. Recognizing the potential for this knowledge
          to drive efficiency and innovation, my classmate and I embarked on a
          mission to unlock its full potential. Together, we developed a
          platform designed to facilitate the seamless sharing of expertise
          across all levels of the organization. By simplifying the access to
          this invaluable information, we aimed to cultivate a culture of
          collaboration and continuous learning, ultimately pushing our
          workplace towards greater success.
        </p>
        <Divider data-aos="fade-up"></Divider>
        <CopyRightText data-aos="fade-up">
          © Jakob Kitzing & Mats Kullerstrand
        </CopyRightText>
      </Content>
    </Container>
  );
};

export default KnowledgeBackground;
