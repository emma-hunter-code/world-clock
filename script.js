function updateTime() {
  let currentElement = document.querySelector("#location");
  if (currentElement) {
    let currentCityElement = currentElement.querySelector("#cityname");
    let currentDateElement = currentElement.querySelector("#date");
    let currentTimeElement = currentElement.querySelector("#time");
    let timezone = moment.tz.guess();
    let currentTime = moment().tz(timezone);

    currentCityElement.innerHTML = timezone.replace("_", " ").split("/")[1];
    currentDateElement.innerHTML = currentTime.format("dddd, MMMM Do YYYY");
    currentTimeElement.innerHTML = currentTime.format("HH:mm:ss");
  }
}

function updateCity(event) {
  clearInterval(timeInterval);

  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#city");
  citiesElement.innerHTML = `
  <div class="city-info">
      <div class="city-name">
        <h2>${cityName}</h2>
        </div>
      <div class="time" id="time">
        ${cityTime.format("HH:mm:ss ")}
        </div>
        <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
      </div>
    </div>`;
  let selectElement = document.querySelector("#selected");
  selectElement.innerHTML = `<a class="refresh" href="/">Refresh</a>`;

  timeInterval = setInterval(() => {
    cityTime = moment().tz(cityTimezone);
    citiesElement.querySelector("#time").innerHTML =
      cityTime.format("HH:mm:ss");
  }, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#cityselect");
citySelectElement.addEventListener("change", updateCity);

let timeInterval;
