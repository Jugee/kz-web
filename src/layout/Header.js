import React from 'react';
import {Container, makeStyles} from "@material-ui/core"
import { Col, Row } from 'antd';

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
      color: "#7788c4",
      fontWeight:"300",
      fontSize:"1.7rem",
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
        width: "24px",
        marginRight:"10px",
        "&:hover":{
            border: "1px solid black",
            cursor: "pointer"
        }
    },
    langStyle: {
        border: "1px solid #fff",
        background: "#242424",
        borderRadius: "5px", 
        fontSize:"0.7rem",
        "&:hover":{
            background: "#242424"
        }
    }
  }));

function Header(props) {
    const classes = useStyles(); 
    return (
        <div className={classes.headerMain} >
            <Container >
                <Row className={classes.containerStyle}>
                    <Col span={2} className={classes.logoStyle}>
                        {"КZ"}
                    </Col>
                    <Row className={classes.menuItems}>
                        <Col><a className={classes.aTag} href="#homePage" target="_self">{props.strings.nuur}</a></Col>
                        <Col><a className={classes.aTag} href="#indroductionPage" target="_self">{props.strings.taniltsuulga}</a></Col>
                        <Col><a className={classes.aTag} href="#projectsPage" target="_self">{props.strings.tusuluud}</a></Col>
                        <Col><a className={classes.aTag} href="#aboutPage" target="_self">{props.strings.bidniiTuhai}</a></Col>
                        <Col><a className={classes.aTag} href="#callPage" target="_self">{props.strings.holbooBarih}</a></Col>
                        <Col>
                            <select className={classes.langStyle} onChange={props.handleLanguageChange}>
                                <option value="mn">MGL</option>
                                <option value="en">ENG</option>
                            </select>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

export default Header
