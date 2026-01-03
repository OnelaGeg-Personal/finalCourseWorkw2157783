import React from "react";
import {Link} from "react-router-dom";

const  PropertyCard =({property, addFavourite}) => {
    return(
        <div className="property-card">
            <img src={property.picture} alt={property.type} />

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