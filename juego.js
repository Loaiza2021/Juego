(function () {
  const options = ["piedra", "papel", "tijeras"];
  const buttons = document.querySelectorAll('.options button');
  const resultDiv = document.getElementById('result');

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const player = button.id;
      const computer = options[Math.floor(Math.random() * options.length)];
      const result = getResult(player, computer);
      console.log(player, computer, result);
      displayResult(result, player, computer);
    });
  });

  function getResult(player, computer) {
    if (player === computer) {
      return "Empate";
    } else if (player === "piedra" && computer === "papel") {
      return "perdiste";
    } else if (player === "piedra" && computer === "tijeras") {
      return 'Ganaste';
    } else if (player === "papel" && computer === "piedra") {
      return 'Ganaste';
    } else if (player === "papel" && computer === "tijeras") {
      return "perdiste";
    } else if (player === "tijeras" && computer === "piedra") {
      return "perdiste";
    } else if (player === "tijeras" && computer === "papel") {
      return 'Ganaste';
    }
  }

  function displayResult(result, player, computer) {
    resultDiv.textContent = `Elegiste ${capitalize(player)}, PC ${capitalize(
      computer
    )}. ${result}!`;
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
})();



