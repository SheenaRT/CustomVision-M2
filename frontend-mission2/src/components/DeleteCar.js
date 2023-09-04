import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

function DeleteCar() {
  const [carsData, setCarsData] = useState([]);
  const [selectedCarId, setSelectedCarId] = useState('');
  const [showCarsList, setShowCarsList] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false); // State for tracking successful deletion

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
  }, [showCarsList]);

  const handleDelete = async () => {
    if (!selectedCarId) {
      return; // No car selected for deletion
    }

    try {
      await axios.delete(`/api/cars/${selectedCarId}`);
      setSelectedCarId(''); // Clear the selected car
      setShowCarsList(!showCarsList); // Trigger a re-fetch of the cars list
      setIsDeleted(true); // Set the deletion success flag
    } catch (error) {
      console.error(error);
      setIsDeleted(false); // Set the deletion success flag to false on error
    }
  };

  return (
    <div>
      <h2>Delete Car</h2>
      <div>
        <label>Select a Car to Delete: </label>
        <select
          value={selectedCarId}
          onChange={(e) => setSelectedCarId(e.target.value)}
        >
          <option value="">Select a car</option>
          {carsData.map((car) => (
            <option key={car._id} value={car._id}>
              {car.Make} - {car.Model} - {car.Year} - ${car.Amount}
            </option>
          ))}
        </select>
        <button onClick={handleDelete}>Delete Car</button>
        {isDeleted && <p>Deleted Successfully</p>}
      </div>

      {showCarsList && (
        <>
          <h2>Cars List</h2>
          <ul>
            {carsData.map((car) => (
              <li key={car._id}>
                {car.Make} - {car.Model} - {car.Year} - ${car.Amount}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default DeleteCar;
