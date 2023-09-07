import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddCars.css";

axios.defaults.baseURL = "http://localhost:4000";

function AddCar() {
  const [car, setCar] = useState({ Make: "", Model: "", Year: "", Amount: "" });
  const [carsData, setCarsData] = useState([]);
  const [showCarsList, setShowCarsList] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/cars");
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
      await axios.post("/api/cars", car);
      setCar({ Make: "", Model: "", Year: "", Amount: "" });
      setShowCarsList(!showCarsList);
      setIsAdded(true);
    } catch (error) {
      console.error(error);
      setIsAdded(false);
    }
  };

  const columns = 4;
  const rows = 6;

  return (
    <div className="add-car-container">
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
          <table className="styled-table">
            <tbody>
              {Array.from({ length: rows }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: columns }).map((_, colIndex) => {
                    const carIndex = rowIndex * columns + colIndex;
                    const currentCar = carsData[carIndex];
                    return (
                      <td key={colIndex}>
                        {currentCar ? (
                          <>
                            <img
                              src={currentCar.Image}
                              alt={`${currentCar.Make} ${currentCar.Model}`}
                            />
                            <br />
                            {currentCar.Make} - {currentCar.Model} -{" "}
                            {currentCar.Year} - ${currentCar.Amount}
                          </>
                        ) : (
                          <></> // Empty cell if no more data
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default AddCar;
