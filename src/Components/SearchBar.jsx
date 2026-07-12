import React from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

const TYPE_OPTIONS = [
    { value: "Any", label: "Any" },
    { value: "House", label: "House" },
    { value: "Flat", label: "Flat" },
];

const BEDROOM_OPTIONS = [0, 1, 2, 3, 4, 5, 6].map((n) => ({
    value: n,
    label: n === 6 ? "6+" : String(n),
}));

const PRICE_OPTIONS = [100000, 200000, 300000, 400000, 500000, 750000, 1000000, 1500000].map(
    (p) => ({ value: p, label: `£${p.toLocaleString()}` })
);

// Known postcode areas from the current dataset - user can still type a new one.
const POSTCODE_OPTIONS = ["BR1", "BR5", "BR6", "BR7", "CRO", "DA15", "E14", "SE13"].map((pc) => ({
    value: pc,
    label: pc,
}));

const SearchBar = ({filters, setFilters}) => {
   const setFilter = (name, value) => {
        setFilters({ ...filters, [name]: value });
    };

     return (
           <form className="Search-form" onSubmit={(e) => e.preventDefault()}>
               <label>Property Type</label>
               <Select
                   classNamePrefix="rs"
                   options={TYPE_OPTIONS}
                   defaultValue={TYPE_OPTIONS[0]}
                   onChange={(option) => setFilter("type", option?.value)}
                   isClearable={false}
               />
   
               <label>Min Price</label>
               <CreatableSelect
                   classNamePrefix="rs"
                   options={PRICE_OPTIONS}
                   placeholder="Any"
                   isClearable
                   onChange={(option) => setFilter("minPrice", option ? Number(option.value) : undefined)}
               />
   
               <label>Max Price</label>
               <CreatableSelect
                   classNamePrefix="rs"
                   options={PRICE_OPTIONS}
                   placeholder="Any"
                   isClearable
                   onChange={(option) => setFilter("maxPrice", option ? Number(option.value) : undefined)}
               />
   
               <label>Min Bedrooms</label>
               <Select
                   classNamePrefix="rs"
                   options={BEDROOM_OPTIONS}
                   placeholder="Any"
                   isClearable
                   onChange={(option) => setFilter("minBedrooms", option ? option.value : undefined)}
               />
   
               <label>Max Bedrooms</label>
               <Select
                   classNamePrefix="rs"
                   options={BEDROOM_OPTIONS}
                   placeholder="Any"
                   isClearable
                   onChange={(option) => setFilter("maxBedrooms", option ? option.value : undefined)}
               />
   
               <label>Postcode Area</label>
               <CreatableSelect
                   classNamePrefix="rs"
                   options={POSTCODE_OPTIONS}
                   placeholder="e.g. BR1, NW1..."
                   isClearable
                   onChange={(option) => setFilter("postcode", option ? option.value : undefined)}
               />
   
               <label>Date Added After</label>
               <DatePicker
                   selected={filters.startDate ?? null}
                   onChange={(date) => setFilter("startDate", date)}
                   selectsStart
                   startDate={filters.startDate ?? null}
                   endDate={filters.endDate ?? null}
                   placeholderText="Any date"
                   isClearable
                   dateFormat="dd/MM/yyyy"
               />
   
           </form>
       );
   
};

export default SearchBar;