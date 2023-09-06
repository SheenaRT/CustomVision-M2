import NavbarST from './components/NavbarST';
import AddCar from './components/AddCars';
import CarList from './components/CarList';
import UpdateCar from './components/UpdateCars';
import DeleteCar from './components/DeleteCars';
// import ImageUploader from './components/ImageUploader';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavbarST />
      <AddCar />
      <CarList />
      <UpdateCar />
      <DeleteCar />
    </div>
  );
}

export default App;
