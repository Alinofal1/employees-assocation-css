export default function CarCard() {
  let color = ["#000000", "#28282859", "#28282859"];
  return (
    <div id="carCard">
      <div id="carContent">
        {/* Slider */}
        <div id="carSlider">
          {color.map((color, i) => (
            <div
              key={i}
              style={{
                backgroundColor: color,
              }}
            ></div>
          ))}
        </div>
        {/* Image */}
        <div id="image-wrapper">
          <div id="car-background"></div>
          <img src="/car.png" alt="car" />
        </div>
        {/* <img src="/palService.png" alt="logo" id="pal" /> */}
        <div id="carText">
          <div>
            <h1>شركة بال سيرفس لصيانة ودهان المركات</h1>
            <p id="pal-service">
              لخدمة المقدمه : عمل صيانه للسيارة ومدة التقسيط 12{" "}
            </p>
          </div>
          <div className="pal-service2">
            <p> طوّل عمر سيارتك مع خدمات بال سيرفيس وقسط السعر على 12 شهر -</p>
            <p> خدمات بال سيرفيس وقسط السعر على 12 شهر -</p>
          </div>
        </div>
      </div>
    </div>
  );
}
