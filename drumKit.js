var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        var item = this.innerHTML;
        playSound(item);
        animate(item);
    });
}

document.addEventListener('keydown', function(event){
    var keyPressed = event.key;
    playSound(keyPressed);
    animate(keyPressed);
});

function playSound(item) {
    var audio = new Audio();
    audio.src = "sounds/" + item + ".mp3";
    audio.play();
}

function animate(currentKey){
    var activeButton= document.querySelector('.'+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
