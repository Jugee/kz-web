import React, {useState} from 'react'
import {Container, makeStyles} from "@material-ui/core"
import {CheckCircleOutlined} from "@ant-design/icons"
import { Card } from 'antd';

const useStyles = makeStyles(() => ({
    headerTitle: {
        padding: 86,
        backgroundImage: "url(/image_slider1.jpg)",
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
        border: "3px solid #7788c4",
        display:"flex",
        alignItems: "center",
        justifyContent:"center",
        margin: "28px 0px 24px 0px",
        borderRadius: "30px",
        width: "168px",
        padding: "12px",
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
        fontSize:"1.2rem",
        padding: "15px 15px 0px 15px",
        letterSpacing: "2px", 
        fontWeight:"400"
    },
    serviceCardText: {
        fontSize: "0.8rem",
        padding: "0px 15px 0px 15px",
        fontWeight:"200"
    },
    sliderText: {
        background: "rgba(119, 136, 196, 0.8)", 
        padding: "15px 5px 5px 5px", 
        borderRadius: "10px"
    },
    aboutBtn: {
        border: "3px solid #7788c4",
        display:"flex",
        alignItems: "center",
        justifyContent:"center",
        margin: "28px 0px 24px 0px",
        borderRadius: "30px",
        width: "188px",
        padding: "12px",
        textAlign:"center",
        "&:hover": {
            cursor: "pointer",
            background:"#7788c4",

        }
    }

}))

