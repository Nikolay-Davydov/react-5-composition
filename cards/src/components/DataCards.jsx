import {nanoid} from 'nanoid'

const CARDS = [
    {
      id: nanoid(),
      img: "http://placehold.it/286x180",
      link: "#top",
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link_text: "Go somewhere",
    },
    {
      id: nanoid(),
      link: "#bottom",
      title: "Special title treatment",
      text: "With supporting text below as a natural lead-in to additional content.",
      link_text: "Tap here",
    }
  ];

export default CARDS;