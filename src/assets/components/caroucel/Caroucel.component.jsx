import { useRef } from "react";
import Categories from "../../../categories";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

import {
  Container,
  Button,
  Buttons,
  Carousel,
  ContainerCarousel,
  Image,
  Info,
  Item,
  Name,
} from "./caroucel.styles";

function App() {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!Categories || !Categories.length) return null;

  return (
    <Container>
      <ContainerCarousel>
        <Carousel ref={carousel}>
          {Categories.map((item) => {
            const { id, title, imageUrl } = item;
            return (
              <Item key={id}>
                <Image>
                  <img src={imageUrl} alt={title} />
                </Image>
                <Info>
                  <Name>{title}</Name>
                </Info>
              </Item>
            );
          })}
        </Carousel>
        <Buttons>
          <Button onClick={handleLeftClick}>
            <MdOutlineNavigateBefore />
          </Button>
          <Button onClick={handleRightClick}>
            <MdOutlineNavigateNext />
          </Button>
        </Buttons>
      </ContainerCarousel>
    </Container>
  );
}

export default App;
