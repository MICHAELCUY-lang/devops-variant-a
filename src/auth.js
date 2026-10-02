"use strict";

function calculateTotal(subtotal, taxRate, discount = 0) {
  const discountedSubtotal = subtotal - discount;
  return Number(
    (discountedSubtotal * (1 + taxRate)).toFixed(2)
  );
}

function formatCurrency(amount, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(amount);
}

module.exports = {
  calculateTotal,
  formatCurrency
};