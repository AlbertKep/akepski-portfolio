import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Container } from "../../components/templates/Container"
import {FooterBackground} from './Footer.styled'



const Footer = () => {
  return (

    <footer>
      <FooterBackground>
      <Container>
        <ul>
          <li>
              <a href="http://www.linkedin.com/in/albert-kępski-52913a163" target="_blank" rel="noreferrer">
              <FaLinkedin/>
              </a>
          </li>
          <li>
              <a href="http://https://github.com/AlbertKep" target="_blank" rel="noreferrer">
              <FaGithub/>
              </a>
          </li>
          <li>
            <p>albertkepski3@gmail.com</p>
          </li>
        </ul>
      </Container>
      </FooterBackground>
    </footer>
  )
}

export default Footer
