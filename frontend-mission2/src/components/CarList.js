import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

function CarList() {
  const [carsData, setCarsData] = useState([]);
  const [showCars, setShowCars] = useState(false); // State to control whether to show cars

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/cars');
        setCarsData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [showCars]); // Include showCars in the dependency array

  return (
    <div>
      <h2>List Cars</h2>
      {showCars && ( // Conditionally render the cars list when showCars is true
        <ul>
          {carsData.map((car) => (
            <li key={car._id}>
              {car.Make} - {car.Model} - {car.Year} - ${car.Amount}
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => setShowCars(!showCars)}>Show Me Cars</button>
    </div>
  );
}

export default CarList;
