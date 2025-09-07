import { IMAGES } from '../constants';
import PropertyListing from "@/components/common/PropertyListing";
import FilterBar from "@/components/common/FilterBar";
import { useState } from 'react';

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortOption, setSortOption] = useState('');

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto px-4">
      <section style={{backgroundImage: `url(${IMAGES.hero})`}} className="w-full h-[480px] bg-no-repeat bg-center bg-cover rounded-3xl my-6">
        <div className='flex flex-col items-center justify-center text-white text-center pt-16 gap-8'>
          <p className='text-8xl'>Find your favorite <br/> place here!</p>
          <p className='text-2xl'>The best prices for over 2 million properties worldwide</p>
        </div>
      </section>
      
      <FilterBar 
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      
      <PropertyListing 
        activeFilter={activeFilter}
        sortOption={sortOption}
      />
    </div>
  );
};

export default Home;
