import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ImageContainer } from "./index.styled";

interface IImageSlider {
  data: { name: string }[];
  fadeImages: string[];
}

function ImageSlider({ data = [], fadeImages }: IImageSlider) {
  const randomIdx = () =>
    Math.floor(Math.random() * (fadeImages.length - 1 - 0 + 1) + 0);

  return (
    <Fade>
      {data.map(({ name }, key) => (
        <div className="each-fade" key={key}>
          <ImageContainer>
            <h2>{name}</h2>
            <img alt={name} width="100%" src={fadeImages[randomIdx()]} />
          </ImageContainer>
        </div>
      ))}
    </Fade>
  );
}

export default ImageSlider;
