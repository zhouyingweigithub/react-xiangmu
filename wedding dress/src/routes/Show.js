import React from "react";
import { connect } from "dva";
import LunboTop from "./../components/commonality/LunboTop.js";
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


class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      img:{
        img1:require("./../assets/Show/top/1-1Z4261Z5430-L.jpg"),
        img2:require("./../assets/Show/top/1-1Z320143P40-L.jpg"),
        img3:require("./../assets/Show/top/1-1Z3201005040-L.jpg"),
        img4:require("./../assets/Show/top/1-1Z402111052292.jpg"),
      }
    }
  }
  render() {
  return (
    <div>
      <LunboTop parms={this.state.img} />
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
  )}
}


export default connect()(Show);
