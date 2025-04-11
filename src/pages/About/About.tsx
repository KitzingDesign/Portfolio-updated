import styles from "./About.module.scss";
import WorkExperience from "./components/WorkExperience";
import HeroImg from "@/assets/images/about/actionFigure.png";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>Who am I?</h2>
        <p>
          My name is Jakob, and I'm a UX/UI designer, human researcher, product
          developer, and music lover; everything from electronic music to jazz
          resonates through my headphones. As a person, I'm outgoing and caring
          about my surroundings, believing that everything is more enjoyable
          when those around me are happy. My philosophy is that having fun
          reflects positively on the results. As a designer, I'm always curious
          and eager to learn new things. I love challenging myself and working
          with diverse teams to get fresh ideas and perspectives. I'm especially
          excited about new technologies like AI and ML and how they can improve
          how we work with user experiences. To deepen my understanding of how
          new technologies can be utilized, I actively explore AI-powered tools
          to enhance my design process and create more intuitive user
          interactions.
        </p>

        <h2>Work Experience</h2>
        <WorkExperience
          company="Google"
          time="2020 - Present"
          description="Developed new features for Google Search using React and TypeScript. Led a team of 5 engineers to deliver major updates."
        />
        <WorkExperience
          company="Microsoft"
          time="2018 - 2020"
          description="Contributed to Azure cloud services development. Implemented critical security features that reduced vulnerabilities by 40%."
        />
      </div>

      <div className={styles.imgContainer}>
        <img
          src={HeroImg}
          alt="Action figure of Jakob Kitzing in collectible packaging"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AboutPage;
