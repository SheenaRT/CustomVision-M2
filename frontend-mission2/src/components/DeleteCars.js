import React, { useState } from 'react';
import axios from 'axios';

function DeleteCar() {
  const [carId, setCarId] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  const handleInputChange = (e) => {
    setCarId(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/cars/${carId}`);
      setIsDeleted(true);
    } catch (error) {
      console.error(error);
      setIsDeleted(false);
    }
  };

  return (
    <div>
      <h2>Delete a Car</h2>
      <form onSubmit={handleDelete}>
        <input
          type='text'
          placeholder='Car ID'
          value={carId}
          onChange={handleInputChange}
        />
        <button type='submit'>Delete Car</button>
        {isDeleted && <p>Car Deleted Successfully</p>}
      </form>
    </div>
  );
}

export default DeleteCar;
