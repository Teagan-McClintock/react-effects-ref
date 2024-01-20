/**Display one card
 *
 * Props: card object {code, image, images, value, suit}
 *
 * State: none
 *
 * CardList -> Card
 *
 */

function Card({ card }) {
  return (<div className="Card">
    <img src = {card.img} />
  </div>)
}