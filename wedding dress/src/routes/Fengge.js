import React from "react";
import { connect } from "dva";
import Fenlei from "./../components/commonality/Fenlei.js";
import FenggeTop from "./../components/Fengge/FenggeTop.js";
import FenggeLunbo from "./../components/Fengge/FenggeLunbo.js";
import FenggeList from "./../components/Fengge/FenggeList.js";
import Dibu2 from "./../components/commonality/Dibu2.js";
import Dibu3 from "./../components/commonality/Dibu3.js";

function Fenye1() {
    return (
      <div>
        <Fenlei/>
        <FenggeTop />
        <FenggeLunbo />
        <FenggeList />
        <Dibu2 />
        <Dibu3 />    
    </div>
  );
}

Fenye1.propTypes = {};

export default connect()(Fenye1);