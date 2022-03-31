let from;
let to;
let ms;
let days;
let years;

window.onload = function(){
    from = new Date("2019/01/03");
    to = new Date();
    ms = to.getTime() - from.getTime();
    days = Math.floor(ms / (1000*60*60*24));
    years = (days / 365).toFixed(1);

    document.getElementById("days").innerHTML = days;
    document.getElementById("years").innerHTML = years;
}
