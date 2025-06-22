import ServicesCards from "./ServicesCards";
export default function Services() {
  return (
    <section className="services">
      {/* Title */}
      <div className="ServicesHead">
        <h1>
          خدمات <span>الجمعية</span>
        </h1>
        <p>
          نوفر لكم ثلاثة خيارات تمويلية شاملة–نقدية وعينية وصندوق إقراض
          الطالب–بحيث تلبي جميع احتياجاتكم بسهولة ويسر
        </p>
      </div>
      {/* Cards */}
      <ServicesCards />
    </section>
  );
}
