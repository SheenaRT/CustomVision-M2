const mongoose = require('mongoose');

// Map global promise - to get rid of warning
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect('mongodb://127.0.0.1:27017/turnerscarsapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Importing Model
const Customer = require('./models/customer.js');

// Add Customer
const addCar = (customer) => {
  Customer.create(customer)
    .then((createdCustomer) => {
      console.info('New Car Added:', createdCustomer);
      mongoose.connection.close(); // Close the database connection when done
    })
    .catch((error) => {
      console.error('Error adding car:', error);
      mongoose.connection.close(); // Close the database connection in case of an error
    });
};

// Find Customer
const findCar = (name) => {
  // Make case insensitive
  const search = new RegExp(name, 'i');
  Customer.find({ $or: [{ Make: search }, { Model: search }] })
    .then((cars) => {
      console.info(cars);
      console.info(`${cars.length} matches`);
      mongoose.connection.close(); // Close the database connection when done
    })
    .catch((error) => {
      console.error('Error finding cars:', error);
      mongoose.connection.close(); // Close the database connection in case of an error
    });
};

// Update customer
const updateCar = (_id, customer) => {
  Customer.updateOne({ _id }, customer)
    .then(() => {
      console.info('Car Updated');
      mongoose.connection.close(); // Close the database connection when done
    })
    .catch((error) => {
      console.error('Error updating car:', error);
      mongoose.connection.close(); // Close the database connection in case of an error
    });
};

// Remove customer
const removeCar = (_id) => {
  Customer.deleteOne({ _id })
    .then(() => {
      console.info('Car Removed');
      mongoose.connection.close(); // Close the database connection when done
    })
    .catch((error) => {
      console.error('Error removing car:', error);
      mongoose.connection.close(); // Close the database connection in case of an error
    });
};

// List Customers
const listCar = () => {
  Customer.find()
    .then((customers) => {
      console.info(customers);
      console.info(`${customers.length} matches`);
      mongoose.connection.close(); // Close the database connection when done
    })
    .catch((error) => {
      console.error('Error listing cars:', error);
      mongoose.connection.close(); // Close the database connection in case of an error
    });
};

// Export addCustomer and findCustomer methods
module.exports = {
  addCar,
  findCar,
  updateCar,
  removeCar,
  listCar,
};
