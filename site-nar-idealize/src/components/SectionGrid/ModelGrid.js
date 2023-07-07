import PropTypes from 'prop-types'
import './grid.css';

function ModelGrid({ img, title, text }) {
    return (
        <div className="gridContainer">
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

ModelGrid.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string, 
    text: PropTypes.string,
}

export default ModelGrid