import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';

const GET_DECK_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

/**
 *
 * Props:
 *
 * State:
 * -cards drawn: array of card objects [{code, image, images, value, suit}...]
 * -deckId: string used in API calls
 */

function App() {
  const [cards, setCards] = useState();
  const [deckId, setDeckId] = useState();

  function fetchDeckIdWhenMounted() {
    async function fetchDeckId(){
      const resp = await fetch(GET_DECK_URL);
      const deck = await resp.json();
      setDeckId(deck.deck_id);
    }
    fetchDeckId();
  }

  useEffect(fetchDeckIdWhenMounted, []);

  function addCard(card) {
    setCards([...cards, card]);
  }

  return (
    <div className="App">
      <DrawButton addCard={addCard}/>
      <CardList cards={cards}/>
    </div>
  );
}

export default App;
