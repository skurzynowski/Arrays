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
      <Input value={value} set />
      {utils.filterById(5, posts).map(el => (
        <Post {...el} />
      ))}
    </>
  );
}
