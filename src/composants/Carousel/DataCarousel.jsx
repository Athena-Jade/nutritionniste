//import canoe from "../../assets/canoe.jpg";
//import paddle from "../../assets/paddle.jpg";
//import tyrolienne from "../../assets/tyrolienne.jpg";

//ces 3 images doivent être dans dossier public afin qu'ils s'affichent en deploiement
import canoe from "../../../public/canoe.jpg"
import paddle from "../../../public/paddle.jpg"
import tyrolienne from "../../../public/tyrolienne.jpg"

export const images={
  canoe,
  paddle,
  tyrolienne
}


export const DataCarousel = [
  {
    id:1,
    image: "canoe.jpg",
    title: "Faites une ballade en canoë,",
  },
  {
    id:2, 
    image: "tyrolienne.jpg",
    title: "Ou bien une descente en tyrolienne",
  },
  {
    id:3,
    image: "paddle.jpg",
    title: "A moins que vous préfériez le calme",
  }
  
];
