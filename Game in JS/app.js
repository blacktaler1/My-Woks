/*
topshiriqni to'liq holatini quidagi linkdagi
video so'ngidan topshingiz mumkin.

https://youtu.be/k5CKdmxzyiI

Yechimini esa Telegram:
t.me/akhror_web
*/
const son = 1
const btnplayer1 = document.getElementById('btnPlayer1')
const btnplayer2 = document.getElementById('btnPlayer2')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const reset = document.getElementById('reset')
const gamelavel = document.getElementById('gameLavel')
let currentValue = parseInt(player1.innerText);
let currentValue1 = parseInt(player2.innerText); 
let gamevalue = parseInt(gamelavel.value)
btnplayer1.addEventListener('click', () => {
    currentValue += 1; 
    player1.innerText = currentValue; 
    if (currentValue >= gamevalue) {
        alert("Birinchi ishtitirokchi yutdi !!!")
        player1.classList = 'winner'
        btnplayer1.disabled = true;
        btnplayer2.disabled = true;
    } 
});
btnplayer2.addEventListener('click', () => {
    currentValue1 += 1; 
    player2.innerText = currentValue1; 
    if (currentValue1 >= gamevalue) {
        alert("Ikkinchi ishtitirokchi yutdi !!!")
        player2.classList = 'winner'
        btnplayer1.disabled = true;
        btnplayer2.disabled = true;
        
    } 
});
reset.addEventListener('click' , () => {
    resetScores()

})

function resetScores() {
    player1.innerText = '0';
    player2.innerText = '0';
    btnplayer1.disabled = false;
    btnplayer2.disabled = false;
    player2.classList.remove('winner');
    player1.classList.remove('winner');
}