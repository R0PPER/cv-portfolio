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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            fugiat incidunt, inventore qui obcaecati itaque necessitatibus
            quisquam quos, nesciunt nulla soluta quidem laudantium sed deserunt
            corrupti eligendi neque distinctio libero numquam sit earum repellat
            ex odit! Voluptatum maxime at eos?
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
