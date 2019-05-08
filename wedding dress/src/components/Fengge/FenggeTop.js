import React from "react";
import css from "./FenggeTop.css";
import www from "./../../assets/Fengge/www.png";

class FenggeTop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.zhujian}>
        <div className={css.center}>
          <img src={www}/>
        </div>
      </div>
    );
  }
}
export default FenggeTop;