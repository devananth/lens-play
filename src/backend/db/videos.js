import { v4 as uuid } from "uuid";

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    title: "HTML Tutorial for Beginners: HTML Crash Course",
    categoryName: "HTML",
    creator: "Programming with Mosh",
    creatorLogo:
      "https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s176-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://res.cloudinary.com/dhshzqkzm/image/upload/v1655310770/Lens%20Play/Thumbnails/mqdefault_uifzvq.jpg",
    description: "Learn HTML using this crash course",
    uploadedDate: new Date("Jan 11 2021 10:20:00"),
    views: "1.1M",
  },

  {
    _id: uuid(),
    title: "8 Must Know JavaScript Array Methods",
    categoryName: "Javascript",
    creator: "Web Dev Simplified",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s88-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://res.cloudinary.com/dhshzqkzm/image/upload/v1655312841/Lens%20Play/Thumbnails/mqdefault_qpeine.jpg",
    description:
      "Working with arrays in JavaScript used to be a pain with barely any support for complex array operations. Fast forward to today, though, and there are tons of amazing JavaScript array methods available to us. In this video I will be covering the 8 most important array methods in JavaScript.",
    uploadedDate: new Date("Feb 2 2019 10:20:00"),
    views: "674k",
  },
  {
    _id: uuid(),
    title: "HTML Full Course - Build a Website Tutorial",
    categoryName: "HTML",
    creator: "freeCodeCamp.org",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s88-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://res.cloudinary.com/dhshzqkzm/image/upload/v1655311889/Lens%20Play/Thumbnails/mqdefault_iybrvs.jpg",
    description:
      "Learn the basics of HTML5 and web development in this awesome course for beginners. ",
    uploadedDate: new Date("Sep 18 2018 10:20:00"),
    views: "1.67M",
  },
  {
    _id: uuid(),
    title: "React JS - React Tutorial for Beginners",
    categoryName: "React",
    creator: "Programming with Mosh",
    creatorLogo:
      "https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s176-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://res.cloudinary.com/dhshzqkzm/image/upload/v1655311702/Lens%20Play/Thumbnails/mqdefault_bxiava.jpg",
    description:
      "React JS Tutorial - Get up & running with React JS: the most popular JavaScript library in the world!",
    uploadedDate: new Date("Jul 16 2018 10:20:00"),
    views: "1.1M",
  },

  {
    _id: uuid(),
    title: "Learn JavaScript - Full Course for Beginners",
    categoryName: "Javascript",
    creator: "freeCodeCamp.org",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s88-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://res.cloudinary.com/dhshzqkzm/image/upload/v1655312176/Lens%20Play/Thumbnails/mqdefault_to4jvy.jpg",
    description:
      "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the JavaScript programming language",
    uploadedDate: new Date("Dec 10 2018 10:20:00"),
    views: "1.10M",
  },
  {
    _id: uuid(),
    title:
      "React Course - Beginner's Tutorial for React JavaScript Library [2022]",
    categoryName: "React",
    creator: "freeCodeCamp.org",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s88-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://res.cloudinary.com/dhshzqkzm/image/upload/v1655312320/Lens%20Play/Thumbnails/mqdefault_iuk7px.jpg",
    description:
      "Learn React by building eight real-world projects and solving 140+ coding challenges",
    uploadedDate: new Date("Jan 10 2022 10:20:00"),
    views: "145k",
  },

  {
    _id: uuid(),
    title: "Learn HTML Forms In 25 Minutes",
    categoryName: "HTML",
    creator: "Web Dev Simplified",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s88-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://res.cloudinary.com/dhshzqkzm/image/upload/v1655312677/Lens%20Play/Thumbnails/mqdefault_skx73p.jpg",
    description:
      "Data is key to the web, and the only way to collect data is HTML forms. In this video I will be covering absolutely everything you need to know about HTML forms in under 25 minutes. We will cover the main attributes of the form tag, how to create input elements with labels, and how to properly submit a form. This video is packed with every piece of information you need to know about HTML forms.",
    uploadedDate: new Date("Jun 18 2019 10:20:00"),
    views: "1.5M",
  },

  {
    _id: uuid(),
    title: "Learn CSS in 20 Minutes",
    categoryName: "CSS",
    creator: "Web Dev Simplified",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s88-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://res.cloudinary.com/dhshzqkzm/image/upload/v1655312538/Lens%20Play/Thumbnails/mqdefault_wpqklw.jpg",
    description:
      "In this video we will cover everything you need to know to get up and running with CSS in only 20 minutes. We will cover CSS syntax, how to add CSS to your HTML, CSS colors, CSS units, the box model, and best practices for CSS walking through a full example of CSS being used to style an HTML page. By the end of this video you will know enough about CSS to style any basic web pages in your own projects!",
    uploadedDate: new Date("Aug 23 2018 10:20:00"),
    views: "467k",
  },
  {
    _id: uuid(),
    title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
    categoryName: "Javascript",
    creator: "Programming with Mosh",
    creatorLogo:
      "https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s176-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://res.cloudinary.com/dhshzqkzm/image/upload/v1655311443/Lens%20Play/Thumbnails/mqdefault_w3yxo5.jpg",
    description:
      "JavaScript is one of the most popular programming languages in 2022. A lot of people are learning JavaScript to become front-end and/or back-end developers.",
    uploadedDate: new Date("Apr 24 2018 10:20:00"),
    views: "123k",
  },
  {
    _id: uuid(),
    title: "CSS Full Course - Includes Flexbox and CSS Grid Tutorials",
    categoryName: "CSS",
    creator: "freeCodeCamp.org",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s88-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://res.cloudinary.com/dhshzqkzm/image/upload/v1655312061/Lens%20Play/Thumbnails/mqdefault_dtzxjq.jpg",
    description:
      "Learn CSS in this complete tutorial course. Cascading Style Sheets (CSS) tell the browser how to display the text and other content that you write in HTML.",
    uploadedDate: new Date("Dec 17 2018 10:20:00"),
    views: "1.9M",
  },
];
