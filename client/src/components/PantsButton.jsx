import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const PantsButton = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchPantsData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/pants');
      setData(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Something went wrong');
    }
  };

  return (
    <div>
      <button onClick={fetchPantsData}>Fetch Pants Data</button>

      {error && <p>{error}</p>}

      {data.length > 0 && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PantsButton;