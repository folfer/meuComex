import styled from 'styled-components';
import Carousel from "@brainhubeu/react-carousel";


export const Container = styled(Carousel)`
  width: 100%;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;

  @media (min-width: 976px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1300px) {
    width: 500px;
    height: 500px;
  }
`;
