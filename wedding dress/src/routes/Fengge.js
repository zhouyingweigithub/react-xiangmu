import React from "react";
import { connect } from "dva";
import Fenlei from "./../components/commonality/Fenlei.js";
import FenggeTop from "./../components/Fengge/FenggeTop.js";
import LunboTop from "./../components/commonality/LunboTop.js";
import FenggeList from "./../components/Fengge/FenggeList.js";
import Dibu2 from "./../components/commonality/Dibu2.js";
import Dibu3 from "./../components/commonality/Dibu3.js";

class Fengge extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      img:{
        img1:require("./../assets/Fengge/P01.jpg"),
        img2:require("./../assets/Fengge/P02.jpg"),
        img3:require("./../assets/Fengge/P03.jpg"),
        img4:require("./../assets/Fengge/P04.jpg"),
        img5:require("./../assets/Fengge/P05.jpg"),
      }
    }
  }
  render() {
    return (
      <div>
        <Fenlei/>
        <FenggeTop/>
        <LunboTop  parms={this.state.img} />
        <FenggeList />
        <Dibu2 />
        <Dibu3 />    
    </div>
  )}
}


export default connect()(Fengge);