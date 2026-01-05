import React from "react";
import {Link} from "react-router-dom";


const  PropertyCard =({property, addFavourite}) => {
    console.log(property.images);
    const thumbnail =property.picture[0]
    return(
        <div className="property-card">
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
