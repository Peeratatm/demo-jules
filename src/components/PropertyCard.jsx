// src/components/PropertyCard.jsx
import React from 'react';

const PropertyCard = ({ property }) => {
  if (!property) return null;

  return (
    <div className="bg-nordic-surface rounded-xl shadow-md hover:shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out w-full max-w-sm flex flex-col"> {/* Added max-w-sm, w-full, flex flex-col */}
      <img
        src={property.imageUrl}
        alt={`Image of ${property.address}`}
        className="w-full h-56 object-cover" /* Increased height to h-56 */
      />
      <div className="p-5 flex flex-col flex-grow"> {/* Added flex-grow to make content area fill space */}
        <h3
          className="text-lg font-semibold text-nordic-primary mb-2 truncate" /* Adjusted text size to lg */
          title={property.address}
        >
          {property.address}
        </h3>
        <p className="text-nordic-accent-aurora-red font-bold text-2xl mb-3"> {/* Adjusted text size to 2xl, margin bottom */}
          ${property.price.toLocaleString()}
        </p>
        <p className="text-sm text-nordic-text-secondary mb-1 capitalize">
          <span className="font-medium">Type:</span> {property.type}
        </p>
        <div className="mt-auto pt-3 border-t border-nordic-border flex justify-between text-xs text-nordic-text-secondary"> {/* Added mt-auto, pt-3, border-t, smaller text */}
          <span><span className="font-medium">{property.bedrooms}</span> bed(s)</span>
          <span><span className="font-medium">{property.bathrooms}</span> bath(s)</span>
          <span><span className="font-medium">{property.sqft}</span> sqft</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
