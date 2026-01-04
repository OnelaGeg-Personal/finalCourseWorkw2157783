import React from "react";
import {useParams} from "react-router-dom";
import data from "./data/properties.json";
import Tabs from "./Companents/Tabs.jsx";

const PropertyPage = () => {
    const {id} = useParams();
    const property = properties.find(p => p.id === id);

    return(
        <div>
            <h1>{property.type} in {property.location}</h1>
            <img src={property.picture} alt="" />

            <Tabs property={property} />
        </div>
    );
};

export default PropertyPage;