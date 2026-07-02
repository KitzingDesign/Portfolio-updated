import { Helmet } from "react-helmet";
import styles from "./Ericsson.module.scss";
import Lanyard from "./Lanyard";
import EricssonLogo from "@/assets/lanyard/Ericsson_logo.png";
import CardFront from "@/assets/lanyard/card_font.png";
import EricssonImg from "@/assets/images/home/EricssonImage.webp";
import Footer from "@/components/Layout/Footer";
import KiroIcon from "@/assets/lanyard/kiro.svg";
import StorybookIcon from "@/assets/lanyard/storybook-icon.svg";

const EricssonPage = () => {
  return (
    <>
      <Helmet>
        <title>Ericsson – Private 5G Platform | Jakob Kitzing</title>
      </Helmet>
      <header className={styles.header}>
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          lanyardImage={EricssonLogo}
          lanyardWidth={0.6}
          frontImage={CardFront}
          imageFit="cover"
        />
      </header>

      <section className={styles.contextSection}>
        <div className={styles.contextText}>
          <h2>Designing Inside Complexity</h2>
          <p>
            At Ericsson I worked as a UX Designer from June 2025 to June 2026,
            mainly within the Radio Network domain. It's a complex environment
            where design decisions touch a lot of moving parts at once, requiring
            close collaboration with Product Owners, developers and other
            cross-functional stakeholders to make sure the work aligned with both
            user needs and business goals. Alongside that I also worked with
            maintaining and evolving large component libraries, keeping the design
            of the platform consistent and coherent across a demanding product
            landscape. Due to the nature of the work, the designs and specifics
            remain confidential.
          </p>
          <p>
            What made the role stand out beyond the work itself was the team. We
            built something that went beyond just being colleagues, a group of
            people who genuinely had each other's backs, made the hard problems
            easier and the good days better. It's a reminder of how much the
            people around you shape the work, and how rare it is to find that
            kind of dynamic.
          </p>
        </div>
        <div className={styles.contextImage}>
          <img src={EricssonImg} alt="Ericsson work" loading="lazy" />
        </div>
      </section>

      <section className={styles.aiSection}>
        <div className={styles.aiHeader}>
          <h2>AI Initiatives</h2>
          <p className={styles.aiIntro}>
            Alongside the core design work I drove AI initiatives across the team,
            introducing new workflows, tools and reusable templates that changed
            how we designed and prototyped. Below are a few examples of what I built.
          </p>
        </div>

        <div className={styles.workflows}>
          <div className={styles.workflow}>
            <span className={styles.workflowNumber}>01</span>
            <div>
              <h3>Requirement Extractor</h3>
              <p>
                An AI workflow that parsed requirement documents and extracted
                requirement tables directly into Figma, automatically annotating
                each row with AI-generated impact areas and an estimated effort
                score. This cut hours of manual copy-work from the early design
                process.
              </p>
            </div>
          </div>

          <div className={styles.workflow}>
            <span className={styles.workflowNumber}>02</span>
            <div>
              <h3>Standardised Delivery Path</h3>
              <p>
                An AI-assisted path that transformed any design file into a
                standardised Figma delivery structure, ensuring every file
                handed off to developers followed the same conventions, reducing
                back-and-forth and making handoff predictable across the team.
              </p>
            </div>
          </div>

          <div className={styles.workflow}>
            <span className={styles.workflowNumber}>03</span>
            <div>
              <h3>UX Knowledge Agent</h3>
              <p>
                The most significant initiative was an AI agent built on our internal
                UX knowledge and connected directly to our Storybook component
                library. It could be used for rapid prototyping, pulling real
                components into layouts, and for general UX review, giving the
                team an always-available design consultant grounded in our own
                standards and patterns.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.agentDiagram}>
          <h3>From AI to prototypes</h3>
          <div className={styles.diagramWrapper}>
            <div className={styles.diagramNode}>
              <div className={styles.nodeIcon}>
                <img src={KiroIcon} alt="Kiro" />
              </div>
              <span>Kiro Agent</span>
            </div>
            <div className={styles.diagramArrows}>
              <div className={styles.arrowLine}>
                <svg viewBox="0 0 120 24" fill="none">
                  <line x1="4" y1="12" x2="116" y2="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
                  <polyline points="108,6 116,12 108,18" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <polyline points="12,6 4,12 12,18" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>
            <div className={styles.diagramNode}>
              <div className={styles.nodeIcon}>
                <img src={StorybookIcon} alt="Storybook" />
              </div>
              <span>Storybook Components</span>
            </div>
            <div className={styles.diagramArrows}>
              <div className={styles.arrowLine}>
                <svg viewBox="0 0 120 24" fill="none">
                  <line x1="4" y1="12" x2="116" y2="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
                  <polyline points="108,6 116,12 108,18" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <polyline points="12,6 4,12 12,18" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>
            <div className={styles.diagramNode}>
              <div className={styles.nodeIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="14" rx="2" />
                  <path d="M8 20h8M12 18v2" />
                </svg>
              </div>
              <span>Prototype</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default EricssonPage;
