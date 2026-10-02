"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { authenticate } = require("../src/auth");

const user = {
  active: true,
  password: "S3cure!Pass"
};

test("accepts an active user with the correct password", () => {
  assert.equal(authenticate(user, "S3cure!Pass"), true);
});

test("rejects an incorrect password", () => {
  assert.equal(authenticate(user, "wrong"), false);
});

test("rejects an inactive user", () => {
  const inactiveUser = {
    active: false,
    password: "S3cure!Pass"
  };

  assert.equal(
    authenticate(inactiveUser, "S3cure!Pass"),
    false
  );
});