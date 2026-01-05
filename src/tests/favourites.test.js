import { test,expect } from "vitest";

test('adds property to favourites', () => {
    const favourites =[];
    const property = {
        id: 'prop1',
        location: 'Petts Wood Road, Petts Wood, Orpington BR5',
        type: 'House',
        price: 750000
    };

    const addFavourite = (fav, prop) => {
        if (!fav.find(f => f.id === prop.id)){
            return [...fav, prop];
        }
        return fav;
    };

    const result= addFavourite(favourites, property);
    expect(result.length).toBe(1);
    expect(result[0]).toEqual(property);
});

test('prevents duplicate favourite', () => {
    const property ={
        id: 'prop1',
        location: 'Petts Wood Road, Petts Wood, Orpington BR5',
        type: 'House',
        price: 750000
    };
    const favourites = [property];

    const addFavourite = (fav, prop) =>{
        if(!fav.find(f => f.id === prop.id)){
            return [...fav, prop];
        }
        return fav;
    };

    const result = addFavourite(favourites, property);
    expect(result.length).toBe(1);
    expect(result[0]).toEqual(property);
});