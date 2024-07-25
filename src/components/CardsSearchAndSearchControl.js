import React, { useEffect } from 'react';
import CardsSearch from './CardsSearch';
import SearchControl from './SearchControl';


function CardsSearchAndSearchControl() {
  return (
    <div className="py-4">
    <div className="row">
        <CardsSearch />
        <SearchControl />
    </div>
    </div>
  );
}

export default CardsSearchAndSearchControl;
