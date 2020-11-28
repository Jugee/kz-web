import React, {useState} from 'react'
import {Container, makeStyles} from "@material-ui/core"
import {CheckCircleOutlined} from "@ant-design/icons"
import {Col, Row } from 'antd';
import Modal from 'antd/lib/modal/Modal';


const useStyles = makeStyles(() => ({
    headerTitle: {
        padding: 86,
        backgroundImage: "url(/trash3.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "120%",
        backgroundRepeat: "no-repeat",
        minHeight:"400px",
        color: "#ffffff"
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
        fontWeight: "400", 
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
        backgroundColor: "rgba(2, 25, 32, 0.5)", 
        width: "40%", 
        marginLeft: "-200px", 
        padding: "15px", 
        position:"relative"
    },
    introductionTextAbout:{
        backgroundColor: "rgba(2, 25, 32, 0.7)", 
        width: "40%", 
        marginLeft: "-200px", 
        padding: "15px", 
        position:"relative"
    },
    introductionTextContenHeader: {
        fontSize: "1.2rem", 
        fontWeight:"500",
        color: "#ffffff", 
        letterSpacing: "1px"
    },
    introductionTextLiTagIcon: {
        marginRight: "15px", 
        fontSize: "1.5rem",
        margin: "5px",
        color:"#ffffff"
    },
    introductionBtn: {
        border: "2px solid #7788c4",
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
        backgroundColor: "rgba(2, 25, 32, 0.5)", 
        transition: "transform 0.35s ease-out",
        width: "248px",
        height:"386px",
        margin: "15px",
        "&:hover":{
            cursor: "pointer",
            transform: "scale(1.05)"
       }
    },
    serviceCardTitle:{
        display:"flex",
        alignItems:"center",
        background:"#0059a2",
        color: "#ffffff",
        height: "58px",
        fontSize:"0.8rem",
        textTransform: "uppercase",
        padding: "15px 15px 15px 15px",
        letterSpacing: "2px", 
        fontWeight:"400",
        lineHeight: "1.5"
    },
    serviceCardText: {
        fontSize: "0.8rem",
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
    }

}))

