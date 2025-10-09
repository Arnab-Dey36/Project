function convertTemp() {
  const input = parseFloat(document.getElementById("inputTemp").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  let result;

  if (isNaN(input)) {
    result = "Please enter a valid number.";
  } else if (from === to) {
    result = `${input}°${from}`;
  } else {
    // Convert to Celsius first
    let tempInCelsius;
    if (from === "C") tempInCelsius = input;
    else if (from === "F") tempInCelsius = (input - 32) * 5 / 9;
    else if (from === "K") tempInCelsius = input - 273.15;

    // Convert to target unit
    if (to === "C") result = `${tempInCelsius.toFixed(2)}°C`;
    else if (to === "F") result = `${(tempInCelsius * 9/5 + 32).toFixed(2)}°F`;
    else if (to === "K") result = `${(tempInCelsius + 273.15).toFixed(2)}K`;
  }

  document.getElementById("resultBox").innerText = result;
}
