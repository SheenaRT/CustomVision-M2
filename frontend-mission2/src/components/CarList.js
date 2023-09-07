import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/CarList.css";

axios.defaults.baseURL = "http://localhost:4000";

function CarList() {
  const [carsData, setCarsData] = useState([]);
  const [showCars, setShowCars] = useState(false);

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
  }, [showCars]);

  const columns = 4;

  // Preparing the data for a grid with 4 columns
  const grid = [];
  for (let i = 0; i < carsData.length; i += columns) {
    const row = carsData.slice(i, i + columns);
    grid.push(row);
  }

  return (
    <div className="carlist-table-container">
      <div className="carlist-header">
        <h2>List Cars</h2>
        <button onClick={() => setShowCars(!showCars)}>Show Me Cars</button>
      </div>
      {showCars && (
        <table className="carlist-styled-table">
          <tbody>
            {grid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((car) => (
                  <td key={car._id} className="carlist-data-cell">
                    {car.Make} - {car.Model} - {car.Year} - ${car.Amount}
                  </td>
                ))}
                {columns - row.length > 0 &&
                  Array.from({ length: columns - row.length }).map((_, idx) => (
                    <td key={idx} className="carlist-empty-cell">
                      Empty
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CarList;
