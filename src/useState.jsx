import React, { Fragment } from "react";

const LearningUseState = () => {
  const [counter, setCounter] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [array, setArray] = React.useState(["ayaam", "kmbing", "sepi"]);
  const [seconds, setSeconds] = React.useState(0);
  const [text, setText] = React.useState("");
  const HandleTambah = () => {
    // setCounter((counter) => counter + 1);
    setCounter((c) => c + 1);
    setLoading(true);
    setArray([...array, "kijang"]);
  };
  const HandleKurang = () => {
    setCounter((c) => counter - 1);
    setLoading(false);
  };

  React.useEffect(
    function () {
      if (text.length) localStorage.setItem("text", text);
      console.log("effect berjalan");
    },
    { text }
  );

  React.useEffect(function () {
    setText(localStorage.getItem("text"));
    setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return clearInterval;
  }, []);

  return (
    <Fragment>
      <h1>latihan use state</h1>
      <textarea
        name="anjing"
        id="anjing"
        cols="30"
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
      >
        <h3 className="alert alert-info">
          Time Remaining : {Math.floor(seconds / 60)} menit {seconds % 60} detik
        </h3>
      </textarea>
      <h4>{counter}</h4>
      <button onClick={HandleTambah}>{loading ? "loading" : "tambah"}</button>
      <button onClick={HandleKurang}>kurang</button>

      <h3>nama-nama hewan</h3>
      <ol>
        {array.map((hewan) => (
          <li>{hewan}</li>
        ))}
      </ol>
    </Fragment>
  );
};

export default LearningUseState;
