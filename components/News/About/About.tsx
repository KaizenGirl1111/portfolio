import "./About.css";
import CircularImage from "./CircularImage";
import ArticleSection from "@/components/News/ArticlesSection/ArticlesSection";
function About() {
  return (
    <ArticleSection>
    <div className="container">
      <div className="basis-2/3">
        <div className="title">
          WHO IS AVNI?
          <span className="non-italic font-bold">A DIVE INTO HER PSYCHE</span>
        </div>
        <div className="flex flex-row gap-3 text-md text-justify">
          <div className="section basis-1/2">
            <p>
              In a world of code and creativity, Avni Uplabdhee is the name
              quietly making waves. A software developer with a flair for
              innovation, she has worked with top-tier companies such as
              Flipkart and Publicis Sapient, shaping products that reach
              millions. A graduate of Indira Gandhi Delhi Technical University
              for Women (IGDTUW), Delhi, Avni holds a B.Tech in Computer Science
              and Engineering. Her foundation in algorithms and design meets an
              artist’s eye for structure — a rare mix that defines her work. Her
              primary tech stack includes React JS, TypeScript, Node.js, and
              Java, making her an adaptable full-stack powerhouse.
            </p>
          </div>
          <div className="section1 basis-1/3">
            <p>
              When she’s not deep in code, you’ll find her immersed in research
              papers, psychology journals, or astrological texts, decoding the
              patterns of both human minds and cosmic maps. Colleagues call her
              the “Most Wanted Developer” — not for fame, but for the
              unmistakable touch she leaves on every project. Part engineer,
              part thinker, part dreamer — Avni prefers to let her work do the
              talking. Currently away from the spotlight yet all over the radar,
              she remains the developer everyone’s quietly looking for.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 basis-1/2">
        <CircularImage />
      </div>
    </div>
    </ArticleSection>
  );
}

export default About;
