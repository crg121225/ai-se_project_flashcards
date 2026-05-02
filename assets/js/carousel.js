import { hexToString, removeColorClasses, stringToHex } from "./colors.js";

let currentIndex = 0;
let showingQuestion = true;

const mainContent = document.querySelector(".page__main-content");
const carouselSection = document.getElementById("carousel");
const titleEl = carouselSection.querySelector(".carousel__title");
const cardEl = carouselSection.querySelector(".carousel__card");
const cardTextEl = carouselSection.querySelector(".card__text");
const flipBtn = carouselSection.querySelector(".carousel__flip-btn");
const leftBtn = carouselSection.querySelector(".carousel__nav-btn_left");
const rightBtn = carouselSection.querySelector(".carousel__nav-btn_right");
const counterEl = carouselSection.querySelector(".carousel__counter");

/**
 * Creates a title string for the carousel.
 *
 * @param {object} deck - The deck object
 * @param {number} currentIndex - The current card index
 * @returns {string} The carousel title string
 */
function getCarouselTitleString(deck, currentIndex) {
  const deckTitle = deck.name || deck.title;
  return `${deckTitle} · Card ${currentIndex + 1} of ${deck.cards.length}`;
}

/**
 * Updates the card display with the current card's content.
 *
 * @param {object} deck - The deck object
 */
function updateDisplay(deck) {
  const currentCard = deck.cards[currentIndex];

  // Update card text and background color based on flipped state
  if (showingQuestion) {
    cardTextEl.textContent = currentCard.question;
    removeColorClasses(cardEl);
    const normalizedHex = deck.color?.startsWith("#")
      ? deck.color
      : stringToHex(deck.color || "green");
    const colorName = hexToString(normalizedHex);
    const colorClass = colorName
      ? `card__carousel_color_${colorName}`
      : "card__carousel_color_green";
    cardEl.classList.add(colorClass);
  } else {
    cardTextEl.textContent = currentCard.answer;
    removeColorClasses(cardEl);
    cardEl.classList.add("card__carousel_color_white");
  }

  // Update counter
  counterEl.textContent = `${currentIndex + 1} / ${deck.cards.length}`;

  // Update button disabled states
  leftBtn.classList.toggle("carousel__nav-btn_disabled", currentIndex === 0);
  rightBtn.classList.toggle(
    "carousel__nav-btn_disabled",
    currentIndex === deck.cards.length - 1
  );
}

/**
 * Renders the carousel view for a given deck.
 *
 * @param {object} deck - The deck object to render
 */
export function renderCarouselView(deck) {
  currentIndex = 0;
  showingQuestion = true;

  // Update main content class for carousel view
  mainContent.classList.add("page__main-content_carousel");

  // Set carousel title
  titleEl.textContent = getCarouselTitleString(deck, currentIndex);

  // Set card color
  removeColorClasses(cardEl);
  const normalizedHex = deck.color?.startsWith("#")
    ? deck.color
    : stringToHex(deck.color || "green");
  const colorName = hexToString(normalizedHex);
  const colorClass = colorName
    ? `card__carousel_color_${colorName}`
    : "card__carousel_color_green";
  cardEl.classList.add(colorClass);

  // Show carousel section
  carouselSection.style.display = "flex";

  // Set initial display
  updateDisplay(deck);

  // Set up event listeners
  leftBtn.onclick = () => {
    if (currentIndex > 0) {
      currentIndex--;
      showingQuestion = true;
      titleEl.textContent = getCarouselTitleString(deck, currentIndex);
      updateDisplay(deck);
    }
  };

  rightBtn.onclick = () => {
    if (currentIndex < deck.cards.length - 1) {
      currentIndex++;
      showingQuestion = true;
      titleEl.textContent = getCarouselTitleString(deck, currentIndex);
      updateDisplay(deck);
    }
  };

  flipBtn.onclick = () => {
    showingQuestion = !showingQuestion;
    updateDisplay(deck);
  };
}

/**
 * Hides the carousel view and resets to home view styling.
 */
export function hideCarouselView() {
  mainContent.classList.remove("page__main-content_carousel");
  carouselSection.style.display = "none";
}


