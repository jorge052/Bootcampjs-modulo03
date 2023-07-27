import "./style.css";

interface GrupoMusical {
    nombre: string;
    cantante: string;
    compositor: string;
    anioFundacion: number;
    activo: boolean;
    genero: string;
  }

  // variables genero musical

  const PopRock = "Pop Rock 🎵";
const Rock = "Rock 🎸";
const HardRock = "Hard Rock 🤘";
const Clasica = "Clásica 🎼";


// grupos
  
  const TheBeatles: GrupoMusical =
    {
      nombre: "The Beatles",
      cantante: "John Lennon",
      compositor: "Paul McCartney",
      anioFundacion: 1960,
      activo: true,
      genero: `${PopRock}`,
    };

 const Queen: GrupoMusical = {
  nombre: "Queen",
  cantante: "Freddie Mercury",
  compositor: "Brian May",
  anioFundacion: 1970,
  activo: false,
  genero: `${Rock}`,
};

const Acdc: GrupoMusical = {
      nombre: "AC DC",
      cantante: "Brian Johnson",
      compositor: "Angus Young",
      anioFundacion: 1973,
      activo: true,
      genero: `${HardRock}`,
    };

    const Beethoven: GrupoMusical = {
      nombre: "Ludwig van Beethoven",
      cantante: "No aplica",
      compositor: "Ludwig van Beethoven",
      anioFundacion: 1770,
      activo: false,
      genero: `${Clasica}`,
    };

    const Rollingstones: GrupoMusical ={
      nombre: " The Rolling Stones",
      cantante: "Mick Jagger",
      compositor: "Keith Richards",
      anioFundacion: 1962,
      activo: true,
      genero: `${Rock}`,
    };

  console.log("%cTheBeatles", "color:black; font-size:18px; background: green;", TheBeatles);
  console.log("%cQueen", "color:black; font-size:18px; background: green;", Queen);
  console.log("%cAC DC", "color:black; font-size:18px; background: green;", Acdc);
  console.log("%cLudwig van Beethoven", "color:black; font-size:18px; background: green;", Beethoven);
  console.log("%cThe Rolling Stones", "color:black; font-size:18px; background: green;", Rollingstones);

  