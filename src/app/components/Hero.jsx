"use client";
import { CiCircleChevUp, CiCircleChevDown } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [prevIndex, setPrevIndex] = useState(2);
  const [direction, setDirection] = useState("up");
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(timeoutRef.current);
  }, [activeIndex]);

  const startAutoPlay = () => {
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      handleChange((activeIndex + 1) % sliderImages.length, "up");
    }, 3000);
  };

  const handleChange = (newIndex, dir) => {
    if (isAnimating || newIndex === activeIndex) return;
    setDirection(dir);
    setPrevIndex(activeIndex);
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="hero">
      <div
        className="heroImg"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className={`imgSlider ${isAnimating ? direction : ""}`}>
          {isAnimating ? (
            <>
              <img
                src={sliderImages[prevIndex].img}
                className="heroImg slideImage"
              />
              <img
                src={sliderImages[activeIndex].img}
                className="heroImg slideImage"
              />
            </>
          ) : (
            <img
              src={sliderImages[activeIndex].img}
              className="heroImg slideImage"
            />
          )}
        </div>
        <div className="overlay"></div>

        <div className="heroContent">
          <h1>معاً نحو استقرار مالي للموظفين الحكوميين</h1>
          <p>
            تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية
            وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان،
            محروقات…) وتقسيط يصل حتى 12 شهراً
          </p>
          <button className="heroButton">معرفة المزيد</button>
        </div>

        <div className="heroSlider">
          <CiCircleChevUp
            size={36}
            className="up"
            onClick={() =>
              handleChange(
                (activeIndex - 1 + sliderImages.length) % sliderImages.length,
                "down"
              )
            }
          />
          <div id="sliderImages">
            {sliderImages.map((img, i) => (
              <img
                onClick={() => handleChange(i, i > activeIndex ? "up" : "down")}
                key={img.id}
                src={img.img}
                alt="img"
                style={{
                  border: i === activeIndex ? "7px solid #b7312b" : "none",
                }}
              />
            ))}
          </div>
          <CiCircleChevDown
            size={36}
            className="down"
            onClick={() =>
              handleChange((activeIndex + 1) % sliderImages.length, "up")
            }
          />
        </div>
      </div>
    </section>
  );
}
