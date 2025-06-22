import CarCard from "./CarCard";

export default function Partners() {
  return (
    <section id="partners">
      {/* Title */}
      <div className="ServicesHead">
        <h1>
          شراكات <span>الجمعية</span>
        </h1>
        <p>
          نوفر خلال فترات محددة من العام، تطلق جمعيتنا حملات تمويلية مصممة
          خصيصاً لتلبية احتياجاتكم بأفضل الشروط وأقل التكاليف. تتيح لكم هذه
          الحملات
        </p>
      </div>
      {/* Car Card */}
      <CarCard />
    </section>
  );
}
