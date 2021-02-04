import React, {useState} from 'react'
import { Container, makeStyles} from "@material-ui/core"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ContactlessIcon from '@material-ui/icons/Contactless';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {Col, Row, Steps } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import "../App.css";


const useStyles = makeStyles(() => ({
    antStepsitemTitle: {
        colot: "white"
    },
    headerTitle: {
        padding: 86,
        backgroundImage: "url(image/headerCover.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "100%, 100%",
        backgroundRepeat: "no-repeat",
        minHeight:"880px",
        color: "#000000"
    },
    chapterMain: {
        padding: "32px 32px 32px 0px",
        background:"#242424",
        color: "#ffffff"
    },
    chapterMainProjects: {
        padding: "32px 32px 32px 0px",
        background:"#1f2935",
        color: "#ffffff"
    },
    introductionTitle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    chapterTitleSubMini: {
        fontSize: "1rem", 
        color: "#d3d3d3", 
        letterSpacing: "3px"
    },
    chapterTitleMainText:{
        fontFamily: "MonFnt15",
        fontSize:"3rem", 
        margin: "0px"
    },
    introductionImageText: {
        marginTop: "15px", 
        display: "flex", 
        justifyContent:"center",
        width: "100%", 
        height: "100%", 
        alignItems:"center",
    },
    chapterImageText: {
        display: "flex", 
        justifyContent:"center",
        width: "100%", 
        height: "100%", 
        alignItems:"center"
    },
    introductionText:{
        width:"100%",
        height: "100%",
        padding: "40px", 
        position:"relative"
    },
    introductionTextAbout:{
        backgroundColor: "rgba(2, 25, 32, 0.5)", 
        width: "40%", 
        marginLeft: "-200px", 
        padding: "15px", 
        position:"relative"
    },
    introductionIconStyle:{
        width:"26%", 
        marginBottom: "10px", 
        marginTop: "15px"
    },
    introductionTextContenHeader: {
        marginTop: "15px",
        fontSize: "0.9  rem", 
        fontWeight:"400",
        // color: "#ffffff", 
        letterSpacing: "1px"
    },
    introductionTextLiTagIcon: {
        marginRight: "15px", 
        marginLeft: "15px",
        fontSize: "1.5rem",
        color:"#718dd7"
    },
    introductionListStyle: {
        display: "flex", 
        alignContent:"centers", 
        alignItems:"center",
        marginTop: "10px"
    },
    introductionBtn: {
        border: "3px solid #7788c4",
        background:"#7788c4",
        fontSize:"0.8rem",
        display:"flex",
        alignItems: "center",
        justifyContent:"center",
        margin: "28px 0px 24px 0px",
        borderRadius: "30px",
        width: "146px",
        padding: "10px",
        textAlign:"center",
        "&:hover": {
            cursor: "pointer",
            background:"#7788c4",
            border: "3px solid #fff",

        }
    },
    serviceCardFirst: {
        transition: "transform 0.35s ease-out",
        width: "400px",
        height: "500px",
        "&:hover":{
            cursor: "pointer",
            transform: "scale(1.05)"
       }
    },
    serviceCard: {
        transition: "transform 0.35s ease-out",
        width: "280px",
        height:"258px",
        margin: "15px",
        "&:hover":{
            cursor: "pointer",
            transform: "scale(1.05)"
       }
    },
    serviceCardSub: {
        width: "280px",
        height:"258px",
        background:"#504c4c78", 
        display:"flex", 
        justifyContent:"center", 
        flexDirection:"column", 
        alignItems:"center"
    },
    serviceCardIconStyle:{
        marginTop: "15px",
        height:"60px",
        display:"flex", 
        justifyContent:"center", 
        flexDirection:"column", 
        alignItems:"center"
    },
    serviceCardTitle:{
        fontFamily: "MonFnt15",
        marginTop: "30px",
        display:"flex",
        justifyContent: "center",
        color: "#ffffff",
        height: "40px",
        fontSize:"0.8rem",
        textTransform: "uppercase",
        textAlign:"center",
        letterSpacing: "2px", 
        fontWeight:"700",
        lineHeight: "1.5"
    },
    serviceCardText: {
        height: "100px",
        fontSize: "0.82rem",
        padding: "0px 15px 0px 15px",
        fontWeight:500
    },
    sliderText: {
        background: "rgba(119, 136, 196, 0.8)", 
        padding: "15px 5px 5px 5px", 
        borderRadius: "10px"
    },
    aboutBtn: {
        border: "2px solid #7788c4",
        display:"flex",
        fontSize:"0.8rem",
        alignItems: "center",
        justifyContent:"center",
        margin: "28px 0px 24px 0px",
        borderRadius: "30px",
        minWidth: "146px",
        padding: "10px",
        textAlign:"center",
        "&:hover": {
            cursor: "pointer",
            background:"#7788c4",
        }
    },
    projectNavbar: {
        display:"flex", 
        flexDirection:"row", 
        alignItems:"center"
    },
    projectNavbarIcon:{
        zIndex: 100,
        display:"flex",  
        height: "46px",
        width: "55px",
        justifyContent:"start", 
        alignItems:"center", 
        background: "#7788c4",
        borderTopRightRadius: "25px",
        borderBottomRightRadius: "25px",
    },
    projectNavbarTitle:{
        zIndex: 1,
        cursor: "pointer",
        fontSize:"0.9rem",
        fontWeight: 400,
        marginLeft: "15px", 
        height: "46px",  
        display:"flex", 
        alignItems:"center",
        "&:hover":{
            color: "#7788c4"
        }
    },
    projectNavbarSpaceDiv:{
        background:"#7788c4",
         width: "36px", 
         height: "22px"
    },
    projectDate:{
        width: "80px", 
        height: "20px", 
        background:"#7788c4",
        borderRadius: "15px", 
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center"
    },
    projectDateText:{
        color: "white", 
        fontSize: "0.7rem",
         margin: "0px"
    },
    callSubTile: {
        display:"flex", 
        justifyItems:"center",   
        alignItems:"center",
        marginBottom: "25px",
        "&:hover":{
            cursor: "pointer",
            color:"#D2D2D2"
        }
    }
}))

