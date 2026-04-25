async function getWeather() {
    const city = document.getElementById("city").value;

    const apiKey = "ce5b5fe717dee1fa0d36880247b8cbde"; // replace this
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found!");
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById("condition").innerText = `Condition: ${data.weather[0].main}`;

    } catch (error) {
        console.error("Error:", error);
    }
}