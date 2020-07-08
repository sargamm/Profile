import React from 'react'
import { Container } from 'react-bootstrap'

function timeline(){
    return(
        <Container>
            <div className="time-line d-flex">
                <div className="timeline-item default-item selected">
                    <div className="timeline-content animated bounceIn">
                    <h2>Explore</h2>
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. 
                    Provident eveniet nulla amet, 
                    sapiente voluptatum praesentium.</p>
                    </div>
                </div>
                <div className="timeline-item default-item ">
                    <div className="timeline-content ">
                    <h2>Explore</h2>
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. 
                    Provident eveniet nulla amet, 
                    sapiente voluptatum praesentium.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default timeline