import React from "react";
import css from "./Kepian.css";

class Kepian extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div className={css.Kepian} a={this.shijian.bind(this)}>
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
        )
    }
}
export default Kepian;