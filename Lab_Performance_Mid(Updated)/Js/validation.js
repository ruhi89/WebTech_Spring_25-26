const unitPrice = 1000;
const days = 30;

function calculateTotal() {
  const quantityInput = document.getElementById("quantity");
  const totalPriceInput = document.getElementById("totalPrice");

  let quantity = parseFloat(quantityInput.value);

  if (quantity < 0 || isNaN(quantity)) {
    document.getElementById("error").textContent =
      "Please enter a valid quantity.";
    totalPriceInput.value = "0";
  } else {
    document.getElementById("error").textContent = "";
    const total = unitPrice * quantity * days;
    totalPriceInput.value = total;
    if (total > 1000) {
      alert("You are eligible for a gift coupon!");
    }
  }
}
