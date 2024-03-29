import { Container, ContentController } from "./Modal.styled";
import AgreeIcon from "../svgComponents/AgreeIcon";
import DisagreeIcon from "../svgComponents/Disagree";

const Modal = ({ setIsVisible, isError }) => {
  const handleClick = () => setIsVisible((prev) => !prev);
  return (
    <Container>
      <ContentController>
        <div>
          {!isError ? <AgreeIcon /> : <DisagreeIcon />}

          <p>
            {!isError
              ? "The Message has been sent!"
              : "Something went wrong, please try again later!"}
          </p>
          <button onClick={handleClick}>ok</button>
        </div>
      </ContentController>
    </Container>
  );
};

export default Modal;
