import React from "react";
import MyName from "./myname";
import Skills from "./skills";
import WorkExperience from "./workexperience";
import Education from "./education";
import Project from "./project";
import Certificate from "./certificate";
import SocialIcon from "./socialicon";
const MyResume=(props)=>{
    return(
        <div>
        <MyName/>
        <Skills/>
        <WorkExperience/>
        <Education/>
        <Project/>
        <Certificate/>
        <SocialIcon/>
        
        </div>
    )
    }
    export default MyResume;