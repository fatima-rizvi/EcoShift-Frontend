import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const electricityPrice = 0.15
const evEfficiency = 3
const gasPrice = 4
const evPrice = 45000
const gasVehiclePrice = 30000
const taxCredit = true
const annualMiles = 10000
const gasEfficiency = 20

async function calcEvCostPerMile() {
  const req = {
    electricityPrice,
    evEfficiency
  };
  const options = {
    mode: 'cors',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    body: JSON.stringify(req)
  };
  const response = await fetch('http://localhost:3000/calcEvCostPerMile', options);
  const result = await response.json();
  console.log("EV Cost Per Mile: ", result)
}

async function calcGasCostPerMile() {
  const req = {
    gasPrice,
    gasEfficiency
  };
  const options = {
    mode: 'cors',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    body: JSON.stringify(req)
  };
  const response = await fetch('http://localhost:3000/calcGasCostPerMile', options);
  const result = await response.json();
  console.log("Gas Cost Per Mile: ", result)
}

async function calcEquivalentMpgCost() {
  const req = {
    gasPrice,
    electricityPrice,
    evEfficiency
  };
  const options = {
    mode: 'cors',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    body: JSON.stringify(req)
  };
  const response = await fetch('http://localhost:3000/calcEquivalentMpgCost', options);
  const result = await response.json();
  console.log("Equivalent MPG Cost: ", result)
}

async function calcEvAnnualCost() {
  const req = {
    electricityPrice,
    evEfficiency,
    annualMiles
  };
  const options = {
    mode: 'cors',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    body: JSON.stringify(req)
  };
  const response = await fetch('http://localhost:3000/calcEvAnnualCost', options);
  const result = await response.json();
  console.log("EV Annual Cost: ", result)
}

async function calcGasAnnualCost() {
  const req = {
    gasPrice,
    gasEfficiency,
    annualMiles
  };
  const options = {
    mode: 'cors',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    body: JSON.stringify(req)
  };
  const response = await fetch('http://localhost:3000/calcGasAnnualCost', options);
  const result = await response.json();
  console.log("Gas Annual Cost: ", result)
}

async function calcYearsUntilBreakeven() {
  const req = {
    evPrice,
    gasVehiclePrice,
    taxCredit,
    electricityPrice,
    evEfficiency,
    annualMiles,
    gasPrice,
    gasEfficiency
  };
  const options = {
    mode: 'cors',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    body: JSON.stringify(req)
  };
  const response = await fetch('http://localhost:3000/calcYearsUntilBreakeven', options);
  const result = await response.json();
  console.log("Years until breakeven: ", result)
}

function App() {

  useEffect(() => {
    calcEvCostPerMile();
    calcGasCostPerMile();
    calcEquivalentMpgCost();
    calcEvAnnualCost();
    calcGasAnnualCost();
    calcYearsUntilBreakeven();
  }, []);

  return (
    <div className="App">
      <p>Check console for results</p>
    </div>
  );
}

export default App;
