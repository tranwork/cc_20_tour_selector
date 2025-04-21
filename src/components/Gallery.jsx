import React from 'react';
import TourCard from './TourCard';

function Gallery({ tours, loading, error, selectedDestination, onRemove, onRefresh }) {
  if (loading) return <p>Loading tours...</p>;
  if (error) return <p>Error fetching tours. Please try again.</p>;

  const filteredTours =
    selectedDestination === 'All'
      ? tours
      : tours.filter((tour) => tour.name === selectedDestination);

  if (filteredTours.length === 0) {
    return (
      <div>
        <p>No tours left. Refresh to reload.</p>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );
  }

  return (
    <section>
      {filteredTours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
}

export default Gallery;