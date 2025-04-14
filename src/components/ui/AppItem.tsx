import styled from "@emotion/styled";

interface AppIconProps {
  image: string;
  header: string;
  alt: string;
  id?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 51em) {
    gap: 2rem;
  }
`;

const Text = styled.div`
  color: white;
  font-size: 4.8rem;
  text-align: left;
  margin-bottom: 1.2rem;

  @media (max-width: 51em) {
    font-size: 3.6rem;
    margin-bottom: 0rem;
  }
`;

const AppItem = ({ image, header, alt, id }: AppIconProps) => {
  return (
    <Container>
      <img
        src={image}
        alt={alt}
        id={id}
        style={{ width: "100%", height: "auto" }}
      />
      <div>
        <Text>{header}</Text>
      </div>
    </Container>
  );
};

export default AppItem;
