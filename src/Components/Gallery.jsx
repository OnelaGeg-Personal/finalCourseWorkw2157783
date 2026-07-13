import React, { useState } from "react";

// A proper large-image + thumbnail gallery, built with plain React state
// (no external library) - clicking a thumbnail swaps the large image,
// and prev/next buttons step through the set.
const Gallery = ({ images, altText }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const showPrev = () => {
        setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    };

    const showNext = () => {
        setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    };

    return (
        <div className="gallery">
            <div className="gallery-main">
                <button
                    className="gallery-nav gallery-prev"
                    onClick={showPrev}
                    aria-label="Previous image"
                >
                    ‹
                </button>

                <img
                    className="gallery-main-image"
                    src={images[activeIndex]}
                    alt={`${altText} - image ${activeIndex + 1} of ${images.length}`}
                />

                <button
                    className="gallery-nav gallery-next"
                    onClick={showNext}
                    aria-label="Next image"
                >
                    ›
                </button>
            </div>

            <div className="gallery-thumbnails">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`${altText} thumbnail ${index + 1}`}
                        className={
                            index === activeIndex
                                ? "gallery-thumb gallery-thumb-active"
                                : "gallery-thumb"
                        }
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
