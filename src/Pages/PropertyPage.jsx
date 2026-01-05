import React from "react";
import {useParams} from "react-router-dom";
import data from "../data/properties.json";
import Tabs from "../Components/Tabs.jsx";

const PropertyPage = () => {
    const {id} = useParams();
    const property = data.properties.find(p => p.id === id);
    console.log(id);

    if (!property) return <h2>Property Not Found</h2>

    return(
        <div>
            <h1>{property.type} in {property.location}</h1>
            <div className="property-page-image">
                {property.picture.map((img, index) => (
                    <img key={index} src={img} alt={`${property.type} ${index + 1}`} />
                ))}
            </div>
            <Tabs property={property} />
        </div>
    );
};

export default PropertyPage;