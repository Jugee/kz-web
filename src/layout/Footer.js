import React from 'react'
import { Container } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
function Footer() {
    return (
        <div style={{background: "rgba(36, 36, 36, 0.9)", color:"#ffffff", fontSize:"0.9rem"}}>
            <Container>
                <div style={{display:"flex", justifyItems: "space-between", justifyContent:"space-between", padding: "10px"}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{display:"flex", justifyItems:"center",   alignItems:"center", marginRight: "25px"}}>
                            <LocationOnIcon style={{fontSize:"2rem", marginRight:"15px"}}/> Монгол улс Улаанбаатар хот <br/> Сүхбаатар дүүрэг 4-х хороо
                        </div>
                        <div style={{display:"flex", justifyItems:"center",  alignItems:"center", marginRight: "25px"}}>
                            <PhoneIcon style={{fontSize:"2rem", marginRight:"15px"}}/> +976-77176767
                        </div>
                        <div style={{display:"flex", justifyItems:"center",  alignItems:"center", marginRight: "25px"}}>
                            <MailOutlineIcon style={{fontSize:"2rem", marginRight:"15px"}}/> info@karkazzurag.mn
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent:"center"}}>
                        {/* <div style={{display:"flex", justifyItems:"center", justifyContent:"center", alignItems:"center",}}> */}
                            Copyright ©  2020 КАРКАЦ ХИЙЦ ХХК
                        {/* </div> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