export default function Content() {
    const classes = useStyles()
    const { Meta } = Card;
    const [darsan, setDarsan] = useState(false);

    function darav() {
        if(darsan === false ){
            setDarsan(true)
        }else {
            setDarsan(false) 
        }
    }
    return (
        <div id="homePage">
            <div className={classes.headerTitle} >
                <Container>
                    <img src={"/icons/logo.jpg"} width="68px" alt="logo"/>
                    <h1 style={{fontWeight: "400", fontSize:"3rem" }}>{'"КАРКАЗ ЗУРАГ ХХК"'}</h1>
                    <p style={{fontSize: "0.8rem"}}>
                    ЗУРАГ ТӨСӨЛ / ХОТ ТӨЛӨВЛӨЛТ / ЗӨВЛӨХ ҮЙЛЧИЛГЭЭ / ТӨСӨЛ ХЭРЭГЖҮҮЛЭЛТ
                    </p>
                </Container>
            </div>
            {/* -------------------------------------------- Indroduction -----------------------------------------------*/}
            <div className={classes.chapterMain} id="indroductionPage">
                <Container style={{ display: "flex", flexDirection: "column",  alignItems: "center", }}>
                    <div className={classes.introductionTitle}>
                        <p className={classes.chapterTitleMainText} >{'ТАНИЛЦУУЛГА'}</p>
                        <p className={classes.chapterTitleSubMini} >{"ЯАГААД БИДНИЙГ СОНГОХ ВЭ ?"}</p> 
                    </div>
                    <div> 
                        <img src={"/icons/line.svg"} height="14px" alt="line"/>
                    </div>
                    <div className={classes.introductionImageText}>
                        <div style={{width: "60%"}}>
                            <img src={"/image_slider2.jpg"} width="100%" alt="line"/>
                        </div>
                        <div className={classes.introductionTextAbout}>
                        <p className={classes.introductionTextContenHeader}>{"ЯАГААД БИДНИЙГ СОНГОХ ВЭ ?"}</p> 
                        <p>Бид үйл ажиллагаандаа олон улсад хүлээн зөвшөөрөгдсөн барилгын зураг
                            төсөл, орчин үеийн хэрэгцээ шаардлагийн хангаж шинэ техник техногийг 
                            нэвтрүүлэхийн төлөө салбартаа мэргэшсэн чадавхитай багийг бүрдүүлж, 
                            хууль дүрэм норм стандартыг чандлан дээдэлсэн, нийгмийн хамт олон 
                            байхыг зорьж ажиллаж байна.
                        </p>
                        <p>Онцлог шинж чанарууд</p>
                        <CheckCircleOutlined className={classes.introductionTextLiTagIcon}/>{"Барилгын иж бүрэн зураг төсөл боловсруулдаг ууган"} <br/>
                        <CheckCircleOutlined className={classes.introductionTextLiTagIcon}/>{"Cалбартаа туршлагаараа тэргүүлэгч "} <br/>
                        <CheckCircleOutlined className={classes.introductionTextLiTagIcon}/>{"Барилгын иж бүрэн зураг төсөл боловсруулдаг "} <br/>
                        <div style={{display:"flex", justifyContent: "center", }}>
                            <div className={classes.introductionBtn}>{"Цааш унших"}</div>
                        </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* -------------------------------------------- Service -----------------------------------------------*/}
            <div className={classes.chapterMain} id="servicePage">
                <Container style={{ display: "flex", flexDirection: "column",  alignItems: "center", }}>
                    <div className={classes.introductionTitle}>
                        <p className={classes.chapterTitleMainText} >{'ҮЙЛЧИЛГЭЭ'}</p>
                        <p className={classes.chapterTitleSubMini} >{"БИД ТАНД ЮУ ХИЙЖ ӨГЧ ЧАДАХ ВЭ ?"}</p> 
                    </div>
                    <div> 
                        <img src={"/icons/line.svg"} height="14px" alt="line"/>
                    </div>
                    <div className={classes.chapterImageText}>
                        <div className={classes.serviceCard}>                            
                            <img src={"/ErdenetCity.png"} alt="John" style={{width:"100%", height:"50%"}}/>
                            <h3 className={classes.serviceCardTitle}>Ерөнхий төлөвлөгөөний зураг төсөл</h3>
                            <p className={classes.serviceCardText}>Хот төлөвлөлт, бүс нутгийн хөгжлийн төсөл суурь судалгаа, дэд бүтцийн хөгжлийн төсөл, ерөнхий төлөвлөгөө.</p>
                        </div>
                        <div className={classes.serviceCard}>
                            <img src={"/architectureBlack.jpg"} alt="John" style={{width:"100%", height: "50%"}} />
                            <h3 className={classes.serviceCardTitle}>Архитектур төлөвлөлт</h3>
                            <p className={classes.serviceCardText}>Интерьер , экстерьер дизайны зураг төсөл, материалын түүвэр тооцоо.</p>
                        </div>
                        <div className={classes.serviceCard}>
                            <img src={"/apartment17.jpg"} alt="John" style={{width:"100%", height: "50%"}} />
                            <h3 className={classes.serviceCardTitle}>Иж бүрэн ажлын зураг төсөл</h3>
                            <p className={classes.serviceCardText}>16 хүртэл давхар барилга байгууламжийн ерөнхий төлөвлөгөө тохижилт, өндөржилт, барилга архитектур, эскиз зураг, барилга бүтээц, тооцоо.</p>
                        </div>
                        <div className={classes.serviceCard}>
                            <img src={"/11.jpg"} alt="John" style={{width:"100%", height: "50%"}} />
                            <h3 className={classes.serviceCardTitle}>Инженер хангамж</h3>
                            <ul className={classes.serviceCardText} style={{marginLeft: 15,}}>
                                <li> Халаалт, агаар сэлгэлт </li>
                                <li> Усан хангамж </li>
                                <li> Хүчит төхөөрөмжийн зураг төсөл </li>
                                <li> Мэдээлэл холбоо, сүлжээний зураг төсөл </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.chapterImageText}>
                        <div className={classes.serviceCard}>
                            <img src={"/manufacture.jpg"} alt="John" style={{width:"100%", height: "50%"}} />
                            <h3 className={classes.serviceCardTitle}>Үйлдвэрийн барилгын иж бүрэн зураг төсөл</h3>
                            <ul className={classes.serviceCardText} style={{marginLeft: 15,}}>
                                <li> Хүнд  үйлдвэрийн </li>
                                <li> Хөнгөн үйлдвэрийн </li>
                            </ul>
                        </div>
                        <div className={classes.serviceCard}>
                            <img src={"/consulting.jpg"} alt="John" style={{width:"100%", height: "50%"}} />
                            <h3 className={classes.serviceCardTitle}>Зөвлөх үйлчилгээ</h3>
                            <p className={classes.serviceCardText}>Зураг төсөл, барилга угсралт, инженерийн шугам сүлжээний зөвлөх үйлчилгээ. </p>
                        </div>
                        <div className={classes.serviceCard}>
                            <img src={"/budget1.jpg"} alt="John" style={{width:"100%", height: "50%"}} />
                            <h3 className={classes.serviceCardTitle}>Барилгын төсөв</h3>
                            <p className={classes.serviceCardText}>Барилга байгууламж, гадна шугам сүлжээний нэгдсэн төсөв.</p>
                        </div>
                    </div>
                </Container>
            </div>
             {/* -------------------------------------------- Projects -----------------------------------------------*/}
             <div className={classes.chapterMainProjects} id="projectsPage">
                <Container style={{ display: "flex", flexDirection: "column",  alignItems: "center", }}>
                    <div className={classes.introductionTitle}>
                        <p className={classes.chapterTitleMainText} >{'ТӨСЛҮҮД'}</p>
                        <p className={classes.chapterTitleSubMini} >{"ХИЙЖ ГҮЙЦЭТГЭСЭН ТӨСЛҮҮД"}</p> 
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
                        <p className={classes.chapterTitleMainText} >{'БИДНИЙ ТУХАЙ'}</p>
                        <p className={classes.chapterTitleSubMini} >{"МАНАЙ ХАМТ ОЛОН БОЛОН КОМПАНИТАЙ ТАНИЛЦАНА УУ"}</p> 
                    </div>
                    <div> 
                        <img src={"/icons/line.svg"} height="14px" alt="line"/>
                    </div>
                    <div style={{display:"flex", width: "35%", justifyContent:"space-between", justifyItems:"space-between"}}>
                        <div className={classes.aboutBtn} onClick={() => darav()} style={{ background: darsan ? "#7788c4" : ""}}>{"КОМПАНИЙ ТУХАЙ"}</div>
                        <div className={classes.aboutBtn} onClick={() => darav()} style={{ background: darsan ? "#7788c4" : ""}}>{"МАНАЙ ХАМТ ОЛОН"}</div>
                    </div>
                    <div className={classes.introductionImageText}>
                        <div style={{width: "60%"}}>
                            <img src={"/group-businesspeople.jpg"} width="100%" alt="line"/>
                        </div>
                        <div className={classes.introductionText}>
                            <p className={classes.introductionTextContenHeader} >{"КОМПАНИЙ ТУХАЙ"}</p> 
                            <p>
                                “KAPKAC ЗУРАГ" XXK нь 1989 онд байгуулагдсан. Барилгын иж vpэн зураг тесел 
                                боловсруулдаг ууган компаниудын нэг билээ. Манай компани нь хувийн хэвшил,
                                терийн болон гадаадын байгууллагуудтай хамтран олон теслуудийг амжилттай 
                                хэрэгжуулж, Улаанбаатар хот, орон нутгуудад манай боловсруулсан зураг 
                                тecлvvд орон сууцны хороолол, хотхон, эмнэлэг, сургуууль, цэцэрлэг, зочид 
                                буудал уйлдвэр, худалдаа vилчилгээний зориулалтай барилга байгууламжууд
                                сvндэрлэн боссоор байна.
                            </p>
                            <p>
                                Барилга байгууламжийн зураг тесел хот телевлелт, хэсэгчилсэн еренхий 
                                телевлегее, архитектур...
                            </p>
                            <div style={{display:"flex", justifyContent: "center", }}>
                                <div className={classes.introductionBtn}>{"Цааш унших"}</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* -------------------------------------------- Call -----------------------------------------------*/}
            <div className={classes.chapterMain} id="callPage">
                <Container style={{ display: "flex", flexDirection: "column",  alignItems: "center", }}>
                    <div className={classes.introductionTitle}>
                        <p className={classes.chapterTitleMainText} >{'ХОЛБОО БАРИХ'}</p>
                        <p className={classes.chapterTitleSubMini} >{"БАЙРШИЛ"}</p> 
                    </div>
                    <div> 
                        <img src={"/icons/line.svg"} height="14px" alt="line"/>
                    </div>
                    <div style={{width: "100%", marginTop:"15px"}}>
                        <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=ulaanbaatar&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </Container>
                
            </div>
        </div>
    )
}
