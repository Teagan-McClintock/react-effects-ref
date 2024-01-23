import Card from "./Card";

/**Area for rendering cards.
 *
 * Props:
 * - cards: Array of card objects [{code, image, images, value, suit}...]
 *
 *
 * State:
 * - none
 */

function CardList({ cards }) {
  return (<div>
    {cards.map(card => <Card key={card.code} card={card} />)}
  </div>);
}

export default CardList;