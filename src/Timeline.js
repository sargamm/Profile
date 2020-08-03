import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Row,Col} from 'react-bootstrap'
 
function Timeline(){
    return(
      <Row>
        <Col>
          <div className="timelineBox">
            <div className="timeline" >
              <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ backgroundColor:"black", color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid  black' }}
                    date="Present"
                    dateClassName="dateClass"
                    iconStyle={{ backgroundColor:"#fff"  }}
                    icon={<i className="fa fa-book-open Icon" />}
                >
                  <h3 className="vertical-timeline-element-title" style={{fontWeight:"500"}}>Undergraduate Researcher</h3>
                  <h4 className="vertical-timeline-element-subtitle" style={{fontWeight:"500"}}>MIDAS IIIT-D</h4>
                  <p >
                    MIDAS is a research lab at IIITD led by Dr. Rajiv Ratn Shah. Currently, I am building my basics of ML and related areas.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ backgroundColor:" black", color: 'white' }}
                  contentArrowStyle={{ borderRight: '7px solid   black' }}
                  date="June - July 2020"
                  dateClassName="dateClass"
                  iconStyle={{ backgroundColor:"#fff" }}
                  icon={<i className="fa fa-rocket Icon" />}
                >
                  <h3 className="vertical-timeline-element-title" style={{fontWeight:"500" }}>Microsoft Engage 2020</h3>
                  <p>
                    A program for students to learn Artificial Intelligence. 
                    Made a tic-tac-toe game using the Minimax Algorithm.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="April - June 2020"
                  dateClassName="dateClass"
                  contentStyle={{ backgroundColor:" black", color: 'white' }}
                  contentArrowStyle={{ borderRight: '7px solid   black' }}
                  iconStyle={{ backgroundColor:"#fff"  }}
                  icon={<i className="fa fa-pen Icon" />}
                  // icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title" style={{fontWeight:"500" }}>Intern</h3>
                  <h4 className="vertical-timeline-element-subtitle" style={{fontWeight:"500" }}>OpenGenus Foundation</h4>
                  <p >
                    Explored various Advanced algorithms, followed by writing articles on the same in a team of 2.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2018 - Present"
                  dateClassName="dateClass"
                  contentStyle={{ backgroundColor:" black", color: 'white' }}
                  contentArrowStyle={{ borderRight: '7px solid   black' }}
                  iconStyle={{ backgroundColor:"#fff" }}
                  icon={<i className="fa fa-university Icon" />}
                >
                  <h3 className="vertical-timeline-element-title" style={{fontWeight:"500" }}>Bachelors of Technology</h3>
                  <h4 className="vertical-timeline-element-subtitle" style={{fontWeight:"500" }}>Indraprastha Institute of Information Technology, Delhi</h4>
                  <p >
                    Pursuing B.Tech in Computer Science and Applied Mathematics
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2006 - 2018"
                  dateClassName="dateClass"
                  contentStyle={{ backgroundColor:" black", color: 'white' }}
                  contentArrowStyle={{ borderRight: '7px solid   black' }}
                  iconStyle={{ backgroundColor:"#fff" }}
                  icon={<i className="fa fa-graduation-cap Icon" />}
                >
                  <h3 className="vertical-timeline-element-title" style={{fontWeight:"500" }}>School</h3>
                  <h4 className="vertical-timeline-element-subtitle" style={{fontWeight:"500" }}>St. Francis De Sales School, Janak Puri, New Delhi</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  iconStyle={{ background: '#000', color: '#fff' }}
                  icon={<i className="fa fa-star" style={{fontSize:"25px",paddingTop:"25%"}} />}
                />
              </VerticalTimeline>
            </div>
          </div>
        </Col>
      </Row>
    )
}
export default Timeline