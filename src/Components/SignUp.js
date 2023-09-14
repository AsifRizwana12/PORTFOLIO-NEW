import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function SignUp() {
  const backgroundGradient = {
    background: 'linear-gradient(to bottom right, #CCCCFF, #F5F5F5)',
  };
  return (
 


    <div className="experience " style={backgroundGradient}>
      <VerticalTimeline lineColor="black">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
          
        >
          <h3 className="vertical-timeline-element-title">
            SSVN High School
          </h3>
          <p> High School with 97%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Dr.RLR JUNIOR COLLEGE
          </h3>
          <p> INTERMEDIATE (MPC) with 97.5%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           JNTUH COLLEGE OF ENGINEERING SULTANPUR
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree 
          </h4>

          <p> Computer Science with 76%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" JAN 2023 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            WEB DEVELOPER (INTERNSHIP)-ZIGY PRINTS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            INDIA
          </h4>
          <p>Created Dynamic and Responsive web pages.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" MAY 2023 - PRESENT "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           SOFTWARE DEVELOPER -ZAPS MARKETING
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            INDIA
          </h4>
          <p>Worked as  React Developer and python developer , Created Many web pages.</p>
        </VerticalTimelineElement>

       
      </VerticalTimeline>
    </div>
  );
}



export {SignUp};
