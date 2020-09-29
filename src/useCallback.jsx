import React, { Fragment } from "react";

const UseCallBack = (props) => {
  const [kelas, setKelas] = React.useState([]);
  const classAmount = React.useCallback(() => {
    return ["X TKJ", "X RPL", "XI TKJ", "XI RPL"];
  }, []);

  React.useEffect(() => {
    let data = classAmount();
    setKelas(data);
  }, [classAmount]);
  return (
    <Fragment>
      <h1>Banyak Kelas</h1>
      <ol>
        {kelas.map((kelas) => (
          <li>{kelas}</li>
        ))}
      </ol>
    </Fragment>
  );
};

export default UseCallBack;
