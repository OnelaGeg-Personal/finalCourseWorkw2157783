import { filterProperties } from "../utils/filterProperties";
import { test,expect } from "vitest";

const mockProperties =[
    {
        id: 'prop1',
        type: 'House',
        bedrooms: 3,
        price: 750000,
        tenure: 'Freehold',
        location: 'Petts Wood Road, Petts Wood, Orpington BR5',
        PostCode: 'BR5',
        added: { month: 'October', day: 12, year: 2022 },
    },
    {
        id: 'prop2',
        type: 'Flat',
        bedrooms: 1,
        price: 300000,
        tenure: 'Leasehold',
        location: 'NW1, London',
        PostCode: 'NW1',
        added: { month: 'January', day: 5, year: 2023 },
    },
];

test('filter by property type', () => {
    const result = filterProperties(mockProperties, {type:'House'});
    expect(result.length).toBe(1);
    expect(result[0].type).toBe('House');
});

test('filters by minimum price', () => {
    const result =filterProperties(mockProperties, {minPrice:500000});
    expect(result.length).toBe(1);
    expect(result[0].price).toBeGreaterThanOrEqual(500000);
});

test('filters by multiple criteria', () => {
    const result = filterProperties(mockProperties, {type:'House', minPrice:700000});
    expect(result.length).toBe(1);
    expect(result[0].id).toBe('prop1');
});

