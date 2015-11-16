var link = document.getElementsByClassName("player")[1].getAttribute("href");
var name = document.getElementsByClassName("player")[1].innerHTML;
document.getElementsByClassName("date_time")[0].innerHTML = '<a href="' + link + '" download>Download this playlist</a>'