const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022
  };
  
  function carInfo(carObj) {

    const { brand, model, year } = carObj;
    
    const infoString = `The ${brand} ${model} was manufactured in ${year}.`;

    return infoString;
  }
console.log(carInfo(car));
  