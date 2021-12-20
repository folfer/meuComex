import React from "react";
import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import FirstImg from "../../assets/retan.png";
import SecondImg from "../../assets/retan.png";
import ThirdImg from "../../assets/retan.png";

import { Container, Image } from "./styles";

const CarouselComponent: React.FC = () => {
  return (
    <Container
      plugins={[
        "clickToChange",
        "centered",
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 3,
          },
        },
      ]}
    >
      <Image src={FirstImg} alt="Image" />
      <Image src={SecondImg} alt="Image" />
      <Image src={ThirdImg} alt="Image" />
    </Container>
  );
};

export default CarouselComponent;
