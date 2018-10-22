// This code will add keydown event listener to the document
document.addEventListener("keydown", function (event) {
    let number = event.keyCode;
    let element = "";

    switch (number) {
        case 65:
            element = document.querySelector("#keyA");
            document.querySelector("#keyA").classList.add("active");
            break;
        case 83:
            element = document.querySelector("#keyS");
            document.querySelector("#keyS").classList.add("active");
            break;
        case 68:
            element = document.querySelector("#keyD");
            document.querySelector("#keyD").classList.add("active");
            break;
        case 70:
            element = document.querySelector("#keyF");
            document.querySelector("#keyF").classList.add("active");
            break;
        case 71:
            element = document.querySelector("#keyG");
            document.querySelector("#keyG").classList.add("active");
            break;
        case 72:
            element = document.querySelector("#keyH");
            document.querySelector("#keyH").classList.add("active");
            break;
        case 74:
            element = document.querySelector("#keyJ");
            document.querySelector("#keyJ").classList.add("active");
            break;
        case 75:
            element = document.querySelector("#keyK");
            document.querySelector("#keyK").classList.add("active");
            break;
        case 76:
            element = document.querySelector("#keyL");
            document.querySelector("#keyL").classList.add("active");
            break;
    }

    // This code will select the audio element which is about to be played
    let soundToBePlayed = document.querySelector("#keyCode" + number);
    
    // If the user press the same key more than once then this code will
    //  set the current timming of that audio element to 0 and will play 
    //  it again and if the user doesn't press the same key more than once then 
    //  it will work as normal (else statement)
    if(soundToBePlayed.currentTime !== 0) {
        soundToBePlayed.currentTime = 0;
        soundToBePlayed.play();
    } else {
        soundToBePlayed.play();
    }

    setTimeout(function () {
        element.classList.toggle("active");
    }, 100);

    
})