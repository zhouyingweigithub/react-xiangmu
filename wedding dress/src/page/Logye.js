import React from 'react'
import style from './Logye.css';
import img from "./../../assets/Log/logo.png";
import img1 from "./../../assets/Log/nav1.jpg";
import img2 from "./../../assets/Log/nav2.jpg";
import img3 from "./../../assets/Log/nav3.jpg";
import img4 from "./../../assets/Log/nav4.jpg";
import img5 from "./../../assets/Log/nav5.jpg";
import img6 from "./../../assets/Log/nav6.jpg";
import img7 from "./../../assets/Log/nav7.jpg";

class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "头部"
        }
    }
    render() {
        return (
            
            <div style={{position:"relative"}}>
                <div className={style.nav}> 
                    <div className={style.container}>
                        <div className={style.navbox}>
                        <div style={{width:"160px",height:"46px",float:"left",}}>
                                <img style={{width:"170px",height:"55px",marginTop:'15px',display:'block'}} src={img} alt="" />
                        </div>
                        <ul className={style.navlist}>
                            <li className={style.li}>
                                <div className={style.a}>首页</div>
                                <img className={style.img} src={img1} alt=""/>
                            </li>
                            <li className={style.li}>
                                <div className={style.a}>特别推荐</div>
                                <img className={style.img} src={img2} alt=""/>
                            </li>
                            <li className={style.li}>
                                <div className={style.a}>本地拍</div>
                                <img className={style.img} src={img3} alt=""/>
                            </li>
                            <li className={style.li}>
                                <div className={style.a}>全国拍</div>
                                <img className={style.img} src={img4} alt=""/>
                            </li>
                            <li className={style.li}>
                                <div className={style.a}>全球拍</div>
                                <img className={style.img} src={img5} alt=""/>
                            </li> 
                            <li className={style.li}>
                                <div className={style.a}>蜜月旅游</div>
                                <img className={style.img} src={img6} alt=""/>
                            </li>
                            <li className={style.li}>
                                <div className={style.a}>客片展示</div>
                                <img className={style.img} src={img7} alt=""/>
                            </li>
                        </ul>
                    
                        <div style={{height:"62px",width:'104px',float:'right',boxSizing:'borderBox'}}>
                            <ul>
                                <li className={style.Log}>
                                        <a href="javascript:;" className={style.serserLog}>登录</a>
                                </li>
                                <li className={style.Log}>
                                        <a href="javascript:;" className={style.serserLog}><b>注册</b></a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
               <div className={style.bg}>
               </div>
               <div className={style.Logs}>
                <div className={style.LogHeader}>
                  <h3 className={style.h3}>会员登录</h3>
                </div>
                <div className={style.LogType}>
                    <div className={style.zaza}>
                      <span className={style.span}>
                        <div className={style.yuan}></div>
                        <div style={{float:"left"}}>普通登录</div>
                      </span>
                      <span className={style.span}>
                        <div className={style.yuan}></div>
                        <div style={{float:"left"}}>短信登录</div>
                      </span>
                    </div>     
                </div>
                <div>
                    <div style={{marginBottom:"10px"}}>
                        <span style={{color:'white'}}>登录名</span>
                          <span>
                          <input style={{marginLeft:'10px',height:'25px',width:'250px'}} type="text" placeholder="请输入登录名"/>
                          </span>                       
                    </div>
                    <div>
                    <span style={{marginRight:'15px',color:'white'}}>密码</span>
                          <span>
                          <input style={{marginLeft:'10px',height:'25px',width:'250px'}} type="text" placeholder="请输入密码"/>
                          </span> 
                    </div>
                </div>
                <input style={{display:'block',width:"300px",height:'25px',marginTop:'15px',marginLeft:'25px',background:'#524ea2',border:'none',color:'white'}} type="button" value="登录"/>
            </div>
        </div>
        )
    }
    
}

export default Log;