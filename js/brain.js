// This code is keybord users
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


// These code is for touchscreen users
let keysDiv = document.querySelector("#keys");

keysDiv.addEventListener("click", function (event) {
    // This variable will store the Id of the click element
    let currentElementId = event.target.id;

    // This variable will store the Id of the audio element to be played
    let soundId;

    // This code will store the Id of the sound element corrosponding to the key
    switch (currentElementId) {
        case "keyA":
        soundId = "keyCode65";
        break;
        case "keyS":
        soundId = "keyCode83";
        break;
        case "keyD":
        soundId = "keyCode68";
        break;
        case "keyF":
        soundId = "keyCode70";
        break;
        case "keyG":
        soundId = "keyCode71";
        break;
        case "keyH":
        soundId = "keyCode72";
        break;
        case "keyJ":
        soundId = "keyCode74";
        break;
        case "keyK":
        soundId = "keyCode75";
        break;
        case "keyL":
        soundId = "keyCode76";
        break;
    }

    // This code will select the audio element which is about to be played
    let soundToBePlayed = document.querySelector("#" + soundId);
    
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

    // This code will add a class "active" to the current element so that the respective css for the class "active" can be applied
    document.querySelector("#" + currentElementId).classList.add("active");

    // This code will toggle the class active of the current element
    setTimeout(function () {
        document.querySelector("#" + currentElementId).classList.toggle("active");
    }, 100);
})
