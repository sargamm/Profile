import React,{useState} from 'react';
import {Row,Col, Collapse, Fade} from 'react-bootstrap'
import { CSSTransitionGroup } from 'react-transition-group';
import bannerImage from './assets/web1mirror.png'
function Banner(){
    const [Open, setOpen] = useState(false);
    return(
        <div className="Banner">
            <Row >
                <Col lg={6} md={12}>
                    <img className="Banner-img" src={bannerImage}/>
                </Col>
                <Col lg={6} md={12}>
                   
                        <div className="BannerTextBox">
                        <div>
                        <h3 className="BannerSubTitle" style={{marginTop:"25%"}}>HEY!</h3>
                        </div>
                        <div>
                        <h2 className="BannerTitle">I AM SARGAM MONGA</h2>
                        </div>
                        <div>
                        <h3 className="BannerSubTitle">A COMPUTER ENTHUSIAST</h3>
                        </div>
                        </div>
                        <div className="SocialIcons">
                        <a className="SocialLink" href="https://github.com/sargamm" style={{textDecoration:"none",color:"inherit"}}><i className="fa fa-github Social" /></a> 
                        <a className="SocialLink" href="https://linkedin.com/in/sargam-monga" style={{textDecoration:"none",color:"inherit"}}><i className="fa fa-linkedin-square Social"/></a> 
                        <a className="SocialLink" href="https://www.instagram.com/paintingmyheartout/" style={{textDecoration:"none",color:"inherit"}}><i className="fa fa-instagram Social"/></a> 
                        <a className="SocialLink" onClick={() => setOpen(!Open)} aria-controls="collapse-text" aria-expanded={Open} style={{textDecoration:"none",color:"inherit"}}><i className="fa fa-envelope Social" /></a> 
                        </div>
                        <Fade in={Open}>
                            <div id="collapse-text" className="mail">
                                <p style={{ textAlign:"flex-end"}}>Reach out at - sargam18262@iiitd.ac.in</p>
                            </div>
                        </Fade>
                </Col>
            </Row>
        </div>
    )
}
export default Banner