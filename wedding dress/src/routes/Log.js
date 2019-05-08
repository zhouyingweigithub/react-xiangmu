import React from "react";
import { connect } from "dva";
import Logye from "./../components/Log/Logye.js";
function Fenye3() {
    return (
      <div>
        <Logye />
    </div>
  );
}

Logye.propTypes = {};

export default connect()(Logye);