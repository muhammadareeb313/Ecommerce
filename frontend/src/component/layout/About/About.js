import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              alt="Founder"
            />
            <Typography>Muhammad Areeb</Typography>
            <Button className="visitBtn" onClick={visitInstagram}>
              Visit Github
            </Button>
            <span>
              This is an ecommerce wesbite made by @muhammadareeb. With the
              help of youtube channel 6 Pack Programmer.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Social Media</Typography>
            <a
              href="https://www.facebook.com/profile.php?id=100057806174219"
              target="blank"
            >
              <FacebookIcon className="FacebookSvgIcon" />
            </a>

            <a href="https://github.com/muhammadareeb313" target="blank">
              <GitHubIcon className="GitHubSvgIcon" />
            </a>
            <a href="https://github.com/muhammadareeb313" target="blank">
              <LinkedInIcon className="LinkedInSvgIcon" />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
