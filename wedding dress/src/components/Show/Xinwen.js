import React from "react";
import css from "./Xinwen.css";
import img1 from "./../../assets/Show/tit04.png";

class Xinwen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className={css.Xinwen}>
        <div className={css.center}>
          <div className={css.biaoti}>
            <img src={img1} />
          </div>
          <ul className={css.ul}>
            <li>
              <p>
                <span>Mar</span>
                <span>18, 2019</span>
                <span>
                  唯有诚信，天长地久！ 庆祝天长地久荣登《深圳特区报》“31
                </span>
              </p>
              <p>
                唯有诚信，天长地久！
                庆祝天长地久荣登《深圳特区报》315消费者权益日示范单位光荣榜...
              </p>
            </li>

            <li>
              <p>
                <span>Nov</span>
                <span>22, 2018</span>
                <span>
                九段私董会 | 畅叙发展，共话未来！
                </span>
              </p>
              <p>
              中商国际九段私董会 由中国领导力学术带头人、 世界联合大学杨思卓教授担任总导师的 国内顶级企业家互动圈子。 杨思卓...
              </p>
            </li>

            <li>
              <p>
                <span>Apr</span>
                <span>17, 2018</span>
                <span>
                香港商报：「天长地久」成春季婚博会亮点
                </span>
              </p>
              <p>
              深圳市天长地久文化产业股份有限公司，作为本次婚博会总冠名，携集团旗下的天长地久婚纱摄影、优优小王国、8090爱会所...
              </p>
            </li>

            <li>
              <p>
                <span>Apr</span>
                <span>06, 2018</span>
                <span>
                给我最爱的你们
                </span>
              </p>
              <p>
              有一种爱永远不会改变，即使岁月绵绵，也会重新点燃；有一封信温暖所有语言，即使远在天边，也会终生相伴。...
              </p>
            </li>

            <li>
              <p>
                <span>Feb</span>
                <span>03, 2018</span>
                <span>
                天长地久在新加坡荣获多项行业荣誉
                </span>
              </p>
              <p>
              天长地久在新加坡荣获多项行业荣誉 2018年1月19日，天长地久集团管理团队赴新加坡参加行业最高盛典成功之道新加坡站。...
              </p>
            </li>

            <li>
              <p>
                <span>Feb</span>
                <span>02, 2018</span>
                <span>
                【致青春，新趋势·新征程】祝贺天长地久2018新春年会盛典圆满
                </span>
              </p>
              <p>
              2018年1月29日天长地久在广州百万葵园花之恋酒店隆重举办了“致青春，新趋势·新征程”2018企业年会盛典...
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Xinwen;
