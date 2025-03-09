function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("dddd, MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]a[</small>]"
  );

  let vancouverElement = document.querySelector("#vancouver");
  let vancouverDateElement = vancouverElement.querySelector(".date");
  let vancouverTimeElement = vancouverElement.querySelector(".time");
  let vancouverTime = moment().tz("America/vancouver");

  vancouverDateElement.innerHTML = vancouverTime.format("dddd, MMMM Do YYYY");
  vancouverTimeElement.innerHTML = vancouverTime.format(
    "h:mm:ss [<small>]a[</small>]"
  );
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `<div class="city">
          <div class="city-date">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss "
          )}<small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#cityselect");
citySelectElement.addEventListener("change", updateCity);
