import meImg from './src/assets/me.png';

let info = {
  name: "Angelina Anaki",
  logo_name: "AA",
  flat_picture: meImg,
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I am a software developer having 5+ years of intensive experience in Odoo, Odoo customization, implementation, integration, migration, Odoo technical & functional consultation, Odoo support & ongoing maintenance.",
  links: {
    linkedin: "https://linkedin.com/in/angelina-anakievska-08197614a",
    github: "https://github.com/angelinaanaki",
    resume: "https://drive.google.com/file/d/1W0pzOo1Gb-W70BYKehOfZ4qaJt7m1_7O/view?usp=sharing",
  },
  education: [
    {
      name: "Faculty of Information Sciences and Computer Engineering - FINKI",
      place: "'Ss. Cyril and Methodius' University in Skopje, Macedonia",
      date: "2018 - present",
      degree: "MSc in Information Science and Computer Engineering in the field of Software Engineering",
      description:
        "",
      skills: []
    },
    {
      name: "Faculty of Electrical Engineering and Information Technology - FEIT",
      place: "'Ss. Cyril and Methodius' University in Skopje, Macedonia",
      date: "2013 - 2017",
      degree: "BSc in Electrical Engineering and Information Technologies, in Computer System Engineering, Automation and Robotics",
      description:
        "",
      skills: []
    },
  ],
  experience: [
    {
      name: "Solisa Solutions DOOEL",
      place: "Skopje, Macedonia",
      date: "Jan 2019 - present",
      position: "Founder and Software Engineer",
      description:
        "Odoo customization, implementation, integration, migration, Odoo technical & functional consultation, Odoo support & ongoing maintenance.",
      skills: ["Odoo", "PostgreSQL", "Docker"]
    },
    {
      name: "Nebiz DOOEL",
      place: "Skopje",
      date: "Jul 2017 - Dec 2018",
      position: "Software Developer",
      description:
        "Creating connectors between ERP systems and e-commerce platforms, such as Amazon, Wordpress, Rakuten, Shopware, and Oxid.",
      skills: ["Python", "PHP", "XML"]
    },
    {
      name: "Artisoft",
      place: "Skopje",
      date: "May 2017 - Jul 2017",
      position: "Internship - Full Stack Developer",
      description: "Creating apps and web UI",
      skills: ["HTML5", "CSS3", "Bootstrap", "JQuery", "JavaSript", "ColdFusion"]
    },
  ],
  skills: [
    {
      title: "Frontend",
      info: ["HTML", "CSS", "Vue", "React", "Tailwind CSS"],
      icon: "fa fa-cubes"
    },
    {
      title: "Languages",
      info: [
        "Python","Javascript","Java","C#","PHP"],
      icon: "fa fa-code"
    },
    {
      title: "Backend",
      info: [
        "Odoo (ERP)", "Django", "Flask", "REST API", "FASTAPI"],
      icon: "fas fa-laptop-code"
    },
  ],
  portfolio: [
    {
      name: "Diary App",
      // pictures: [
      //   {
      //     img: require("./src/assets/portfolio/1.png")
      //   },
      // ],
      technologies: ["react", "scss", "local storage"],
      category: "Web App",
      date: "Aug, 2021 - 20 days",
      github:
        "",
      visit: "",
      description:""
    },
    {
      name: "Online Examination",
      // pictures: [
      //   {
      //     img: require("./src/assets/portfolio/1.png")
      //   },
      // ],
      technologies: ["HTML", "CSS","JavaSript","JQuery", "PHP", "MySQL"],
      category: "Web App",
      date: "Apr, 2021 - May, 2021",
      github: "",
      visit: "",
      description:""
    },
    {
      name: "MyFlix.com",
      // pictures: [
      //   {
      //     img: require("./src/assets/portfolio/1.png")
      //   },
      // ],
      technologies: ["react", "css", "TMDB"],
      category: "Web App",
      date: "Aug, 2021 - 10 days",
      github:
        "",
      visit: "",
      description:""
    },
  ],
};

export default info;
