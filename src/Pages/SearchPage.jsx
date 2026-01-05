import React, {useState} from "react";
import data from "../data/properties.json";
import SearchBar from "../Components/SearchBar.jsx";
import PropertyList from "../Components/PropertyList.jsx";
import Favourites from "../Components/Favourites.jsx";
import { filterProperties } from "../utils/filterProperties.js";

console.log("Data Loaded", data);
const SearchPage = () =>{
    const [filters, setFilters] = useState({});

    const [favourites, setFavourites] =useState([]);

    const addFavourite = (property) =>{
        if (!favourites.find((f) => f.id === property.id)){
            setFavourites([...favourites, property]);
        }
    };

    const removeFavourite = (id) => {
        setFavourites(favourites.filter(() => f.id !== id));
    };

    const filtered = filterProperties(data.properties, filters);

    return(
        <div className="container">
            <div  className="main-content">
                <SearchBar filters={filters} setFilters={setFilters}/>
                <PropertyList properties={filtered} addFavourite={addFavourite}/>
                <Favourites favourites={favourites} removeFavourite={removeFavourite}/>
            </div>
        </div>
    );
};

export default SearchPage;