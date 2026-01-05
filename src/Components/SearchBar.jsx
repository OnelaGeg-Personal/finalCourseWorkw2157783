import React from "react";

const SearchBar = ({filters, setFilters}) => {
    const handleChange =(e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    return(
        <form className = "Search-form">
            <labale>Property Type</labale>
            <select name="type" onChange={handleChange}>
                <option>Any</option>
                <option>House</option>
                <option>Flat</option>
            </select>
            
            <label>Min Price</label>
            <input type="number" name="minPrice" onChange={handleChange} />

            <label>Max Price</label>
            <input type="number" name="maxPrice" onChange={handleChange} />

            <label>Min Bedrooms</label>
            <input type="number" name="minBedrooms" onChange={handleChange} />

            <label>Max Bedrooms</label>
            <input type="number" name="maxBedrooms" onChange={handleChange} />

            <label>Postcode Area</label>
            <input type="text" name="postcode" placeholder="BR1, NW1..." onChange={handleChange} />

            <label>Date Added After</label>
            <input type="date" name="startDate" onChange={handleChange} />

        </form>
    );
};

export default SearchBar;