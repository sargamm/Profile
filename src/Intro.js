import React from 'react';
import {Row, Col} from 'react-bootstrap'
import {CSSTransitionGroup} from 'react-transition-group'
function Intro(){
    return(
        <div className="Intro">
            <Row>
                <Col sm={12}>
                
            <CSSTransitionGroup transitionName="example">
                <div className="IntroTextBox">
                    <p>I am a budding technophile, exploring new horizons in life and experimenting with ideas. 
                    For me, every concept is an expedition and every project a creation. 
                    Currently, I am pursuing my Bachelors in Technology in Computer Science and Applied Mathematics. 
                    As an optimist, I am confident enough that every problem has a way out and hard work never betrays.</p>
                </div>
                </CSSTransitionGroup>
                </Col>
            </Row>
            
        </div>
    )
}
export default Intro