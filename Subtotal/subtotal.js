function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
  
    if (isNaN(subtotal) || isNaN(tipPercentage) || subtotal < 0 || tipPercentage < 0) {
      document.getElementById("totalOutput").textContent = "Please enter valid positive numbers for both fields.";
      return;
    }
  
    const tipAmount = (subtotal * tipPercentage) / 100;
    const totalAmount = subtotal + tipAmount;
  
    document.getElementById("totalOutput").textContent = `Total to be paid: $${totalAmount.toFixed(2)}`;
  }
  