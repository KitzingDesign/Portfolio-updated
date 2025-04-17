import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  color: black;
`;

const Content = styled.div`
  width: 70vw;
  margin: 0 auto;

  & > p {
    padding-top: var(--space-md);
    padding-bottom: var(--space-xl);
  }

  @media (max-width: 1200px) {
    width: 90vw;
    padding-top: var(--space-xxl);
  }

  @media (max-width: 576px) {
    width: 85vw;
    padding-top: var(--space-xxl);
    & > h2 {
      font-size: var(--font-size-xxl);
    }
    & > p {
      font-size: var(--font-size-base);
    }
  }
`;

const BackgroundTitle = styled.h2`
  padding-top: var(--space-xxxl);

  @media (max-width: 84em) {
    padding-top: 0rem;
  }
`;

const CalmiflyBakgrund = () => {
  return (
    <Container>
      <Content>
        <BackgroundTitle data-aos="fade-up">Background</BackgroundTitle>
        <p data-aos="fade-up">
          I have always been afraid of flying, ever since I was a child. One
          sentence I've heard thousands of times is, 'Why are you afraid? It's
          much more dangerous to travel by car than by plane.' In the Design for
          User Experience course, I chose to design an app to critique precisely
          this statement. The idea behind the project was to create a
          provocative app to clarify what it really means when one uses
          horrifying statistics to prove a point.
          <br />
          <br />
          Note: Take the app with a pinch of salt; its purpose is to be
          provocative.
        </p>
      </Content>
    </Container>
  );
};

export default CalmiflyBakgrund;
