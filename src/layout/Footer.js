import React from 'react'
import {Container, makeStyles} from "@material-ui/core"
import { Col, Row } from 'antd';

const useStyles = makeStyles(() => ({
    logoTile:{
        display:"flex", 
        justifyItems:"center",   
        alignItems:"center",
        marginRight: "25px",
        "&:hover":{
            cursor: "pointer",
            color:"#D2D2D2"
        }
    },
    sociallogos: {
        width: "32px",
        marginRight:"15px",
        "&:hover":{
            border: "1px solid #000",
            cursor: "pointer"
        }
    }
}))
function Footer(props) {
    const classes  = useStyles();
    return (
        <div style={{background: "#242424", color:"#ffffff", fontSize:"0.9rem"}}>
            <Container>
                <Row style={{display:"flex", justifyItems: "space-between", justifyContent:"space-between", padding: "10px"}}>
                    <Row style={{display: "flex", flexDirection: "row"}}>
                        <Col style={{fontSize: "0.9rem", display:"flex", alignItems:"center"}}>
                            Copyright ©  {props.strings.copyRight}
                        </Col>
                    </Row>
                    <Row style={{display: "flex", flexDirection: "row"}}>
                        <Col>
                            <a href="https://www.facebook.com/Karkas-Zurag-218533324879709/?ti=as" style={{color: "inherit"}} target="fbAcc">
                                <img src={"/image/facebook.svg"} alt="logo" className={classes.sociallogos}/>
                            </a>
                        </Col>
                        <Col>
                            <img src={"/image/instagram.svg"} alt="logo" className={classes.sociallogos}/>
                        </Col>
                        <Col>
                            <img src={"/image/twitter.svg"} alt="logo" className={classes.sociallogos}/>
                        </Col>
                        <Col>
                            <img src={"/image/skype.svg"} alt="logo" className={classes.sociallogos}/>
                        </Col>
                    </Row>

                </Row>
            </Container>
        </div>
    )
}

export default Footer
