import shopping from "../images/shopping.png";
import crypto from "../images/crypto.png";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: shopping,
    category: "Web Design",
    title: "Shopping Cart",
    description:
      "In this project, using the api that I got from the website https://fakestoreapi.com/, it is possible to add and remove desired products to the shopping cart, as well as the settlement of the account, just like a real store.",
    technologies: ["React", "Tailwind css", "َRest Api", "Responsive"],
    siteUrl: "https://shoppingcartreza.netlify.app/",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "Ux",
    title: "Video Conference Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: crypto,
    category: "ux",
    title: "Display changes of digital currencies",
    description:
      "In this project, the image, name, 24-hour changes, percent of changes and the current price of currencies are displayed to the user using the api that we got from the coingecko site.",
    technologies: ["React","Rest Api"],
    siteUrl: "https://cryptoreza.netlify.app/",
  },
  {
    id: "04",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Ux",
    title: "Online Therapy Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Web Design",
    title: "Appointment Booking Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "08",
    imgUrl: shopping,
    category: "Web Design",
    title: "Shopping Cart",
    description:
      "In this project, using the api that I got from the website https://fakestoreapi.com/, it is possible to add and remove desired products to the shopping cart, as well as the settlement of the account, just like a real store.",
    technologies: ["React", "Tailwind css", "َRest Api", "Responsive"],
    siteUrl: "https://shoppingcartreza.netlify.app/",
  },
  {
    id: "09",
    imgUrl:crypto,
    category: "Ux",
    title: "Video Conference Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "10",
    imgUrl: portfolioImg03,
    category: "Ux",
    title: "File Sharing Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "11",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "12",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "13",
    imgUrl: portfolioImg06,
    category: "Web Design",
    title: "Online Therapy Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "14",
    imgUrl: portfolioImg07,
    category: "ux",
    title: "Appointment Booking Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
];

export default portfolios;
