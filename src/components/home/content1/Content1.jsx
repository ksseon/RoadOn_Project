import React, { useState } from "react";
import "./style.scss";
import Component from "./component/Component";

const themeData = [
  {
    tag: "#드라마",
    img: "./images/main/drama1.png",
  },
  {
    tag: "#영화",
    img: "./images/main/movie1.png",
  },
  {
    tag: "#예능",
    img: "./images/main/entertain1.png",
  },
  {
    tag: "#K-POP",
    img: "./images/main/blackpink1.png",
  },
];

const Content1 = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="themeSection">
      <ul className="tags">
        {themeData.map((item, idx) => (
          <li
            key={item.tag}
            className={activeIdx === idx ? "active" : ""}
            onClick={() => setActiveIdx(idx)}
          >
            {item.tag}
          </li>
        ))}
      </ul>
      <Component />
    </section>
  );
};

export default Content1;
