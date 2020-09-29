import React, { Fragment } from "react";

let DaftarMakanan = function () {
  return ["nasi padang", "nasi uduk", "nasi gudeg"];
};

const BelajarUseMemo = (props) => {
  let menu = React.useMemo(() => {
    if (props.wilayah === "jabar") {
      [...menu, "penis"];
    }
    return DaftarMakanan();
  }, [props.wilayah]);

  return (
    <Fragment>
      <ol>
        {menu.map((makanan) => (
          <li>{makanan}</li>
        ))}
      </ol>
    </Fragment>
  );
};

export default BelajarUseMemo;
