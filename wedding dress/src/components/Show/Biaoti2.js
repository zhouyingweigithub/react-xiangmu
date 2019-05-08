import React from "react";
import css from "./Biaoti2.css";


class Biaoti2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.zhujian}>
        <div className={css.center}>
            <img src={require("./../../assets/Show/tit02.png")} />
        </div>
      </div>
    );
  }
}
export default Biaoti2;