import princessPink from "../assets/princess-cake.png";
import budapest from "../assets/budapest.png";
import chocklad from "../assets/chocklad.png";
import chocklad2 from "../assets/chocklad-2.png";
import princessGreen from "../assets/marsipan.png";
import shrimpImg from "../assets/shrimp.jpg";
import coffeeAndBread from "../assets/coffee-and-bread.jpg";

export const cakeList = [
  {
    img: princessPink,
    name: "Princesstårta, rosa",
    link: "/princess-cake-pink",
  },
  {
    img: princessGreen,
    name: "Princesstårta, grön",
    link: "/princess-cake-green",
  },
  { img: budapest, name: "Budapest", link: "/budapest" },
  { img: chocklad, name: "Chockladtårta", link: "/chocolate-cake" },
  { img: chocklad2, name: "Chockladtårta, stor", link: "/chocolate-cake-2" },
];

export const campaignOne = {
  title: "Kaffe och räksmörgås 99:-",
  img: shrimpImg,
  description: "Vår dagsfärska räksmörgås med handskalade räkor, inkl. kaffe.",
  ingredients: ["Räkor", "Majonäs", "Gurka", "Tomat", "Sallad", "Bröd"],
};
export const campaignTwo = {
  title: "Kaffe med valfri bakelse 69:-",
  img: coffeeAndBread,
  description: "Valfri bakelse från vårt utbud inkl. kaffe.",
};
