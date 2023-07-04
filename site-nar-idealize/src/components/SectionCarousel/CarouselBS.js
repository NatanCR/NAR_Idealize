import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './carouselBS.css';
import image1 from '../assets/painel-top-montagem.jpg';
import image2 from '../assets/painel-top-montagem-2.jpg';
import image3 from '../assets/painel-top.jpg';
import image4 from '../assets/jardim-suspenso.jpg';
import image5 from '../assets/jardim-suspenso-esquerda.jpg';
import image6 from '../assets/jardim-suspenso-geral.jpg';
import image7 from '../assets/jardim-suspenso-meio.jpg';
import image8 from '../assets/painel-verde-montagem.jpg';
import image9 from '../assets/painel-verde-grande.jpg';
import image10 from '../assets/painel-verde-pequeno-2.jpg';
import image11 from '../assets/painel-verde-pequeno-3.jpg';
import image12 from '../assets/painel-verde.jpg';
import image13 from '../assets/vasos-suspenso.jpg';
import image14 from '../assets/vasos-suspenso-2.jpg';
import image15 from '../assets/vasos-transformacao.jpg';


function CarouselBS() {
    return (
      <div style={{ display: 'block', width: '700', padding: 30}}>
        <h4>React-Bootstrap Carousel Component</h4>
        <Carousel fade pause="hover">
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image1}
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image2}
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image3}
              alt="Image Three"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image4}
              alt="Image four"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image5}
              alt="Image five"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image6}
              alt="Image five"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image7}
              alt="Image five"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image8}
              alt="Image five"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image9}
              alt="Image five"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image10}
              alt="Image five"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image11}
              alt="Image five"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image12}
              alt="Image five"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image13}
              alt="Image five"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image14}
              alt="Image five"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={image15}
              alt="Image five"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }

  export default CarouselBS;