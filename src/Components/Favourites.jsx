import React from "react";


const Favourites = ({ favourites, removeFavourite, clearFavourites, onDropProperty }) => {
    // Drop zone: accepts a property card dragged from the results grid
    // and adds it to favourites (drag-to-add).
    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        if (id && onDropProperty) onDropProperty(id);
    };

    // Each favourite item is itself draggable so it can be dragged back
    // out onto the results area to remove it (drag-to-remove).
    const handleFavouriteDragStart = (e, id) => {
        e.dataTransfer.setData("application/favourite-id", id);
        e.dataTransfer.effectAllowed = "move";
    };

    return (
        <aside
            className="favourites"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <div className="favourites-header">
                <h2>Favourites</h2>
                {favourites.length > 0 && (
                    <button onClick={clearFavourites} className="clear-favourites-btn">
                        Clear All
                    </button>
                )}
            </div>

            {favourites.length === 0 && (
                <p className="favourites-empty-hint">
                    Drag a property here, or click "Add to Favourites" on a card.
                </p>
            )}

            {favourites.map((f) => (
                <div
                    key={f.id}
                    className="favourite-item"
                    draggable
                    onDragStart={(e) => handleFavouriteDragStart(e, f.id)}
                >
                    <p>{f.location}</p>
                    <button onClick={() => removeFavourite(f.id)}>❌</button>
                </div>
            ))}
        </aside>
    );
};

export default Favourites;