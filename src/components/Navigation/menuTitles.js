export const menuTitles = [
  {
    title: "Home",
    path : "/",
    submenu: [],
  },
  {
    title: "Create Character",
    path: "/createCharacter",
    submenu: [],
  },
  {
    title: "Load Full Character",
    path: "/loadCharacter",
    submenu: [],
  },  
  {
    title: "Load Refined Character",
    path: "/loadRefined",
    submenu: [],
  },  
  // {
  //   title: "Pre-made Characters",
  //   path: "/premadeCharacters",
  //   submenu: [],
  // },
  {
    title: "Pre-made Characters",
    path: "",
    submenu: [
      {
        title: "Henry's Class",
        path: "/henry",
        submenu: [],
      },
      {
        title: "Piratey Peeps",
        path: "/pirates",
        submenu: [],
      },      
    ],
  },
];
