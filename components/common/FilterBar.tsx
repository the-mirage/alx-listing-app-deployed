import { useState } from 'react';

interface FilterBarProps {
  onFilterChange: (category: string) => void;
  onSortChange: (sortOption: string) => void;
}

export default function FilterBar({ onFilterChange, onSortChange }: FilterBarProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const categories = [
    'All',
    'Top Villa',
    'Free Schedule',
    'Self Check-in',
    'Book Now Pay Later',
    'Instant Book'
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="w-full py-4 px-6 flex justify-between items-center">
      {/* Left side - Category filters */}
      <div className="flex gap-3 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`
              px-4 py-2 rounded-full text-sm transition-colors cursor-pointer
              ${selectedCategory === category
                ? 'border border-[#34967C] text-[#34967C] bg-[#F0FFFB]'
                : 'border border-[#E9E9E9] text-black bg-white'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Right side - Filter and Sort */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setShowSortDropdown(!showSortDropdown)}
            className="flex items-center gap-2 px-4 py-2 border border-[#E9E9E9] rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
          </button>
          {showSortDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={() => {
                  onSortChange('highest');
                  setShowSortDropdown(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-50"
              >
                Highest Price
              </button>
              <button
                onClick={() => {
                  onSortChange('lowest');
                  setShowSortDropdown(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-50"
              >
                Lowest Price
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 