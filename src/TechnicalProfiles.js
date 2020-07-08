import React from 'react';
import { Row, Col, Card,Button, CardDeck } from 'react-bootstrap';
function TechnicalProfiles(){
    return(
        <>
        <div className="TechnicalProfiles">
            <Row>
                <CardDeck>
                <Card style={{ width: '25rem' , backgroundColor:"#a6c1ee", margin: "5% 2%"}}>
                <Card.Header style={{paddingBottom:"2px"}}><p className="Profile">CodeChef</p></Card.Header>
                <Card.Img variant="top" src="codechef.jpeg" style={{paddingLeft:"5%", paddingRight:"5%", height:"100px"}}/>
                <Card.Body>
                    <Card.Text>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <p>Rating: 1690</p>
                    </Card.Text>
                </Card.Body>
                <Button variant="dark" href="https://www.codechef.com/users/verve_11">Profile</Button>
                </Card>
                {/* </Col> */}
                {/* <Col md={4}> */}
                <Card style={{ width: '25rem' , backgroundColor:"#a6c1ee" , margin: " 5% 2% "}}>
                <Card.Header style={{paddingBottom:"2px"}}><p className="Profile">OpenGenus Foundation</p></Card.Header>
                <Card.Img variant="top" src="ope.png" style={{paddingLeft:"5%", paddingRight:"5%",height:"100px"}}/>
                <Card.Body>
                    <Card.Text>
                    <p>Author at the OpenGenus IQ Platform. Published 5 articles open and free for all.</p>
                    </Card.Text>
                </Card.Body>
                <Button variant="dark" href="https://iq.opengenus.org/author/sargam/">Profile</Button>
                </Card>
                <Card style={{ width: '25rem' , backgroundColor:"#a6c1ee", margin: " 5% 2% "}}>
                <Card.Header style={{paddingBottom:"2px"}}><p className="Profile">LeetCode</p></Card.Header>
                <Card.Img variant="top" src="leetcode.png" style={{paddingLeft:"5%", paddingRight:"5%",height:"100px"}}/>
                <Card.Body>
                    <Card.Text>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <p>56 Problems Solved.</p>
                    </Card.Text>
                </Card.Body>
                <Button variant="dark" href="https://leetcode.com/sargamm/">Profile</Button>
                </Card>
                {/* </Col> */}
                </CardDeck>
            </Row>
        </div>
        </>
    )
}
export default TechnicalProfiles