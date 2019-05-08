import React from "react";
import css from "./LunboCenter.css";
import qianjin from "./../../assets/Show/top/qianjin.png";
import houtui from "./../../assets/Show/top/houtui.png";
import img1 from "./../../assets/Show/center/9S01.jpg";
import img2 from "./../../assets/Show/center/9S02.jpg";
import img3 from "./../../assets/Show/center/9S03.jpg";
import img4 from "./../../assets/Show/center/9S04.jpg";
import img5 from "./../../assets/Show/center/9S05.jpg";
import img6 from "./../../assets/Show/center/9S06.jpg";
import img7 from "./../../assets/Show/center/9S07.jpg";
import img8 from "./../../assets/Show/center/9S08.jpg";
import img9 from "./../../assets/Show/center/9S09.jpg";
import img1s from "./../../assets/Show/center/9S01_s.jpg";
import img2s from "./../../assets/Show/center/9S02_s.jpg";
import img3s from "./../../assets/Show/center/9S03_s.jpg";
import img4s from "./../../assets/Show/center/9S04_s.jpg";
import img5s from "./../../assets/Show/center/9S05_s.jpg";
import img6s from "./../../assets/Show/center/9S06_s.jpg";
import img7s from "./../../assets/Show/center/9S07_s.jpg";
import img8s from "./../../assets/Show/center/9S08_s.jpg";
import img9s from "./../../assets/Show/center/9S09_s.jpg";

class LunboCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { iNow: 0, bCheck: true };
    this.buts = this.buts.bind(this);
    this.xiaoqianjin = this.xiaoqianjin.bind(this);
    this.xiaohoutui = this.xiaohoutui.bind(this);
    this.changdu = 0;
    this.index = 0;
    this.index2 = 0;
    this.isok = true;
  }

  xiaoqianjin() {
    //小图前进
    if (this.changdu > -1227) {
      this.changdu = this.changdu - 1227;
    } else {
      this.changdu = -2454;
    }
    var div = document.getElementById("div2");
    var xiaoul = div.getElementsByTagName("ul")[0];
    xiaoul.style.left = this.changdu + "px";
  }

  xiaohoutui() {
    //小图后退
    if (this.changdu < 0) {
      this.changdu = this.changdu + 1227;
    } else {
      this.changdu = 0;
    }
    var div = document.getElementById("div2");
    var xiaoul = div.getElementsByTagName("ul")[0];
    xiaoul.style.left = this.changdu + "px";
  }

  buts() {
    //点击小图
    var div = document.getElementById("div2");
    var xiaoul = div.getElementsByTagName("ul")[0];
    var li = xiaoul.getElementsByTagName("li");
    var datu = document.getElementById("datu");
    var img = datu.getElementsByTagName("li");
    var liw = img[0].offsetWidth;
    var juli = 0;
    var juli2 = liw;

    for (let i = 0; i < li.length; i++) {
      //获取下标 
      li[i].onclick = () => {
        this.index = i;
      };
    }
    for (var i = 0; i < li.length; i++) {
      li[i].className = "";
    }

    var index = this.index;
    var index2 = this.index2;

    li[index].className = "LunboCenter__gaoliang___5wB7M";

    if (index < index2) {
      var timer = setInterval(function() {
        if (juli >= -liw) {
          juli -= 12.63;
          img[index2].style.right = juli + "px";
        } else {
          clearInterval(timer);
        }
      }, 20);

      img[index].style.right = liw + "px";

      var timer2 = setInterval(function() {
        if (juli2 > 0) {
          juli2 -= 12.63;
          img[index].style.right = juli2 + "px";
        } else {
          clearInterval(timer2);
        }
      }, 20);
    } else if (index == index2) {
    } else {
      var timer = setInterval(function() {
        if (juli <= liw) {
          juli += 12.63;
          img[index2].style.right = juli + "px";
        } else {
          clearInterval(timer);
        }
      }, 20);

      img[index].style.right = -liw + "px";

      var timer2 = setInterval(function() {
        if (-juli2 <= 0) {
          juli2 -= 12.63;
          img[index].style.right = -juli2 + "px";
        } else {
          clearInterval(timer2);
        }
      }, 20);
    }
    this.index2 = this.index;
  }

  render() {
    return (
      <div className={css.zhujian}>
        <div
          id={this.props.idNames}
          onMouseOver={this.handleMouseover}
          onMouseOut={this.handleMouseout}
          className={css.center}
        >
          <div className={css.top}>
            <ul id="datu" className={css.ul}>
              <li className={css.lis}>
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
                <img src={img5} />
              </li>
              <li>
                <img src={img6} />
              </li>
              <li>
                <img src={img7} />
              </li>
              <li>
                <img src={img8} />
              </li>
              <li>
                <img src={img9} />
              </li>
            </ul>
          </div>

          <div id="div2" className={css.div}>
            <div onClick={this.xiaohoutui} className={css.xiaozuo}>
              <img src={houtui} />
            </div>
            <div>
              <ul onClick={this.buts}>
                <li className={css.gaoliang}>
                  <img src={img1s} />
                  <p>风尚高定 | CUSTOM</p>
                </li>
                <li>
                  <img src={img2s} />
                  <p>精致新韩 | KOREAN STYLE</p>
                </li>
                <li>
                  <img src={img3s} />
                  <p>全球旅拍 | GLOBAL TRAVEL</p>
                </li>
                <li>
                  <img src={img4s} />
                  <p>幸福臻爱 | DOCUMENTARY</p>
                </li>
                <li>
                  <img src={img5s} />
                  <p>复古轻奢 | EUROPEAN STYLE</p>
                </li>
                <li>
                  <img src={img6s} />
                  <p>华美国韵 | CHINESE STYLE</p>
                </li>
                <li>
                  <img src={img7s} />
                  <p>城市短旅 | CITY TRAVEL</p>
                </li>
                <li>
                  <img src={img8s} />
                  <p>网红潮派 | INS STYLE</p>
                </li>
                <li>
                  <img src={img9s} />
                  <p>经典肖像 | PORTRAITURE</p>
                </li>
              </ul>
            </div>
            <div onClick={this.xiaoqianjin} className={css.xiaoyou}>
              <img src={qianjin} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LunboCenter;
