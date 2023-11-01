import { Container, ContentController } from "./Modal.styled";
import AgreeIcon from "../../components/svgComponents/AgreeIcon";

const Modal = ({ setIsVisible, isError }) => {
  const handleClick = () => setIsVisible((prev) => !prev);
  return (
    <Container>
      <ContentController>
        <div>
          <AgreeIcon />

          <p>
            {!isError
              ? "The Message has been sent!"
              : "something went wrong, please try again later!"}
          </p>
          <button onClick={handleClick}>ok</button>
        </div>
      </ContentController>
    </Container>
  );
};

export default Modal;
