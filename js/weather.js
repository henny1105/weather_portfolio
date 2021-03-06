var apiURI = "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=84bbf1bc16c21571bb35b7478e7b2d24";

callData();

function callData() {
    $.ajax({
        url: apiURI,
        dataType: "json",
        type: "GET",
        success: function (data) {
            console.log(data);
            createList(data);
        },
        error: function (error) {
            console.error(error);
        }
    })
}

function createList(data) {
    var tit = data.main.temp - 273.15;
    $("#weather .left .temp").text(`${Math.floor(tit)}°`);

    var city = data.name;
    $("#weather .left .city").text(city);

    var weather = data.weather[0].main;
    var weather_desc = data.weather[0].description;
    var humidity = data.main.humidity + "%";
    var wind = data.wind.speed + "m/s SSW";
    var cloudy = (data.clouds.all) + "%";
    var imgSrc = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    $("html컴포넌트").attr("src", imgSrc);

    $("#weather .right .bottom")
        .append(
            $("<ul class='weater_details'>")
            .append(
                $("<li>")
                .append(
                    $("<span>").text("Weater"),
                    $("<span>").text(weather)
                ),
                $("<li>")
                .append(
                    $("<span>").text("Weater description"),
                    $("<span>").text(weather_desc)
                ),
                $("<li>")
                .append(
                    $("<span>").text("Weather Image"),
                    $("<div class='weather_img'>")
                    .css({
                        backgroundImage: "url(" + imgSrc + ")"
                    })
                ),
                $("<li>")
                .append(
                    $("<span>").text("Humidity"),
                    $("<span>").text(humidity)
                ),
                $("<li>")
                .append(
                    $("<span>").text("Wind"),
                    $("<span>").text(wind)
                ),
                $("<li>")
                .append(
                    $("<span>").text("Cloudy"),
                    $("<span>").text(cloudy)
                ),
            )
        )

    if (weather === "Clouds") {

        $("#weather")
            .prepend(
                $("<video src='vid/clouds.mp4' autoplay loop controls muted>")
            )
        // .css({
        //     backgroundImage: "url(img/clouds.jpg)",
        // }),
        $("#weather .left .img")
            .append(
                $("<img src='img/clouds-icon.svg'>")
            )
        $("#weather .right .bottom .pic")
            .css({
                backgroundImage: "url(img/img_clouds.jpg)"
            })
    } else if (weather === "Rain") {
        $("#weather")
            .prepend(
                $("<video src='vid/rain.mp4' autoplay loop controls muted>")
            )
        $("#weather .left .img")
            .append(
                $("<img src='img/rain-icon.svg'>")
            )
        $("#weather .right .bottom .pic")
            .css({
                backgroundImage: "url(img/img_rain.jpg)"
            })
    } else if (weather === "Clear") {
        $("#weather")
            .prepend(
                $("<video src='vid/clear.mp4' autoplay loop controls muted>")
            )
        $("#weather .left .img")
            .append(
                $("<img src='img/sunny-icon.svg'>")
            )
        $("#weather .right .bottom .pic")
            .css({
                backgroundImage: "url(img/img_clear.jpg)"
            })
    } else if (weather === "Drizzle") {
        $("#weather")
            .prepend(
                $("<video src='vid/drizzle.mp4' autoplay loop controls muted>")
            )
        $("#weather .left .img")
            .append(
                $("<img src='img/drizzle-icon.svg'>")
            )
        $("#weather .right .bottom .pic")
            .css({
                backgroundImage: "url(img/img_drizzle.jpg)"
            })
    } else if (weather === "Thunderstorm") {
        $("#weather")
            .prepend(
                $("<video src='vid/thunderstorm.mp4' autoplay loop controls muted>")
            )
        $("#weather .left .img")
            .append(
                $("<img src='img/thunderstorm-icon.svg'>")
            )
        $("#weather .right .bottom .pic")
            .css({
                backgroundImage: "url(img/img_thunderstorm.jpg)"
            })

    } else if (weather === "Snow") {
        $("#weather")
            .prepend(
                $("<video src='vid/snow.mp4' autoplay loop controls muted>")
            )
        $("#weather .left .img")
            .append(
                $("<img src='img/snow-icon.svg'>")
            )
        $("#weather .right .bottom .pic")
            .css({
                backgroundImage: "url(img/img_snow.jpg)"
            })
    } else if (weather === "Atmosphere") {
        $("#weather")
            .prepend(
                $("<video src='vid/atmosphere.mp4' autoplay loop controls muted>")
            )
        $("#weather .left .img")
            .append(
                $("<img src='img/atmosphere-icon.svg'>")
            )
        $("#weather .right .bottom .pic")
            .css({
                backgroundImage: "url(img/img_atmosphere.jpg)"
            })
    } else {
        $("#weather")
            .prepend(
                $("<video src='vid/mist.mp4' autoplay loop controls muted>")
            )
        $("#weather .left .img")
            .append(
                $("<img src='img/rain-icon.svg'>")
            )
        $("#weather .right .bottom .pic")
            .css({
                backgroundImage: "url(img/img_mist.jpg)"
            })
    }

    // console.log("현재온도 : " + (data.main.temp - 273.15));
    // console.log("현재습도 : " + data.main.humidity);
    // console.log("날씨 : " + data.weather[0].main);
    // console.log("상세날씨설명 : " + data.weather[0].description);
    // console.log("날씨 이미지 : " + data.weather[0].icon);
    // console.log("바람   : " + data.wind.speed);
    // console.log("나라   : " + data.sys.country);
    // console.log("도시이름  : " + data.name);
    // console.log("구름  : " + (data.clouds.all) + "%");
}

setInterval(showTime, 1000);

function showTime() {
    var now = new Date();
    var hours = now.getHours(); // 시간 
    var minutes = now.getMinutes(); // 분
    var seconds = now.getSeconds(); // 초
    var date = now.getDate();

    var week = new Array('Sunday,', 'Monday,', 'Tuesday,', 'Wednesday,', 'Thursday,', 'Friday,', 'Saturday,'); //주간
    var today = new Date().getDay(); // 요일
    var todayLabel = week[today];

    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'); 
    var today_months = new Date().getMonth(); // 월
    var todayMonths = months[today_months];

    var result_hours = plusZero(hours);
    var result_minutes = plusZero(minutes);
    var result_seconds = plusZero(seconds);

    $(".hours").text(result_hours + " :");
    $(".minutes").text(result_minutes + " :");
    $(".seconds").text(result_seconds);
    $(".todayLabel").text(todayLabel);
    $(".todayMonths").text(todayMonths);
    $(".date").text(date);
}

function plusZero(time) {
    (time < 10) ? time = "0" + time: time;
    return time;
}