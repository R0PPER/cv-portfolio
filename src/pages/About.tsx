import { Button } from "../Button";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import imageUrl from "../img/Photo.webp";

export const About = () => {
  return (
    <article className="about">
      <div className="about-text">
        <div>
          <h2>about</h2>
          <p>
            Hi, I’m Panos Kyriazidis, a Front-end web developer from Greece. I
            enjoy turning my ideas into code and giving them form and substance.
            Through my studies and the projects I’ve completed, I’ve gained
            experience with JavaScript, React, TypeScript, CSS, HTML, as well as
            state management techniques like Context, Redux, and API
            integrations. Always striving to push my limits, I’ve recently
            started expanding my skills into back-end technologies such as
            Node.js, Express, and MongoDB.
          </p>

          <Button
            arrowIcon={<ArrowDownIcon />}
            to={`https://drive.google.com/file/d/1G8Z14ObWYWPBawAa4gI10PCc27K0Oe-o/view?usp=sharing`}
            external
          >
            resume
          </Button>
        </div>
      </div>
      <div className="about-image">
        <img src={imageUrl} alt="photo" />
      </div>
    </article>
  );
};
