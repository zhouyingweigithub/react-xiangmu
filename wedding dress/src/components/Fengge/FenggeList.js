import React from "react";
import css from "./FenggeList.css";
import www from "./../../assets/Fengge/www.png";
import img1 from "./../../assets/Fengge/C1.jpg";
import img2 from "./../../assets/Fengge/C2.jpg";
import img3 from "./../../assets/Fengge/C3.jpg";
import img4 from "./../../assets/Fengge/C4.jpg";
import img5 from "./../../assets/Fengge/C5.jpg";
import img6 from "./../../assets/Fengge/C6.jpg";
import img7 from "./../../assets/Fengge/C7.jpg";
import img8 from "./../../assets/Fengge/C8.jpg";
import img9 from "./../../assets/Fengge/C9.jpg";
import img10 from "./../../assets/Fengge/C10.jpg";

class FenggeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.zhujian}>
        <div className={css.center}>
         <div className={css.text}>万千灵感，超然之美！升华极致婚纱美学，为时尚，优雅而生！</div>
          <ul>
              <li>
                  <img src={img1}/>
                  <div>CUSTOM</div>
              </li>
              <li>
                  <img src={img2}/>
                  <div>CUSTOM</div>
              </li>
              <li>
                  <img src={img3}/>
                  <div>CUSTOM</div>
              </li>
              <li>
                  <img src={img4}/>
                  <div>CUSTOM</div>
              </li>
              <li>
                  <img src={img5}/>
                  <div>CUSTOM</div>
              </li>
              <li>
                  <img src={img6}/>
                  <div>CUSTOM</div>
              </li>
              <li>
                  <img src={img7}/>
                  <div>CUSTOM</div>
              </li>
              <li>
                  <img src={img8}/>
                  <div>CUSTOM</div>
              </li>
              <li>
                  <img src={img9}/>
                  <div>CUSTOM</div>
              </li>
              <li>
                  <img src={img10}/>
                  <div>CUSTOM</div>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default FenggeList;
