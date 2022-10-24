import React from "react";
import Github from "../../assets/images/socials/github.svg";
import Linkedin from "../../assets/images/socials/linkedin.svg";
import Website from "../../assets/images/socials/portfolio.png";

export default class FooterSocials extends React.Component {
  render() {
    return (
      <ul className="socials">
        <li>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="github icon"></img>
          </a>
        </li>
        <li>
          <a
            href="linkedin.com/in/timothy-golah/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="linkedin icon"></img>
          </a>
        </li>
        <li>
          <a
            href="https://www.timzport.ml/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Website} alt="website icon"></img>
          </a>
        </li>
      </ul>
    );
  }
}
