import React from "react";
import { connect } from "dva";
import Fenlei from "./../components/commonality/Fenlei.js";
function Fenye3() {
    return (
      <div>
        <Fenlei />
        套系价格
    </div>
  );
}

Fenye3.propTypes = {};

export default connect()(Fenye3);