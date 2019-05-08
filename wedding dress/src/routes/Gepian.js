import React from "react";
import { connect } from "dva";
import Fenlei from "./../components/commonality/Fenlei.js";
function Fenye2() {
    return (
      <div>
        <Fenlei />
        客片赏析
    </div>
  );
}

Fenye2.propTypes = {};

export default connect()(Fenye2);