import React from 'react'
import {Container, makeStyles} from "@material-ui/core"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
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
    }
}))
function Footer(props) {
    const classes  = useStyles();
    return (
        <div style={{background: "rgba(36, 36, 36, 0.9)", color:"#ffffff", fontSize:"0.9rem"}}>
            <Container>
                <Row style={{display:"flex", justifyItems: "space-between", justifyContent:"space-between", padding: "10px"}}>
                    <Row style={{display: "flex", flexDirection: "row"}}>
                        <Col className={classes.logoTile} >
                            <LocationOnIcon style={{fontSize:"2rem", marginRight:"15px"}}/> {props.strings.hayg}
                        </Col>
                        <Col className={classes.logoTile} >
                            <PhoneIcon style={{fontSize:"2rem", marginRight:"15px"}}/> {props.strings.utas}
                        </Col>
                        <Col className={classes.logoTile}>
                            <MailOutlineIcon style={{fontSize:"2rem", marginRight:"15px"}}/> {props.strings.mail}
                        </Col>
                    </Row>
                    <Col className={classes.logoTile} style={{margin: 0}}>
                        Copyright ©  {props.strings.copyRight}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
