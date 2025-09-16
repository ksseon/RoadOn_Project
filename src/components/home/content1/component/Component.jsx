import React, { useState } from "react";
import "./style.scss";

const Component = ({img}) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="themeSection">
      <div className="left">
        <img src="" alt="" />
      </div>
      <div className="right"></div>
    </section>
  );
};

export default Component;
