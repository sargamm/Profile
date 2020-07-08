import React, { Component,useState } from 'react';
import {Image, Button ,Collapse} from 'react-bootstrap'

function ProjectCard(props){
    const [open, setOpen] = useState(false);
    return(
        <>
        <div className="ProjectCard" style={{width: props.width, height: props.height}} >
            <Image src={props.image} className="CardImage" />
            <div className="overlay" onClick={() => setOpen(!open)} aria-controls="collapse-text"
            aria-expanded={open} >
                <div className="CardText">{props.title}</div>
            </div>
        </div>
        <Collapse in={open}>
        <div id="collapse-text">
          <p style={{color:"#bebebe"}}>{props.description}</p>
          <Button variant="dark" href={props.link}>Code</Button>
          {props.deployed && <Button variant="dark" href={props.deployed}>Project</Button>}
        </div>
      </Collapse>
        </>
    )
}
export default ProjectCard