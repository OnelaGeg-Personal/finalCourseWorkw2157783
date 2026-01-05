import React, { useState} from "react";

const Tabs = ({property}) => {
    const[active, setActive] = useState("desc");

    return (
        <div>
            <div className="tab-button">
                <button onClick={() => setActive("desc")}>Description</button>
                <button onClick={() => setActive("floor")}>Floor Plan</button>
                <button onClick={() => setActive("map")}>Map</button>

            </div>

            {active === "desc" && <p>{property.description}</p>}
            {active === "floor" && <img src="images/floorplan.jpg" alt="Floor Plan" />}
            {active === "map" && (
                <iframe
                    title="map"
                    src="https://www.google.com/maps"
                    width="100%"
                    height="300">
                </iframe>
             )}
        </div>
    );
};

export default Tabs;