"use strict";

function authenticate(user, password) {
  if (!user || typeof password !== "string") {
    return false;
  }

  return user.active === true && password === user.password;
}

module.exports = { authenticate };