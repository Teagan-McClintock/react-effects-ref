const CARD_API = "https://deckofcardsapi.com/api/deck";

/**Button to draw a card via API call
 *
 * -Props:
 * - addCard: function to update card array
 *
 * State:
 * - none
 *
 * App -> DrawButton
 */

function DrawButton({ addCard, deckId}){

  async function fetchCard(){
    const response = await fetch(`${CARD_API}/${deckId}/draw/?count=1`);
    const result = await response.json();
    if(result.success === false){
      alert("Error: no cards remaining!");
    }
    else{
      const card = result.cards[0];
      addCard(card);
    }
  }

  return(
    <button onClick={fetchCard}>
      Draw Button
    </button>
  );
}

export default DrawButton;