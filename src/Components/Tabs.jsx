import React, { useState} from "react";
import FloorPlan from "./FloorPlan.jsx";

const Tabs = ({property}) => {
    const[active, setActive] = useState("desc");

    const mapQuery = encodeURIComponent(property.location);
    const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;


    return (
        <div>
            <div className="tab-button">
                <button 
                    className={active === "desc" ? "tab-active" : ""}
                    onClick={() => setActive("desc")}>
                    Description
                </button>
                <button
                    className={active === "floor" ? "tab-active" : ""} 
                    onClick={() => setActive("floor")}>
                    Floor Plan
                </button>
                <button
                    className={active === "map" ? "tab-active" : ""} 
                    onClick={() => setActive("map")}>
                        Map
                </button>

            </div>

            {active === "desc" && <p className="tab-panel">{property.description}</p>}
            {active === "floor" && (
                <div className="tab-panel">
                    <FloorPlan property={property} />
                </div>
            )}
            {active === "map" && (
               <div className="tab-panel">
                    <iframe
                        title="map"
                        src={mapSrc}
                        width="100%"
                        height="300"
                        loading="lazy"
                    ></iframe>
                </div>
             )}
        </div>
    );
};

export default Tabs;