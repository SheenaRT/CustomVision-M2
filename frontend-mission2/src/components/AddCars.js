import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

function AddCar() {
  const [car, setCar] = useState({ Make: '', Model: '', Year: '', Amount: '' });
  const [carsData, setCarsData] = useState([]);
  const [showCarsList, setShowCarsList] = useState(false);
  const [isAdded, setIsAdded] = useState(false); 

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/cars', car);
      setCar({ Make: '', Model: '', Year: '', Amount: '' });
      setShowCarsList(!showCarsList); 
      setIsAdded(true); 
    } catch (error) {
      console.error(error);
      setIsAdded(false); 
    }
  };

  return (
    <div>
      <h2>Create a New Car</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add Car</button>
        {isAdded && <p>Added Car Successfully</p>}
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

export default AddCar;