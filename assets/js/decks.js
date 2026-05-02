const decks = [
  {
    id: "basic-html-tags",
    name: "Basic HTML Tags",
    description: "Common HTML tags and structure",
    cards: [
      { id: 1, question: "What does HTML stand for?", answer: "HyperText Markup Language" },
      { id: 2, question: "Which tag creates the largest heading?", answer: "<h1>" },
      { id: 3, question: "Which tag creates a paragraph?", answer: "<p>" },
      { id: 4, question: "Which tag creates a hyperlink?", answer: "<a>" },
      { id: 5, question: "Which tag displays an image?", answer: "<img>" },
      { id: 6, question: "Which tag creates an unordered list?", answer: "<ul>" },
      { id: 7, question: "Which tag creates an ordered list?", answer: "<ol>" },
      { id: 8, question: "Which tag creates a list item?", answer: "<li>" },
      { id: 9, question: "Which tag wraps page content?", answer: "<body>" },
      { id: 10, question: "What is the root element of an HTML page?", answer: "<html>" },
    ],
    color: "#64d583",
  },
  {
    id: "git-commands",
    name: "Git Commands",
    description: "Everyday Git workflow commands",
    cards: [
      { id: 11, question: "Initialize a repository?", answer: "git init" },
      { id: 12, question: "Stage all changes?", answer: "git add ." },
      { id: 13, question: "Commit staged changes?", answer: "git commit -m \"message\"" },
      { id: 14, question: "Show working tree state?", answer: "git status" },
      { id: 15, question: "View commit history?", answer: "git log" },
      { id: 16, question: "Create and switch branch?", answer: "git checkout -b branch-name" },
      { id: 17, question: "Switch to existing branch?", answer: "git checkout branch-name" },
      { id: 18, question: "Download and merge remote changes?", answer: "git pull" },
      { id: 19, question: "Upload commits to remote?", answer: "git push" },
      { id: 20, question: "Compare unstaged changes?", answer: "git diff" },
    ],
    color: "#91a8f9",
  },
  {
    id: "agile-development-terminology",
    name: "Agile Development Terminology",
    description: "Core agile terms and concepts",
    cards: [
      { id: 21, question: "What is a sprint?", answer: "A short, time-boxed development cycle." },
      { id: 22, question: "What is a backlog?", answer: "A prioritized list of work items." },
      { id: 23, question: "Who owns backlog priorities?", answer: "The Product Owner." },
      { id: 24, question: "What is a user story?", answer: "A feature description from the user's perspective." },
      { id: 25, question: "What is stand-up?", answer: "A short daily team sync meeting." },
      { id: 26, question: "What is velocity?", answer: "Amount of work a team completes in a sprint." },
      { id: 27, question: "What is a retrospective?", answer: "A meeting to reflect and improve process." },
      { id: 28, question: "What is Scrum?", answer: "An agile framework with roles, events, and artifacts." },
      { id: 29, question: "What is Kanban?", answer: "A flow-based method using visualized work stages." },
      { id: 30, question: "What does MVP mean?", answer: "Minimum Viable Product." },
    ],
    color: "#ee92d7",
  },
  {
    id: "spanish-words",
    name: "Spanish Words",
    description: "Everyday beginner Spanish vocabulary",
    cards: [
      { id: 31, question: "Hello", answer: "Hola" },
      { id: 32, question: "Goodbye", answer: "Adios" },
      { id: 33, question: "Please", answer: "Por favor" },
      { id: 34, question: "Thank you", answer: "Gracias" },
      { id: 35, question: "Yes", answer: "Si" },
      { id: 36, question: "No", answer: "No" },
      { id: 37, question: "Water", answer: "Agua" },
      { id: 38, question: "Friend", answer: "Amigo / Amiga" },
      { id: 39, question: "House", answer: "Casa" },
      { id: 40, question: "School", answer: "Escuela" },
    ],
    color: "#aa8ef0",
  },
  {
    id: "physics-terminology",
    name: "Physics Terminology",
    description: "Foundational physics vocabulary",
    cards: [
      { id: 41, question: "Speed", answer: "Distance traveled per unit of time." },
      { id: 42, question: "Velocity", answer: "Speed with direction." },
      { id: 43, question: "Acceleration", answer: "Rate of change of velocity." },
      { id: 44, question: "Force", answer: "A push or pull that causes acceleration." },
      { id: 45, question: "Mass", answer: "Amount of matter in an object." },
      { id: 46, question: "Weight", answer: "Gravitational force on an object." },
      { id: 47, question: "Energy", answer: "Capacity to do work." },
      { id: 48, question: "Power", answer: "Rate at which work is done." },
      { id: 49, question: "Momentum", answer: "Mass times velocity." },
      { id: 50, question: "Gravity", answer: "Attractive force between masses." },
    ],
    color: "#ee955e",
  },
  {
    id: "social-studies-exam",
    name: "Social Studies Exam",
    description: "Key civics and history terms",
    cards: [
      { id: 51, question: "What is democracy?", answer: "Government by the people." },
      { id: 52, question: "What is a constitution?", answer: "A framework of fundamental laws." },
      { id: 53, question: "What is a legislature?", answer: "Government branch that makes laws." },
      { id: 54, question: "What is an executive branch?", answer: "Government branch that enforces laws." },
      { id: 55, question: "What is a judicial branch?", answer: "Government branch that interprets laws." },
      { id: 56, question: "What is federalism?", answer: "Shared power between national and local governments." },
      { id: 57, question: "What is a primary source?", answer: "Firsthand historical evidence." },
      { id: 58, question: "What is a tariff?", answer: "A tax on imported goods." },
      { id: 59, question: "What is an amendment?", answer: "A formal change to a legal document." },
      { id: 60, question: "What is civic duty?", answer: "A responsibility of citizenship." },
    ],
    color: "#f5d770",
  },
];

/**
 * Retrieves a deck object by its ID from the decks array.
 *
 * @param {string} deckId - The unique identifier of the deck to retrieve
 * @returns {object|undefined} The deck object if found, undefined otherwise
 */
function getDeckByID(deckId) {
  return decks.find((deck) => deck.id === deckId);
}

export { decks, getDeckByID };