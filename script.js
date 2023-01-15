function chooseWalk() {
  document.getElementById("game-text").innerHTML = "You walk to the market with your donkey. The journey is long and tiring, but you successfully sell the donkey for a good price.";
  document.getElementById("game-result").innerHTML = "You earned $500";
  document.getElementById("image-container").innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5MK4cy45u-vPECK59J5lDzYtzcTEudWgqNIsopr9eA&s alt="Donkey walking">';
}

function chooseRide() {
  document.getElementById("game-text").innerHTML = "You ride the donkey to the market. The donkey gets tired and the journey is uncomfortable, but you successfully sell the donkey for a decent price.";
  document.getElementById("game-result").innerHTML = "You earned $300";
  document.getElementById("image-container").innerHTML = '<img src="https://img.freepik.com/premium-vector/girl-riding-donkey_1639-8513.jpg?w=2000" alt="Donkey riding">';
}
