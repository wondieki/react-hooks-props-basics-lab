import {React, ReactPropTypes }from "react";
import Links from "./Links"
import PropTypes from 'prop-types';

function About({bio, github, linkedin}) {

  return (
    <div id="about">
      <h2>About Me</h2>
      {/* {handleBio(props.bio)} */}
      {(bio?.trim().length> 0)?<p>{bio}</p>:null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}
About.propTypes ={bio:PropTypes.string.isRequired}
// function handleBio(bio){
//   return (bio?.trim().length>0)?<p>{bio}</p>:null;
// }

export default About;