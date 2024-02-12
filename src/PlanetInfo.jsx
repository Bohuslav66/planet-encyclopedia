// src/components/PlanetInfo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlanetInfo = ({ planetName }) => {
  const [planetInfo, setPlanetInfo] = useState(null);

  useEffect(() => {
    const fetchPlanetInfo = async () => {
      try {
        const response = await axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`);
        setPlanetInfo(response.data);
      } catch (error) {
        console.error('Error fetching planet information:', error);
      }
    };

    fetchPlanetInfo();
  }, [planetName]);

  return (
    <div>
      {planetInfo ? (
        <div>
          <h2>{planetInfo.englishName}</h2>
          <p>Mass: {planetInfo.mass.massValue} {planetInfo.mass.massExponent} kg</p>
          <p>Radius: {planetInfo.meanRadius} km</p>
          {/* Add more information as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlanetInfo;