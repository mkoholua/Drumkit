
// Drum Selection //

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrums; i++) {

// Click Sensory //

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    // alert("I got clicked!");

    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();

    // console.log(this.innerHTML);

    // this.style.color = "white";

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Button Sounds //

document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {
    case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
      break;

        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
          break;

          case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
            break;

            case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
              break;

              case "j":
              var snare = new Audio("sounds/snare.mp3");
              snare.play();
                break;

                case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                  break;

                  case "l":
                  var crash = new Audio("sounds/crash.mp3");
                  crash.play();
                    break;

    default: console.log(buttonInnerHTML);
  }
}

// Button Animation //

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
