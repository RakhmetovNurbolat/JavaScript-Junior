const brand = 'Toyota';
const model = 'Camry';
const color = 'grey';
const year = '1999';

let carHtml;

// old approach(before ES6)

carHtml = '<h3>' + 'Car Description' + '</h3>' + '<ul>' + '<li>Brand: ' + brand + '</li>' + 
'<li>Model: ' + model + '</li>' +
'<li>Color: ' + color + '</li>' +
'<li>Year: ' + year + '</li>' + '</ul>';

// new approach(template literals or template string)

carHtml = `
   <h3> Car Description </h3>
   <ul>
      <li>Brand: ${brand}</li>
      <li>Model: ${model}</li>
      <li>Color: ${color}</li>
      <li>Year: ${year}</li>
      <li>Doors: ${getDoorsNumbers()}</li>
      <li>Tax: ${year < 2000? '20%' : '10%'}</li>
   </ul>
`

function getDoorsNumbers(){
   return 5;
}

document.body.innerHTML = carHtml;