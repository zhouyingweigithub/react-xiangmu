import React from "react";
import css from "./Dibu1.css";
import img1 from "./../../assets/Show/dibu/brand_03.png";
import img2 from "./../../assets/Show/dibu/brand_06.png";
import img3 from "./../../assets/Show/dibu/brand_08.png";
class Dibu1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.Dibu1}>
        <div className={css.center}>
          <div className={css.hezi}>
            <div className={css.boxleft}>
              <div className={css.top}>
                <img src={img1} />
                <div>
                  <p>深圳市天长地久文化产业股份有限公司</p>
                  <p>SHENZHEN FOREVER CULTURAL INDUSTRY CO., LTD.</p>
                </div>
              </div>
              <div className={css.bottom}>
                <div className={css.bleft}>友情链接</div>
                <div className={css.bright}>
                  <a href="javascript:;">华人婚庆服务集团</a>
                  <a href="javascript:;">广州天长地久婚纱摄影</a>
                  <a href="javascript:;">ODOP影像产品制作</a>
                  <a href="javascript:;">七彩玫瑰</a>
                  <a href="javascript:;">上海巴黎婚纱</a>
                  <a href="javascript:;">上海米兰婚纱</a>
                  <a href="javascript:;">北京施华洛</a>
                  <a href="javascript:;">杭州佳丽</a>
                  <a href="javascript:;">长沙法缇</a>
                  <a href="javascript:;">台湾旅拍</a>
                  <a href="javascript:;">薇薇新娘</a>
                  <a href="javascript:;">芊翔西服</a>
                </div>
              </div>
            </div>
            <div className={css.boxright}>
              <div className={css.box1}>
                <p>旗下品牌</p>
                <p>BRAND</p>
                <p>LIST</p>
              </div>
              <div className={css.box2}>
                <p>婚礼一站式</p>
                <img src={img2} />
              </div>
              <div className={css.box3}>
                <p>儿童摄影</p>
                <img src={img3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dibu1;
