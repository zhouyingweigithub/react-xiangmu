import React from "react";
import css from "./LunboBottom.css";
import img1 from "./../../assets/Show/bottom/banner001.jpg";
import img2 from "./../../assets/Show/bottom/banner002.jpg";
import img3 from "./../../assets/Show/bottom/banner003.jpg";
import img4 from "./../../assets/Show/bottom/banner004.jpg";

class LunboBottom extends React.Component {
  constructor(props) {
    super(props);
    this.index = 0;
  }

  zuoyou() {
    var ul = document.getElementById("ulb");
    var li = ul.getElementsByTagName("li");
    var zuo = document.getElementById("zuo");
    var you = document.getElementById("you");
    zuo.onclick = () => {
      var a = li[0].cloneNode(true);
      ul.removeChild(li[0]);
      ul.appendChild(a);
    };
    you.onclick = () => {
      var a = li[4].cloneNode(true);
      ul.removeChild(li[4]);
      ul.insertBefore(a, ul.childNodes[0]);
    };
  }

  render() {
    return (
      <div className={css.zhujian}>
        <div className={css.center}>
          <div className={css.hezi} onClick={this.zuoyou.bind(this)}>
            <ul id="ulb" className={css.ul}>
              <li>
                <img src={img1} />
              </li>
              <li>
                <img src={img2} />
              </li>
              <li>
                <img src={img3} />
              </li>
              <li>
                <img src={img4} />
              </li>
              <li>
                <img src={img3} />
              </li>
            </ul>
            <div id="zuo" className={css.zuo} />
            <div id="you" className={css.you} />
          </div>
        </div>
      </div>
    );
  }
}

export default LunboBottom;
