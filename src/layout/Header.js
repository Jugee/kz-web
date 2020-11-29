import React from 'react';
import {Container, makeStyles} from "@material-ui/core"
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';

const useStyles = makeStyles(() => ({
   
    headerMain: {
        zIndex: "500",
        height:"64px", 
        position: "fixed",
        background:"#242424",
        width: "100%",
        display:"flex",
        alignItems:"center",
    },
    containerStyle: {
        justifyContent:"space-between",         
        alignItems:"center",
        display:"flex", 
        height:"44px", 
    },
    logoStyle: {
      color: "#ffffff",
      fontWeight:"300",
      fontSize:"1.4rem",
      letterSpacing: "3px"
      
    },
    menuItems:{
        color: "#ffffff"
    },
    aTag: {
        fontSize: "0.8rem",
        fontWeight: "500",
        textDecoration:"none",
        color: "#ffffff",
        marginRight:"15px",
        "&:hover":{
            color:"#D2D2D2"
        },
    },
    newAtag:{
        
    },
    sociallogos: {
        fontSize:"1.5rem", 
        marginRight:"15px",
        "&:hover":{
            color: "#D2D2D2",
            cursor: "pointer"
        }
    },
    langStyle: {
        background: "#242424",
        borderRadius: "10px", 
        fontSize:"0.8rem",
        "&:hover":{
            background: "#242424"
        }
    }
  }));

function Header(props) {
    const classes = useStyles(); 
    const getWidth = window.innerWidth;
    console.log("whidth", getWidth)
    return (
        <div className={classes.headerMain} >
            <Container >
                <Row className={classes.containerStyle}>
                    <Col span={2} className={classes.logoStyle}>
                        {"КZ"}
                    </Col>
                    {
                        getWidth > 700 ?
                        <Row className={classes.menuItems}>
                            <Col><a className={classes.aTag} href="#homePage" target="_self">{props.strings.nuur}</a></Col>
                            <Col><a className={classes.aTag} href="#indroductionPage" target="_self">{props.strings.taniltsuulga}</a></Col>
                            <Col><a className={classes.aTag} href="#projectsPage" target="_self">{props.strings.tusuluud}</a></Col>
                            <Col><a className={classes.aTag} href="#aboutPage" target="_self">{props.strings.bidniiTuhai}</a></Col>
                            <Col><a className={classes.aTag} href="#callPage" target="_self">{props.strings.holbooBarih}</a></Col>
                            <Col>
                                <a href="https://www.facebook.com/Karkas-Zurag-218533324879709/?ti=as" style={{color: "inherit"}} target="fbAcc">
                                    <FacebookOutlined className={classes.sociallogos}/>
                                </a>
                            </Col>
                            <Col>
                                <InstagramOutlined className={classes.sociallogos}/> 
                            </Col>
                            <Col>
                                <TwitterOutlined className={classes.sociallogos}/> 
                            </Col>
                            <Col>
                                <select className={classes.langStyle} onChange={props.handleLanguageChange}>
                                    <option value="mn">MNG</option>
                                    <option value="en">ENG</option>
                                </select>
                            </Col>
                        </Row>
                        : <Row className={classes.menuItems}>
                            <div style={{cursor: "pointer", border: "3px solid #ffffff", borderRadius:"5px", width: "38x", height: "36px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <UnorderedListOutlined style={{fontSize:"1rem"}}/>
                            </div>
                        </Row>
                    }
                    
                    
                    

                    
                    {/* <Menu  mode="horizontal" style={{display:"flex", justifyContent:"space-between"}}>
                        <Menu.Item disabled>
                            KZ
                        </Menu.Item>
                        <Menu.Item key="home" >
                            <a className={classes.aTag} href="#homePage" target="_self">{props.strings.nuur}</a>
                        </Menu.Item>
                        <Menu.Item key="intro">
                            <a className={classes.aTag} href="#indroductionPage" target="_self">{props.strings.taniltsuulga}</a>
                        </Menu.Item>
                        <Menu.Item key="project">
                            <a className={classes.aTag} href="#projectsPage" target="_self">{props.strings.tusuluud}</a>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <a className={classes.aTag} href="#aboutPage" target="_self">{props.strings.bidniiTuhai}</a>
                        </Menu.Item>
                        <Menu.Item key="call">
                            <a className={classes.aTag} href="#callPage" target="_self">{props.strings.holbooBarih}</a>
                        </Menu.Item>
                        <Menu.Item key="fb">
                            <a href="https://www.facebook.com/Karkas-Zurag-218533324879709/?ti=as" style={{color: "inherit"}} target="_blank">
                                <FacebookOutlined className={classes.sociallogos}/>
                            </a>
                        </Menu.Item>
                        <Menu.Item key="insta">
                            <InstagramOutlined className={classes.sociallogos}/> 
                        </Menu.Item>
                        <Menu.Item key="twitter">
                            <TwitterOutlined className={classes.sociallogos}/> 
                        </Menu.Item>
                        <Menu.Item key="lang">
                            <select className={classes.langStyle} onChange={props.handleLanguageChange} style={{background: "#ffffff"}}>
                                <option value="mn">MNG</option>
                                <option value="en">ENG</option>
                            </select>
                        </Menu.Item>
                    </Menu> */}
                </Row>
            </Container>
        </div>
    )
}

export default Header
