function ModelGrid({img, title, text}) {
    return (
        <div>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default ModelGrid