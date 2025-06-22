import { cards } from "../data";
export default function NewsCards() {
  return (
    <div id="newsCards">
      {cards.map((card) => (
        <div key={card.id} className="newsCardsContent">
          <img src={card.img} alt={card.title} className="newsCardsImage" />
          <div className="newsCardText">
            <h1>{card.title}</h1>
            <p className="date">{card.date}</p>
            <p className="newsPara">
              {card.text}
              <span>{card.span}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
