import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
    return (
        <section className="section-container">
            <h1 className="title">Ultimos trabalhos</h1>
            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slider active" : "inactive"}>
                        <img className="slide-image" src={slide.urls} alt="" />
                </div>
            ))}
        </section>
    );
}

export default SliderContent;