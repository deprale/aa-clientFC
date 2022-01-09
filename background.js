$(function() {
// Some global vars I will want to change in the future
var runOnce = false;
var compareUrl = '';
const urlText = 'https://cs.fastcup.net'


function MatchUrl(){
    if( document.getElementsByClassName('Ka0cB')[0].getAttribute('href') !== null || undefined )
        return document.getElementsByClassName('Ka0cB')[0].getAttribute('href');
}


window.onload = setInterval(function clickButton(){

    const buttons = document.getElementsByClassName("T9iGW tiGwR K1Ama"); // oRTKi _27M3P

    for(var i = 0; i < buttons.length; i++)  {

        if( buttons[i].text !== 'Connect' && runOnce == false) {
            buttons[i].click();
        }

    }

}, 1000);


setInterval(function checkMatch(){
    const MORE = document.getElementsByClassName("RayPO");

    for(var i = 0; i < MORE.length; i++)  {
        if (MORE[i].text != null && runOnce != true) {
            setTimeout(NotifyTelegram, 1000);
            }
    }

}, 1000);


// Function to send a message to our phone
function NotifyTelegram(){
    if( (MatchUrl() != compareUrl) || compareUrl == null) {
    runOnce = true;
    compareUrl = MatchUrl();

    $.ajax({
        method: 'GET',
        async: true,
        url: "http://localhost:3000/fcauto",
        contentType: "application/json",
        data : {"chatID": `${chatID}`, "matchID": `${urlText+MatchUrl()}`, "time": `${new Date().toLocaleString()}`},
        crossDomain: true

    }
    );

    const audio = new Audio("https://www.mboxdrive.com/pristine-609.mp3")
    audio.volume = 0.15;
    audio.play();
    runOnce = false;
    }
}

});
