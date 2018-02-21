import React from "react";

const HomeLogin = () => (
  <form>
    <div>
      <label htmlFor="email">
        <input id="email" type="email" />
        Email
      </label>
    </div>
    <div>
      <label htmlFor="password">
        <input type="password" />
        Password
      </label>
    </div>
  </form>
);

export default HomeLogin;
