function checkPalindrome() {
    const input = document.getElementById("userInput").value;
    
    if (!/^\d+$/.test(input)) {
      document.getElementById("userOutput").textContent = "Please enter a valid numbers.";
      return;
    }

    const reversed = input.split("").reverse().join("");
    const isPalindrome = input === reversed;
  
    document.getElementById("userOutput").textContent = 
      isPalindrome ? "Palindrome!" : "NOT a Palindrome.";
  }
  