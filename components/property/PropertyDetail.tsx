import React from 'react';

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  // Add more property fields as needed
}

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <div className="mb-6">
        <p className="text-gray-600">{property.location}</p>
        <p className="text-2xl font-semibold mt-2">${property.price}</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetail;
