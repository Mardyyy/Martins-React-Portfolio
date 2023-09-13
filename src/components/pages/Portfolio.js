import React from 'react';
import Project from './Project';
import ImageOne from './assets/images/Horiseon.PNG';

const projects = [
    {
      id: 1,
      title: "HTML Project",
      image: ("" + ImageOne +""),
      repo: "https://github.com/Mardyyy/Module-1",
      live: "https://mardyyy.github.io/Module-1/"
    },
    {
      id: 2,
      title: "Title",
      image: "",
      repo: "",
      live: ""
    },
    {
      id: 3,
      title: "Milk",
      image: "",
      repo: "",
      live: ""
    },
    {
      id: 4,
      title: "Milk",
      image: "",
      repo: "",
      live: ""
    },
    {
      id: 5,
      title: "Milk",
      image: "",
      repo: "",
      live: ""
    },
    {
      id: 6,
      title: "Milk",
      image: "",
      repo: "",
      live: ""
    }
  ];

function Portfolio() {
    return <Project projects={projects} />;
};

export default Portfolio;