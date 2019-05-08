import React from "react";
import css from "./Kepian.css";

class Kepian extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var shu1 = document.getElementById("shu1");
    var shu2 = document.getElementById("shu2");
    var shu3 = document.getElementById("shu3");
    var time = setInterval(function() {
      var a1 = 0;
      var a2 = 0;
      var a3 = 0;
      var time1 = setInterval(function() {
        a1++;
        shu1.innerText = a1;
        if (a1 >= 32) {
          clearTimeout(time1);
        }
      }, 93);

      var time2 = setInterval(function() {
        a2++;
        shu2.innerText = a2;
        if (a2 >= 59) {
          clearTimeout(time2);
        }
      }, 51);

      var time3 = setInterval(function() {
        a3++;
        shu3.innerText = a3;
        if (a3 >= 139) {
          clearTimeout(time3);
        }
      }, 22);
    }, 6000);
  }

  render() {
    return (
      <div className={css.Kepian}>
        <div className={css.center}>
          <div className={css.bottom}>
            <dl>
              <dt>
                <b id="shu1">32</b>
                <span>年</span>
              </dt>
              <dd>
                <p>品牌历程</p>
                <p>BEAND HISTORY</p>
              </dd>
            </dl>
            <dl>
              <dt>
                <b id="shu2">59</b>
                <span>家</span>
              </dt>
              <dd>
                <p>直营门店</p>
                <p>DIRECT STORES</p>
              </dd>
            </dl>
            <dl>
              <dt>
                <b id="shu3">139</b>
                <span>万对</span>
              </dt>
              <dd>
                <p>已服务新人</p>
                <p>SERVICE</p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}
export default Kepian;
