document.getElementById('convertButton').addEventListener('click', function () {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (!isNaN(temperatureInput)) {
        let result;
        if (fromUnit === toUnit) {
            result = temperatureInput;
        } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
            result = (temperatureInput * 9/5) + 32;
        } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
            result = temperatureInput + 273.15;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
            result = (temperatureInput - 32) * 5/9;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
            result = (temperatureInput - 32) * 5/9 + 273.15;
        } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
            result = temperatureInput - 273.15;
        } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
            result = (temperatureInput - 273.15) * 9/5 + 32;
        }

        document.getElementById('resultText').innerText = `Converted Temperature: ${result} ${toUnit}`;
    } else {
        alert('Please enter a valid number for temperature.');
    }
});
