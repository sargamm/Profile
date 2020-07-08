import React from 'react'
import { CardColumns, Card, Col, Button, Image, Row } from 'react-bootstrap'
import Odyssey from './assets/odyssey.png'
import Esya from './assets/esya.jpeg'
import ECell from './assets/Ecell.png'
import IIITD from './assets/iiitd.png'
import Meraki from './assets/meraki.png'
import Painting from './assets/painting.jpeg'
import Muse from './assets/muse.png'
import Poster from './assets/poster.png'

function CoCurricular(){
    return(
        <div className="CoCurricular">
            <Row>
            <Col md={12} >
                <div style={{padding:"5%"}}>
                <CardColumns>
                <Card>
                <Card.Img variant="top" src={Odyssey}/>
                <Card.Body>
                <Card.Text>
                    Publicity and Public Relations Lead at Odyssey'20.
                </Card.Text>
                </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Esya} />
                    <Card.Body>
                    <Card.Text>
                        Event Head for the flagship event - HuntIT at Esya'19. A two day treasure hunting event spanning across the city.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" src={ECell}  />
                    <Card.Body>
                    <Card.Text>
                        Current Events Lead at ECell-IIITD.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" src={IIITD}/>
                    <Card.Body>
                    <Card.Text>
                        Volunteer at Induction'19, IIIT-Delhi
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Meraki}  />
                    <Card.Body>
                    <Card.Text>
                        Current Core Member of Meraki, Art Society of IIITD
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Painting}  />
                    <Card.Body>
                    <Card.Text>
                        If not tech, I spend my time creating oil paintings on canvas.
                        It's the most peaceful escape from the everyday routine. 
                    </Card.Text>
                    <Button variant="dark" href="https://www.instagram.com/paintingmyheartout/">Art Profile</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Img variant="top" src={Poster}  />
                    <Card.Text>
                        Won the 2nd position in KickAd Pan India Poster Designing Contest in a team of 3.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Muse}  />
                    <Card.Body>
                    <Card.Text>
                        Past member of Muse - The Fashion Society of IIIT-Delhi. (September 2018 - April 2020)
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardColumns>
                </div>
            </Col>
            </Row>
        </div>
    )
}
export default CoCurricular