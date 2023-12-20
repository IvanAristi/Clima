

const cityInput = document.getElementById("imput");
const apiKey = "85ea6d9b9903ea1a1ad9f6589f427262";
const resultElement = document.getElementById("resultado"); // Este es el elemento donde mostrarás los resultados

const btn = document.getElementById("btn")

btn.addEventListener("click", consultar);

async function consultar() {
  try {
    const city = cityInput.value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    
    }

    const data = await response.json();
    console.log("Respuesta exitosa:", data);
    mostrarResultado(data);
  } catch (error) {
    alert('ingrese un nombre de ciudad que sea valido:', error);
  }
}

function mostrarResultado(data) {
  resultElement.innerHTML = `
    <p><strong>Ciudad</strong>: ${data.name}</p>
    <p><strong>Temperatura:</strong> ${data.main.temp}°C</p>
    <p><strong>Descripción:</strong> ${data.weather[0].description}</p>
    <p><strong>Humedad:</strong> ${data.main.humidity} <p> 
    <p><strong>Presion Atmosferica: </strong > ${data.main.pressure}</p>
    <p> <strong>Vientos : </strong> ${data.wind.speed} <p>
  `;
}

