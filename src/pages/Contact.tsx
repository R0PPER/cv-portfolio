import { Button } from "../Button";
import { ArrowUpRightIcon } from "../icons/ArrowUpRightIcon";

export const Contact = () => {
  return (
    <div className="contact">
      <h2>contact</h2>
      <div className="contact-container">
        <div className="contact-left">
          <h6>EMAIL</h6>
          <Button
            arrowIcon={<ArrowUpRightIcon />}
            to="mailto:panoskyr94@gmail.com"
            external
          >
            panoskyr94@gmail.com
          </Button>
        </div>
        <div className="contact-right">
          <h6>LINKEDIN</h6>
          <Button
            arrowIcon={<ArrowUpRightIcon />}
            to="https://www.linkedin.com/in/panos-kyriazidis-763027192/"
            external
          >
            linkedin.com
          </Button>
        </div>
      </div>
    </div>
  );
};
