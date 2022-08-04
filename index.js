window.onload = () => {
    // event for click
    var button = document.querySelectorAll("button")
    for (i = 0; i < button.length; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            var drumSounds = this.innerHTML;
            makeSound(drumSounds)
            buttonAnimation(drumSounds)
        })
    }
    // event for click
    document.addEventListener("keydown", function (event) {
        makeSound(event.key)
        buttonAnimation(event.key)
    })

    function makeSound(key) {
        switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play()
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play()
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play()
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play()
                break;
            case "j":
                var crash = new Audio("sounds/snare.mp3")
                crash.play()
                break;
            case "k":
                var snare = new Audio("sounds/crash.mp3")
                snare.play()
                break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3")
                kick.play()
                break;
        }
    }

    function buttonAnimation(event) {
        var keyPressed = document.querySelector("." + event);
        keyPressed.classList.add("pressed")

        setTimeout(function () {
            keyPressed.classList.remove("pressed")
        }, 100)
    }

}