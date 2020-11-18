import React, { useState } from 'react';
import {Container, makeStyles} from "@material-ui/core"
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

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
        }
    }
  }));

function Header() {
    const classes = useStyles(); 
    return (
        <div className={classes.headerMain} >
            <Container className={classes.containerStyle} >
                <div className={classes.logoStyle}>
                    <img src={"/icons/logo.jpg"} width="36px" alt="logo"/>
                </div>
                <div style={{justifyContent:"space-between", display:"flex", color: "#ffffff"}}>
                    <div><a className={classes.aTag} href="#homePage" target="_self">НҮҮР</a></div>
                    <div><a className={classes.aTag} href="#indroductionPage" target="_self">ТАНИЛЦУУЛГА</a></div>
                    <div><a className={classes.aTag} href="#projectsPage" target="_self">ТӨСЛҮҮД</a></div>
                    <div><a className={classes.aTag} href="#aboutPage" target="_self">БИДНИЙ ТУХАЙ</a></div>
                    <div><a className={classes.aTag} href="#callPage" target="_self">ХОЛБОО БАРИХ</a></div>
                    <div>
                        <FacebookOutlined style={{fontSize:"1.5rem", marginRight:"15px"}}/>
                    </div>
                    <div>
                        <InstagramOutlined style={{fontSize:"1.5rem", marginRight:"15px"}}/> 
                    </div>
                    <div>
                        <TwitterOutlined style={{fontSize:"1.5rem"}}/> 
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header
