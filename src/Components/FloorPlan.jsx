import React from "react";

// There are no real floor-plan images/plans in the dataset, so rather than
// point at a missing file (the old, broken behaviour), this generates a
// simple schematic floor plan from the property's own data: bedroom count
// and type decide the room layout. It's not a scanned architect's plan,
// but it's a genuine, property-specific visual rather than a dead <img>.
const FloorPlan = ({ property }) => {
    const { bedrooms, type } = property;
    const width = 400;
    const height = 300;

    // Bedrooms sit along the top, a living/kitchen area fills the bottom.
    const bedroomWidth = width / Math.max(bedrooms, 1);
    const bedroomHeight = height * 0.45;

    const rooms = Array.from({ length: bedrooms }, (_, i) => ({
        x: i * bedroomWidth,
        y: 0,
        w: bedroomWidth,
        h: bedroomHeight,
        label: `Bed ${i + 1}`,
    }));

    return (
        <div className="floor-plan">
            <svg
                viewBox={`0 0 ${width} ${height}`}
                width="100%"
                height="auto"
                role="img"
                aria-label={`Schematic floor plan for this ${bedrooms}-bedroom ${type.toLowerCase()}`}
            >
                <rect x="0" y="0" width={width} height={height} fill="none" stroke="#333" strokeWidth="3" />

                {rooms.map((r, i) => (
                    <g key={i}>
                        <rect
                            x={r.x}
                            y={r.y}
                            width={r.w}
                            height={r.h}
                            fill="#e8d5f2"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <text
                            x={r.x + r.w / 2}
                            y={r.y + r.h / 2}
                            textAnchor="middle"
                            fontSize="12"
                            fill="#333"
                        >
                            {r.label}
                        </text>
                    </g>
                ))}

                <rect
                    x="0"
                    y={bedroomHeight}
                    width={width * 0.6}
                    height={height - bedroomHeight}
                    fill="#c9e4ff"
                    stroke="#333"
                    strokeWidth="2"
                />
                <text
                    x={(width * 0.6) / 2}
                    y={bedroomHeight + (height - bedroomHeight) / 2}
                    textAnchor="middle"
                    fontSize="13"
                    fill="#333"
                >
                    Living / Dining
                </text>

                <rect
                    x={width * 0.6}
                    y={bedroomHeight}
                    width={width * 0.4}
                    height={height - bedroomHeight}
                    fill="#d5f2d9"
                    stroke="#333"
                    strokeWidth="2"
                />
                <text
                    x={width * 0.6 + (width * 0.4) / 2}
                    y={bedroomHeight + (height - bedroomHeight) / 2}
                    textAnchor="middle"
                    fontSize="13"
                    fill="#333"
                >
                    Kitchen
                </text>
            </svg>
            <p className="floor-plan-note">
                Schematic layout generated from this property's bedroom count - not to scale.
            </p>
        </div>
    );
};

export default FloorPlan;
