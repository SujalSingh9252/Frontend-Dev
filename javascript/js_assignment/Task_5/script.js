// Assignment 5: Weather Alert System
// Purpose: Decide if an outdoor event should be canceled based on weather conditions,
// and provide clothing/advice suggestions based on temperature.
// Console-based. Edit inputs below to test.

// ----- Sample inputs (edit these) -----
let temperature = 36; // degrees Celsius
let humidity = 72;    // percent
let windSpeed = 12;   // km/h
// --------------------------------------

// Alert conditions
let cancelMessage = null;
if (temperature > 35 && humidity > 70) {
  cancelMessage = 'Cancel: Heat Alert';
} else if (temperature < 10 || windSpeed > 40) {
  cancelMessage = 'Cancel: Cold/Windy Alert';
} else {
  cancelMessage = 'Event Approved';
}

// Temperature-based advice
let advice;
if (temperature < 20) advice = 'Wear Jacket';
else if (temperature <= 30) advice = 'Comfortable';
else advice = 'Stay Hydrated';

// Output
console.log('--- Weather Alert System ---');
console.log('Temperature:', temperature + '°C');
console.log('Humidity:', humidity + '%');
console.log('Wind speed:', windSpeed + ' km/h');
console.log(cancelMessage);
console.log('Advice:', advice);
