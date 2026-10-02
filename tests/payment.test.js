"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { calculateTotal } = require("../src/payment");

test("discount diterapkan sebelum tax", () => {
  assert.equal(calculateTotal(100, 0.1, 20), 88);
});

test("hasil dibulatkan menjadi dua desimal", () => {
  assert.equal(calculateTotal(19.99, 0.11), 22.19);
});