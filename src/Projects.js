import React from 'react';
import ProjectCard from './ProjectCard.js';
import {Row,Col,Button, Card, Nav, Container} from 'react-bootstrap'

function handleEvent(){
    console.log("click")
    let projectOverlay=document.getElementById("overlay");
    console.log(projectOverlay)
    console.log(projectOverlay.style)
    // projectOverlay.style.opacity="0";
    // projectOverlay.style.zIndex="0"
    projectOverlay.style.display="none"
    console.log("clicked")
}
function Projects(){
    return(
        <div className="Projects">
            <div className="ProjectsDiv">
                <Row>
                 <Col lg={4} md={6} sm={12}>
                    <div>
                        <Row>
                        <ProjectCard width="100%" 
                        title="VacciCure" 
                        image="../Vaccicure.jpg"
                        description="A Database Project made with flask on a Vaccination Curation System that
                         digitizes the vaccination records of the citizens and the health centres
                         alongwith providing necessary information about required vaccines for a 
                         particular country and also helping with the accessibility to the health centres. 
                         Hence providing a stop destination for the vaccination and related health care statistics.( Team Size - 5 )."
                        link="https://github.com/sargamm/VacciCure"
                        deployed=""
                        />
                        </Row>
                        <Row>
                        <ProjectCard width="30%" 
                        title="Multi User Chat System" 
                        image="../linux.jpg"
                        description="A Multi User Chat System implemented using the linux IPC Mechanism."
                        link="https://github.com/sargamm/multi-user-chat-system"
                        />
                        <ProjectCard width="59%" 
                        title="Sort Visualiser" 
                        image="sortv2.png"
                        description="A Project built in ReactJS to visualise various sorting algorithms - Merge Sort, Bubble Sort, Insertion Sort, Quick Sort"
                        link="https://github.com/sargamm/sort-visualiser"
                        deployed="https://sargamm.github.io/sort-visualiser/"
                        />
                        </Row>
                    </div>
                </Col>
                {/* <Col lg={3} md={6} sm={12}>
                    <div>
                        <Row>
                        <ProjectCard width="100%" 
                        title="Smart Mirror" 
                        image="../smartmirror.jpg"
                        description="A Mirror that displays weather, mailbox, calender, events schedule in real time. The project was developed with the help of Raspberri Pi and python. ( Team Size - 4 )."
                        link="https://github.com/sargamm/Smart-Magic-Mirror"
                        />
                        </Row>
                        <Row>
                        <ProjectCard width="30%" 
                        title="Basic Linux Shell" 
                        image="../linux.jpg"
                        description="An implementation of the linux shell with few basic commands.
                        Internal commands - cd, echo, pwd, history, exit.
                        External commands - mkdir, ls, rm, cat, date ."
                        link="https://github.com/sargamm/Basic-Linux-Shell"/>
                        <ProjectCard width="59%"
                        title="Board Result Analysis" 
                        image="../BoardResult.jpg"
                        description="Board Results are sent to schools in a text file format. 
                        This Project reads the Result from a text file, 
                        converts it to a binary file so that it can be analysed easily."
                        link="https://github.com/sargamm/Board-Result-Analysis"
                        />
                        </Row>
                    </div>
                </Col> */}
                <Col lg={4} md={6} sm={12}>
                    <div>
                        <Row>
                        <ProjectCard width="30%" 
                        title="Board Result Analysis" 
                        image="../BoardResult.jpg"
                        description="Board Results are sent to schools in a text file format. 
                        This Project reads the Result from a text file, 
                        converts it to a binary file so that it can be analysed easily."
                        link="https://github.com/sargamm/Board-Result-Analysis"/>
                        <ProjectCard width="59%" 
                        height="100%" 
                        title="Smart Mirror" 
                        image="../smartmirror.jpg"
                        description="A Mirror that displays weather, mailbox, calender, events schedule in real time. The project was developed with the help of Raspberri Pi and python. ( Team Size - 4 )."
                        link="https://github.com/sargamm/Smart-Magic-Mirror"/>
                        </Row>
                        <Row>
                        <ProjectCard width="100%" 
                        title="Plants Vs Zombies" 
                        image="../pvz.jpeg"
                        description="A clone of the Plants Vs Zombies Game originally developed by PopCap Games. The game is built using JavaFX. ( Team Size - 2 )."
                        link="https://github.com/sargamm/PlantsVsZombies"/>
                        </Row>
                    </div>
                </Col>
                <Col lg={4} md={12} sm={12}>
                    <div>
                        <Row>
                        <Col md={6} lg={12}>
                            <Row>
                        <ProjectCard width="100%" 
                        title="Cyc-Glove" 
                        image="../glove.JPG"
                        description="A modern technology glove designed specially for cyclists and joggers. Get directions, indicate for a turn and make and receive calls with this smart glove. 
                        The project consists of three main features: 
                        1. Navigation You can set up your destination and navigate your way. The right hand glove vibrates if you are to head right and the same goes with the left glove.
                         2. Indication whenever you turn just join your index finger and thumb for the led arrow on your glove to glow. 
                         3.Calls You can receive calls using the glove by pressing a single button on your right hand. "
                        link="https://github.com/sargamm/Cyc-Glove"/>
                        </Row>
                        </Col>
                        <Col md={6} lg={12}>
                            <Row>
                        <ProjectCard width="30%" 
                        title="Multiple Reader Writer System" 
                        image="../linux.jpg"
                        description="A multiple reader writer system with synchronisation with threads using mutex "
                        link="https://github.com/sargamm/multiple-reader-writer-system"/>
                        <ProjectCard width="59%"
                        title="Portfolio" 
                        image="../me.png"
                        description=" A complete introduction to my profile"
                        link="https://github.com/sargamm/me"/>
                        </Row>
                        </Col>
                        </Row>
                    </div>
                </Col>
                </Row>
                
            </div>
        </div>
    )
}
export default Projects
