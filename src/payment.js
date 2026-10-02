"use strict";

function calculateTotal(subtotal, taxRate, discount = 0) {
  if (![subtotal, taxRate, discount].every(Number.isFinite)) {
    throw new TypeError("Payment inputs must be numbers");
  }

  const discountedSubtotal = subtotal - discount;
  return Number((discountedSubtotal * (1 + taxRate)).toFixed(2));
}

module.exports = { calculateTotal };