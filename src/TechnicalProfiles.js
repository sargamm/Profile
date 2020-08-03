import React from 'react';
import { Row,Card,Button,CardDeck } from 'react-bootstrap';
import leetcode from './assets/leetcode.png'
import opengenus from './assets/ope.png'
import codechef from './assets/codechef.jpeg'
// import
function TechnicalProfiles(){
    return(
        <>
        <div className="TechnicalProfiles">
            <Row>
                <CardDeck>
                <Card style={{ width: '40vh' , backgroundColor:"#a6c1ee", margin: "5% 2%"}}>
                <Card.Header style={{paddingBottom:"2px"}}><p className="Profile">CodeChef</p></Card.Header>
                <Card.Img variant="top" src={codechef} style={{paddingLeft:"5%", paddingRight:"5%", height:"100px"}}/>
                <Card.Body>
                    <Card.Text>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    Rating: 1690
                    </Card.Text>
                </Card.Body>
                <Button variant="dark" href="https://www.codechef.com/users/verve_11">Profile</Button>
                </Card>
                <Card style={{ width: '40vh' , backgroundColor:"#a6c1ee" , margin: "5% 2% "}}>
                <Card.Header style={{paddingBottom:"2px"}}><p className="Profile">OpenGenus Foundation</p></Card.Header>
                <Card.Img variant="top" src={opengenus} style={{paddingLeft:"5%", paddingRight:"5%",height:"100px"}}/>
                <Card.Body>
                    <Card.Text>
                    Author at the OpenGenus IQ Platform. Published 5 articles open and free for all.
                    </Card.Text>
                </Card.Body>
                <Button variant="dark" href="https://iq.opengenus.org/author/sargam/">Profile</Button>
                </Card>
                <Card style={{ width: '40vh' , backgroundColor:"#a6c1ee", margin: " 5% 2% "}}>
                <Card.Header style={{paddingBottom:"2px"}}><p className="Profile">LeetCode</p></Card.Header>
                <Card.Img variant="top" src={leetcode} style={{paddingLeft:"5%", paddingRight:"5%",height:"100px"}}/>
                <Card.Body>
                    <Card.Text>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    56 Problems Solved.
                    </Card.Text>
                </Card.Body>
                <Button variant="dark" href="https://leetcode.com/sargamm/">Profile</Button>
                </Card>
                </CardDeck>
            </Row>
        </div>
        </>
    )
}
export default TechnicalProfiles