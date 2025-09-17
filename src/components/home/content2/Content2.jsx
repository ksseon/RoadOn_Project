import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.scss";

gsap.registerPlugin(ScrollTrigger);

const coupons = [
  { id: 1, image: "/images/main/coupon1.png", alt: "2% 적립쿠폰" },
  { id: 2, image: "/images/main/coupon2.png", alt: "5% 할인쿠폰" },
  { id: 3, image: "/images/main/coupon3.png", alt: "20% 할인쿠폰" },
  { id: 4, image: "/images/main/coupon4.png", alt: "12% 할인쿠폰" },
  { id: 5, image: "/images/main/coupon5.png", alt: "3만원 적립쿠폰" },
  { id: 6, image: "/images/main/coupon6.png", alt: "20% 할인쿠폰" },
];

const CouponEvent = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    // 타이틀 애니메이션 등 기존 코드 유지
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );

    // 마퀴 애니메이션
    const marquee = marqueeRef.current;
    const totalWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: -totalWidth,
      duration: 50,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
      },
    });

    return () => {
      gsap.killTweensOf(marquee);
    };
  }, []);

  return (
    <div className="coupon-event-container" ref={containerRef}>
      <div className="coupon-header" ref={titleRef}>
        <h2 className="head">
          SPECIAL <span>EVENT</span>
        </h2>
        <span className="special-event-badge">쿠폰 전체 받기</span>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee" ref={marqueeRef}>
          {[...coupons, ...coupons].map((coupon, idx) => (
            <div className="coupon-item" key={idx}>
              <img
                src={coupon.image}
                alt={coupon.alt}
                className="coupon-image"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouponEvent;
