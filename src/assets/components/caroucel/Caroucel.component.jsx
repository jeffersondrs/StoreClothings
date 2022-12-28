import { useRef } from "react";
import cards from "../../../categories";

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

  if (!cards || !cards.length) return null;

  return (
    <div className="container">
      <div className="logo">
        <img src="/static/images/super-shoes.png" alt="Super Shoes Logo" />
      </div>
      <div className="carousel" ref={carousel}>
        {cards.map((item) => {
          const { id, title, imageUrl } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={imageUrl} alt={title} />
              </div>
              <div className="info">
                <span className="name">{title}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img
            src="/static/images/216151_right_chevron_icon.png"
            alt="Scroll Left"
          />
        </button>
        <button onClick={handleRightClick}>
          <img
            src="/static/images/216151_right_chevron_icon.png"
            alt="Scroll Right"
          />
        </button>
      </div>
    </div>
  );
}

export default App;
