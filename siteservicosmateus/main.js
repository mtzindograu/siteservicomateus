
// Chave da API do OpenWeatherMap
const apiKey = 'c83a6285f58f77f0130a5c1f52aa2fc9';

// URL da API do OpenWeatherMap

// Função para obter a previsão do tempo
function getWeather() {
    let city = document.querySelector("input[type=search]").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Erro ao obter dados:', error);
        });
}

// Função para exibir a previsão do tempo
function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temperatura: ${data.main.temp}°C</p>
            <p>Umidade: ${data.main.humidity}%</p>
            <p>Pressão Atmosférica: ${data.main.pressure} hPa</p>
            <p>Velocidade do Vento: ${data.wind.speed} m/s</p>
        `;
}