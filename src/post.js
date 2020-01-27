import React from "react";

export default ({ id, title, body, date, src }) => {
  return (
    <article>
      <div className="header">
        {src && <img src={src} alt="post" />}
        <h1>{title}</h1>
        <p className="id">ID number: {id}</p>
      </div>
      <p className="description">{body}</p>
    </article>
  );
};
