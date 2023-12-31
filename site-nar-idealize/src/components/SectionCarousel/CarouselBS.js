import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './carouselBS.css';
import img1 from '../assets/painel-luzes.jpg';
import img2 from '../assets/jardim-suspenso-lateral.jpg';
import img3 from '../assets/painel-top.jpg';
import img4 from '../assets/jardim-suspenso-montando.jpg';
import img5 from '../assets/painel-close.jpg';
import img6 from '../assets/painel-lateral.jpg';
import img7 from '../assets/vaso-suspenso2.jpg';
import img8 from '../assets/painel-verde-menor.jpg';
import img9 from '../assets/painel-verde-grande-claro.png';
import img10 from '../assets/vaso-grande-luzes.jpg';
import img11 from '../assets/painel-verde-pequeno-3.jpg';
// import img12 from '../assets/.jpg';
import img13 from '../assets/vasos-suspenso.jpg';
// import img14 from '../assets/.jpg';
import img15 from '../assets/vasos-transformacao.jpg';


function CarouselBS() {
    return (
      <div className="carousel-container" style={{ display: 'block', width: '700' }}>
        <h1>Trabalhos realizados</h1>
        <Carousel fade pause="hover">
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img1}
              alt="Image"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img2}
              alt="Image"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img3}
              alt="Image"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img4}
              alt="Image"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img5}
              alt="Image"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img6}
              alt="Image"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img7}
              alt="Image"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img8}
              alt="Image"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img9}
              alt="Image"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img10}
              alt="Image"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img11}
              alt="Image"
            />
          </Carousel.Item>
          {/* <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img12}
              alt="Image"
            />
          </Carousel.Item> */}
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img13}
              alt="Image"
            />
          </Carousel.Item>
          {/* <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img14}
              alt="Image"
            />
          </Carousel.Item> */}
          <Carousel.Item interval={1500}>
            <img
            className="d-block w-100"
              src={img15}
              alt="Image"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }

  export default CarouselBS;