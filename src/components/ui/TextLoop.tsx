import React from "react";
import ReactRotatingText from "react-rotating-text";

// Define type for props if needed
interface TextLoopProps {
  typingInterval?: number;
  items: string[];
}

const TextLoop: React.FC<TextLoopProps> = ({
  typingInterval = 50,
  items = [
    "UX-Designer",
    "UI-Designer",
    "Product Designer",
    "Frontend Developer",
    "Food Enthusiast",
    "Interaction Designer",
  ],
}) => {
  return (
    <h1 className="rotating-text">
      <ReactRotatingText
        typingInterval={typingInterval}
        items={items}
        emptyPause={1000}
        deletingInterval={30}
      />
    </h1>
  );
};

export default TextLoop;
