const projectData = [
  {
    title: "CoinHub - Crypto Price Tracking",
    miniDesc:
      "CoinHub is a React crypto price tracking application that uses CoinGecko API to display data in charts, has a watchlist feature and allows for email/password and social login for user convenience. Click 'learn more' below for a complete description.",
    website: "https://coinhub7.netlify.app/",
    github: "https://github.com/bfrisbyh92/crypto-prices",
    img: "/assets/images/projects/coinhub.webp",
    seoimg: "/assets/images/projects/coinhub.webp",
    link: "crypto-prices",
    showOnHome: true,
    tech: [
      "React.js",
      "Chart.js",
      "Tailwind CSS",
      "Axios",
      "CoinGeckoAPI",
      "Firebase's Analytics",
      "Firebase's Firestore",
      "Firebase's Authentication",
      "Babel",
    ],
    desc: "CoinHub is a React-based crypto price tracking application that allows users to track the prices of various cryptocurrencies. The application pulls data from the CoinGecko API and uses Chart.js to create various charts that display the price data over different time periods, such as 24 hours, 30 days, 6 months, and 1 year. These charts are similar to those found on popular crypto exchanges like Coinbase. The application also includes a watch list feature that allows users to add or remove coins from their list, and Firebase's Firestore is used to save these lists. Additionally, CoinHub includes email/password authentication as well as social login options for user convenience.",
  },
  {
    title: "GoodTimes - MERN Social Media App",
    miniDesc: "MERN social media app with full CRUD, pagination, authentication, authorization using JSON web tokens and Material UI CSS. Built using MERN stack and clocked over 55 hours inside VScode over about 30 days.(Tracked with WakaTime).",
    website: "https://goodtimes7.netlify.app/",
    github: "https://github.com/bfrisbyh92/GoodTimes",
    img: "/assets/images/projects/goodtimes.webp",
    seoimg: "/assets/images/projects/goodtimes.webp",
    link: "goodtimes",
    showOnHome: true,
    tech: [
      "React.js",
      "Full-CRUD",
      "JSON Web Tokens",
      "Material-UI CSS",
      "Authorization",
      "Authentication",
      "Social Logins",
      "Axios",
    ],
    desc: "A social media application for sharing good moments built using the MERN stack, which allows users to perform full CRUD operations on posts, including likes, comments, edits, and deletions. The app includes pagination, authentication and authorization using JSON web tokens, and a Material-UI for CSS. The project was tracked using VScode/WakaTime and took over 55 hours, roughly 30 days, to complete. The goal of this project was to build a fully functional social media app using the MERN stack, as opposed to relying on cloud-based services like Firebase or AWS. The objective was to challenge myself to create the same functionality and I am proud of completing it. It was a great opportunity for growth and learning, as I had never worked with authorization or JSON web tokens at the time of creation.",
  },
  {
    title: "Kryptlow - Solidity Smart Contract",
    miniDesc: "A React-Web3 app with built-in Ethereum blockchain connection through a Solidity smart contract, styled with Tailwind CSS, and a built in feature which allows users to send GIPHY along with crypto transactions and store it on the blockchain. Made using the Rinkeby test networks ERC-20 tokens, on the Ethereum blockchain.",
    website: "https://kryptlow.netlify.app/",
    github: "https://github.com/bfrisbyh92/Kryptlow",
    img: "/assets/images/projects/kryptlow.webp",
    seoimg: "/assets/images/projects/kryptlow.webp",
    link: "kryptlow",
    showOnHome: false,
    tech: [
      "React.js",
      "Solidity Smart Contract",
      "Rinkeby Test Network(ETH)",
      "Ethereum Blockchain",
      "Tailwind CSS",
      "Firebase",
      "GIPHY API",
      "Axios",
      "React-Multi-Carousel",
    ],
    desc: "A React-based Web3 application that connects to the Ethereum blockchain through a Solidity smart contract, allowing users to interact with the blockchain. The app is designed with Tailwind for the CSS and allows users to send a GIPHY along with their crypto transactions, which are then stored on the blockchain. This is achieved by pulling GIFs from the GIPHY API. The app was built on the Rinkeby test network, but can also be used on other networks. This project was created for fun in June 2022 just to explore a bit of the Web3. It was a tutorial project, but still fun learning how to write a Solidity smart contract and seeing that execute. Outside of that this app doesn't have much functionality, it was a project for learning, a tutorial project and served it's purpose.",
  },
  {
    title: "Uber Clone - React Native Mobile App",
    miniDesc:
      "A clone of the Uber app built with React, Redux, Google's API's(Places, Matrix, Autocomplete, and Maps), and Tailwind.CSS. It is configured for both Apple and Android Maps, with features such as address search, distance and price calculation. Almost identical to a 2011 version of Uber app, built for fun and to challenge myself.",
    website: "https://expo.dev/@bfrisbyh92/uber-clone",
    github: "https://github.com/bfrisbyh92/uber-clone",
    img: "/assets/images/projects/uber.webp",
    seoimg: "/assets/images/projects/uber.webp",
    link: "uber",
    showOnHome: true,
    apiDocs: "https://github.com/bfrisbyh92/uber-clone",
    tech: [
      "React-Native",
      "Redux",
      "Tailwind CSS",
      "Google API's(4)",
      "Expo",
      "Firebase",
      "Axios",
      "React Native Maps",
      "Node.js",
    ],
    desc: "A clone of the passenger-facing Uber app built using React and Redux, for state management. The app is designed using Tailwind for the CSS, and it is configured for both Apple and Android Maps. The app utilizes Google's Autocomplete and Places API for address searches, and Google's Matrix-Distance API to calculate the price and distance between two places. The price and distance calculation is done through Redux. This project is a replica of the Uber app, and it demonstrates the developer's ability to use various technologies, such as Google's APIs, Redux and Tailwind.CSS, to create a functional and visually appealing user interface. I had a great time working on this build and learned a lot. I'm developing a love for React-Native builds as they allow for quick creation of mobile apps on all platforms with tools like Expo or Flutter. It's powerful to be able to code once and have builds produced on web, Android, and Apple from that one codebase. However, like anything, there are advantages and disadvantages to this approach. I use it when it's the right tool for the job and am grateful for its availability.",
  },
  {
    title: "Python Proxy-Script",
    miniDesc:
      "This project is a script I made so I could run it as a cron job on my computer. What is does is curl a list of fresh proxies that are updated multiple times a day from Github. I then use Python to format those proxies and create a proxychains configuration file. The end result is 2 proxychains configuration files, a list of 3,000 socks4/http fresh proxies added to the file, and ready to be used with proxychains. I made this so I never have to manually do that again. I also added some style to the script with Colorama and Pyfiglet packages.",
    website: "https://github.com/bfrisbyh92/Proxy-Script",
    github: "https://github.com/bfrisbyh92/Proxy-Script",
    img: "/assets/images/projects/proxy.png",
    seoimg: "/assets/images/projects/proxy.png",
    link: "proxy-script",
    showOnHome: false,
    tech: [
      "Python",
      "OS",
      "Subprocesses",
      "Pip",
      "Pyfiglet",
      "Colorama",
    ],
    desc: "This project is a script I made so I could run it as a cron job on my computer. What is does is curl a list of fresh proxies that are updated multiple times a day from Github. I then use Python to format those proxies and create a proxychains configuration file. The end result is 2 proxychains configuration files, a list of 3,000 socks4/http fresh proxies added to the file, and ready to be used with proxychains. I made this so I never have to manually do that again. I also added some style to the script with Colorama and Pyfiglet packages. This was a project that evolved naturally over time. It started as a script to format proxies and I would run it when I needed. I added some style and packaged it up because it's useful.",
  },
  {
    title: "Deliveroo - React-Native Mobile App",
    miniDesc:
      "I built a food delivery app using React-Native, Redux, Sanity.io, and Tailwind.css. The app allows users to search and select restaurants, build a shopping cart, and request delivery. It has a clean UI and user-friendly experience. I built this after Uber, very similiar and it was a quick project.",
    website: "https://expo.dev/@bfrisbyh92/deliveroo_Clone?serviceType=classic&distribution=expo-go",
    github: "https://github.com/bfrisbyh92/food-delivery-app",
    img: "/assets/images/projects/deliveroo.webp",
    seoimg: "/assets/images/projects/deliveroo.webp",
    link: "deliveroo",
    showOnHome: false,
    tech: [
      "React-Native",
      "Expo",
      "Redux State Management",
      "Sanity.io CMS",
      "Tailwind CSS",
      "React-Native-Elements",
      "Hero-Icons",
    ],
    desc: "I built a food delivery application using React-Native and Redux for state management, as well as Sanity.io for a Content management system. The app's user interface was styled with Tailwind.css and React-Native Elements, creating a visually appealing and easy-to-use experience. Users can search and select a restaurant, build a shopping cart with the items they want, and request a delivery.",
  },
  {
    title: "ZSH-Configs",
    miniDesc:
      "This is just my ZSH config file, shared on Github. It just has custom aliases, functions, mac networking, a ton of plugins, add-ons, etc. It's always changing.",
    website: "https://github.com/bfrisbyh92/best-zsh-configs",
    github: "https://github.com/bfrisbyh92/best-zsh-configs",
    img: "/assets/images/projects/zsh.webp",
    seoimg: "/assets/images/projects/zsh.webp",
    link: "zsh-configs",
    showOnHome: false,
    tech: [
      "Python",
      "OS",
      "Subprocesses",
      "Pip",
      "Crontabs",
      "Mac OS",
    ],
    desc: "This is just my ZSH config file, shared on Github. It just has custom aliases, functions, mac networking, a ton of plugins, add-ons, etc. It's always changing.",
  },
  {
    title: "Portolio2",
    miniDesc:
      "I created my second portfolio using React, Sanity.io, Font-Awesome, Material-UI and Framer Motion for some advanced animations. This project helped improve my skills using Sanity as a backend and creating a visually pleasing UI.",
    website: "https://brendanfrisby.netlify.app/",
    github: "https://github.com/bfrisbyh92/frontend_portfolio",
    img: "/assets/images/projects/oldPortfolio.webp",
    seoimg: "/assets/images/projects/oldPortfolio.webp",
    link: "second-portfolio",
    showOnHome: false,
    tech: [
      "React",
      "Sanity.io CMS",
      "Font-Awesome",
      "Material-UI CSS",
      "Framer Motion Animations",
      "Redux",
    ],
    desc: "I created my second portfolio as a project to improve my skills in using Sanity.io and creating a visually pleasing user interface. It was built using React, Sanity.io for the CMS, Font-Awesome, Material-UI and advanced animations. This project was fundamental in helping me better understand how to use Sanity and create a nice UI. I spent a lot of time working on it and I'm proud of the final result. It was a great learning experience and it showcase my abilities in using those technologies.",
  },
  {
    title: "Portolio3",
    miniDesc:
      "Third Portfolio. ",
    website: "https://brendanhayesfrisby.netlify.app/",
    github: "https://github.com/bfrisbyh92/2022portfolio",
    img: "/assets/images/projects/portfolio3.webp",
    seoimg: "/assets/images/projects/portfolio3.webp",
    link: "third-portfolio",
    showOnHome: false,
    tech: [
      "React",
      "Advanced Animations",
      "Animate CSS",
      "Bootstrap CDN",
    ],
    desc: "My third portfolio, which is quickly switched to another. It was still a fun project to work on and worth a mention.",
  },
  {
    title: "Signal Clone - React-Native Mobile App",
    miniDesc:
      "This project is a tutorial that uses Firebase and Expo to create a chat room style mobile app using React-Native. It is different from what was expected when I began the tutorial, as it does not include features such as direct messaging, encryption, and auto-delete timers. However, the project serves as a learning experience for me, I stopped doing tutorials after this. They are only helpful up until a point, and I think I have past that point where I can continue to see them as helpful to me.",
    website: "https://brendanhayesfrisby.netlify.app/",
    github: "https://github.com/bfrisbyh92/2022portfolio",
    img: "/assets/images/projects/signal.png",
    seoimg: "/assets/images/projects/signal.png",
    link: "signal-clone",
    showOnHome: false,
    tech: [
      "React",
      "Advanced Animations",
      "Animate CSS",
      "Bootstrap CDN",
    ],
    desc: "This project is a tutorial that uses Firebase and Expo to create a chat room style mobile app using React-Native. It is different from what was expected when I began the tutorial, as it does not include features such as direct messaging, encryption, and auto-delete timers. However, the project serves as a learning experience for me, I stopped doing tutorials after this. I have some new Python Projects coming soon, I was busy doing the eJPT certification for 2 months but now that it's over I am preparing some interesting Python scripts and automation tools. Some projects mostly done and will be added soon.",
  },
];

export default projectData;
