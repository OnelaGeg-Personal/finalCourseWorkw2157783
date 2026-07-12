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
        setFavourites(favourites.filter((f) => f.id !== id));
    };

    const clearFavourites = () => {
        setFavourites([]);
    };

        // Called when a property card is dropped onto the Favourites panel.
    // The card sets its id via dataTransfer in PropertyCard's onDragStart.
    const handleDropOnFavourites = (id) => {
        const property = data.properties.find((p) => p.id === id);
        if (property) addFavourite(property);
    };

    // Dragging a favourite item back out onto the main results area removes it.
    const handleDragOverMain = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    const handleDropOnMain = (e) => {
        e.preventDefault();
        const favouriteId = e.dataTransfer.getData("application/favourite-id");
        if (favouriteId) removeFavourite(favouriteId);
    };


    const filtered = filterProperties(data.properties, filters);

    return(
        <div className="container">
            <div  className="main-content"                 onDragOver={handleDragOverMain}
                onDrop={handleDropOnMain}>
                <SearchBar filters={filters} setFilters={setFilters}/>
                <PropertyList properties={filtered} addFavourite={addFavourite}/>
                <Favourites favourites={favourites} removeFavourite={removeFavourite} clearFavourites={clearFavourites}
                onDropProperty={handleDropOnFavourites}/>
            </div>
        </div>
    );
};

export default SearchPage;