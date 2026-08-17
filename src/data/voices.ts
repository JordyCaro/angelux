export type Voice = {
  name: string;
  quote: string;
};

export const voices: Voice[] = [
  {
    name: "Gabriela Tilmans",
    quote: "Casi llego a ver a yisus pero todo bien, lugar de trabajo limpio y profesional",
  },
  {
    name: "John Jairo Palacio",
    quote: "Quedé super contento. Estoy pensando en mi próximo tatuaje",
  },
  {
    name: "Yeison Henao",
    quote: "El pana es el mejor. Es un artista, disciplinado, responsable y da lo mejor de sí",
  },
  {
    name: "Jarol Gonsalez",
    quote: "Excelente lugar, fácil de llegar y el ambiente muy acogedor",
  },
  {
    name: "Mariana Mejía",
    quote: "Excelentes trabajos, muy pulido",
  },
  {
    name: "Alejandro Ángel Isaza",
    quote: "Excelente resultado, un gran trabajo",
  },
  {
    name: "Daniel Villarreal",
    quote: "Un crack, el mejor tatuador",
  },
  {
    name: "Kevin Felipe Palacio",
    quote: "Jonathan en todo momento fue muy atento y disciplinado a la hora de hacerme el tatuaje",
  },
  {
    name: "Esteban Buitrago",
    quote: "Me encanta, muy profesional, excelente trabajo y un gran artista",
  },
];

export const voiceRows: Voice[][] = [
  [voices[0], voices[3], voices[6]],
  [voices[1], voices[4], voices[7]],
  [voices[2], voices[5], voices[8]],
];
