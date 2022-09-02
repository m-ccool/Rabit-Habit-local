const rabbit = document.getElementById("rabbit");
const rock = document.getElementById("rock");

function jump() {
  //making rabbit jump
  if (dispatchEvent.classList != "jump") {
    //first it checks if the rabbit is mid-jump. If not, it makes it jump.
    rabbit.classList.add("jump");
    setTimeout(function () {
      rabbit.classList.remove("jump");
    }, 300);
  }
}

let checkAlive = setInterval(function () {
  let rabbitTop = parseInt(
    window.getComputedStyle(rabbit).getPropertyValue("top")
  );
  let rockLeft = parseInt(
    window.getComputedStyle(rock).getPropertyValue("left")
  );
  //check for collision
  if (rockLeft > 0 && rockLeft < 70 && rabbitTop >= 130) {
    rabbit.style.animationPlayState = "paused";
    rock.style.animationPlayState = "paused";
    alert("Game Over");
    window.location.reload();
  }
}, 10);
document.addEventListener("keydown", function (event) {
  jump();
});

//collecting carrots
const carrot = document.getElementById("carrot");

let myScore = setInterval(function () {
  let rabbitTop = parseInt(
    window.getComputedStyle(rabbit).getPropertyValue("top")
  );
  let carrotLeft = parseInt(
    window.getComputedStyle(carrot).getPropertyValue("left")
  );
  //check for collision
  if (carrotLeft > 0 && carrotLeft < 70 && rabbitTop >= 130) {
    let points = 0;
    points++;
  }
  myScore.text = "SCORE: ";
}, 10);
