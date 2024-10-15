// Backend Expertise
import NodeIcon from "assets/devicon/node.svg?component";
import LaravelIcon from "assets/devicon/laravel.svg?component";
// Frontend Expertise
import VueIcon from "assets/devicon/vuejs.svg?component";
import NuxtIcon from "assets/devicon/nuxt.svg?component";
import BootstrapIcon from "assets/devicon/bootstrap.svg?component";
import JavascriptIcon from "assets/devicon/javascript.svg?component";
import TailwindCssIcon from "assets/devicon/tailwindcss.svg?component";
// Timeline
import Home from "assets/icons/home.svg?component";
import Academy from "assets/icons/academy.svg?component";

const author = {
    author_image: "/author.png",
    name: "Minhyuk Lee",
    position: "Web Developer",
    email: "kazesky93@gmail.com",
    location: "Seoul, South of Korea",
    github: "MinhyukLee-kor",
    socials: {
        twitter: "#",
        stackoverflow: "#",
        youtube: "#",
        linkedin: "#",
        facebook: "#",
        github: "#",
    },
    expertises: {
        "Frontend": [
            {
                name: "Bootstrap",
                icon: BootstrapIcon,
                description: "",
            },
            {
                name: "Tailwind",
                icon: TailwindCssIcon,
                description: "",
            },
            {
                name: "Javascript",
                icon: JavascriptIcon,
                description: "",
            },
            {
                name: "VueJS",
                icon: VueIcon,
                description: "",
            },
            {
                name: "Nuxt 3",
                icon: NuxtIcon,
                description: "",
            }
        ],
        "Backend": [
            {
                name: "Laravel",
                icon: LaravelIcon,
                description: "",
            },
            {
                name: "NodeJs",
                icon: NodeIcon,
                description: "",
            }
        ]
    },
    timeline: [
        {
            icon: Academy,
            currently: true,
            title: "Software Engineer at FANG",
            subtitle: "2018-Currently",
            description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        },
        {
            icon: Academy,
            title: "Freelancer",
            subtitle: "Released on December 7th, 2021",
            description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
        },
        {
            icon: Academy,
            title: "2013 - Dhaka University ",
            subtitle: "2013 - 2018",
            description: "Studied \"BSC in Computer Science and Engineering\" in Dhaka University.",
        },
        {
            icon: Home,
            title: "Born in 1996, July 27",
            subtitle: "Dhaka Bangladesh",
            description: "I couldn't remember any productive work in that time. But",
        }
    ],
};

export default author;
