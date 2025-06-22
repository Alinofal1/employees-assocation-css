import NewsCards from "./NewsCards";

export default function News() {
  return (
    <section id="news">
      {/* Title */}
      <div className="ServicesHead">
        <h1>
          أخبار <span>الجمعية</span>
        </h1>
        <p>
          نوفر لكم ثلاثة خيارات تمويلية شاملة–نقدية وعينية وصندوق إقراض
          الطالب–بحيث تلبي جميع احتياجاتكم بسهولة ويسر
        </p>
      </div>
      {/* Cards */}
      <NewsCards />
    </section>
  );
}
