//init

const sidebar = document.querySelector('.sidebar');
const sidebarButtons = sidebar.querySelectorAll('button');
const clickSound = new Audio("sounds/click.mp3");

// functions 

function playMouseoverSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}





// event listeners

sidebarButtons.forEach(button => {
    button.addEventListener('click', function () {
        playMouseoverSound();
    })
})