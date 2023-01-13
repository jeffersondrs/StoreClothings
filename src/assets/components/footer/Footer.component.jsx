import {
  Container,
  CopyRight,
  FooterContainer,
  ListaFooter,
} from "./footer.styles";

export default function Footer() {
  return (
    <Container>
      <FooterContainer>
        <ListaFooter>
          <div className="row">
            <div className="col-md-4">
              <h3>E-commerce</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Our Products</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4"></div>
          </div>
        </ListaFooter>

        <ListaFooter>
          <div className="row">
            <div className="col-md-4">
              <h3>Our Company</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Our Products</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4"></div>
          </div>
        </ListaFooter>

        <ListaFooter>
          <div className="row">
            <div className="col-md-4">
              <h3>Redes Sociais</h3>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4"></div>
          </div>
        </ListaFooter>
      </FooterContainer>
      <CopyRight>
        <p>© 2022 E-commerce. All rights reserved.</p>{" "}
        <p>Developed by: @jeffersondrs</p>
      </CopyRight>
    </Container>
  );
}
