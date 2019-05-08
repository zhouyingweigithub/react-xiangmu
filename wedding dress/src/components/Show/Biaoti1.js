import React from "react";
import css from "./Biaoti1.css";

class Biaoti1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.zhujian}>
        <div className={css.center}>
          <img src={require("./../../assets/Show/tit01.png")} />
        </div>
      </div>
    );
  }
}
export default Biaoti1;