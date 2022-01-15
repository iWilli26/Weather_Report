function afficheMeteo(city) {
  let meteo = {};
  const apiKey = "6b0237b2289ac901f97ea20ac14ca07d";

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      apiKey
  )
    .then(function (response) {
      // console.log(response.json());
      if (!response.ok) {
        alert("Pas de météo trouvé");
        throw new Error("Pas de météo trouvé");
      }
      return response.json();
    })
    .then(function (value) {
      console.log(value);
      meteo = value;
      console.log(meteo);
      const { name } = meteo;
      const { description } = meteo.weather[0];
      const { temp, feels_like } = meteo.main;
      document.querySelector(".city").innerText = "Météo à " + name;
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".ressenti").innerText =
        "Ressenti à " + feels_like;
    });
}

document.querySelector(".search_button").addEventListener("click", function () {
  console.log("test");
  afficheMeteo(document.querySelector(".search-bar").value);
});
