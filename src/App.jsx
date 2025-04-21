import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';
import './styles/styles.css';

const API_URL = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('All');

  const fetchTours = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setTours(data);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const refreshTours = () => {
    setLoading(true);
    fetchTours();
  };

  return (
    <main>
      <h1>Tour Destination Selector</h1>
      <DestinationSelector
        tours={tours}
        selected={selectedDestination}
        setSelected={setSelectedDestination}
      />
      <Gallery
        tours={tours}
        loading={loading}
        error={error}
        selectedDestination={selectedDestination}
        onRemove={removeTour}
        onRefresh={refreshTours}
      />
    </main>
  );
}

export default App;