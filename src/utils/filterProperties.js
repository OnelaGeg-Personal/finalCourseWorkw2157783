export const filterProperties = (properties, filters) =>{
    return properties.filter(property =>{
        const matchesType =
        !filters.type||filters.type == "Any" || property.type == filters.type;

        const matchesPrice =
        (!filter.minPrice || property.price >= filters.minPrice) && 
        (!filter.maxPrice || property.price <= filters.maxPrice);

        const matchesBedrooms =
        (!filters.minBedrooms || property.bedrooms >= filters.minBedrooms) &&
        (!filters.maxBedrooms || property.bedrooms <= filters.maxBedrooms);

        const matchesPostCode =
        !filters.postcode ||
        property.location.toLowerCase().includes(filters.postcode.toLowerCase());

        const propertyDate = new Date(
            property.added.month, property.added.day, property.added.year
        );
        const matchesDate =
        !filters.startDate ||
        propertyDate >= new Date(filters.startDate);

        return (
            matchesType &&
            matchesPrice &&
            matchesBedrooms &&
            matchesPostCode &&
            matchesDate
        );
    });
};