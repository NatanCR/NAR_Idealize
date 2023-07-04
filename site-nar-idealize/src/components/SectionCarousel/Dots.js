import React from "react";

function Dots({ activeIndex, onclik, sliderImage }) {
    return (
        <div className="all-dots">
            {sliderImage.map((slide, index) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                    onClick={() => onclik(index)}
                ></span>
            ))}
        </div>
    );
}

export default Dots;