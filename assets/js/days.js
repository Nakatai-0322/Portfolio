window.onload = function(){
    let from = new Date("2019-01-03T03:38:59Z");
    let to = new Date();
    let ms = to.getTime() - from.getTime();
    let days = Math.floor(ms / (1000*60*60*24));

    window.onload = document.getElementById("days").innerHTML = days;
}
