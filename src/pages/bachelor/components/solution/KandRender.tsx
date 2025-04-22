import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface KandRenderProps {
  url: string;
  altText?: string;
}

const KandRender = ({ url, altText }: KandRenderProps) => {
  return (
    <Zoom>
      <div
        style={{
          border: "white solid 2rem",
          backgroundColor: "white",
          width: "40vw",
          boxShadow:
            "  rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
        }}
      >
        <img
          width="100%"
          height="66%"
          src={url}
          alt={altText}
          style={{
            border: "white solid 2rem",
            boxShadow:
              "  rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
          }}
        />
      </div>
    </Zoom>
  );
};

export default KandRender;
