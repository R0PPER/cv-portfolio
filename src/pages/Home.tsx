// import { CSSTransition } from "react-transition-group";

import { Button } from "../Button";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";

export const Home = () => {
  return (
    <main className="home">
      <h3>
        <span>Hi, I’m </span>Panos Kyriazidis <br />
        <span>Turning pixels into interactive experiences — </span> that’s what
        I do
      </h3>
      <p> I’m a front-end web developer</p>
      <div>
        <Button arrowIcon={<ArrowRightIcon />} to={`/work`}>
          see my projects
        </Button>
        <Button arrowIcon={<ArrowRightIcon />} to={`/about`}>
          more about me
        </Button>
      </div>
    </main>
  );
};
