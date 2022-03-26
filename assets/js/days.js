window.onload = function(){
    let from = new Date("2019-01-03T03:38:59Z");
    let to = new Date();
    let ms = to.getTime() - from.getTime();
    let days = Math.floor(ms / (1000*60*60*24));
    let _years = (days / 365);
    let years = _years.toFixed(1);

    document.getElementById("days").innerHTML = days;
    document.getElementById("years").innerHTML = years;

}
