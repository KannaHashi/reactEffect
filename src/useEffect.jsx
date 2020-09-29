import React, { Fragment, useState } from "react";

const BelajarUseState = () => {
  const [text, setText] = React.useState("");
  const [seconds, setSeconds] = React.useState(0);

  // useEffect 1
  React.useEffect(
    function () {
      if (text.length) localStorage.setItem("text", text);
      console.log("Text berhasil disimpan");
    },
    [text]
  );

  // useEffect 2
  React.useEffect(function () {
    setText(localStorage.getItem("text"));
    let Interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return function () {
      clearInterval(Interval);
    };
    console.log("getItem");
  }, []);

  return (
    <Fragment>
      <div className="kotak" style={{ margin: "25px" }}>
        <h1>Latihan useEffect</h1>
        <textarea onChange={(e) => setText(e.target.value)} value={text} />
        <h2>
          Waktu : {Math.floor(seconds / 60)} menit {seconds % 60} detik
        </h2>
      </div>
    </Fragment>
  );
};

export default BelajarUseState;
