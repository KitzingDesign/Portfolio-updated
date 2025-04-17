import styled from "@emotion/styled";

const Container = styled.div`
	max-width: 100vw;
	margin: 0 auto;
	
	}
`;
const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  & > p {
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
  }
  @media (max-width: 90em) {
    width: 85vw;
  }
  @media (max-width: 25em) {
    width: 80vw;
  }
`;
const BackgroundTitle = styled.h2`
  padding-top: 12.8rem;

  @media (max-width: 84em) {
    padding-top: 0rem;
  }
  @media (orientation: portrait) {
    padding-bottom: 0px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const BackgroundText = styled.p`
  @media (max-width: 84em) {
    padding-top: 0rem;
  }
  @media (orientation: portrait) {
    padding-bottom: 0px;
  }
`;

const MasterThesisBackground = () => {
  return (
    <Container>
      {/* <Divider />
      <CopyRightText data-aos="fade-up">
        © Jakob Kitzing & Mats Kullerstrand
      </CopyRightText> */}
      <Content>
        <TextContainer>
          <BackgroundTitle data-aos="fade-up">Background</BackgroundTitle>
          <BackgroundText data-aos="fade-up">
            The autonomous vehicle industry has introduced computerization to
            driving, a task once solely performed by humans. This shift has led
            to the emergence of companies offering software and annotation
            services for machine learning, specializing in tasks such as data
            labeling, categorization, and tracking. This Master&lsquo;s thesis
            was conducted at one of these annotation companies, Kognic.
            <br /> <br />
            When annotating, users often outline objects and adjust them to
            ensure a perfect fit, whether working with 2D images or 3D point
            clouds. The process of refining annotations that are already of
            sufficient quality is known as micro-adjustments, and it presents an
            optimization challenge within the annotation platform. However,
            achieving expert-level accuracy is crucial to ensuring the
            annotations are as close to the &ldquo;ground truth&ldquo; as
            possible, providing the necessary data for machine learning models
            to train effectively. Given the scale of the datasets involved, the
            time spent on micro-adjustments can lead to significant
            inefficiencies. The goal of this research was to analyze annotator
            workflows, propose solutions to reduce micro-adjustments, and
            develop design guidelines aimed at reducing the need for
            micro-adjustments in annotation platforms.
          </BackgroundText>
        </TextContainer>
      </Content>
    </Container>
  );
};

export default MasterThesisBackground;
