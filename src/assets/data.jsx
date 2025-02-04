import detente from "./detente.jpg";
import home from "./home.jpg";
import air from "./air.jpg";
import eau from "./eau.jpg";
import terre from "./terre.jpg";

import ballon_dirigeable from "./ballon_dirigeable.jpg";
import camping from "./camping.jpg";
import canoe from "./canoe.jpg";
import paddle from "./paddle.jpg";
import saut_elastique from "./saut_elastique.jpg";
import tyrolienne from "./tyrolienne.jpg";
import velo from "./velo.jpg";
import parachute from "./parachute.webp";
import planche_voile from "./planche_voile.jpg";
import randonnee from "./randonnee.jpg";
import sky_nautique from "./sky_nautique.jpg";
import escalade from "./escalade.jpg";

import footer_bg from "./footer_bg.jpg";

export const imagerie = {
  home,
  air,
  eau,
  terre,

  ballon_dirigeable,
  camping,
  canoe,
  paddle,
  saut_elastique,
  tyrolienne,
  velo,
  parachute,
  planche_voile,
  randonnee,
  sky_nautique,
  escalade,

  detente,

  footer_bg,
};

export const menu_list = [
  {
    menu_name: "activité air",
    menu_image: air,
  },
  {
    menu_name: "activité eau",
    menu_image: eau,
  },

  {
    menu_name: "activité terre",
    menu_image: terre,
  },
];

export const list_loisirs = [
  {
    _id: "1",
    name: "Ballon dirigeable ",
    image: ballon_dirigeable,
    price: 80,
    details: "/pers",
    para: "Offrez-vous une balade en Montgolfière pour survoler de merveilleux paysages et admirer une vue splendide.",
    description:
      "Le prix comprend la ballade d'une durée 1 heure avec un guide expérimenté.",
    category: "activité air",
  },
  {
    _id: "2",
    name: "Camping",
    image: camping,
    price: 70,
    details: "/nuit",
    para: "Dormez sous nos tentes tout confort: optez pour un modèle autogonflant qui ne nécessite ni pompe, ni huile de coude.",
    description:
      "Le prix comprend la location de la tente ainsi que tout l'équipement nécessaire.",
    category: "activité terre",
  },
  {
    _id: "3",
    name: "Canoë",
    image: canoe,
    price: 50,
    details: "/canoë",
    para: "Faites une ballade en canoë et découvrer toutes les rivières, et lacs de la région. Un temps idéale à partir de mi-mars.",
    description: "Le prix comprend la location du canaoë pendant 1 heure.",
    category: "activité eau",
  },
  {
    _id: "4",
    name: "Paddle ",
    image: paddle,
    price: 50,
    details: "/pers",
    para: "Le Paddle est un sport de glisse en plein boom depuis plusieurs années maintenant, profitez.",
    description: "Le prix comprend la location du paddle durant 1 heure.",
    category: "activité eau",
  },
  {
    _id: "5",
    name: "Saut élastique",
    image: saut_elastique,
    price: 100,
    details: "/pers",
    para: "Découvrez les sensations fortes du saut à l’élastique depuis les plus beaux ponts et viaducs de France au meilleur prix",
    description: "Le prix comprend un saut par personne.",
    category: "activité air",
  },
  {
    _id: "6",
    name: "Tyrolienne",
    image: tyrolienne,
    price: 100,
    details: "/pers",
    para: "Laissez vous tenter par l'expérience unique de la tyrolienne géante. Dans les Vosges, les Alpes ou encore l'Auvergne.",
    description: "Le prix comprend une descente en tyrolienne par personne",
    category: "activité air",
  },

  {
    _id: "7",
    name: "Vélo",
    image: velo,
    price: 45,
    details: "/pers",
    para: "Faites une ballade en vélo dans la forêt ou sur les terrains escarpés en pleine nature pour vous ressoucer.",
    description: "Le prix comprend la location d'un vélo durant 1 heure.",
    category: "activité terre",
  },
  {
    _id: "8",
    name: "Escalade",
    image: escalade,
    price: 50,
    details: "/pers",
    para: "L’escalade sportive est un sport moderne, qui a rapidement gagné en popularité au cours des 20 dernières années.",
    description:
      "Le prix comprend la location du matériel avec un guide expérimenté.",
    category: "activité terre",
  },
  {
    _id: "9",
    name: "Parachute",
    image: parachute,
    price: 80,
    details: "/pers",
    para: "Sautez en parachute près des falaises, osez la voltige aérienne ou profitez d'un saut à l'élastique en duo ou solo.",
    description:
      "Le prix comprend un saut en parachute par personne avec un guide",
    category: "activité air",
  },
  {
    _id: "10",
    name: "Planche",
    image: planche_voile,
    price: 55,
    details: "/pers",
    para: "Pour pratiquer ce sport, il faut savoir nager et se maintenir en équilibre afin de faire avancer la planche.",
    description:
      "Le prix comprend la location de la planche à voile durant 1 heure",
    category: "activité eau",
  },
  {
    _id: "11",
    name: "Sky nautique",
    image: sky_nautique,
    price: 50,
    details: "/pers",
    para: "Sport nautique consistant à se déplacer sur l'eau à l'aide de skis, dont l'objectif est de maintenir son équilibre sur la planche.",
    description: "Le prix comprend la location du matériel pendant 1 heure.",
    category: "activité eau",
  },
];

