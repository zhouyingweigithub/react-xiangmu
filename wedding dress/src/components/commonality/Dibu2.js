import React from "react";
import css from "./Dibu2.css";

class Dibu2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.Dibu2}>
        <div className={css.center}>
          <div className={css.hezi}>
            <div className={css.top}>SITE MAP 站点导航</div>
            <div className={css.bottom}>
              <dl>
                <dt>WEDDING PHOTO</dt>
                <dd>
                  <a href="javasrcipt:;">婚纱摄影</a>
                </dd>
                <dd>
                  <a href="javasrcipt:;">全球旅拍</a>
                </dd>
                <dd>
                  <a href="javasrcipt:;">工作室个性定制</a>
                </dd>
              </dl>

              <dl>
                <dt>WEDDING SERVICES</dt>
                <dd>
                  <a href="javasrcipt:;">婚礼策划</a>
                </dd>
                <dd>
                  <a href="javasrcipt:;">摄影•策划</a>
                </dd>
                <dd>
                  <a href="javasrcipt:;">礼服•西装</a>
                </dd>
              </dl>

              <dl>
                <dt>ABOUT US</dt>
                <dd>
                  <a href="javasrcipt:;">集团介绍</a>
                </dd>
                <dd>
                  <a href="javasrcipt:;">企业动态</a>
                </dd>
              </dl>

              <dl>
                <dt>BRAND LIST</dt>
                <dd>
                  <a href="javasrcipt:;">儿童摄影</a>
                </dd>
                <dd>
                  <a href="javasrcipt:;">8090婚礼一站式</a>
                </dd>
              </dl>
              <div className={css.brigth}>
                <a href="javasrcipt:;">旗下门店</a>
                <a href="javasrcipt:;">在线支付</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dibu2;
