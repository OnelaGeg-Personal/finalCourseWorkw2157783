import { test,expect } from "@jest/globals";

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

test('removes property from favourites by id', () => {
    const property = {
        id: 'prop1',
        location: 'Petts Wood Road, Petts Wood, Orpington BR5',
        type: 'House',
        price: 750000
    };
    const favourites = [property];

    const removeFavourite = (fav, id) => fav.filter((f) => f.id !== id);

    const result = removeFavourite(favourites, 'prop1');
    expect(result.length).toBe(0);
});

test('clearing favourites empties the list', () => {
    const favourites = [{ id: 'prop1' }, { id: 'prop2' }];
    const clearFavourites = () => [];

    const result = clearFavourites();
    expect(result.length).toBe(0);
});