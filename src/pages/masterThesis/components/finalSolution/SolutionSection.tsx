import styles from "./SolutionSection.module.scss";
import Solution from "./solutions/Solution.tsx";

import lineAssistVideo from "@/assets/images/mastersThesis/LineAssistVideo.mp4";
import twoPointyVideo from "@/assets/images/mastersThesis/TwoPointyVideo.mp4";
import processWizardVideo from "@/assets/images/mastersThesis/ProcessWizardVideo.mp4";

const solutionData = [
  {
    title: "Line Assist",
    description:
      "Line Assist helps annotators align cuboids to the ground by displaying dotted lines extending from the cuboid's base. These lines adjust in width and color based on settings and object class, providing visual cues for rotation.",
    videoLink: lineAssistVideo,
  },
  {
    title: "Two Pointy",
    description:
      "Two Pointy is a tool for aligning cuboids horizontally to the ground by drawing a line to rotate the cuboid. It is accessed by holding the shift key and using the mouse to place two points. The line remains parallel to the cuboid, allowing precise angle adjustments. Annotators can draw the line anywhere, including on the ground for optimal alignment, or elsewhere if the ground is not visible.",
    videoLink: twoPointyVideo,
  },
  {
    title: "Process Wizard",
    description:
      "Sequence Process Wizard streamlines the sequence annotation workflow by guiding annotators through optimized steps to minimize micro-adjustments. Positioned conveniently above the sequence bar, it features three phases: Process Guide, Edit Cuboid, and Edit Keyframes. Annotators are led through tasks like aligning, resizing, and scaling cuboids using intuitive tools and visual cues. Progress is indicated with clear step states and tooltips, ensuring smooth navigation.",
    videoLink: processWizardVideo,
  },
];

const SolutionSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>The Final Solutions</h2>
      <div className={styles.divider} />
      <div className={styles.part}>
        <Solution
          title={solutionData[0].title}
          text={solutionData[0].description}
          videoLink={solutionData[0].videoLink}
        />
      </div>
      <div className={styles.part}>
        <Solution
          title={solutionData[1].title}
          text={solutionData[1].description}
          videoLink={solutionData[1].videoLink}
          videoOnLeft={true}
        />
      </div>
      <div className={styles.part}>
        <Solution
          title={solutionData[2].title}
          text={solutionData[2].description}
          videoLink={solutionData[2].videoLink}
        />
      </div>
    </div>
  );
};

export default SolutionSection;
