import PropTypes from 'prop-types'

function ModelGrid({img, title, text}) {
    return (
        <div>
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