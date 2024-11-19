import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    angular,
    reactjs,
    tailwind,
    git,
    nextjs,
    java,
    figma,
    labitech,
    agosti,
    openmarket,
    pccube,
    adamo,
    nicolaus,
    wfdesign,
    portfoliov1,
    threejs,
    disneyclone,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Angular Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Photographer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Developer",
      company_name: "Open Market",
      icon: openmarket,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - May 2023",
      points: [
        "Designing application systems from start to completion.",
        "Developing and maintaining web applications using Angular and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Testing and deploying ideas and results into reality.",
      ],
    },
    {
      title: "Java & Angular Native Developer",
      company_name: "Pc Cube",
      icon: pccube,
      iconBg: "#E6DEDD",
      date: "May 2023 - August 2023",
      points: [
        "Actively participated in a document management application, gaining hands-on experience in creating software solutions.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Gained a solid understanding of software development best practices and working methodologies, such as Agile and Scrum.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Labitech",
      icon: labitech,
      iconBg: "#E6DEDD",
      date: "August 2023 - Currently ongoing",
      points: [
        "Proficient in using programming languages to create efficient and scalable software solutions.",
        "Skilled in collaborating with cross-functional teams to analyze requirements and develop innovative software applications.",
        "Experience in developing and maintaining software apps for various industries.",
        "Debugging, optimizing, and maintaining codebases to ensure optimal performance and functionality.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He consistently delivers high-quality code and innovative solutions, making him a true asset to our team. Looking forward to continuing our work together.",
      name: "Andrea Agosti",
      designation: "CEO",
      company: "Labitech",
      image: agosti,
    },
    {
      testimonial:
      "Nico's proactive approach and rapid skill development significantly contributed to the success of our web development projects.",
      name: "Piergiorgio Adamo",
      designation: "Web Developer",
      company: "Pc Cube",
      image: adamo,
    },
    {
      testimonial:
      "Despite being relatively new to the industry, Nico's fresh perspective, quick learning, and innovative ideas made a significant impact on our projects.",
      name: "Pietro Nicolaus",
      designation: "Chief Delivery Officer",
      company: "Pc Cube",
      image: nicolaus,
    },
  ];
  
  const projects = [
    {
      name: "Disney Clone",
      description:
        "Developed an intuitive app for exploring and discovering Disney's rich collection of movies. Featuring a user-friendly interface, the app allows seamless navigation through various genres, from timeless animated classics to Pixar favorites and the latest Marvel blockbusters.",
      tags: [
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "microsoft azure",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: disneyclone,
      source_code_link: "https://github.com/NicoloTrombin/disney-clone",
      live_preview: "https://disneyclone-nicolotrombin.vercel.app/"
    },
    {
      name: "Portfolio V1",
      description:
      "Crafted the first iteration of my personal portfolio with a clean, modern design enhanced by smooth transitions and engaging animations. Built using Angular for dynamic functionality and HTML/CSS for precise structure and styling, delivering a polished and visually appealing user experience.",
      tags: [
        {
          name: "angular",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: portfoliov1,
      source_code_link: "https://github.com/NicoloTrombin/Portfolio",
      live_preview: "https://portfolio-nicolotrombin1.vercel.app"
    },
    {
      name: "WF Design + Build",
      description:
      "A sleek, user-friendly website showcasing a home renovation service, emphasizing modern aesthetics, seamless navigation, and detailed service presentations to inform and engage potential clients.",
      tags: [
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: wfdesign,
      source_code_link: "https://github.com/NicoloTrombin/Design-Build",
      live_preview: "https://wf-design.vercel.app"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };