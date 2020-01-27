import React, { useState } from "react";
import "./styles.css";
import Input from "./Input";
import Post from "./post";

import rawPosts from "./json/posts";
import * as utils from "./utils";

const imgLink = "https://picsum.photos/id/237/200/300";

const posts = utils.addImg(rawPosts, imgLink);

export default function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <label>Search by ID</label>
      <Input type="number" st={value} cb={setValue} />
      {utils.filterById(value, posts).map(el => (
        <Post key={el.id} {...el} />
      ))}
    </>
  );
}
