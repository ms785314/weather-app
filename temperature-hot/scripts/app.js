// const KEY = `3ce6fc62b7253167bb6182a899a4a581`;
const key = `3ce6fc62b7253167bb6182a899a4a581`;

function temperature() {
    const cityName = document.getElementById('city-name').value;

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric
    `

    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}

function displayData(data) {
    console.log(data);
    setInputText('city', `${data.name}`);
    setInputText('temp', `${data.main.temp}`);
    setInputText('status', `${data.weather[0].main}`);

    // set icon
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    const img = document.getElementById('img');
    img.setAttribute('src', icon);
}

const setInputText = (id, inputText) => {
    document.getElementById(id).innerText = inputText;
}