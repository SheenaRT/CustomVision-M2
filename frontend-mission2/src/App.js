import NavbarST from './components/NavbarST';
import AddCar from './components/AddCar';
import DeleteCar from './components/DeleteCar';
import CarList from './components/CarList';
import UpdateCar from './components/UpdateCar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarST />
      <AddCar />
      <CarList />
      <UpdateCar />
      <DeleteCar />
    </div>
  );
}

export default App;
