export type Frontier = {
  name: string;
  city: string;
  speciality:
    | "Frontend"
    | "Backend"
    | "Fullstack"
    | "Backendskägg"
    | "Frontend & WCAG";
  yearsOfExperience: number;
  yearsAtForefront: number;
  assignment?: string;
  hobbies?: string[];
  avatarUrl?: string;
};

const Frontiers: Frontier[] = [
  {
    name: "Johan Olsson",
    city: "Stockholm",
    yearsOfExperience: 8,
    yearsAtForefront: 8,
    hobbies: ["Utöva sport", "Titta på sport", "Dricka öl"],
    speciality: "Fullstack",
    assignment: "Ericsson",
    avatarUrl: "https://avatars.githubusercontent.com/u/748252?v=4"
  },
  {
    name: "Julius Naski",
    city: "Stockholm",
    yearsOfExperience: 1,
    yearsAtForefront: 0.5,
    hobbies: ["Det goda i Livet", "Musik", "Formel 1", "Automation"],
    speciality: "Frontend",
    avatarUrl:
      "https://cdn.shopify.com/s/files/1/0210/2968/3222/files/image17.jpg?v=1646429188"
  },
  {
    name: "Kristian Andreassen",
    city: "Stockholm/Sundsvall",
    yearsOfExperience: 9,
    yearsAtForefront: 6.5,
    hobbies: ["Natur", "Gaming", "Musik", "Öl", "Brädspel", "Innebandy"],
    speciality: "Backendskägg",
    assignment: "Bonava",
    avatarUrl: "https://i.ibb.co/tQzCbbH/image.png"
  },
  {
    name: "Michael Enzell",
    city: "Västerås",
    yearsOfExperience: 5,
    yearsAtForefront: 1,
    hobbies: ["Klättring", "Surdeg / surdegsbröd", "Öl"],
    speciality: "Frontend",
    assignment: "Ericsson",
    avatarUrl: "https://hip2save.com/wp-content/uploads/2020/03/He-Man.jpg"
  },
  {
    name: "Marcus Azara",
    city: "Västerås",
    yearsOfExperience: 4.5,
    yearsAtForefront: 0,
    hobbies: ["kortdistanslöpning", "Tv", "Lyssna på music"],
    speciality: "Frontend",
    avatarUrl:
      "https://www.kindpng.com/picc/m/576-5768791_avatar-png-image-with-transparent-background-ninja-avatar.png"
  },
  {
    name: "Annelie Viklund",
    city: "Köping/Stockholm",
    yearsOfExperience: 4,
    yearsAtForefront: 0,
    hobbies: ["Tv-spel", "Plugga språk", "Vinprovning"],
    speciality: "Frontend & WCAG",
    assignment: "Bonava",
    avatarUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51GFIhASyPL.jpg"
  },
  {
    name: "Tia Maria Afsenius",
    city: "Stockholm",
    yearsOfExperience: 3,
    yearsAtForefront: 0,
    hobbies: ["Barnen och dess aktiviteter", "Lyfta tungt"],
    speciality: "Backend"
  },
  {
    name: "Benny Lam",
    city: "Stockholm",
    speciality: "Frontend",
    yearsOfExperience: 4,
    yearsAtForefront: 2,
    hobbies: ["Klättring", "BJJ", "Bachata/Salsa", "Mat"],
    avatarUrl: "https://avatars.githubusercontent.com/u/4319054?v=4"
  },
  {
    name: "Hanna Abrahamsson",
    city: "Stockholm",
    speciality: "Frontend",
    yearsOfExperience: 1.5,
    yearsAtForefront: 0,
    hobbies: ["virka", "golf", "street dance"]
  },

  {
    name: "Fredrik Hammar",
    city: "Stockholm",
    speciality: "Fullstack",
    yearsOfExperience: 3,
    yearsAtForefront: 1,
    assignment: "Bänkad",
    hobbies: ["Löpning", "Golf", "Fotboll", "ps5"],
    avatarUrl:
      "https://www.tradeinn.com/f/13852/138526319/good-smile-figur-crash-bandicoot-nendoroid-its-about-time-12-cm.jpg"
  },
  {
    name: "Hanna Edlund",
    city: "Stockholm",
    assignment: "Avtalat",
    yearsOfExperience: 1,
    yearsAtForefront: 1,
    hobbies: [
      "Klättring",
      "Möbelrestaurering",
      "Vandring",
      "Skidåkning",
      "Brädspel"
    ],
    speciality: "Frontend"
  },
  {
    name: "Lina Lin",
    city: "Stockholm",
    yearsOfExperience: 1,
    yearsAtForefront: 1,
    hobbies: ["Foto", "Resa", "Mat", "Skidor"],
    speciality: "Frontend",
    assignment: "Sveriges a-kassor"
  },
  {
    name: "Jesper Orb",
    city: "Uppsala",
    yearsOfExperience: 6,
    yearsAtForefront: 0.5,
    hobbies: ["🥘", "🍸", "🎮"],
    speciality: "Frontend",
    assignment: "SJ"
  },
  {
    name: "Nima Alikhani",
    city: "Stockholm",
    assignment: "Ericsson",
    yearsOfExperience: 13,
    yearsAtForefront: 2,
    hobbies: ["Inget"],
    speciality: "Fullstack"
  }
];

export default Frontiers;
