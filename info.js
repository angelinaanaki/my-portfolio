import meImg from './src/assets/me.png';
import portfolioImg1 from './src/assets/portfolio/1.png';
import portfolioImg2 from './src/assets/portfolio/2.png';


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
    "I am a software engineer having 7+ years of intensive experience in Odoo, Odoo customization, implementation, integration, migration, Odoo technical & functional consultation, Odoo support & ongoing maintenance.",
  links: {
    linkedin: "https://linkedin.com/in/angelina-anakievska-stojmirova-08197614a",
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
      name: "Keyboard PD Detection",
      pictures: [
        {
          img: portfolioImg1,
        },
      ],
      technologies: ["Python", "Scikit-learn"],
      category: "Machine Learning",
      date: "June, 2017 - October, 2017",
      github: "",
      visit: "",
      description:"This project explores how everyday interaction with a computer keyboard can help detect early signs of Parkinson’s disease (PD). By measuring the time a key is held down (key hold duration) during normal typing and converting it into a PD motor index using regression algorithms, the system distinguishes between healthy individuals and those with early PD symptoms. The approach offers a non-invasive, low-cost way to support early diagnosis and monitoring, achieving 57% accuracy in tests with 43 participants."
    },
    {
      name: "recipeapp.com",
      pictures: [
        {
          img: portfolioImg2,
        },
      ],
      technologies: ["Django", "React JS"],
      category: "Web App",
      date: "September, 2019 - November, 2019",
      github:
        "https://github.com/angelinaanaki/recipeapp",
      visit: "",
      description:"The application is designed for simple browsing, adding, and editing recipes. Users can view the latest recipes, search by title or ingredients, and use filters and categories (by difficulty, preparation time, type of meal, etc.). Registered users can add and manage their own recipes, leave comments, give ratings, and save favorites. The system supports Facebook login, profile settings, newsletter notifications, and recipe sharing. The administrator manages content, approves recipes, and moderates comments."
    },
    {
      name: "Msc App",
      // pictures: [
      //   {
      //     img: require("./src/assets/portfolio/3.png")
      //   },
      // ],
      technologies: ["react", "scss", "local storage"],
      category: "Web App",
      date: "Aug, 2021 - 20 days",
      github:
        "",
      visit: "",
      description:"Test"
    }
  ],
};

export default info;
