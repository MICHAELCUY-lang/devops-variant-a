"use strict";

function calculateTotal(subtotal, taxRate, discount = 0) {
  // Bug: tax dihitung sebelum discount dikurangi.
  return Number((subtotal * (1 + taxRate) - discount).toFixed(2));
}

module.exports = { calculateTotal };