import PropTypes from 'prop-types'
import './grid.css';
import React, { useState } from 'react';

function ModelGrid({ imgNormal, imgHover, title, text }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

  return (
    <div
      className={`gridContainer ${isHovered ? 'image-grid' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={isHovered ? imgHover : imgNormal} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

ModelGrid.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string, 
    text: PropTypes.string,
}

export default ModelGrid