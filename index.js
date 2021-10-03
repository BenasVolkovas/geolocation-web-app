document.addEventListener("DOMContentLoaded", function () {
    if ("geolocation" in navigator) {
        console.log("geolocation available");
        navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            console.log(lat, lon);
            document.getElementById("lat").textContent = lat;
            document.getElementById("lon").textContent = lon;
            const mymap = L.map("mymap").setView([lat, lon], 15);
            const attribution =
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
            const tileUrl =
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
            const tiles = L.tileLayer(tileUrl, { attribution });
            tiles.addTo(mymap);
            L.marker([lat, lon]).addTo(mymap);
        }, (error) => {
            document.getElementById("error").textContent = error;
        };
    } else {
        document.getElementById("error").textContent = "geolocation not available";
    }
});
