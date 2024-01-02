import { loaderVariants } from "../../animationsSettings";
import { Container, Dot } from "./Loader.styled";

const Loader = ({ color }) => {
  return (
    <Container>
      {[1, 2, 3].map((dot, i) => (
        <Dot
          key={i}
          custom={dot}
          variants={loaderVariants}
          initial="initial"
          animate="animate"
          color={color}
        >
          {dot}
        </Dot>
      ))}
    </Container>
  );
};

export default Loader;
