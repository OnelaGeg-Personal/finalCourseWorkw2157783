import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyList = ({ properties, addFavourite}) =>{
    return(
        <div className="property-grid">
            {properties.map(p => (
                <PropertyCard
                    key={p.id}
                    property={p}
                    addFavourite={addFavourite}
                />
            ))}
        </div>
    );
};

export default PropertyList;