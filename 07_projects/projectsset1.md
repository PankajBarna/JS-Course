# Projects related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 - Background color changer

```javascript
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e); //this gives the event
    console.log(e.target); //this gives the target of event
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 - BMI Calculator

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); //this prevent dafault function of submit button which is to send input data to server

  const weight = parseInt(document.querySelector('#weight').value); //to select input value and convert it to int
  const height = parseInt(document.querySelector('#height').value); //to select input value and convert it to int
  const result = document.querySelector('#results'); //this is not input so we haven't written "value"

  if (height === '' || height < 0 || isNaN(height)) {
    //if height is empty or less than 0 or not a number
    result.innerHTML = `Please give correct height: ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give correct weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); //calculate bmi and convert it to 2 decimal places
    // result.innerHTML = `<span>${bmi}</span>`;
    if (bmi > 24.9) {
      result.innerHTML = `<span>${bmi}</span> <span>Overweight</span>`;
    } else if (bmi < 24.9 && bmi >= 18.6) {
      result.innerHTML = `<span>${bmi}</span> <span>Normal Weight</span>`;
    } else {
      result.innerHTML = `<span>${bmi}</span> <span>Under Weight</span>`;
    }
  }
});

```

## Project 3 - Digital Clock

```javascript
const clock = document.getElementById('clock');

// setInterval(function(){},1000)   ---------syntax for set interval function, 1000 = 1sec
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```