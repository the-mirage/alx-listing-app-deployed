import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { PropertyProps } from '@/interfaces';
import Image from 'next/image';

// Import PropertyCard directly from PropertyListing component
const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
      <div className="relative h-48">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
        />
        {property.discount && (
          <div className="absolute top-4 left-2 bg-[#2CC39B] text-white px-2 py-1 rounded text-sm flex items-center gap-2 z-10">
            <div className="flex items-center gap-2">
              <Image 
                src="/assets/images/Subtract.png" 
                alt="discount"
                width={16}
                height={16}
              />
              <span>{property.discount}% OFF</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-3 px-4">
        {property.category.map((cat, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-lg font-semibold text-gray-800">
            {property.name}
          </h3>
          <div className="flex items-center ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 37 35"
              fill="none"
            >
              <path
                d="M17.1044 2.60318C17.6447 1.51821 19.187 1.50262 19.7491 2.57645L24.1844 11.0507L34.5946 12.9634C35.5128 13.1321 35.8517 14.2713 35.1751 14.9145L28.2151 21.5306L29.5194 32.8088C29.6258 33.7291 28.6501 34.3865 27.8371 33.9423L18.4006 28.7859L9.01381 33.9151C8.19144 34.3645 7.20771 33.6868 7.3345 32.7583L8.86762 21.5306L1.69235 14.9265C0.997719 14.2871 1.33461 13.1289 2.2638 12.962L12.8983 11.0507L17.1044 2.60318Z"
                fill="#FAC02B"
              />
            </svg>
            <span className="text-sm text-gray-600 ml-1">
              {property.rating}
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3">
          {property.address.city},{" "}
          {property.address.country}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-sm text-gray-600 border border-[#E9E9E9] rounded-xl px-2 py-1">
            <div className="flex items-center">
              <Image 
                src="/assets/images/bed.png" 
                alt="Bed"
                width={16}
                height={16}
              />
              <span className="pl-1">{property.offers.bed}</span>
            </div>
            <div className="flex items-center">
              <Image 
                src="/assets/images/bathtub.png" 
                alt="Shower"
                width={15}
                height={15}
              />
              <span className="pl-1">{property.offers.shower}</span>
            </div>
            <div className="flex items-center">
              <Image 
                src="/assets/images/people.png" 
                alt="Occupants"
                width={16}
                height={16}
              />
              <span className="pl-1">{property.offers.occupants}</span>
            </div>
          </div>

          <div className="text-right">
            <p className="text-lg font-bold text-gray-800">
              ${property.price}
              <span className="text-sm font-normal text-gray-600">/n</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchResults = () => {
  const router = useRouter();
  const { search } = router.query;
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>([]);

  useEffect(() => {
    if (search && typeof search === 'string') {
      const searchTerm = search.toLowerCase();
      const results = PROPERTYLISTINGSAMPLE.filter(property => 
        property.name.toLowerCase().includes(searchTerm) ||
        property.address.city.toLowerCase().includes(searchTerm) ||
        property.address.country.toLowerCase().includes(searchTerm) ||
        property.category.some(cat => cat.toLowerCase().includes(searchTerm))
      );
      setFilteredProperties(results);
    }
  }, [search]);

  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <div className="py-6">
        <h1 className="text-2xl font-semibold mb-2">
          Search Results for &ldquo;{search}&rdquo;
        </h1>
        <p className="text-gray-600 mb-6">
          {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
          
          {filteredProperties.length === 0 && (
            <div className="col-span-full text-center py-12">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">No properties found</h2>
              <p className="text-gray-600">
                Try adjusting your search terms or browse our other options
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults; 