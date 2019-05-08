import React from "react";
import { connect } from "dva";
import LunboTop from "./../components/Show/LunboTop.js";
import LunboCenter from "./../components/Show/LunboCenter.js";
import LunboBottom from "./../components/Show/LunboBottom.js";
import Fenlei from "./../components/commonality/Fenlei.js";
import Biaoti1 from "./../components/Show/Biaoti1.js";
import Biaoti2 from "./../components/Show/Biaoti2.js";
import Kepian from "./../components/Show/Kepian.js";
import Xinwen from "./../components/Show/Xinwen.js";
import Fendian from "./../components/Show/Fendian.js";
import Dibu1 from "./../components/commonality/Dibu1.js";
import Dibu2 from "./../components/commonality/Dibu2.js";
import Dibu3 from "./../components/commonality/Dibu3.js";

function Show() {
  return (
    <div>
      <LunboTop />
      <Fenlei />
      <Biaoti1 />
      <LunboCenter />
      <Biaoti2 />
      <LunboBottom />
      <Kepian />
      <Xinwen />
      <Fendian />
      <Dibu1 />
      <Dibu2 />
      <Dibu3 />
    </div>
  );
}

Show.propTypes = {};

export default connect()(Show);
