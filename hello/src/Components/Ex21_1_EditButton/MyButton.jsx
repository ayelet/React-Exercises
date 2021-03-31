import "./style.css";
import React, { useState, useEffect, useRef } from "react";

export default function MyButton() {
  const ref = useRef(null);
  const [save, setSave] = useState(false);

  const onClick = (e) => {
    console.log("click");
    // ref.current.value = "save"
    setSave(!save);
    console.log(ref.current);
  };

  useEffect(() => {
    ref.current.value = save ? "Save" : "Edit";
  }, [save]);

  return (
    <div className="container">
      <input type="button" ref={ref} value="Edit" onClick={onClick} />
      {save ? <input type="search" /> : null}
    </div>
  );
}