export const liste_formules = [
  {
    id: 1,
    name: "Camping",
    image: camping,
  },
  {
    id: 2,
    name: "Randonnée",
    image: randonnee,
  },
  {
    id: 3,
    name: "Ballon dirigeable",
    image: ballon_dirigeable,
  },
  {
    id: 4,
    name: "Sky nautique",
    image: sky_nautique,
  },
];

export const nos_formules = [
  {
    id: 1,
    name: "Camping",
    image: camping,
    desc: "Louer une tente tout confort, et passer une nuit agréable au clair de lune.",
    price: 70,
    detail1: "/tente",
    detail2:
      "Le prix comprend la location de la tente ainsi que tout l'équipement nécessaire.",
  },
  {
    id: 2,
    name: "Randonnée",
    image: randonnee,
    desc: "Faites une randonnée et Partez à la découverte de somptueux paysages.",
    price: 50,
    detail1: "/pers",
    detail2:
      "Le prix comprend la randonnée avec un guide expérimenté par personne durant 2 heures.",
  },
  {
    id: 3,
    name: "Ballon dirigeable",
    image: ballon_dirigeable,
    desc: "Faites une ballade en ballon dirigeable et découvrez vue d'en haut notre base de loisirs.",
    price: 90,
    detail1: "/pers",
    detail2:
      "Le prix comprend la ballade en ballon dirigeable avec un guide durant 1 heure.",
  },
  {
    id: 4,
    name: "Sky nautique",
    image: sky_nautique,
    desc: "Surfer sur les lacs, sur la mer et apprécier les sensations.",
    price: 50,
    detail1: "/pers",
    detail2: "Le prix comprend la location du matériel durant 1 heure.",
  },
];

export const detente_texte = [
  {
    id: 1,
    para1:
      "D'autres activités vous attendent et nous sommes à votre entière disposition. N'hesitez pas à nous solliciter, il y a des formules pour tous les budgets.",
  },
  {
    id: 2,
    para2:
      "Notre base de loisirs est conçue pour vous immerger dans la splendeur de la nature tout en offrant un confort moderne et des services de qualité. Les restaurants et fastfoods sont ouverts jusqu'à 2 heures du matin. Partez vous ressourcer et créez des souvenirs inoubliables.",
  },
];



//carousel
export const DataCarousel = [
  {
    id:1,
    image: "../../../public/canoe.jpg",
    title: "Faites une ballade en canoë,",
  },
  {
    id:2,
    image: "../../../public/tyrolienne.jpg",
    title: "Ou bien une descente en tyrolienne",
  },
  {
    id:3,
    image: "../../../public/paddle_voile.jpg",
    title: "A moins que vous préfériez le calme",
  }
  
];

//paragraphe pour Header
export const ParaHeader =[
  {
    id:1,
    texte:"sur terre, mer ou dans l'air"              
  }
]