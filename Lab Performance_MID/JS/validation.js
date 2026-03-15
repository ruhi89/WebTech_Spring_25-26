const unitPrice = 1000;
const days = 30;

const unitPriceInput = document.getElementById("unitPrice");
const quantityInput = document.getElementById("quantity");
const totalPriceInput = document.getElementById("totalPrice");
const errorMessage = document.getElementById("error");

unitPriceInput.value = unitPrice;

function validateQuantity() {
  let quantity = Number(quantityInput.value);

  if (quantity < 0) {
    errorMessage.textContent =
      "Quantity cannot be negative. It has been reset to 0.";
    quantity = 0;
    quantityInput.value = 0;
  } else {
    errorMessage.textContent = "";
  }

  if (isNaN(quantity)) {
    quantity = 0;
  }

  const totalPrice = unitPrice * quantity * days;

  totalPriceInput.value = totalPrice;

  if (totalPrice > 1000) {
    alert("Congratulations! You are eligible for a gift coupon.");
  }
}
