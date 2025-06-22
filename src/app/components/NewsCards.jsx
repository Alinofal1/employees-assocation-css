import { cards } from "../data";
export default function NewsCards() {
  return (
    <div id="newsCards">
      {cards.map((card) => (
        <div key={card.id} id="newsCardsContent">
          {/* Image */}
          <img src={card.img} alt={card.title} id="newsCardsImage" />
          <div id="newsCardText">
            <h1>{card.title}</h1>
            <p id="date">{card.date}</p>
            <p id="newsPara">
              {card.text}
              <span>{card.span}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
