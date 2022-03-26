let from
let to
let ms
let days
let _years
let years

window.onload = function(){
    from = new Date("2019/01/03");
    to = new Date();
    ms = to.getTime() - from.getTime();
    days = Math.floor(ms / (1000*60*60*24));
    _years = (days / 365);
    years = _years.toFixed(1);

    document.getElementById("days").innerHTML = days;
    document.getElementById("years").innerHTML = years;

}
