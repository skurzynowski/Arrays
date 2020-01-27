import React from "react";

export default ({ id, title, body, date, src }) => {
  return (
    <article>
      <h1>{title}</h1>
      <p>ID: {id}</p>
      <p>{body}</p>
      {src && <img src={src} alt="post" />}
    </article>
  );
};
