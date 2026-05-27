import { hexToString, stringToHex } from "./colors.js";

const deckViewSection = document.getElementById("deck-view");
const titleEl = deckViewSection.querySelector(".deck-view__title");
const practiceBtn = deckViewSection.querySelector(".deck-view__practice-btn");
const newCardBtn = deckViewSection.querySelector(".deck-view__new-card-btn");
const cardsList = deckViewSection.querySelector(".deck-view__cards");
const cardTemplate = document.getElementById("card-template");

function getCardText(card, isFlipped) {
  return isFlipped ? card.answer : card.question;
}

function updateDeckCountInList(deck) {
  const deckListItem = document.querySelector(`.deck[data-deck-id="${deck.id}"]`);
  if (!deckListItem) {
    return;
  }

  const countEl = deckListItem.querySelector(".deck__count");
  if (countEl) {
    countEl.textContent = `${deck.cards.length} ${deck.cards.length === 1 ? "card" : "cards"}`;
  }
}

function createCardEl(deck, card) {
  const cardFragment = cardTemplate.content.cloneNode(true);
  const cardItem = cardFragment.querySelector(".deck-card");
  const textEl = cardFragment.querySelector(".deck-card__text");
  const flipBtn = cardFragment.querySelector(".deck-card__flip-btn");
  const deleteBtn = cardFragment.querySelector(".deck-card__delete-btn");

  let isFlipped = false;
  const normalizedHex = deck.color?.startsWith("#") ? deck.color : stringToHex(deck.color || "green");

  cardItem.dataset.cardId = card.id;
  cardItem.style.backgroundColor = normalizedHex;
  textEl.textContent = getCardText(card, isFlipped);

  flipBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    isFlipped = !isFlipped;
    textEl.textContent = getCardText(card, isFlipped);
    cardItem.classList.toggle("deck-card_flipped", isFlipped);
    cardItem.style.backgroundColor = isFlipped ? "#ffffff" : normalizedHex;
  });

  deleteBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    const cardIndex = deck.cards.findIndex((deckCard) => deckCard.id === card.id);
    if (cardIndex !== -1) {
      deck.cards.splice(cardIndex, 1);
      cardItem.remove();
      updateDeckCountInList(deck);
    }
  });

  return cardFragment;
}

export function renderDeckView(deck) {
  titleEl.textContent = deck.name || deck.title;
  cardsList.innerHTML = "";

  const deckColor = deck.color?.startsWith("#") ? deck.color : stringToHex(deck.color || "green");
  practiceBtn.onclick = () => {
    window.location.hash = `#carousel/${deck.id}`;
  };

  newCardBtn.onclick = () => {
    // Not functional for this lesson
  };

  deck.cards.forEach((card) => {
    cardsList.append(createCardEl(deck, card));
  });

  deckViewSection.style.display = "flex";
}

export function hideDeckView() {
  deckViewSection.style.display = "none";
  cardsList.innerHTML = "";
  titleEl.textContent = "";
  practiceBtn.onclick = null;
  newCardBtn.onclick = null;
}
