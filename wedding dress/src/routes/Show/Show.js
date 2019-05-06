import React from "react";
import { connect } from "dva";
import css from "./Show.css";
import LunboTop from "./../../components/Show/LunboTop.js";
import LunboCenter from "./../../components/Show/LunboCenter.js";
import LunboBottom from "./../../components/Show/LunboBottom.js";
import Fenlei from "./../../components/Show/Fenlei.js";
import Kepian from "./../../components/Show/Kepian.js";
import Xinwen from "./../../components/Show/Xinwen.js";
import Fendian from "./../../components/Show/Fendian.js";
import Dibu1 from "./../../components/Show/Dibu1.js";
import Dibu2 from "./../../components/Show/Dibu2.js";
import Dibu3 from "./../../components/Show/Dibu3.js";

function IndexPage() {
  return (
    <div className={css.box}>
      <LunboTop />
      <Fenlei />
      <div className={css.biaoti}>
        <div className={css.center}>
          <img src={require("./../../assets/Show/tit01.png")} />
        </div>
      </div>
      <LunboCenter />
      <div className={css.biaoti2}>
        <img src={require("./../../assets/Show/tit02.png")} />
      </div>
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

IndexPage.propTypes = {};

export default connect()(IndexPage);
