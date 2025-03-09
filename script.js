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

updateTime();
setInterval(updateTime, 1000);
