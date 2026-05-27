import { decks } from "./decks.js";
import { hexToString, stringToHex } from "./colors.js";
import { renderCarouselView, hideCarouselView } from "./carousel.js";
import { renderDeckView, hideDeckView } from "./deck-view.js";

// Select template and list
const template = document.getElementById("deck-template");
const decksList = document.querySelector(".decks__list");
const homeSection = document.getElementById("home");
const deckViewSection = document.getElementById("deck-view");
const carouselSection = document.getElementById("carousel");
const notFoundSection = document.getElementById("not-found");
const aboutSection = document.getElementById("about");

function getDeckByID(deckId) {
  return decks.find((deck) => deck.id === deckId);
}

/**
 * Creates a deck element from a deck object.
 *
 * @param {object} deck - The deck object with properties: id, name, cards, color
 * @returns {HTMLElement} The customized deck li element
 */
function createDeckEl(deck) {
  const deckEl = template.content.cloneNode(true);

  // Set the deck link href
  const linkEl = deckEl.querySelector(".deck__link");
  const targetHash = `#deck/${deck.id}`;
  linkEl.href = targetHash;

  // Set the deck title
  const titleEl = deckEl.querySelector(".deck__title");
  titleEl.textContent = deck.name || deck.title;

  // Set the card count
  const countEl = deckEl.querySelector(".deck__count");
  countEl.textContent = `${deck.cards.length} ${deck.cards.length === 1 ? "card" : "cards"}`;

  // Apply the color modifier class
  const liEl = deckEl.querySelector(".deck");
  const normalizedHex = deck.color?.startsWith("#")
    ? deck.color
    : stringToHex(deck.color || "green");
  const colorName = hexToString(normalizedHex);
  const colorClass = colorName ? `deck_color_${colorName}` : "deck_color_green";
  liEl.className = `deck ${colorClass}`;
  liEl.dataset.deckId = deck.id;

  // Set color chip and text
  const colorTextEl = deckEl.querySelector(".deck__color-text");
  colorTextEl.textContent = normalizedHex.toUpperCase();
  const colorSwatchEl = deckEl.querySelector(".deck__color-swatch");
  colorSwatchEl.style.backgroundColor = normalizedHex;

  // Add delete button event listener
  const deleteBtn = deckEl.querySelector(".deck__delete-btn");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    liEl.remove();
  });

  // Fallback navigation so clicking the card still works if layered UI blocks the anchor.
  liEl.addEventListener("click", (e) => {
    if (e.target.closest(".deck__delete-btn")) {
      return;
    }
    window.location.hash = targetHash;
  });

  return deckEl;
}

/**
 * Creates and prepends a deck element to the decks list.
 *
 * @param {object} deck - The deck object
 */
function renderDeckEl(deck) {
  const deckEl = createDeckEl(deck);
  decksList.append(deckEl);
}

/**
 * Routes between views based on the URL hash.
 */
function router() {
  const hash = window.location.hash.slice(1);

  if (hash === "home" || hash === "") {
    // Show home view
    homeSection.style.display = "block";
    deckViewSection.style.display = "none";
    aboutSection.style.display = "none";
    notFoundSection.style.display = "none";
    hideCarouselView();
    hideDeckView();
  } else if (hash === "about") {
    // Show about view
    homeSection.style.display = "none";
    deckViewSection.style.display = "none";
    aboutSection.style.display = "block";
    notFoundSection.style.display = "none";
    hideCarouselView();
    hideDeckView();
  } else if (hash.startsWith("deck/")) {
    const deckId = hash.split("/")[1];
    const deck = getDeckByID(deckId);

    if (deck) {
      homeSection.style.display = "none";
      carouselSection.style.display = "none";
      aboutSection.style.display = "none";
      notFoundSection.style.display = "none";
      renderDeckView(deck);
    } else {
      homeSection.style.display = "none";
      deckViewSection.style.display = "none";
      carouselSection.style.display = "none";
      aboutSection.style.display = "none";
      notFoundSection.style.display = "block";
      hideCarouselView();
      hideDeckView();
    }
  } else if (hash.startsWith("carousel/")) {
    // Extract deck ID from hash
    const deckId = hash.split("/")[1];
    const deck = getDeckByID(deckId);

    if (deck) {
      // Show carousel view with the deck
      homeSection.style.display = "none";
      deckViewSection.style.display = "none";
      aboutSection.style.display = "none";
      notFoundSection.style.display = "none";
      carouselSection.style.display = "flex";
      renderCarouselView(deck);
    } else {
      // Deck not found
      homeSection.style.display = "none";
      aboutSection.style.display = "none";
      carouselSection.style.display = "none";
      notFoundSection.style.display = "block";
      hideCarouselView();
    }
  } else {
    // Show 404 view
    homeSection.style.display = "none";
    deckViewSection.style.display = "none";
    aboutSection.style.display = "none";
    carouselSection.style.display = "none";
    notFoundSection.style.display = "block";
    hideCarouselView();
    hideDeckView();
  }
}

// Render all decks from the array on page load
decks.forEach(renderDeckEl);

// Set up hash routing
window.addEventListener("hashchange", router);

// Route on initial page load
router();
