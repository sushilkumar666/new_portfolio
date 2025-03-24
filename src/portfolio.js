/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sushil Sharma",
  title: "Hi all, I'm Sushil",
  subTitle: emoji(
    "I’m a Full Stack Developer with expertise in React, Next.js, TypeScript, and PostgreSQL. Experienced in building scalable, real - time applications with WebSocket and authentication systems.Passionate about writing clean, maintainable code and delivering user- friendly experiences."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sushilkumar666",
  linkedin: "https://www.linkedin.com/in/i-ssharma/",
  gmail: "sushilssharma064@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/profile.php?id=100050058410120",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/13071322/sushils-sharma",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Tailwind",
      fontAwesomeClassname: "fab fa-tailwind"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "nosql-database",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/mumbai-university.jpg"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "September 2019 - April 2022",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Pillai Hoc College of ACS",
      logo: require("./assets/images/pillai-logo.jpg"),
      subHeader: "Higher Secondary (Science stream)",
      duration: "September 2018 - April 2019",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Worldex India",
      companylogo: require("./assets/images/worldex-big-logo.png"),
      date: "May 2023 – October 2024",
      desc: "A Frontend Developer with 14+ months of experience at Worldex India, specializing in React, Next.js, TypeScript, and Tailwind CSS. I build scalable, high-performance UI with a focus on seamless user experience and modern design.",
      descBullets: [
        " Tech Stack: React, Next.js, TypeScript, Zustand, ShadCN, Tailwind CSS",
        " Experience: Built and optimized frontend solutions at Worldex India",
        " Projects: SaaS Dashboards, Real-time Apps, Interactive UI Components"
      ]
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/wofx-logo.jpg"),
      projectName: "WOFX",
      projectDesc: "WOFX - World Furniture Expo is India's premier international B2B trade show dedicated to the furniture + design industry wherein the entire furniture + design industry from India and across the globe can converge, connect and collaborate. WOFX is your gateway into the vast Indian furniture & design market",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.wofxworldexpo.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/intex-logo.png"),
      projectName: "INTEXT SOUTHASIA",
      projectDesc: "Intex South Asia is a leading international textile sourcing show connecting global manufacturers, suppliers, and buyers. It showcases fabrics, yarns, accessories, and sustainable textiles while promoting trade and innovation. Hosted in India, Sri Lanka, and Bangladesh, it serves as a key platform for networking and business growth.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.intexsouthasia.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "linkedin",
      subtitle:
        "React Essential Training",
      image: require("./assets/images/linkedin-image.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/070ad18723cca0ef20007f5e253210cfbcfe94c8dbcde1c0b27c8d6b2cd1daa1?trk=share_certificate"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "100xDevs Cohort 3.0",
      subtitle:
        "Complete Web Development + Devops + Blockchain Cohort",
      image: require("./assets/images/cohort3.png"),
      imageAlt: "100x-cohort3-banner",
      footerLink: [
        {
          name: "In Progress",

        }
      ]
    },

    {
      title: "freeCodeCamp",
      subtitle: "Front End Development Libraries",
      image: require("./assets/images/freecodecamp-logo.webp"),
      imageAlt: "Freecodecamp",
      footerLink: [
        { name: "Certification", url: "https://www.freecodecamp.org/certification/fcc5dfe5e61-f393-44d3-897a-31b408b52347/front-end-development-libraries" }
        // {
        //   name: "Final Project",
        //   url: "https://www.freecodecamp.org/certification/fcc5dfe5e61-f393-44d3-897a-31b408b52347/front-end-development-libraries"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const personalProjects = {
  title: emoji("Personal Projects "),
  subtitle:
    "Some Cool Projects that I have done !",

  achievementsCards: [
    {
      title: "Ecommerce Dashboard",
      subtitle:
        "Frontend Project, ShadCN, Tailwind CSS, Chart",
      image: require("./assets/images/ecommerce-dashboard.PNG"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://ecommerce-dashboard-erzk.vercel.app/"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Virtual Hospital",
      subtitle:
        "Authentication , Payment Gateway, Canva , MongoDB, Express, React, Nodejs",
      image: require("./assets/images/virtual-hospital.PNG"),
      imageAlt: "website",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://virtual-hospital-frontend.vercel.app/"

        }
      ]
    },

    {
      title: "Excelidraw",
      subtitle: "Realtime Excelidraw, WebSocket, Authentication, React, Typescript, Postgres, Express, nodejs ",
      image: require("./assets/images/excelidraw-image.PNG"),
      imageAlt: "Freecodecamp",
      footerLink: [
        { name: "Live Demo", url: "https://excelidraw.vercel.app/" }
        // {
        //   name: "Final Project",
        //   url: "https://www.freecodecamp.org/certification/fcc5dfe5e61-f393-44d3-897a-31b408b52347/front-end-development-libraries"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-724941XXXX",
  email_address: "sushilssharma064@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  personalProjects
};
