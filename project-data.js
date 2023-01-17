const projectData = [
  {
    title: "Raycast Vehicle Engine",
    miniDesc:
      "Simply upload your favourite car's chassis model and car's wheel model and the RV Engine would automatically create a car with the same look and feel. It would also be able to control the car's movement and rotation...",
    website: "https://rv-engine.jaagrav.in/",
    github: "https://github.com/Jaagrav/raycast-vehicle-engine",
    img: "/assets/images/projects/Rv-Engine.webp",
    seoimg: "/assets/images/seo/Rv-Engine.webp",
    link: "raycast-vehicle-engine",
    showOnHome: true,
    tech: [
      "ThreeJS",
      "CannonJS",
      "Stats.js",
      "JSZip",
      "Babel",
      "Guify",
      "File-saver",
      "Three-gltf-exporter",
      "Webpack",
    ],
    desc: "Simply upload your favourite car's chassis model and car's wheel model and the RV Engine would automatically create a car with the same look and feel. It would also be able to control the car's movement and rotation. Add physics and everything else you want to the car and you're good to go. After that you can simply download it as a zip file. Follow the same setup procedure, and you have a new raycast vehicle generated. This project uses ThreeJS in order to render 3D interactive graphics on the web browser using WebGL. I am also using CannonJS in order to simulate physics, with the help of the Raycast Vehicle feature of the library in order to make the vehicle move. To generate js files and compress all the files and assets generated to a zip file, I am using JSZip library. This engine has got various features like: Vehicle physics, Change Vehicle Mass, Suspension Strength, Suspension Damping, etc., Change the position of each wheel, set the size of each wheel and have all the controls to yourself, Change the max speed of the car, movement controls etc directly from the GUI, Position the chassis from GUI, see helper to view the chassis in the physics world. Same goes for all of the wheels, Generate code, simply either copy Car.JS code or Download the ZIP file that has everything sitting ready for you. All you need to do is install it using npm once unzipped.",
  },
  {
    title: "Ayasya Eco",
    miniDesc:
      "Ayasya is a building material manufacturing company founded to address the problem of plastics by manufacturing affordable and sustainable building materials. The company is...",
    website: "https://ayasyaeco.com/",
    github: null,
    img: "/assets/images/projects/Ayasya.webp",
    seoimg: "/assets/images/seo/Ayasya.webp",
    link: "ayasya-eco",
    showOnHome: false,
    tech: [
      "NextJS",
      "TailwindCSS",
      "Axios",
      "Firebase",
      "React",
      "React-Multi-Carousel",
      "SendGrid",
      "Next-Page-Transitions",
    ],
    desc: "Ayasya is a building material manufacturing company founded to address the problem of plastics by manufacturing affordable and sustainable building materials. The company is currently working on products which are plastic stuff made from recycled plastic. ",
  },
  {
    title: "Brisko",
    miniDesc:
      "So this website was developed for a client. Wonder who the client is? It’s Saloni Garg and Amit Sagtani. It was a fun little project, developed using Next, Tailwind and lots...",
    website: "https://brisko.app/",
    github: null,
    img: "/assets/images/projects/Brisko.webp",
    seoimg: "/assets/images/seo/Brisko.webp",
    link: "brisko",
    showOnHome: false,
    tech: [
      "NextJS",
      "TailwindCSS",
      "React",
      "Google-Sheets-API",
      "SendGrid",
      "Axios",
      "React-vertical-timeline-component",
      "React-swipeable-views",
      "SweetAlert2",
    ],
    desc: "Experience the new web3 social media, watch the new-age content and earn crypto rewards! So this website was developed for a client. Wonder who the client is? It’s Saloni Garg and Amit Sagtani. It was a fun little project, developed using Next, Tailwind and lots and lots of hatred! I am kidding about the last part, go check it out!",
  },
  {
    title: "CodeX",
    miniDesc:
      "My most popular project on Github, CodeX is an online compiler for various languages like Java, C++, Python, etc. Execute code in various...",
    website: "https://codex.jaagrav.in/",
    github: "https://github.com/Jaagrav/CodeX",
    img: "/assets/images/projects/Codex.webp",
    seoimg: "/assets/images/seo/Codex.webp",
    link: "codex",
    showOnHome: true,
    apiDocs: "https://github.com/Jaagrav/Codex-API",
    tech: [
      "Docker",
      "ExpressJS",
      "React",
      "NodeJS",
      "MaterialUI",
      "Axios",
      "Firebase",
      "React-Ace",
      "UUID",
      "Node:child_process",
      "API",
    ],
    desc: "100+ stars on Github, my most popular project on Github, CodeX is an online compiler for various languages like Java, C++, Python, etc. Execute code in various languages on your own website for free with the CodeX API!!! You can share the codes' links that you write with your friends without being worried about them making any changes. CodeX stores all your code details on your device, which means every code that you write will only be editable on the device where you write you code in. Every Code shares a key that only your device and CodeX's backend know, so don't fear about others making any changes. Although there are ways to hack into others code and make changes but that's for you to find out. Once you find it out simply create an issue reporting the bug. No need to Sign In / Sign Up in order to execute and save your code. Every code automatically saves and updates in realtime so don't worry about losing it. It will always live in your computer unless you decide to clear your cache.",
  },
  {
    title: "Xper",
    miniDesc:
      "Xper is a realtime code editor where you can both write and save your code in realtime! The unique thing about Xper is it updates your deployed code in realtime, which means you can...",
    website: "https://xper.jaagrav.in/",
    github: "https://github.com/Jaagrav/Xper",
    img: "/assets/images/projects/Xper.webp",
    seoimg: "/assets/images/seo/Xper.webp",
    link: "xper",
    showOnHome: false,
    tech: [
      "React",
      "MaterialUI",
      "Axios",
      "Firebase",
      "SweetAlert2",
      "React-Ace",
    ],
    desc: "Xper is a realtime code editor where you can both write and save your code in realtime! The unique thing about Xper is it updates your deployed code in realtime, which means you can code on your computer and immediately be able to check how it looks like on your phone, tablet, and literally everywhere else. Xper is developed in React, which makes it a lightning fast code editor considering everything is being saved remotely.",
  },
  {
    title: "Fragments",
    miniDesc:
      "Fragments is a light weight code editor which supports multiple languages, store your code/snippets here for future use. In Fragments, you can create/edit/store code and snippets for future use...",
    website: "https://fragments.jaagrav.in/",
    github: "https://github.com/Jaagrav/Fragments",
    img: "/assets/images/projects/Fragments.webp",
    seoimg: "/assets/images/seo/Fragments.webp",
    link: "fragments",
    showOnHome: false,
    tech: ["AceJS", "jQuery", "Font-Awesome", "HTML", "CSS", "JavaScript"],
    desc: "Fragments is a prototype of Xper 2.0 which will allow you to code, execute and view them in RealTime on all platforms that you visit your website from. However in Fragments, you can create/edit/store code and snippets for future use. Fragments would soon become a text editor for PC and Mac after I implement electronjs into this project.",
  },
];

export default projectData;
