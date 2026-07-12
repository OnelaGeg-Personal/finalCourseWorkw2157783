import React from "react";
import {Link} from "react-router-dom";


const  PropertyCard =({property, addFavourite}) => {
    console.log(property.images);
    const thumbnail =property.picture[0]

    // Drag-and-drop: store the property's id on the drag event so the
    // Favourites drop zone can look it up and add it.
    const handleDragStart = (e) => {
        e.dataTransfer.setData("text/plain", property.id);
        e.dataTransfer.effectAllowed = "copy";
    };

    return(
        <div className="property-card"  draggable
            onDragStart={handleDragStart}>
            <img src={thumbnail} alt={`${property.type} thumbnail`} />
            

            <h3>£{property.price.toLocaleString()}</h3>
            <p>{property.bedrooms} bedroom {property.type}</p>
            <p>{property.location}</p>

            <button onClick={() => addFavourite(property)}>
                ❤️ Add to Favourites
            </button>

            <Link to={`/property/${property.id}`}>View Details</Link>
        </div>
    );
};

export default PropertyCard;
