import React from "react";

const Favourites = ({favourites, removeFavourite}) => {
    return(
        <aside>
            <h2>Favourites</h2>

            {favourites.map(f => (
                <div key={f.id}>
                    <p>{f.location}</p>
                    <button onClick={() => removeFavourite(f.id)}>❌</button>
                </div>
            ))}
        </aside>
    );
};

export default Favourites;