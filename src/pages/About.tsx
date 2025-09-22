import { Button } from "../Button";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import imageUrl from "../img/ai.jpeg";

export const About = () => {
  return (
    <article className="about">
      <div className="about-text">
        <div>
          <h2>about</h2>
          <p>
            Hey, my name is Charles Bruyerre and I use Sharlee as my nickname
            across social medias. I’m a graphic designer, UX/UI designer &
            front-end web developer from France. I’m also passionate about pop
            music and make portraits and universes around what I listen to and
            I’m always curious to learn more when it comes to new technologies
            and creative coding.
          </p>

          <Button arrowIcon={<ArrowDownIcon />} to={`www.google.com`} external>
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
