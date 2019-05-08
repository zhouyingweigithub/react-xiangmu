import React from "react";
import css from "./FenggeLunbo.css";
import qianjin from "./../../assets/Show/top/right.png";
import houtui from "./../../assets/Show/top/left.png";
import img1 from "./../../assets/Fengge/P01.jpg";
import img2 from "./../../assets/Fengge/P02.jpg";
import img3 from "./../../assets/Fengge/P03.jpg";
import img4 from "./../../assets/Fengge/P04.jpg";
import img5 from "./../../assets/Fengge/P05.jpg";

class FenggeLunbo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { iNow: 0, bCheck: true };
    this.handleMouseover = this.handleMouseover.bind(this);
    this.handleMouseout = this.handleMouseout.bind(this);
    this.buts = this.buts.bind(this);
    this.zuo = this.zuo.bind(this);
    this.you = this.you.bind(this);
    this.time = 0;
    this.index = 0;
  }

  handleMouseover() {
    this.state.bCheck = false;
  }

  handleMouseout() {
    this.state.bCheck = true;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.pan(), 10000);
  }

  pan() {
    if (this.state.bCheck) {
      this.lunbotuY();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  zuo() {
    //左点击
    this.lunbotuZ();
  }

  you() {
    //右点击
    this.lunbotuY();
  }

  buts(e) {
    //中点击

    var div = document.getElementById("div");
    var but = div.getElementsByTagName("div");
    var len = but.length;

    for (let i = 0; i < len; i++) {
      but[i].onclick = () => {
        this.index = i;
      };
    }
    this.lunboZhong(this.index);
  }

  lunbotuY() {
    //自动轮播 右
    if (new Date() - this.time > 1000) {
      var div = document.getElementById("div");
      var but = div.getElementsByTagName("div");
      var ul = document.getElementById("imgs");
      var li = ul.getElementsByTagName("li");
      var len = li.length;
      var index = this.state.iNow;
      var index2 = this.state.iNow;
      var liw = li[0].offsetWidth;
      var juli = 0;
      var juli2 = liw;

      //旧图离场
      var timer = setInterval(function() {
        if (juli >= -liw) {
          juli -= 12.63;
          li[index2].style.right = juli + "px";
        } else {
          clearInterval(timer);
        }
      }, 10);

      //计算下标
      index = ++index > len - 1 ? 0 : index;

      //新图立即拉到右边
      li[index].style.right = liw + "px";

      //新图进场
      var timer2 = setInterval(function() {
        if (juli2 >= 0) {
          juli2 -= 12.63;
          li[index].style.right = juli2 + "px";
        } else {
          clearInterval(timer2);
        }
      }, 10);

      for (var i = 0; i < len; i++) {
        but[i].style.background = "transparent";
      }
      but[index].style.background = "#FFF";

      //新下标变旧下标
      this.state.iNow = index;

      this.time = new Date();
    }
  }

  lunbotuZ() {
    //自动轮播 左
    if (new Date() - this.time > 1000) {
      var div = document.getElementById("div");
      var but = div.getElementsByTagName("div");
      var ul = document.getElementById("imgs");
      var li = ul.getElementsByTagName("li");
      var len = li.length;
      var index = this.state.iNow;
      var index2 = this.state.iNow;
      var liw = li[0].offsetWidth;
      var juli = 0;
      var juli2 = liw;

      var timer = setInterval(function() {
        if (juli <= liw) {
          juli += 12.63;
          li[index2].style.right = juli + "px";
        } else {
          clearInterval(timer);
        }
      }, 10);

      index = --index < 0 ? len - 1 : index;

      li[index].style.right = -liw + "px";

      var timer2 = setInterval(function() {
        if (-juli2 <= 0) {
          juli2 -= 12.63;
          li[index].style.right = -juli2 + "px";
        } else {
          clearInterval(timer2);
        }
      }, 10);

      for (var i = 0; i < len; i++) {
        but[i].style.background = "transparent";
      }
      but[index].style.background = "#FFF";
      this.state.iNow = index;
      this.time = new Date();
    }
  }

  //点击图标
  lunboZhong(index) {
    if (new Date() - this.time > 1000) {
      var div = document.getElementById("div");
      var but = div.getElementsByTagName("div");
      var ul = document.getElementById("imgs");
      var li = ul.getElementsByTagName("li");
      var len = li.length;
      var liw = li[0].offsetWidth;
      var juli = 0;
      var juli2 = liw;
      var index2 = this.state.iNow;

      if (index < index2) {
        var timer = setInterval(function() {
          if (juli >= -liw) {
            juli -= 12.63;
            li[index2].style.right = juli + "px";
          } else {
            clearInterval(timer);
          }
        }, 10);

        li[index].style.right = liw + "px";

        var timer2 = setInterval(function() {
          if (juli2 > 0) {
            juli2 -= 12.63;
            li[index].style.right = juli2 + "px";
          } else {
            clearInterval(timer2);
          }
        }, 10);
      } else if (index == index2) {
      } else {
        var timer = setInterval(function() {
          if (juli <= liw) {
            juli += 12.63;
            li[index2].style.right = juli + "px";
          } else {
            clearInterval(timer);
          }
        }, 10);

        li[index].style.right = -liw + "px";

        var timer2 = setInterval(function() {
          if (-juli2 <= 0) {
            juli2 -= 12.63;
            li[index].style.right = -juli2 + "px";
          } else {
            clearInterval(timer2);
          }
        }, 10);
      }
      for (var i = 0; i < len; i++) {
        but[i].style.background = "transparent";
      }
      but[index].style.background = "#FFF";
      this.state.iNow = index;
      this.time = new Date();
    }
  }

  render() {
    return (
      <div className={css.zhijian}>
        <div
          id={this.props.idNames}
          onMouseOver={this.handleMouseover}
          onMouseOut={this.handleMouseout}
          className={css.center}
        >
          <LunboImg />
          <div id="div" className={css.div} onClick={this.buts}>
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <span onClick={this.zuo} className={css.zuo}>
            <img src={houtui} />
          </span>
          <span onClick={this.you} className={css.you}>
            <img src={qianjin} />
          </span>
        </div>
      </div>
    );
  }
}

function LunboImg() {
  return (
    <ul id="imgs" className={css.ul}>
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
    </ul>
  );
}

export default FenggeLunbo;
