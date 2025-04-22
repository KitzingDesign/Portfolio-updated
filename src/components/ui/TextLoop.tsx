import React from "react";
import { Typewriter } from "react-simple-typewriter";

// Define type for props if needed
interface TextLoopProps {
  typingInterval?: number;
  items?: string[];
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
      <Typewriter
        words={items}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={typingInterval}
        deleteSpeed={typingInterval}
        delaySpeed={2000}
      />
    </h1>
  );
};

export default TextLoop;
