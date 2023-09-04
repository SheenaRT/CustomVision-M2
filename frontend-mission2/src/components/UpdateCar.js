import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

function UpdateCar() {
  const [car, setCar] = useState({ Make: '', Model: '', Year: '', Amount: '' });
  const [carsData, setCarsData] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null); // State to store the selected car
  const [showCarsList, setShowCarsList] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false); // State for tracking successful update

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

  // Function to handle selecting a car for update
  const handleCarSelect = (car) => {
    setSelectedCar(car); // Set the selected car
    // Populate the input fields with the selected car's details
    setCar({
      Make: car.Make,
      Model: car.Model,
      Year: car.Year,
      Amount: car.Amount,
    });
    setIsUpdated(false); // Reset the update success flag
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a PUT request to update the selected car's information
      await axios.put(`/api/cars/${selectedCar._id}`, car); // Use the actual car ID
      setCar({ Make: '', Model: '', Year: '', Amount: '' });
      setShowCarsList(!showCarsList);
      setIsUpdated(true); // Set the update success flag
    } catch (error) {
      console.error(error);
      setIsUpdated(false); // Set the update success flag to false on error
    }
  };

  return (
    <div>
      <h2>Update Car Information</h2>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => handleCarSelect(JSON.parse(e.target.value))}>
          <option value="">Select a car to update</option>
          {carsData.map((car) => (
            <option key={car._id} value={JSON.stringify(car)}>
              {car.Make} - {car.Model} - {car.Year} - ${car.Amount}
            </option>
          ))}
        </select>
        {selectedCar && (
          <>
            <input
              type="text"
              name="Make"
              placeholder="Make"
              value={car.Make}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="Model"
              placeholder="Model"
              value={car.Model}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="Year"
              placeholder="Year"
              value={car.Year}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="Amount"
              placeholder="Amount"
              value={car.Amount}
              onChange={handleInputChange}
            />
          </>
        )}
        <button type="submit">Update Car</button>
        {isUpdated && <p>Updated Successfully</p>}
      </form>

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

export default UpdateCar;
