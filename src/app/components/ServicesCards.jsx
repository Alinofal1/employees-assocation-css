import { data } from "../data";
export default function ServicesCards() {
  return (
    <div id="ServicesCards">
      {data.map((data) => (
        <div key={data.id} id="cardContent">
          <img src={data.svg} alt={data.title} />
          <div id="cardText">
            <h1>{data.title}</h1>
            <p>{data.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
