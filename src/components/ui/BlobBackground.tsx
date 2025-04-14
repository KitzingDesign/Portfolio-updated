import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { memo } from "react";

interface BlobBackgroundProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  blobColor?: string;
  blobOpacity?: number;
  className?: string;
}

// Animation keyframes outside component to prevent recreation on every render
const movementAnimation = keyframes`
  0%, 100% {
    border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
  }
  20% {
    border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
  }
  40% {
    border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
  }
  60% {
    border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
  }
  80% {
    border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
  }
`;

// Styled components outside the component to prevent recreation on every render
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;

const ProfileImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 60%;
  z-index: 1;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ShapeBlob = styled.div<{ blobColor: string; blobOpacity: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  height: 100%;
  width: 100%;
  border-radius: 30% 50% 20% 40%;
  animation: ${movementAnimation} 20s ease-in-out infinite both alternate,
    movement_one 40s ease-in-out infinite both;
  opacity: ${(props) => props.blobOpacity};
  background-color: ${(props) => props.blobColor};
  overflow: hidden;
  z-index: 0;
`;

const BlobBackground: React.FC<BlobBackgroundProps> = ({
  imageSrc,
  imageAlt,
  imageWidth = 1000,
  imageHeight = 1000,
  blobColor = "red",
  blobOpacity = 0.7,
  className,
}) => {
  return (
    <Container className={className}>
      <ProfileImg>
        <img
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
          loading="lazy"
        />
      </ProfileImg>

      <ShapeBlob blobColor={blobColor} blobOpacity={blobOpacity}></ShapeBlob>
    </Container>
  );
};

export default memo(BlobBackground);