export default function Content(props) {
    const classes = useStyles()
    const [darsan, setDarsan] = useState(true);
    const [darsanTeam, setDarsanTeam] = useState(false);
    const [visibleIntorduction, setVisibleIntroduction] = useState(false)
    const [visibleAboutUs, setVisibleAboutUs] = useState(false)
    const [visibleAboutUsTeam, setVisibleAboutUsTeam] = useState(false)
    const { Step } = Steps;
    const [service1, setService1] = useState(true);
    const [service2, setService2] = useState(false);
    const [service3, setService3] = useState(false);
    const [service4, setService4] = useState(false);
    const [service5, setService5] = useState(false);
    const [service6, setService6] = useState(false);
    const [service7, setService7] = useState(false);

    function serviceClick(param){
        var services = param;
        switch(services) {
            case "service1":
                setService1(true);
                setService2(false);
                setService3(false);
                setService4(false);
                setService5(false);
                setService6(false);
                setService7(false);
            break;
            case "service2":
                setService1(false);
                setService2(true);
                setService3(false);
                setService4(false);
                setService5(false);
                setService6(false);
                setService7(false);
            break;
            case "service3":
                setService1(false);
                setService2(false);
                setService3(true);
                setService4(false);
                setService5(false);
                setService6(false);
                setService7(false);
            break;
            case "service4":
                setService1(false);
                setService2(false);
                setService3(false);
                setService4(true);
                setService5(false);
                setService6(false);
                setService7(false);
            break;
            case "service5":
                setService1(false);
                setService2(false);
                setService3(false);
                setService4(false);
                setService5(true);
                setService6(false);
                setService7(false);
            break;
            case "service6":
                setService1(false);
                setService2(false);
                setService3(false);
                setService4(false);
                setService5(false);
                setService6(true);
                setService7(false);
            break;
            case "service7":
                setService1(false);
                setService2(false);
                setService3(false);
                setService4(false);
                setService5(false);
                setService6(false);
                setService7(true);
            break;
            default:
                
        }
    }
    function daravCompany() {
        if(darsan === false ){
            setDarsan(true)
            setDarsanTeam(false)
        }else {
            setDarsan(false) 
            setDarsanTeam(true) 
        }
    }
    function daravTeam() {
        if(darsanTeam === false ){
            setDarsanTeam(true)
            setDarsan(false)
        }else {
            setDarsanTeam(false) 
            setDarsan(true)
        }
    }

    const showModal = () => {
        setVisibleIntroduction(true)
      };
    const  handleCancel = e => {
        setVisibleIntroduction(false)
      };
    const showModalAboutUs = () => {
        setVisibleAboutUs(true)
      };
    const  handleCancelAbouUs = e => {
        setVisibleAboutUs(false)
      };
    const showModalAboutUsTeam = () => {
        setVisibleAboutUsTeam(true)
    };
    const  handleCancelAbouUsTeam = e => {
        setVisibleAboutUsTeam(false)
    };
    

    return (
        <div id="homePage" style={{width: "100%"}}>
            <div className={classes.headerTitle} >
                <Container>
                    <img src={"/image/logoVector.svg"} width="68px" alt="logo"/>
                    <h1 style={{fontFamily: "MonFnt15", fontSize:"3rem", color:"#000", margin: "15px 0px 15px 0px"}}>{props.strings.headerMainTitle}</h1>
                    <p style={{fontSize: "0.8rem",}}>
                        {props.strings.headerMainTitleSub}
                    </p>
                </Container>
            </div>
            {/* -------------------------------------------- Indroduction -----------------------------------------------*/}
            <div className={classes.chapterMain} id="indroductionPage">
                <Container style={{ display: "flex", flexDirection: "column",  alignItems: "center", }}>
                    <div className={classes.introductionTitle}>
                        <p className={classes.chapterTitleMainText} >{props.strings.taniltsuulga}</p>
                        <p className={classes.chapterTitleSubMini} >{props.strings.yagadBidniihSongohVe}</p> 
                    </div>
                    <div>
                        <img src={"/image/line.svg"} height="14px" alt="line"/>
                    </div>
                    <Row className={classes.introductionImageText}>
                        <Col style={{width: "60%"}}>
                            <img src={"image/introCover.png"} width="100%" alt="line"/>
                        </Col>
                        <Col className={classes.introductionTextAbout}>
                            <p className={classes.introductionTextContenHeader} style={{fontFamily: "MonFnt15"}}>{props.strings.yagadBidniihSongohVe}</p> 
                            <p>
                                {props.strings.taniltsuulgaText}
                            </p>
                            <p style={{fontSize: "1.1rem", fontWeight: 500}}>{props.strings.ontslogChanar}</p>
                            <div className={classes.introductionListStyle}>
                                <FiberManualRecordIcon className={classes.introductionTextLiTagIcon}/>{props.strings.ontslogChanar2} <br/>
                            </div>
                            <div className={classes.introductionListStyle}>
                                <FiberManualRecordIcon className={classes.introductionTextLiTagIcon}/>{props.strings.ontslogChanar1} <br/>
                            </div>
                            <div className={classes.introductionListStyle}>
                                <FiberManualRecordIcon className={classes.introductionTextLiTagIcon}/>{props.strings.ontslogChanar3} <br/>
                            </div>
                            <div style={{display:"flex", justifyContent: "center", }}>
                                <div className={classes.introductionBtn} onClick={showModal}>{props.strings.tsaashUnshihBtnText}</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* -------------------------------------------- Service -----------------------------------------------*/}
            <div className={classes.chapterMain} id="servicePage">
                <Container style={{ display: "flex", flexDirection: "column",  alignItems: "center", }}>
                    <div className={classes.introductionTitle}>
                        <p className={classes.chapterTitleMainText} >{props.strings.uilchilgee}</p>
                        <p className={classes.chapterTitleSubMini} >{props.strings.uilchilgeeSubTitle}</p> 
                    </div>
                    <div> 
                        <img src={"/image/line.svg"} height="14px" alt="line"/>
                    </div>
                    <Row className={classes.chapterImageText}>
                        <Col className={classes.serviceCard} style={{ backgroundImage: "url(image/service1.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%",}}>
                            <div className={classes.serviceCardSub}>
                                <div className={classes.serviceCardIconStyle}>
                                    <img src={"image/IconService1.png"} alt="service1" className={classes.introductionIconStyle} />
                                </div>
                                <h3 className={classes.serviceCardTitle}>{props.strings.uilchilgee1}</h3>
                                <p className={classes.serviceCardText}>{props.strings.uilchilgee1Desc}</p>
                            </div>
                        </Col>
                        <Col className={classes.serviceCard} style={{ backgroundImage: "url(image/service2.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%",}}>
                            <div className={classes.serviceCardSub}>
                                <div className={classes.serviceCardIconStyle}>
                                    <img src={"image/IconService2.png"} alt="service1" className={classes.introductionIconStyle} />
                                </div>
                                <h3 className={classes.serviceCardTitle}>{props.strings.uilchilgee2}</h3>
                                <p className={classes.serviceCardText}>{props.strings.uilchilgee2Desc}</p>
                            </div>
                        </Col>
                        <Col className={classes.serviceCard} style={{ backgroundImage: "url(image/service3.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%",}}>
                            <div className={classes.serviceCardSub}>
                                <div className={classes.serviceCardIconStyle}>
                                    <img src={"image/IconService3.png"} alt="service1" className={classes.introductionIconStyle} style={{width: "30%"}}/>
                                </div>
                                <h3 className={classes.serviceCardTitle}>{props.strings.uilchilgee3}</h3>
                                <p className={classes.serviceCardText}>{props.strings.uilchilgee3Desc}</p>
                            </div>
                        </Col>
                        <Col className={classes.serviceCard} style={{ backgroundImage: "url(image/service4.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%",}}>
                            <div className={classes.serviceCardSub}>
                                <div className={classes.serviceCardIconStyle}>
                                    <img src={"image/IconService4.png"} alt="service1" className={classes.introductionIconStyle} />
                                </div>
                                <h3 className={classes.serviceCardTitle}>{props.strings.uilchilgee4}</h3>
                                <ul className={classes.serviceCardText} style={{marginLeft: 35,}}>
                                    <li>{props.strings.uilchilgee4Desc1}</li>
                                    <li>{props.strings.uilchilgee4Desc2}</li>
                                    <li>{props.strings.uilchilgee4Desc4}</li>
                                </ul>
                            </div>
                        </Col>
                        <Col className={classes.serviceCard} style={{ backgroundImage: "url(image/service5.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%",}}>
                            <div className={classes.serviceCardSub}>
                                <div className={classes.serviceCardIconStyle}>
                                    <img src={"image/IconService5.png"} alt="service1" className={classes.introductionIconStyle} />
                                </div>
                                <h3 className={classes.serviceCardTitle}>{props.strings.uilchilgee5}</h3>
                                <ul className={classes.serviceCardText}>
                                    <li>{props.strings.uilchilgee5Desc1}</li>
                                    <li>{props.strings.uilchilgee5Desc2}</li>
                                </ul>
                            </div>
                        </Col>
                        <Col className={classes.serviceCard} style={{ backgroundImage: "url(image/service6.jpg)",  backgroundRepeat: "no-repeat", backgroundSize: "100% 100%",}}>
                            <div className={classes.serviceCardSub}>
                                <div className={classes.serviceCardIconStyle}>
                                    <img src={"image/IconService6.png"} alt="service1" className={classes.introductionIconStyle} />
                                </div>
                                <h3 className={classes.serviceCardTitle}>{props.strings.uilchilgee6}</h3>
                                <ul className={classes.serviceCardText} style={{marginLeft: 35,}}>
                                    <li>{props.strings.uilchilgee6Desc}</li>
                                    <li>{props.strings.uilchilgee6Desc2}</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* -------------------------------------------- Projects -----------------------------------------------*/}
            <div className={classes.chapterMainProjects} id="projectsPage">
                <Container style={{ display: "flex", flexDirection: "column",  alignItems: "center", }}>
                    <div className={classes.introductionTitle}>
                        <p className={classes.chapterTitleMainText} >{props.strings.tusuluud}</p>
                        <p className={classes.chapterTitleSubMini} >{props.strings.tusulSubTitle}</p> 
                    </div>
                    <div style={{marginBottom: "30px"}}> 
                        <img src={"/image/line.svg"} height="14px" alt="line"/>
                    </div>
                    <Row style={{display:"flex", justifyContent: "center", width:"100%"}}>
                        <Col style={{width:"33%"}}>
                            <div style={{background: "#242424", width:"402px"}}>
                                <div className={classes.projectNavbarSpaceDiv} style={{height: "25px"}}/>        
                                <div className={classes.projectNavbar}>
                                    <div className={classes.projectNavbarIcon}>
                                        <img src={"image/IconService1.png"} alt="service1" style={{marginLeft:"5px", width: "28px"}}/>
                                    </div>
                                    <div onClick={() => serviceClick("service1")} className={classes.projectNavbarTitle} style={{color: service1 ? "#7788c4" : ""}}>
                                        {props.strings.uilchilgee1}
                                    </div>
                                </div>
                                <div className={classes.projectNavbarSpaceDiv}/>        
                                <div className={classes.projectNavbar}>
                                    <div className={classes.projectNavbarIcon}>
                                        <img src={"image/IconService2.png"} alt="service1" style={{marginLeft:"5px", width: "28px"}}/>
                                    </div>
                                    <div onClick={() => serviceClick("service2")} className={classes.projectNavbarTitle} style={{color: service2 ? "#7788c4" : ""}}>
                                        {props.strings.uilchilgee2}
                                    </div>
                                </div>
                                <div className={classes.projectNavbarSpaceDiv}/>        
                                <div className={classes.projectNavbar}>
                                    <div className={classes.projectNavbarIcon}>
                                        <img src={"image/IconService3.png"} alt="service1" style={{marginLeft:"5px", width: "32px"}}/>
                                    </div>
                                    <div onClick={() => serviceClick("service3")} className={classes.projectNavbarTitle} style={{color: service3 ? "#7788c4" : ""}}>
                                        {props.strings.uilchilgee3}
                                    </div>
                                </div>
                                <div className={classes.projectNavbarSpaceDiv}/>        
                                <div className={classes.projectNavbar}>
                                    <div className={classes.projectNavbarIcon}>
                                        <img src={"image/IconService4.png"} alt="service1" style={{marginLeft:"5px", width: "32px"}}/>
                                    </div>
                                    <div onClick={() => serviceClick("service4")} className={classes.projectNavbarTitle} style={{color: service4 ? "#7788c4" : ""}}>
                                        {props.strings.uilchilgee4}
                                    </div>
                                </div>
                                <div className={classes.projectNavbarSpaceDiv}/>        
                                <div className={classes.projectNavbar}>
                                    <div className={classes.projectNavbarIcon}>
                                        <img src={"image/IconService5.png"} alt="service1" style={{marginLeft:"5px", width: "28px"}}/>
                                    </div>
                                    <div onClick={() => serviceClick("service5")} className={classes.projectNavbarTitle} style={{color: service5 ? "#7788c4" : ""}}>
                                        {props.strings.uilchilgee5}
                                    </div>
                                </div>
                                <div className={classes.projectNavbarSpaceDiv}/>        
                                <div className={classes.projectNavbar}>
                                    <div className={classes.projectNavbarIcon}>
                                        <img src={"image/IconService6.png"} alt="service1" style={{marginLeft:"5px", width: "28px"}}/>
                                    </div>
                                    <div onClick={() => serviceClick("service6")} className={classes.projectNavbarTitle} style={{color: service6 ? "#7788c4" : ""}}>
                                        {props.strings.uilchilgee6}
                                    </div>
                                </div>
                                <div className={classes.projectNavbarSpaceDiv}/>        
                                <div className={classes.projectNavbar}>
                                    <div className={classes.projectNavbarIcon}>
                                        <img src={"image/IconService7.png"} alt="service1" style={{marginLeft:"5px", width: "28px", }}/>
                                    </div>
                                    <div onClick={() => serviceClick("service7")} className={classes.projectNavbarTitle} style={{color: service7 ? "#7788c4" : ""}}>
                                        {props.strings.uilchilgee7}
                                    </div>
                                </div>
                                <div className={classes.projectNavbarSpaceDiv} style={{height: "25px"}}/>        
                            </div>
                        </Col>
                        <Col  style={{width:"50%", display:"flex", padding: "15px", alignItems:"center", alignContent: "center"}}>
                            <Steps progressDot current={4} direction="vertical" >
                                <div style={{display:"flex", justifyContent: "flex-end"}}>
                                    <div className={classes.projectDate}>
                                        <h6 className={classes.projectDateText}>2019 - 2020</h6>
                                    </div>
                                </div>
                                <Step title={props.strings.tusul1Title} description={props.strings.tusul1Desc}/>
                                <div style={{display:"flex", justifyContent: "flex-end"}}>
                                    <div className={classes.projectDate}>
                                        <h6 className={classes.projectDateText}>2019 - 2020</h6>
                                    </div>
                                </div>
                                <Step title={props.strings.tusul2Title} description={props.strings.tusul2Desc}/>
                                <div style={{display:"flex", justifyContent: "flex-end"}}>
                                    <div className={classes.projectDate}>
                                        <h6 className={classes.projectDateText}>2019 - 2020</h6>
                                    </div>
                                </div>
                                <Step title={props.strings.tusul3Title} description={props.strings.tusul3Desc}/>
                                {service1 ? 
                                    <> 
                                        <div style={{display:"flex", justifyContent: "flex-end"}}>
                                            <div className={classes.projectDate}>
                                                <h6 className={classes.projectDateText}>2019 - 2020</h6>
                                            </div>
                                        </div>
                                        <Step title={props.strings.tusul3Title} description={props.strings.tusul3Desc}/>
                                    </>
                                    : <></>
                                }
                            </Steps>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* -------------------------------------------- About -----------------------------------------------*/}
            <div className={classes.chapterMain} id="aboutPage">
                <Container style={{ display: "flex", flexDirection: "column",  alignItems: "center", }}>
                    <div className={classes.introductionTitle}>
                        <p className={classes.chapterTitleMainText} >{props.strings.bidniiTuhai}</p>
                        <p className={classes.chapterTitleSubMini} >{props.strings.bidniiTuhaiSubTitle}</p> 
                    </div>
                    <div> 
                        <img src={"/image/line.svg"} height="14px" alt="line"/>
                    </div>
                    <Row style={{display:"flex", width: "30%", justifyContent:"space-between", justifyItems:"space-between"}}>
                        <Col className={classes.aboutBtn} onClick={() => daravCompany()} style={{ background: darsan ? "#7788c4" : ""}}>{props.strings.kampaniiTuhai}</Col>
                        <Col className={classes.aboutBtn} onClick={() => daravTeam()} style={{ background: darsanTeam ? "#7788c4" : ""}}>{props.strings.manaiHamtOlon}</Col>
                    </Row>
                    <Row style={{alignItems: "center", backgroundColor: "#202835", }}>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <div>
                                <img src={"image/aboutCover.jpg"} width="100%" alt="line"/>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12} style={{display:"flex", alignItems: "center",}}>
                            {darsan ? <div className={classes.introductionText}>
                                <p className={classes.introductionTextContenHeader} >{props.strings.kampaniiTuhai}</p> 
                                <p style={{textAlign:"justify"}}>
                                    {props.strings.Modal2_1}<br/>
                                </p>
                                <p>{props.strings.Modal2_2}</p>
                                <div style={{display:"flex", justifyContent: "center", }}>
                                    <div className={classes.introductionBtn} onClick={showModalAboutUs}>{props.strings.tsaashUnshihBtnText}</div>
                                </div>
                            </div> : <div className={classes.introductionText}>
                                <p className={classes.introductionTextContenHeader} >{props.strings.manaiHamtOlon}</p> 
                                    {props.strings.Modal3_1}    
                                <div style={{display:"flex", justifyContent: "center", }}>
                                    <div className={classes.introductionBtn} onClick={showModalAboutUsTeam}>{props.strings.tsaashUnshihBtnText}</div>
                                </div>
                            </div> }
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* -------------------------------------------- Call -----------------------------------------------*/}
            <div className={classes.chapterMain} id="callPage" style={{padding: "0px", }}>
                <div style={{ display: "flex", flexDirection: "column",  alignItems: "center", }}>
                    <div className={classes.introductionTitle}>
                        <p className={classes.chapterTitleMainText} >{props.strings.holbooBarih}</p>
                        <p className={classes.chapterTitleSubMini} >{props.strings.holbooBarihSubTitle}</p> 
                    </div>
                    <div> 
                        <img src={"/image/line.svg"} height="14px" alt="line"/>
                    </div>
                    <div style={{display:"flex", justifyContent:"flex-end", position: "absolute", marginTop: "20%", marginLeft:"50%"}}>
                        <div style={{background: "#2f2f2f", width: "420px", height: "480px", padding: "30px",}}>
                            <div style={{fontSize:"1.4rem", marginBottom: "20px"}}>
                                {props.strings.holbooBarihTitle}
                            </div>
                            <div style={{background: "#1b1b1b", borderRadius: "15px", padding: "15px", marginBottom:"15px", color:"#d3d8e4"}}>
                                <Row style={{display:"flex", justifyItems: "space-between", justifyContent:"space-between", padding: "10px"}}>
                                    <Row style={{display: "flex", flexDirection: "column"}}>
                                        <Col className={classes.callSubTile} >
                                            <LocationOnIcon style={{fontSize:"1.8rem", marginRight:"15px"}}/>  Хаяг: {props.strings.hayg}
                                        </Col>
                                        <Col className={classes.callSubTile} >
                                            <PhoneIcon style={{fontSize:"1.8rem", marginRight:"15px"}}/> Утас: {props.strings.utas}
                                        </Col>
                                        <Col className={classes.callSubTile} style={{marginBottom: "0px"}}>
                                            <MailOutlineIcon style={{fontSize:"1.8rem", marginRight:"15px"}}/> E-mail хяаг: {props.strings.mail}
                                        </Col>
                                    </Row>
                                </Row>
                            </div>
                            <div style={{background: "#1b1b1b", borderRadius: "15px", padding: "15px", color:"#d3d8e4"}}>
                                <Row style={{display:"flex", justifyItems: "space-between", justifyContent:"space-between", padding: "10px"}}>
                                    <Row style={{display: "flex", flexDirection: "column"}}>
                                        <Col className={classes.callSubTile} style={{marginBottom: "0px"}}>
                                            <ContactlessIcon style={{fontSize:"1.8rem", marginRight:"15px"}}/> Хатран ажилагч байгуулга: 
                                        </Col>
                                    </Row>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div style={{width: "100%", marginTop:"15px"}}>
                        <iframe title="map" width="100%" height="700" id="gmap_canvas" src="https://maps.google.com/maps?q=sukhbaatar%20squere&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
                
            </div>
            {/* -------------- Intorduction ---------------------*/}
            <Modal
                title={props.strings.yagadBidniihSongohVe}
                visible={visibleIntorduction}
                onCancel={handleCancel}
                footer={null}
                width={700}
            >
                <p>{props.strings.ehniiModal1}</p>
                <p>{props.strings.ehniiModal2}</p>
                <p style={{textTransform: "uppercase"}}>{props.strings.ontslogChanar}</p>
                <ul>
                    <li>{props.strings.ontslogChanar1}</li>
                    <li>{props.strings.ontslogChanar2}</li>
                    <li>{props.strings.ontslogChanar3}</li>
                </ul>
            </Modal>
            {/* -------------- AboutUs ---------------------*/}
            <Modal
                title={props.strings.kampaniiTuhai}
                visible={visibleAboutUs}
                onCancel={handleCancelAbouUs}
                footer={null}
                width={700}
            >
                <p>{props.strings.ehniModal}</p>
                <p>{props.strings.Modal2_1}</p>
                <p>{props.strings.Modal2_2}</p>
                <p>{props.strings.Modal2_3}</p>
                
            </Modal>
            {/* -------------- AboutEmployeeUs ---------------------*/}
            <Modal
                title={props.strings.manaiHamtOlon}
                visible={visibleAboutUsTeam}
                onCancel={handleCancelAbouUsTeam}
                footer={null}
                width={700}
            >
                <p>{props.strings.Modal3_1}</p>
            </Modal>
        </div>
    )
}
