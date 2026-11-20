// ============================================================
//  EDIT ME: personalise the whole site from this one file
// ============================================================
window.CONFIG = {
  name: "GUTU - Little Bunny",                        // shown in the hero and page title
  role: "Bunny Lover \u00B7 Carrot Collector", // small line under the name
  birthday: "2026-11-07",                      // YYYY-MM-DD (only month/day matter for the countdown)
  age: 7,                                      // age being turned (PLACEHOLDER)

  // Birthday wishes: [tone, text, from]. Use {name} where the name should appear.
  wishes: [
    ["funny", "Happy Birthday, {name}! Another year older, but still the only one who can hop, skip and eat a whole carrot cake before lunch.", "Your Garden Gang"],
    ["funny", "{name}, we'd put all the candles on the cake, but Miffy says the bunnies would eat them first.", "The Carrot Club"],
    ["funny", "Happy Birthday {name}! Prescription for today: two slices of cake, one long cuddle, repeat as needed. No refills required, we'll bring more.", "Your Fluffy Friends"],
    ["funny", "{name}, you're not getting older, you're just getting more ears-ceptional.", "Your Friends"],
    ["heartfelt", "{name}, thank you for being so kind and gentle. Everyone who meets you leaves with a smaller worry and a bigger smile. Happy Birthday!", "A Grateful Friend"],
    ["heartfelt", "Happy Birthday, {name}! Your warmth makes hard days softer, at home and everywhere else.", "All of Us"],
    ["heartfelt", "To {name}: may this year bring you cosy mornings, sunny afternoons and joy all along the way.", "Someone Who Believes in You"],
    ["heartfelt", "{name}, the world is brighter and happier with you in it. Wishing you a year full of love and good health.", "Your Family"],
    ["bunny", "May your year be like a perfect spring day, {name}: soft grass, blue skies and a field full of daisies. Happy Birthday!", "Miffy"],
    ["bunny", "Happy Birthday {name}! May every hop this year land somewhere sunny, with a warm cup of tea waiting at home.", "Your Burrow Buddies"],
    ["bunny", "{name}, wishing you fresh carrots, bright balloons and a garden in full bloom all year long.", "Grunty the Pig"],
    ["bunny", "Happy Birthday {name}! Simple and sweet, just like a Miffy drawing: a big smile made with only a few lines.", "Dick Bruna's Pencil"]
  ],

  // Put your 4 photos in the "photos" folder with these names (or change the paths).
  // Until a file exists, a "click to add photo" placeholder is shown instead.
  photos: [
    { src: "photos/photo1.jpg", caption: "Add a favourite memory here" },
    { src: "photos/photo2.jpg", caption: "Add a smiley moment here" },
    { src: "photos/photo3.jpg", caption: "Add a special day here" },
    { src: "photos/photo4.jpg", caption: "Add a cosy memory here" }
  ],

  taglines: [
    "Soft ears, big heart and a very happy day.",
    "Prescription: one hug, one carrot and plenty of cake.",
    "Drawn with a few simple lines, loved with a whole lot of heart.",
    "Every birthday deserves balloons. Every bunny deserves a hug.",
    "Daisies, balloons and a bag full of birthday surprises."
  ],

  about: [
    "She is gentle, cheerful and always ready with a smile, just like a certain little white bunny.",
    "She loves cosy afternoons, picture books, drawing and a good cup of tea.",
    "Weekdays are for learning, giggles and sticker negotiations. Weekends belong to the garden, the park and a long picnic.",
    "The same habits make her special everywhere: be kind, look carefully, listen to what is not being said, and always share the carrots.",
    "P.S : Edit this text in config.js to tell your own story :)"
  ],

  // Stats removed. Add entries as [label, number] to show them again.
  stats: [],

  // Flip cards: [title, front line, back text]
  tips: [
    ["Be kind, always", "The first Miffy rule",
      "Miffy is gentle with everyone she meets. A kind word costs nothing and makes a whole day sunnier."],
    ["Share your carrots", "Little things mean a lot",
      "Sharing a snack, a toy or a smile is the quickest way to make a new friend, big or small."],
    ["Draw something simple", "Just a few lines",
      "Dick Bruna drew Miffy with bold lines and a handful of colours. You don't need a lot to make something lovely."],
    ["Stay curious", "Every day is a small adventure",
      "Miffy visits the zoo, the seaside, the museum and grandma's house. Say yes to a little adventure today."],
    ["Cosy is a plan", "Rest is part of the day",
      "A blanket, a story and a warm drink are a perfectly good way to spend an afternoon. Slow days are happy days."],
    ["Say sorry, say thanks", "Two small words",
      "Say thank you often and sorry when you need to. Good manners are free and always in fashion."]
  ],

  // The hop ladder: [name, centimetres, category, where, note]
  peaks: [
    ["Garden fence", 120, "Big hop", "In the garden", "Even for a bunny with a good run-up, this one needs a friend with a ladder."],
    ["Picnic table", 75, "Big hop", "In the park", "A good place for a birthday picnic, as long as the cake stays safe."],
    ["Kitchen chair", 45, "Medium hop", "At home", "Just the right height for reaching the carrot cake."],
    ["Garden bench", 42, "Medium hop", "In the garden", "Perfect for sitting with a friend and watching the clouds."],
    ["Toy box", 35, "Medium hop", "In the bedroom", "A friendly bounce on the way to the book shelf."],
    ["Flower pot", 28, "Small hop", "On the patio", "Careful with the daisies, please."],
    ["Doorstep", 18, "Small hop", "At the front door", "The first hop of every adventure."],
    ["Garden hose", 8, "Tiny hop", "On the lawn", "Hardly a hop at all. Miffy takes it in her stride."],
    ["Daisy", 6, "Tiny hop", "In the meadow", "Hop gently, please. Daisies like to stay standing."],
    ["Puddle", 2, "Tiny hop", "After the rain", "A very small hop with a very big splash."]
  ],

  // Quiz pool. The FIRST answer is always the correct one (options get shuffled when shown).
  // Each round draws 10 random questions from this pool.
  quiz: [
    { lvl: "Easy", q: "What colour is Miffy's dress in most books?",
      a: ["Orange", "Pink", "Purple", "Green"],
      fact: "Miffy's classic look is a bright orange dress, though she wears many other colours in the stories." },
    { lvl: "Easy", q: "What is Miffy's original Dutch name?",
      a: ["Nijntje", "Konijntje", "Pluisje", "Witje"],
      fact: "Nijntje comes from \u201Ckonijntje\u201D, the Dutch word for little bunny. Miffy was the English translation by Patricia Crampton." },
    { lvl: "Medium", q: "Who created Miffy?",
      a: ["Dick Bruna", "Eric Carle", "Beatrix Potter", "Hergé"],
      fact: "Dutch artist Dick Bruna drew the first Miffy in 1955 after telling his young son stories about a rabbit they saw in the dunes." },
    { lvl: "Medium", q: "In which year did Miffy first appear?",
      a: ["1955", "1935", "1975", "1995"],
      fact: "The first Miffy book, Nijntje, was published in 1955 and has charmed children for generations." },
    { lvl: "Easy", q: "How does Miffy's mouth look?",
      a: ["A small cross", "A big smile", "A round circle", "A wavy line"],
      fact: "Miffy's mouth and nose are a tiny cross, one of the simplest and most famous faces in children's books." },
    { lvl: "Medium", q: "In which country was Dick Bruna born?",
      a: ["The Netherlands", "Belgium", "Germany", "Denmark"],
      fact: "Dick Bruna was born in Utrecht in 1927 and lived there most of his life. There is a Miffy museum, the nijntje museum, in the city." },
    { lvl: "Easy", q: "What kind of animal is Miffy's friend Snuffy?",
      a: ["A dog", "A cat", "A pig", "A bear"],
      fact: "Snuffy is Miffy's loyal dog friend. Grunty the pig and Boris the bear are her other close friends." },
    { lvl: "Medium", q: "Which bold colours is Bruna famous for using?",
      a: ["Primary colours", "Pastels only", "Neon shades", "Black and white only"],
      fact: "Bruna kept to a small palette: red, yellow, blue, green, orange and grey, all with thick black outlines." },
    { lvl: "Easy", q: "What do rabbits love to eat the most?",
      a: ["Carrots and leafy greens", "Chocolate", "Pizza", "Ice cream"],
      fact: "Rabbits do best on hay and fresh leafy greens. Carrots are a treat, though most bunnies adore them." },
    { lvl: "Hard", q: "How many toes does a rabbit have on its front feet?",
      a: ["Five", "Three", "Four", "Six"],
      fact: "Rabbits have five toes on their front paws and four on their back paws, ready for a big hop." },
    { lvl: "Medium", q: "What do we call a baby rabbit?",
      a: ["A kit", "A cub", "A pup", "A joey"],
      fact: "A baby rabbit is called a kit (or kitten). A group of rabbits is called a herd or a colony." },
    { lvl: "Hard", q: "Why do rabbits thump their back feet?",
      a: ["To warn of danger", "To dance", "To say thanks", "To dig faster"],
      fact: "A loud thump is a rabbit's alarm signal, warning others that something might be wrong." },
    { lvl: "Easy", q: "What do bunnies' ears help them do?",
      a: ["Hear well and cool down", "Fly", "Swim faster", "Climb trees"],
      fact: "Long ears catch faint sounds from far away and help rabbits lose heat on warm days." },
    { lvl: "Medium", q: "What is Miffy's mother and father's favourite thing to do in the books?",
      a: ["Take care of Miffy", "Race cars", "Climb mountains", "Sail ships"],
      fact: "Miffy's gentle parents, Mother and Father Bunny, look after her with patience and love in every story." },
    { lvl: "Hard", q: "About how long can a rabbit's lifespan be with good care?",
      a: ["8 to 12 years", "1 to 2 years", "20 to 25 years", "50 years"],
      fact: "Pet rabbits can live 8 to 12 years with love, a good diet and regular vet visits." }
  ],

  notesSeed: [
    ["A happy friend", "Thank you for always making the sleepiest morning feel like a small adventure."],
    ["Garden buddy", "Next stop: the picnic. Pack the carrot cake!"]
  ]
};
