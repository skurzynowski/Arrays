import React from "react";

export default ({ msg, cb, st, ...rest }) => {
  return (
    <p>
      {msg}
      {"  "}
      <input
        {...rest}
        onChange={event => cb(event.target.value)}
        value={st}
        name="szukaj"
      />
    </p>
  );
};
