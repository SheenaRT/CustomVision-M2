import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateCar() {
  const [carId, setCarId] = useState('');
  const [newCarData, setNewCarData] = useState({ Make: '', Model: '', Year: '', Amount: '' });
  const [isUpdated, setIsUpdated] = useState(false);

  const handleInputChange = (e) => {
    setCarId(e.target.value);
  };

  const handleNewCarDataChange = (e) => {
    const { name, value } = e.target;
    setNewCarData({ ...newCarData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/cars/${carId}`, newCarData);
      setIsUpdated(true);
    } catch (error) {
      console.error(error);
      setIsUpdated(false);
    }
  };

  return (
    <div>
      <h2>Update a Car</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="Make"
          placeholder="Make"
          value={newCarData.Make}
          onChange={handleNewCarDataChange}
        />
        <input
          type="text"
          name="Model"
          placeholder="Model"
          value={newCarData.Model}
          onChange={handleNewCarDataChange}
        />
        <input
          type="text"
          name="Year"
          placeholder="Year"
          value={newCarData.Year}
          onChange={handleNewCarDataChange}
        />
        <input
          type="text"
          name="Amount"
          placeholder="Amount"
          value={newCarData.Amount}
          onChange={handleNewCarDataChange}
        />
        <button type="submit">Update Car</button>
        {isUpdated && <p>Car Updated Successfully</p>}
      </form>
    </div>
  );
}

export default UpdateCar;
