var countDownData = new Date("March 20, 2024 13:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distanza = countDownData - now;

    var giorni = Math.floor(distanza / (1000 * 60 * 60 * 24));
    var ore = Math.floor((distanza % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuti = Math.floor((distanza % (1000 * 60 * 60)) / (1000 * 60));
    var secondi = Math.floor((distanza % (1000 * 60)) / (1000));

    document.getElementById("giorni").innerHTML = giorni;
    document.getElementById("ore").innerHTML = ore;
    document.getElementById("minuti").innerHTML = minuti;
    document.getElementById("secondi").innerHTML = secondi;
});