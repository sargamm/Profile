import React from 'react'
import { Col } from 'react-bootstrap'

function Footer(){
    return(
        <div style={{backgroundColor:"#444446", color:"#fff"}}>
            <Col sm={6}>
                <h5>Contact Information</h5>
                <i className="fa fa-envelope"> sargam18262@iiitd.ac.in </i>
            </Col>
        </div>
    )
}
export default Footer;