export default function Content(props) {
    const classes = useStyles()
    const [darsan, setDarsan] = useState(true);
    const [darsanTeam, setDarsanTeam] = useState(false);
    const [visibleIntorduction, setVisibleIntroduction] = useState(false)
    const [visibleAboutUs, setVisibleAboutUs] = useState(false)
    const [visibleAboutUsTeam, setVisibleAboutUsTeam] = useState(false)

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
                    <img src={"/icons/logoVector.svg"} width="68px" alt="logo"/>
                    <h1 style={{fontWeight: "400", fontSize:"3rem", color:"#ffffff", margin: "15px 0px 15px 0px"}}>{props.strings.headerMainTitle}</h1>
                    <p style={{fontSize: "0.8rem"}}>
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
                        <img src={"/icons/line.svg"} height="14px" alt="line"/>
                    </div>
                    <Row className={classes.introductionImageText}>
                        <Col style={{width: "60%"}}>
                            <img src={"/image_slider2.jpg"} width="100%" alt="line"/>
                        </Col>
                        <Col className={classes.introductionTextAbout}>
                            <p className={classes.introductionTextContenHeader}>{props.strings.yagadBidniihSongohVe}</p> 
                            <p>
                                {props.strings.taniltsuulgaText}
                            </p>
                            <p style={{textTransform: "uppercase"}}>{props.strings.ontslogChanar}</p>
                            <CheckCircleOutlined className={classes.introductionTextLiTagIcon}/>{props.strings.ontslogChanar1} <br/>
                            <CheckCircleOutlined className={classes.introductionTextLiTagIcon}/>{props.strings.ontslogChanar2} <br/>
                            <CheckCircleOutlined className={classes.introductionTextLiTagIcon}/>{props.strings.ontslogChanar3} <br/>
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
                        <img src={"/icons/line.svg"} height="14px" alt="line"/>
                    </div>
                    <Row className={classes.chapterImageText}>
                        <Col className={classes.serviceCard}>
                            <img src={"/ErdenetCity.png"} alt="John" style={{width:"100%", height:"50%"}}/>
                            <h3 className={classes.serviceCardTitle}>{props.strings.uilchilgee1}</h3>
                            <p className={classes.serviceCardText}>Хот төлөвлөлт, бүс нутгийн хөгжлийн төсөл суурь судалгаа, дэд бүтцийн хөгжлийн төсөл, ерөнхий төлөвлөгөө.</p>
                        </Col>
                        <Col className={classes.serviceCard}>
                            <img src={"/architectureBlack.jpg"} alt="John" style={{width:"100%", height: "50%"}} />
                            <h3 className={classes.serviceCardTitle}>{props.strings.uilchilgee2}</h3>
                            <p className={classes.serviceCardText}>Интерьер , экстерьер дизайны зураг төсөл, материалын түүвэр тооцоо.</p>
                        </Col>
                        <Col className={classes.serviceCard}>
                            <img src={"/apartment17.jpg"} alt="John" style={{width:"100%", height: "50%"}} />
                            <h3 className={classes.serviceCardTitle}>{props.strings.uilchilgee3}</h3>
                            <p className={classes.serviceCardText}>16 хүртэл давхар барилга байгууламжийн ерөнхий төлөвлөгөө тохижилт, өндөржилт, барилга архитектур, эскиз зураг, барилга бүтээц, тооцоо.</p>
                        </Col>
                        <Col className={classes.serviceCard}>
                            <img src={"/11.jpg"} alt="John" style={{width:"100%", height: "50%"}} />
                            <h3 className={classes.serviceCardTitle}>{props.strings.uilchilgee4}</h3>
                            <ul className={classes.serviceCardText} style={{marginLeft: 15,}}>
                                <li> Халаалт, агаар сэлгэлт </li>
                                <li> Усан хангамж </li>
                                <li> Хүчит төхөөрөмжийн зураг төсөл </li>
                                <li> Мэдээлэл холбоо, сүлжээний зураг төсөл </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className={classes.chapterImageText}>
                        <Col className={classes.serviceCard}>
                            <img src={"/manufacture.jpg"} alt="John" style={{width:"100%", height: "50%"}} />
                            <h3 className={classes.serviceCardTitle}>{props.strings.uilchilgee5}</h3>
                            <ul className={classes.serviceCardText} style={{marginLeft: 15,}}>
                                <li> Хүнд  үйлдвэрийн </li>
                                <li> Хөнгөн үйлдвэрийн </li>
                            </ul>
                        </Col>
                        <Col className={classes.serviceCard}>
                            <img src={"/consulting.jpg"} alt="John" style={{width:"100%", height: "50%"}} />
                            <h3 className={classes.serviceCardTitle}>{props.strings.uilchilgee6}</h3>
                            <p className={classes.serviceCardText}>Зураг төсөл, барилга угсралт, инженерийн шугам сүлжээний зөвлөх үйлчилгээ. </p>
                        </Col>
                        <Col className={classes.serviceCard}>
                            <img src={"/budget1.jpg"} alt="John" style={{width:"100%", height: "50%"}} />
                            <h3 className={classes.serviceCardTitle}>{props.strings.uilchilgee7}</h3>
                            <p className={classes.serviceCardText}>Барилга байгууламж, гадна шугам сүлжээний нэгдсэн төсөв.</p>
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
                    <div> 
                        <img src={"/icons/line.svg"} height="14px" alt="line"/>
                    </div>
                    <div className={classes.introductionImageText}>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active" style={{width:"900px", height:"500px"}}>
                                    <img className="d-block w-100" src="/projects/ErdenetCity.png" alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <div className={classes.sliderText}>
                                            <h5>ОРХОН АЙМАГ, ЭРДЭНЭТ ХОТ</h5>
                                            <p>7-р хорооллын ерөнхий төлөвлөгөө</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" style={{width:"900px", height:"500px"}}>
                                    <img className="d-block w-100" src="/projects/olonUlsProject.png" alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <div className={classes.sliderText}>
                                            <h5>БНХАУ-ЫН "HAHN ARCHITECUAL DESIGN" КОМПАНИТАЙ ХАМТАРСАН ТӨСӨЛ</h5>
                                            <p>"Trumph Palace" хорооллын зураг төсөл, ерөнхий төлөвлөгөө</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" style={{width:"900px", height:"500px"}}>
                                    <img className="d-block w-100" src="/projects/erdenetProject2.png" alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <div className={classes.sliderText}>
                                            <h5>ОРХОН АЙМАГ, ЭРДЭНЭТ ХОТ</h5>
                                            <p>7-р хорооллын ерөнхий төлөвлөгөө</p>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                
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
                        <img src={"/icons/line.svg"} height="14px" alt="line"/>
                    </div>
                    <Row style={{display:"flex", width: "30%", justifyContent:"space-between", justifyItems:"space-between"}}>
                        <Col className={classes.aboutBtn} onClick={() => daravCompany()} style={{ background: darsan ? "#7788c4" : ""}}>{props.strings.kampaniiTuhai}</Col>
                        <Col className={classes.aboutBtn} onClick={() => daravTeam()} style={{ background: darsanTeam ? "#7788c4" : ""}}>{props.strings.manaiHamtOlon}</Col>
                    </Row>
                    <div className={classes.introductionImageText}>
                        <div style={{width: "60%"}}>
                            <img src={"/group-businesspeople.jpg"} width="100%" alt="line"/>
                        </div>
                        {darsan ? <div className={classes.introductionText}>
                            <p className={classes.introductionTextContenHeader} >{props.strings.kampaniiTuhai}</p> 
                            <p style={{textAlign:"justify"}}>
                                {props.strings.kampaniiTuhaiDelgerengui}
                            </p>
                            <p>
                                ...............
                            </p>
                            <div style={{display:"flex", justifyContent: "center", }}>
                                <div className={classes.introductionBtn} onClick={showModalAboutUs}>{props.strings.tsaashUnshihBtnText}</div>
                            </div>
                        </div> : <div className={classes.introductionText}>
                            <p className={classes.introductionTextContenHeader} >{props.strings.manaiHamtOlon}</p> 
                            <p style={{textAlign:"justify"}}>
                                {"Манай хамт олон ....."}
                            </p>
                            <p>
                                Барилга байгууламжийн зураг тесел хот телевлелт, хэсэгчилсэн еренхий 
                                телевлегее, архитектур...
                            </p>
                            <div style={{display:"flex", justifyContent: "center", }}>
                                <div className={classes.introductionBtn} onClick={showModalAboutUsTeam}>{props.strings.tsaashUnshihBtnText}</div>
                            </div>
                        </div> }
                        
                    </div>
                </Container>
            </div>
            {/* -------------------------------------------- Call -----------------------------------------------*/}
            <div className={classes.chapterMain} id="callPage">
                <Container style={{ display: "flex", flexDirection: "column",  alignItems: "center", }}>
                    <div className={classes.introductionTitle}>
                        <p className={classes.chapterTitleMainText} >{props.strings.holbooBarih}</p>
                        <p className={classes.chapterTitleSubMini} >{props.strings.holbooBarihSubTitle}</p> 
                    </div>
                    <div> 
                        <img src={"/icons/line.svg"} height="14px" alt="line"/>
                    </div>
                    <div style={{width: "100%", marginTop:"15px"}}>
                        <iframe title="map" width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=ulaanbaatar&t=&z=11&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </Container>
                
            </div>
            {/* -------------- Intorduction ---------------------*/}
            <Modal
                title={props.strings.yagadBidniihSongohVe}
                visible={visibleIntorduction}
                onCancel={handleCancel}
                footer={null}
                width={700}
            >
                <p>Бид үйл ажиллагаандаа олон улсад хүлээн зөвшөөрөгдсөн барилгын зураг
                    төсөл, орчин үеийн хэрэгцээ шаардлагийн хангаж шинэ техник техногийг 
                    нэвтрүүлэхийн төлөө салбартаа мэргэшсэн чадавхитай багийг бүрдүүлж, 
                    хууль дүрэм норм стандартыг чандлан дээдэлсэн, нийгмийн хамт олон 
                    байхыг зорьж ажиллаж байна.
                </p>
                <p>Онцлог шинж чанарууд</p>
                <ul>
                    <li>{"Барилгын иж бүрэн зураг төсөл боловсруулдаг ууган"}</li>
                    <li>{"Cалбартаа туршлагаараа тэргүүлэгч "}</li>
                    <li>{"Барилгын иж бүрэн зураг төсөл боловсруулдаг "}</li>
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
                <p>Бид үйл ажиллагаандаа олон улсад хүлээн зөвшөөрөгдсөн барилгын зураг
                    төсөл, орчин үеийн хэрэгцээ шаардлагийн хангаж шинэ техник техногийг 
                    нэвтрүүлэхийн төлөө салбартаа мэргэшсэн чадавхитай багийг бүрдүүлж, 
                    хууль дүрэм норм стандартыг чандлан дээдэлсэн, нийгмийн хамт олон 
                    байхыг зорьж ажиллаж байна.
                </p>
                <p>Онцлог шинж чанарууд</p>
                <ul>
                    <li>{"Барилгын иж бүрэн зураг төсөл боловсруулдаг ууган"}</li>
                    <li>{"Cалбартаа туршлагаараа тэргүүлэгч "}</li>
                    <li>{"Барилгын иж бүрэн зураг төсөл боловсруулдаг "}</li>
                </ul>
            </Modal>
            {/* -------------- AboutUs ---------------------*/}
            <Modal
                title={props.strings.manaiHamtOlon}
                visible={visibleAboutUsTeam}
                onCancel={handleCancelAbouUsTeam}
                footer={null}
                width={700}
            >
                <p>Бид үйл ажиллагаандаа олон улсад хүлээн зөвшөөрөгдсөн барилгын зураг
                    төсөл, орчин үеийн хэрэгцээ шаардлагийн хангаж шинэ техник техногийг 
                    нэвтрүүлэхийн төлөө салбартаа мэргэшсэн чадавхитай багийг бүрдүүлж, 
                    хууль дүрэм норм стандартыг чандлан дээдэлсэн, нийгмийн хамт олон 
                    байхыг зорьж ажиллаж байна.
                </p>
            </Modal>
        </div>
    )
}
