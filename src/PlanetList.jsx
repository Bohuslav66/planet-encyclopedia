import React, { useState } from 'react';
import PlanetInfo from './PlanetInfo.jsx';

const PlanetList = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const planets = [
    { name: 'Mercury', image: 'mercury.jpg' },
    { name: 'Venus', image: 'venus.jpg' },
    { name: 'Earth', image: 'earth.jpg' },
    { name: 'Mars', image: 'mars.jpg' },
    { name: 'Jupiter', image: 'jupiter.jpg' },
    { name: 'Saturn', image: 'saturn.jpg' },
    { name: 'Uranus', image: 'uranus.jpg' },
    { name: 'Neptune', image: 'neptune.jpg' },
  ];

  return (
    <div>
      <h1>Planets in Our Solar System</h1>
      <ul>
        {planets.map((planet) => (
          <li key={planet.name} onClick={() => setSelectedPlanet(planet.name)}>
            <img
              src={require(`C:/Users/nitra/Desktop/_/skola/projekts/solar-system-encyclopedia/src/images/${planet.image}`).default}
              alt={planet.name}
              style={{ cursor: 'pointer', maxWidth: '50px', maxHeight: '50px', cursor: 'pointer' }}
            />
          </li>
        ))}
      </ul>
      {selectedPlanet && <PlanetInfo planetName={selectedPlanet} />}
    </div>
  );
};

export default PlanetList;