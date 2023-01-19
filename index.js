const input = document.getElementById('button');

function endersGame() {
    alert('I\'m excited to play Elden Ring once I\'ve graduated.');
    input.addEventListener('click', endersGame);
}
input.addEventListener('click', endersGame);
