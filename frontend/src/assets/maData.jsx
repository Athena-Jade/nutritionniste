import img_header from "./img_header.jpg";
import img_coach from "./coach.jpg";
import patiente from "./patiente.jpg"

import nutrition_micronutrition from "./nutrition_micronutrition.jpg";
import trouble_digestif from "./trouble_digestif.jpg";
import nutrition_sport from "./nutrition_sport.jpg";
import perte_poids from "./perte_poids.jpg";

import femme_dejeuner from "./femme_dejeuner.jpg";

import repas_leger1 from "./repas_leger1.jpg";
import repas_leger2 from "./repas_leger2.jpg";
import repas_leger3 from "./repas_leger3.jpg";
import repas_leger4 from "./repas_leger4.jpg";

import menu_avocat from "./menu_avocat.jpg";
import menu_bb from "./menu_bb.jpg";
import virtual_consult from"./virtual_consult.jpg"

import pic_1 from "./pic_1.png"
import pic_2 from "./pic_2.png"
import pic_3 from "./pic_3.png"

export const maData = {
  img_header,
  img_coach,
  patiente,

  menu_avocat,
  menu_bb,
  virtual_consult,

  nutrition_micronutrition,
  trouble_digestif,
  nutrition_sport,
  perte_poids,
  femme_dejeuner,

  repas_leger1,
  repas_leger2,
  repas_leger3,
  repas_leger4,
  pic_1,
  pic_2,
  pic_3
};

export const recette_list = [
  {
    _id: "1",
    nb_person: 2,
    menu_name: "Toast Avocat",
    menu_img: menu_avocat,
    temps_preparation: "5 mn",
    temps_cuisson: " 5 mn",
    ingred_1: " 2 tranches de pain de seigle",
    ingred_2: " 1 avocat",
    ingred_3: " 60g de feta",
    ingred_4: " 1/2 citron",
    ingred_5: " 2 cuillères à soupe de grenade",
    prep_1:
      " 1) Faire griller les tranches de pain de seigle au grille-pain pendant 5 mn",
    prep_2: " 2) Couper l'avocat en lamelles et les déposer sur le pain",
    prep_3:
      " 3) Émietter de la feta par-dessus et arroser avec du jus de citron",
    prep_4: " 4) Ajouter les graines de grenade et déguster",
  },

  {
    _id: "2",
    nb_person: 6,
    menu_name: "Breakfast Banana",
    menu_img: menu_bb,
    temps_preparation: "30 mn",
    temps_cuisson: "5 mn",
    ingred_1: " 2 bananes bien mûres",
    ingred_2: " 2 oeufs",
    ingred_3: " 200g de yaourt 0%",
    ingred_4: " 180g de farine",
    ingred_5: " 2 cuillères café levure chimique",
    
    prep_1: " 1) Écraser les bananes à la fourchette",
    prep_2: " 2) Ajouter les œufs et le yaourt et Bien mélanger",
    prep_3: " 3) Incorporer la farine, la levure et la cassonade",
    prep_4: " 4) Remuer jusqu'à l'obtention d'une préparation homogène",
  },
];

export const all_programme = [
  {
    id: "1",
    name: "Nutrition et micronutrition",
    img_programme: nutrition_micronutrition,
    description:
      "La nutrition est la base de notre santé, puisque les aliments ingérés ont un rôle essentiel au fonctionnement de notre organisme. La micronutrition permet de convenir aux besoins en micronutriments de chaque individu en passant par une alimentation variée et personnalisée.",
  },
  {
    id: "2",
    name: "Troubles digestifs",
    img_programme: trouble_digestif,

    description:
      "Les problèmes de mauvaise digestion sont causés le plus souvent par des facteurs externes : mauvaises habitudes alimentaires, repas copieux ou excès d'alcool. L'aérophagie (ingestion trop importante d'air lors d'un repas) peut également créer un grand inconfort et des éructations.",
  },
  {
    id: "3",
    name: "Nutrition du sport",
    img_programme: nutrition_sport,

    description: "Une alimentation saine et la pratique quotidienne du sport permettent d'acquéeir une excellente santé.",
  },
  {
    id: "4",
    name: "Perte de poids",
    img_programme: perte_poids,

    description:
      "La plupart du temps, la perte de poids survient parce que les personnes absorbent moins de calories que nécessaire. Elles peuvent absorber moins de calories parce que leur appétit a diminué ou parce qu'elles sont atteintes d'un trouble qui empêche leur tube digestif d'absorber des nutriments (appelé malabsorption).",
  },
];


export const faq =[
  {
    question:"Quel est le travail d'une nutritionniste?",
    answer:"Il connait parfaitement l'apport nutritionnel des aliments, leurs effets sur la santé et adapte l'alimentation du patient à ses besoins. Le rôle du nutritionniste, tout comme du diététicien, est de venir en aide aux personnes désirant perdre du poids ou souffrant de problèmes de santé liés à leur alimentation.",
  },
  {
    question:"Quel est le tarif d'une nutritionniste?",
    answer:"Le prix d'un médecin nutritionniste varie entre 26,50 € et 150 €, selon son secteur. Attention, seuls les médecins nutritionnistes sont pris en charge par la Sécurité sociale : à hauteur de 16,55 € (70% de la BRSS - 2 € de participation forfaitaire).",
  },
  {
    question:"Es-ce qu'il faut une ordonnance pour aller consulter une nutrionniste?",
    answer:"Les nutritionnistes font partie des médecins spécialistes. Le patient qui souhaite consulter un nutritionniste doit, dans le respect du parcours de soins, passer par son médecin traitant au préalable. A défaut (sauf exceptions), le patient sera moins bien remboursé de ses frais par l'Assurance maladie.",
  },
  {
    question:"Quand faut-il aller consulter une nutrionniste?",
    answer:"Vous pouvez directement consulter un médecin nutritionniste si vous avez une pathologie cardiovasculaire, si vous souhaitez une perte de poids ou si vous êtes atteint d'une maladie métabolique comme le cholestérol, le diabète ou la thyroïde.",
  },
  {
    question:"Comment se déroule une consultation nutritionniste?",
    answer:"En général, 1 heure est nécéssaire lors de la première consultation, d'un bilan, d'une séance d'accompagnements. Les consultations de suivi durent 1/2 heure. Ces durées indicatives peuvent être modifiées en fonction du motif de consultation."
  }
]

export const data_avis=[
  {
    id:"1",
    img_person:pic_1,
    name:"Valérie D",
    description:"Très bonne accueil, j'ai perdu 10 kg grâce au programme personnalisé",    
  },
  {
  id:"2",
    img_person:pic_2,
    name:"Arthur A",
    description:"Très satisfait des conseils et du programme personnalisé.",
   
  },
  
 { id:"3",
    img_person:pic_3,
    name:"Alice B",
    description:" Très bonne accueil, j'ai perdu 10 kg grâce au programme personnalisé"    
  },
]


export const data_qui=[
  {
    id:"1",
    img_qui:img_coach,
    name:"Marie Dupont",   
    diplome:"Nutritionniste diplômée en 2000",
    description:"J'exerce en libéral depuis 2005 sur tous les problèmes alimentations"
   
  }
]