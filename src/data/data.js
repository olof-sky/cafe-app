import cake from "../assets/princess-cake.png";
import shrimpImg from "../assets/shrimp.jpg";
import coffeeAndBread from "../assets/coffee-and-bread.jpg";

export const cakeList = [
  { img: cake, name: "Princesstårta, rosa", link: "/princess-cake" },
  { img: cake, name: "princess-cake2", link: "/princess-cake" },
  { img: cake, name: "princess-cake3", link: "/princess-cake" },
  { img: cake, name: "princess-cake4", link: "/princess-cake" },
  { img: cake, name: "princess-cake5", link: "/princess-cake" },
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
