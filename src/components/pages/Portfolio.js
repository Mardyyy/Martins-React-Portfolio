import React from 'react';
import Project from './Project';
import ImageOne from './assets/images/Horiseon.PNG';
import ImageTwo from './assets/images/Recipe-app.png';
import ImageThree from './assets/images/Survey-maker-app.jpg';
import ImageFour from './assets/images/Music-Verse.png';
// import ImageFive from './assets/images/';
// import ImageSix from './assets/images/';

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
      title: "Ingredient Recipe Maker",
      image: ("" + ImageTwo +""),
      repo: "https://github.com/joshua-rowan/ingredient-recipe-fetcher",
      live: "https://joshua-rowan.github.io/ingredient-recipe-fetcher/"
    },
    {
      id: 3,
      title: "Survey-Management-Service",
      image: ("" + ImageThree +""),
      repo: "https://github.com/JacobDFlores/Survey-Management-Service",
      live: "https://github.com/JacobDFlores/Survey-Management-Service"
    },
    {
      id: 4,
      title: "Music Verse",
      image: ("" + ImageFour +""),
      repo: "https://github.com/pzhong1/Music-Verse",
      live: "https://music-verse2-57f59708a605.herokuapp.com/"
    },
    {
      id: 5,
      title: "N/A",
      image: "",
      repo: "",
      live: ""
    },
    {
      id: 6,
      title: "N/A",
      image: "",
      repo: "",
      live: ""
    }
  ];

function Portfolio() {
    return <Project projects={projects} />;
};

export default Portfolio;