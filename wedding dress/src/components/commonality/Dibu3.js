import React from "react";
import css from "./Dibu3.css";
import img1 from "./../../assets/Show/dibu/logo_old2.png";

class Dibu3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.Dibu3}>
        <div className={css.center}>
          <div className={css.hezi}>
            <img src={img1} />
            <p>总部地址：罗湖区泥岗路大华大厦701、702、730</p>
            <p>Copyright © 2006 - 2019 Szforever Inc. All Rights Reserved</p>
            <p>
              深圳市天长地久文化产业股份有限公司版权所有|站点备案信息：
              <span>[粤ICP备09017461号]</span>
            </p>
            <p>
              样片与客片版权归深圳市天长地久文化产业股份有限公司所有，未经允许不得转载抄袭，我司对此保留法律诉讼的权利。
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Dibu3;
