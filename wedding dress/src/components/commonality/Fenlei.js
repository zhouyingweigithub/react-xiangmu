import React from "react";
import css from "./Fenlei.css";

class Fenlei extends React.Component {
  constructor(props) {
    super(props);
  }

  fenlei() {
    var fenlei = document.getElementById("fenlei");
    var li = fenlei.getElementsByTagName("li");
    li[0].onclick = function() {
      window.location.hash = "0";
    };
    li[1].onclick = function() {
      window.location.hash = "1";
    };
    li[2].onclick = function() {
      window.location.hash = "2";
    };
    li[3].onclick = function() {
      window.location.hash = "3";
    };
  }

  render() {
    return (
      <div className={css.daohang}>
        <div className={css.tel}>
          <div className={css.center}>
            <span>TEL：0755-23616602</span>
          </div>
        </div>
        <div className={css.fenlei}>
          <div className={css.center}>
            <ul id="fenlei" onClick={this.fenlei.bind(this)}>
              <li>首页</li>
              <li>风格鉴品</li>
              <li>客片赏析</li>
              <li>套系价格</li>
              <li>
                <img src={require("./../../assets/Show/logo.png")} />
              </li>
              <li>全球旅拍</li>
              <li>婚礼一站式</li>
              <li>旗下品牌</li>
              <li>品牌介绍</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Fenlei;
