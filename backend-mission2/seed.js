const mongoose = require('mongoose');
const Customer = require('./models/customer.js'); 

const carsToSeed = [
  {
    Make: 'Toyota',
    Model: 'Camry',
    Year: '2022',
    Amount: '25000',
  },
  {
    Make: 'Honda',
    Model: 'Civic',
    Year: '2021',
    Amount: '22000',
  },
  {
    Make: 'Ford',
    Model: 'F-150',
    Year: '2023',
    Amount: '35000',
  },
  {
    Make: 'Chevrolet',
    Model: 'Malibu',
    Year: '2022',
    Amount: '24000',
  },
  {
    Make: 'Nissan',
    Model: 'Altima',
    Year: '2022',
    Amount: '23000',
  },
  {
    Make: 'Hyundai',
    Model: 'Elantra',
    Year: '2023',
    Amount: '22000',
  },
  {
    Make: 'Kia',
    Model: 'Sportage',
    Year: '2022',
    Amount: '26000',
  },
  {
    Make: 'Mazda',
    Model: 'CX-5',
    Year: '2023',
    Amount: '29000',
  },
  {
    Make: 'Volkswagen',
    Model: 'Jetta',
    Year: '2023',
    Amount: '27000',
  },
  {
    Make: 'Subaru',
    Model: 'Outback',
    Year: '2022',
    Amount: '32000',
  },
  {
    Make: 'Jeep',
    Model: 'Wrangler',
    Year: '2023',
    Amount: '38000',
  },
  {
    Make: 'Audi',
    Model: 'A4',
    Year: '2022',
    Amount: '42000',
  },
  {
    Make: 'BMW',
    Model: 'X5',
    Year: '2023',
    Amount: '55000',
  },
  {
    Make: 'Mercedes-Benz',
    Model: 'C-Class',
    Year: '2022',
    Amount: '50000',
  },
  {
    Make: 'Lexus',
    Model: 'ES',
    Year: '2023',
    Amount: '48000',
  },
  {
    Make: 'Acura',
    Model: 'MDX',
    Year: '2022',
    Amount: '45000',
  },
  {
    Make: 'Tesla',
    Model: 'Model 3',
    Year: '2023',
    Amount: '60000',
  },
  {
    Make: 'Land Rover',
    Model: 'Discovery',
    Year: '2022',
    Amount: '65000',
  },
  {
    Make: 'Subaru',
    Model: 'Forester',
    Year: '2023',
    Amount: '32000',
  },
  {
    Make: 'Kia',
    Model: 'Sorento',
    Year: '2022',
    Amount: '28000',
  },
  {
    Make: 'Mazda',
    Model: 'Mazda6',
    Year: '2023',
    Amount: '27000',
  },
  {
    Make: 'Hyundai',
    Model: 'Tucson',
    Year: '2023',
    Amount: '26000',
  },
  {
    Make: 'Toyota',
    Model: 'Corolla',
    Year: '2022',
    Amount: '24000',
  },
  {
    Make: 'Honda',
    Model: 'Accord',
    Year: '2023',
    Amount: '26000',
  },
];

const seedDatabase = async () => {
  try {
    // Connecting to the database
    await mongoose.connect('mongodb://127.0.0.1:27017/turnerscarsapi', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    
    await Customer.deleteMany({});

   
    await Customer.insertMany(carsToSeed);

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close(); 
  }
};


seedDatabase();
