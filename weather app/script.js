document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '16c9204aae8c52cb3717ae1311722a53'; // Yahan apna API key daalo
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity} %</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = `<p>${error.message}</p>`;
        });
});