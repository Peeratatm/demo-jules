// src/pages/listings.jsx
import React, { useState, useEffect } from 'react';
import { mockProperties } from '../data/mockProperties.js';
import PropertyCard from '../components/PropertyCard.jsx'; // Ensure .jsx is there

const ListingsPage = () => {
  const [properties, setProperties] = useState(mockProperties);
  const [propertyType, setPropertyType] = useState('All');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    let filteredProperties = mockProperties;

    if (propertyType !== 'All') {
      filteredProperties = filteredProperties.filter(p => p.type === propertyType);
    }

    if (maxPrice !== '' && !isNaN(parseInt(maxPrice))) {
      filteredProperties = filteredProperties.filter(p => p.price <= parseInt(maxPrice));
    }
    setProperties(filteredProperties);
  }, [propertyType, maxPrice]); // mockProperties removed from dependency array

  const uniqueTypes = ['All', ...new Set(mockProperties.map(p => p.type))];

  return (
    <div className="bg-nordic-bg-light min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-nordic-text-primary text-center my-6 md:my-10">
          Property Listings
        </h1>

        {/* Filter Controls */}
        <div className="mb-8 p-6 bg-nordic-surface rounded-xl shadow-lg"> {/* Changed to rounded-xl and shadow-lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"> {/* Adjusted gap */}
            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-nordic-text-secondary mb-1">
                Property Type
              </label>
              <select
                id="propertyType"
                value={propertyType}
                onChange={e => setPropertyType(e.target.value)}
                className="mt-1 block w-full py-2.5 px-3.5 border border-nordic-border bg-nordic-surface rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-nordic-primary focus:border-nordic-primary sm:text-sm text-nordic-text-primary" /* Adjusted padding, border, focus ring */
              >
                {uniqueTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-nordic-text-secondary mb-1">
                Max Price
              </label>
              <input
                type="number"
                id="maxPrice"
                value={maxPrice}
                placeholder="Enter max price"
                onChange={e => setMaxPrice(e.target.value)}
                className="mt-1 block w-full py-2.5 px-3.5 border border-nordic-border bg-nordic-surface rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-nordic-primary focus:border-nordic-primary sm:text-sm text-nordic-text-primary" /* Adjusted padding, border, focus ring */
              />
            </div>
          </div>
        </div>

        {/* Property List */}
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"> {/* Changed lg to xl for 3 cols */}
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="text-center text-nordic-text-secondary text-xl mt-12"> {/* Increased margin top */}
            No properties match your current filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default ListingsPage;
