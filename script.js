async function getWeather() {
  const location = document.getElementById("locationInput").value.trim();
  const apiKey = "f92d45b78cf34a9790f53016250407";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  const resultDiv = document.getElementById("weatherResult");
  resultDiv.textContent = "Loading...";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Invalid location");
// my nam is 
    const data = await response.json();
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;

    resultDiv.innerHTML = `
      <strong>${data.location.name}</strong><br/>
      Temperature: ${temp}°C<br/>
      Condition: ${condition}
    `;
  } catch (error) {
    resultDiv.textContent = "Error: Unable to fetch weather. Please try a valid location.";
  }
}
