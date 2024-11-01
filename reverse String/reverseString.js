

function reverseString() {
  const input = document.getElementById("userInput").value;
  const reversed = input.split("").reverse().join("");
  document.getElementById("userOutput").textContent = reversed;
}
