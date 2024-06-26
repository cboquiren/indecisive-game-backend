const platformsList = ["PC", "Mobile", "Xbox", "PlayStation", "Switch"];

const developersList = [
  "Riot Games",
  "Mojang Studios",
  "Valve Corporation",
  "Bethesda Game Studios",
  "Psyonix",
  "Innersloth",
  "Rockstar Games",
  "ConcernedApe",
  "Epic Games",
  "Sledgehammer Games",
  "Larian Studios",
  "Blizzard Entertainment",
  "Wizards of the Coast LLC",
  "Team17",
  "Avalanche Software",
  "Maxis",
  "Nintendo",
  "Tarsier Studios",
  "EA (Electronic Arts)",
  "Naughty Dog",
  "Ubisoft",
];

const genresList = [
  "MOBA",
  "Strategy",
  "Co-op",
  "RPG",
  "Sandbox",
  "Open-World",
  "Survival",
  "Exploration",
  "Fighting",
  "Adventure",
  "Multiplayer",
  "Action",
  "Sports",
  "Simulation",
  "Battle-Royale",
  "Shooter",
  "Card",
  "Fantasy",
  "Puzzle",
  "FPS",
];

const gamesList = [
  {
    name: "League of Legends",
    description:
      "League of Legends is a team-based multiplayer online battle arena game where two teams of five players compete to destroy each other's Nexus, controlling unique champions with diverse abilities and strategically navigating a map filled with lanes, structures, and neutral objectives.",
    image: "https://howlongtobeat.com/games/5203_League_of_Legends.jpg",
    developer: "Riot Games",
  },
  {
    name: "Minecraft",
    description:
      "Minecraft is an open-world sandbox game where players explore, build, and survive in a blocky, procedurally generated world. It offers creative freedom, allowing players to gather resources, craft tools, construct structures, and encounter various creatures while shaping the world according to their imagination.",
    image:
      "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg",
    developer: "Mojang Studios",
  },
  {
    name: "The Elder Scrolls V: Skyrim",
    description:
      "The Elder Scrolls V: Skyrim is an open-world action role-playing game set in a vast and immersive fantasy world. Players assume the role of the Dragonborn, a prophesized hero, and embark on an epic journey filled with exploration, quests, combat, and the ability to shape their character's destiny through various choices and abilities like magic, combat skills, and character development.",
    image: "https://s.pacn.ws/1/p/mu/the-elder-scrolls-v-skyrim-411465.10.jpg?v=rlr4k6&width=",
    developer: "Bethesda Game Studios",
  },
  {
    name: "Counter-Strike 2",
    description:
      "Counter-Strike: Global Offensive (CS:GO) is a popular team-based first-person shooter where players join either terrorist or counter-terrorist teams, engaging in objective-based matches involving tasks like planting/defusing bombs or rescuing/capturing hostages. The game emphasizes tactical gameplay, teamwork, weapon strategy, and precise aiming skills across various maps and game modes.",
    image:
      "https://preview.redd.it/recreated-counter-strike-2-cover-using-official-assets-from-v0-2aje85n5k0sa1.png?auto=webp&s=5ad5480488e615d759cc3eacf04e87e64f12e02e",
    developer: "Valve Corporation",
  },
  {
    name: "Grand Theft Auto V",
    description:
      "Grand Theft Auto V (GTA V) is an action-adventure game set in the fictional state of San Andreas, following the lives of three criminals as they execute heists and navigate a sprawling open-world environment filled with missions, activities, and diverse gameplay experiences.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/035e5912317673.562666e58b958.jpg",
    developer: "Rockstar Games",
  },
  {
    name: "Rocket League",
    description:
      "Rocket League is a fast-paced sports game that combines soccer with rocket-powered cars. Players control cars, attempting to score goals by hitting a giant ball into the opposing team's net while performing acrobatic maneuvers and utilizing boosts for speed and agility.",
    image: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/e4e4005042cf598805d581754fe9256f.png",
    developer: "Psyonix",
  },
  {
    name: "Among Us",
    description:
      "Among Us is a multiplayer social deduction game where players work together on a spaceship, completing tasks while attempting to identify impostors among them through discussion, deception, and strategic voting.",
    image:
      "https://www.gameinformer.com/sites/default/files/styles/product_box_art/public/2021/12/03/c8dff978/amongus.jpg",
    developer: "Innersloth",
  },
  {
    name: "Stardew Valley",
    description:
      "Stardew Valley is a farming simulation game where players inherit and cultivate a farm, interact with villagers, explore caves, fish, mine, and build relationships while managing their time and resources.",
    image: "https://howlongtobeat.com/games/34716_Stardew_Valley.jpg",
    developer: "ConcernedApe",
  },
  {
    name: "Fortnite",
    description:
      "Fortnite is a popular battle royale game where players fight to be the last one standing in a constantly shrinking arena, building structures and using various weapons and tactics to outlast opponents.",
    image:
      "https://assetsio.reedpopcdn.com/co2ekt.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    developer: "Epic Games",
  },
  {
    name: "Dota 2",
    description:
      "Dota 2 is a multiplayer online battle arena (MOBA) game where two teams of five players select unique heroes with distinct abilities, working together to destroy the enemy's Ancient while strategizing, farming resources, and engaging in team fights.",
    image: "https://thumbnails.pcgamingwiki.com/d/db/Dota_2_cover.jpg/300px-Dota_2_cover.jpg",
    developer: "Valve Corporation",
  },
  {
    name: "Call of Duty: Modern Warfare 3 (2023)",
    description:
      "Modern Warfare 3 is a first-person shooter game set in a modern-day conflict, offering a single-player campaign mode as well as multiplayer modes featuring fast-paced combat and various customization options.",
    image: "https://i.imgur.com/hZhDm7Kl.png",
    developer: "Sledgehammer Games",
  },
  {
    name: "Baldur's Gate 3",
    description:
      "Baldur's Gate 3 is a role-playing game set in the Dungeons & Dragons universe, featuring a rich narrative, character customization, party-based adventuring, and turn-based combat in a detailed fantasy world.",
    image:
      "https://preview.redd.it/new-game-cover-from-larians-website-v0-m2lmw222h0ka1.png?auto=webp&s=ba904ad42906960a96a70ce1c27ee6d3ff5edead",
    developer: "Larian Studios",
  },
  {
    name: "Overwatch 2",
    description:
      "Overwatch 2 is a team-based multiplayer first-person shooter with cooperative and competitive gameplay, focusing on hero-based combat, objective-based missions, and various game modes while expanding the lore of the Overwatch universe.",
    image:
      "https://thumbnails.pcgamingwiki.com/3/3b/Overwatch_2_cover.jpg/300px-Overwatch_2_cover.jpg",
    developer: "Blizzard Entertainment",
  },
  {
    name: "Hearthstone",
    description:
      "Hearthstone is a digital collectible card game where players build decks and engage in strategic card-based battles using heroes from the Warcraft universe, aiming to outsmart opponents through tactical card play.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTg2MTg1OTMtODQwZS00YzA0LWJlMmQtODMyMGExYjUzOGNhXkEyXkFqcGdeQXVyMzA2NzA3NjQ@._V1_.jpg",
    developer: "Blizzard Entertainment",
  },
  {
    name: "Magic: The Gathering Arena",
    description:
      "Magic: The Gathering is a collectible card game where players build decks using various spells, creatures, and artifacts to engage in strategic duels, casting spells and summoning creatures to defeat opponents by reducing their life total to zero.",
    image: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/d00c6ccf7093bca0fbeb161823f193b6.png",
    developer: "Wizards of the Coast LLC",
  },
  {
    name: "Overcooked 2",
    description:
      "Overcooked 2 is a chaotic cooking simulation game where players work together in a kitchen to prepare and serve orders under increasingly challenging conditions and obstacles, requiring coordination, communication, and multitasking to succeed and avoid culinary disasters.",
    image:
      "https://assetsio.reedpopcdn.com/co1usu.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    developer: "Team17",
  },
  {
    name: "Hogwarts Legacy",
    description:
      "Hogwarts Legacy is an action role-playing game set in the wizarding world of Harry Potter, allowing players to attend Hogwarts School of Witchcraft and Wizardry in the 1800s, explore its magical grounds, learn spells, brew potions, and embark on an epic adventure while uncovering the mysteries of the wizarding world.",
    image: "https://portkeygamessupport.wbgames.com/hc/article_attachments/11140924030355",
    developer: "Avalanche Software",
  },
  {
    name: "The Sims 4",
    description:
      "The Sims 4 is a life simulation game where players create and control virtual people called Sims, designing their homes, guiding their careers, fostering relationships, and fulfilling their needs and aspirations in a vibrant virtual world filled with endless possibilities for creativity and storytelling.",
    image:
      "https://i.redd.it/sims-4-box-art-recreated-in-sims-2-v0-zmt1jyf4hy491.jpg?width=800&format=pjpg&auto=webp&s=2d472ebd9838d2a88100819574a5fcde8f02d18e",
    developer: "Maxis",
  },
  {
    name: "Valorant",
    description:
      "Valorant is a free-to-play multiplayer tactical first-person shooter game where teams of five players compete in objective-based matches, combining precise gunplay with unique agent abilities in strategic gameplay reminiscent of classic tactical shooters like Counter-Strike.",
    image: "https://m.media-amazon.com/images/I/71LTpSLz57L._AC_UF894,1000_QL80_.jpg",
    developer: "Riot Games",
  },
  {
    name: "Animal Crossing: New Horizons",
    description:
      "Animal Crossing: New Horizons is a life simulation game where players escape to a deserted island, building and customizing their own paradise, interacting with anthropomorphic animal villagers, fishing, bug-catching, gardening, and enjoying a relaxing and charming virtual world filled with creativity and exploration.",
    image: "https://www.giantbomb.com/a/uploads/scale_medium/8/82063/3179211-acnhart.jpg",
    developer: "Nintendo",
  },
  {
    name: "Portal",
    description:
      "Portal is a puzzle-platform game where players navigate through a series of test chambers using a portal gun to create linked portals on surfaces, solving spatial puzzles and overcoming obstacles to progress through the game's narrative-driven story.",
    image: "https://howlongtobeat.com/games/256px-Portal_standalonebox.jpg",
    developer: "Valve Corporation",
  },
  {
    name: "Team Fortress 2",
    description:
      "Team Fortress 2 (TF2) is a team-based multiplayer first-person shooter game featuring a variety of character classes with unique abilities, emphasizing teamwork, strategy, and objective-based gameplay across various game modes, including capture the flag, payload, and control point.",
    image: "https://i.redd.it/zchqpbrrufr31.png",
    developer: "Valve Corporation",
  },
  {
    name: "Little Nightmares",
    description:
      "Little Nightmares is a puzzle-platformer horror game where players control a small, raincoat-wearing character named Six, navigating through eerie environments and evading grotesque enemies while uncovering the dark secrets of the mysterious world known as The Maw.",
    image: "https://m.media-amazon.com/images/I/51D+YRHmozL.jpg",
    developer: "Tarsier Studios",
  },
  {
    name: "Madden NFL 22",
    description:
      "Madden NFL 22 is an American football simulation game that offers realistic gameplay, featuring updated rosters, improved graphics, and new gameplay mechanics, allowing players to experience the thrill of NFL football through various modes such as Franchise, Ultimate Team, and The Yard.",
    image: "https://cdn.mobygames.com/covers/10414123-madden-nfl-22-xbox-one-front-cover.jpg",
    developer: "EA (Electronic Arts)",
  },
  {
    name: "Fallout Shelter",
    description:
      "Fallout Shelter is a simulation game where players manage and expand an underground vault, building rooms, assigning dwellers various tasks, and ensuring the survival and happiness of their vault inhabitants in a post-apocalyptic world inspired by the Fallout series.",
    image:
      "https://assetsio.reedpopcdn.com/co6p4w.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    developer: "Bethesda Game Studios",
  },
  {
    name: "The Legend of Zelda: Breath of the Wild",
    description:
      "The Legend of Zelda: Breath of the Wild is an action-adventure game set in a vast open world, where players control Link as he explores the kingdom of Hyrule, battles enemies, solves puzzles, and embarks on a quest to defeat the evil Calamity Ganon. The game emphasizes exploration, survival, and creative problem-solving, offering players unprecedented freedom to discover secrets and tackle challenges in any order they choose.",
    image: "https://m.media-amazon.com/images/I/71cLrQZpajL._AC_UF894,1000_QL80_.jpg",
    developer: "Nintendo",
  },
  {
    name: "The Last of Us",
    description:
      "The Last of Us is a action-adventure game set in a post-apocalyptic world overrun by infected humans, where players control Joel, a smuggler, and Ellie, a young girl with immunity to the infection, as they journey across the United States, facing danger, moral dilemmas, and emotional challenges while forming a deep bond.",
    image: "https://m.media-amazon.com/images/I/71-hlREKk6L.jpg",
    developer: "Naughty Dog",
  },
  {
    name: "Super Mario Odyssey",
    description:
      "Super Mario Odyssey is a 3D platformer game where players control Mario as he embarks on a globe-trotting adventure to rescue Princess Peach from Bowser's clutches. With the help of his new ally, Cappy, Mario can possess various objects and creatures, exploring vibrant worlds, collecting Power Moons, and facing off against Bowser in an epic showdown.",
    image: "https://gamerant.com/wp-content/uploads/super-mario-odyssey-box-art-sombrero.jpeg",
    developer: "Nintendo",
  },
  {
    name: "The Elder Scrolls: Blades",
    description:
      "The Elder Scrolls: Blades is a free-to-play action role-playing game set in the Elder Scrolls universe, where players create and customize their own character, explore dungeons, complete quests, build and upgrade their town, and engage in combat against various enemies, all while uncovering a rich narrative set in the world of Tamriel.",
    image:
      "data:image/jpeg;base64,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",
    developer: "Bethesda Game Studios",
  },
  {
    name: "Assassin's Creed Valhalla",
    description:
      "Assassin's Creed Valhalla is an action role-playing game set in the Viking Age, where players control Eivor, a Norse warrior, as they lead their clan from Norway to England, engaging in exploration, combat, and stealth gameplay while forging alliances, building settlements, and unraveling the mysteries of the Assassin-Templar conflict.",
    image: "https://m.media-amazon.com/images/I/61FZ00HJ-1L._AC_UF894,1000_QL80_.jpg",
    developer: "Ubisoft",
  },
];

const interactionsList = [
  { type: "played", game: "Minecraft" },
  { type: "played", game: "Fallout Shelter" },
  { type: "hidden", game: "Fortnite" },
  { type: "hidden", game: "Madden NFL 22" },
  { type: "favorite", game: "Valorant" },
  { type: "favorite", game: "League of Legends" },
  { type: "owned", game: "Little Nightmares" },
  { type: "owned", game: "Hogwarts Legacy" },
];

// console.log(genresList.length);    20
// console.log(developersList.length);   21

export const seedData = {
  platformsList,
  developersList,
  genresList,
  gamesList,
  interactionsList,
};
