import { Project } from "@/types/project";

const projectData: Project[] = [
  {
    id: 1,
    title: "Shop Linker ",
    description: {
      desc: "A Shop Linker eCommerce app leverages MongoDB for data storage, Express.js for server-side logic, React for a dynamic front-end, and Node.js for server-side operations.",
      lang: "React JS, Node JS, Express JS, CSS, HTML, JavaScript, Mongo DB",
    },
    github: "https://github.com/jasmeetsingh23/Shop-Linker---Online-App",
    image: "/images/shop.png",
    live: "https://jasmeetsingh-shoplinker.onrender.com/",
  },
  {
    id: 2,
    title: "Chat App",
    description: {
      desc: "Developed a comprehensive real-time chat application using the MERN stack to provide a seamless and interactive messaging experience.",
      lang: "React Js, Node JS, Socket.io, Mongo DB, Express JS",
    },
    github: "https://github.com/jasmeetsingh23/MERN-CHAT-APP",
    image: "/images/chat.jpeg.png",
    live: "https://jasmeetsingh-chatapp.onrender.com/",
  },
  {
    id: 3,
    title: "Twiller",
    description: {
      desc: "Twiller is a dynamic social networking app inspired by Twitter, powered by Firebase for seamless real-time updates and secure user authentication. ",
      lang: "React JS, Node Js, Express JS, Firebase, ES5",
    },
    github: "https://github.com/jasmeetsingh23/twiller-twitter-App",
    image: "/images/t.png",
    live: "https://twiller-twitterapp.netlify.app/",
  },
  {
    id: 4,
    title: "Figma",
    description: {
      desc: "A minimalistic Figma clone to show how to add real-world features like live collaboration with cursor chat, comments, reactions, and drawing designs (shapes, image upload) on the canvas using fabric.js..",
      lang: "Next JS, Typescript, Liveblocks, Fabric JS, Shadcn, Tailwind CSS ",
    },
    github: "https://github.com/jasmeetsingh23/figma_clone",
    image: "/images/f.png",
    live: "https://figma-clone-ashen-one.vercel.app/",
  },
];
export default projectData;
