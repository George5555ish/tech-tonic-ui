/* eslint-disable react/display-name */
import React, { ForwardedRef, useEffect, useRef, useState } from "react";
import Image from "next/future/image";

import CarouselImg1 from "../../assets/images/carousel/carousel-img-1.svg";
import CarouselImg2 from "../../assets/images/carousel/carousel-img-2.svg";
import CarouselImg3 from "../../assets/images/carousel/carousel-img-3.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useWindowSize } from "../../hooks/getWindowDimensions";
interface ButtonProps {
  btnRef?: React.MutableRefObject<HTMLDivElement>;
}
enum SliderInterface {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}
// const SwiperButtonNext = React.forwardRef(props: {prop: any},ref: React.Ref<HTMLDivElement>) => {
//     const swiper = useSwiper();
//     //const btnNextRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

//     return    <div className="bg_neutral_100 | arrow_right_class" onClick={() => swiper.slideNext()} ref={btnNextRef}>
//     <Image src={ArrowRight} alt="hero-img" />
//     </div>
//   };
const SwiperButtonPrev = React.forwardRef(
  (_props: any, ref: React.Ref<HTMLDivElement>) => {
    const swiper = useSwiper();
    useEffect(() => {
      if (_props) {
        _props.btnRef.current.addEventListener("click", () => {
          swiper.slidePrev(1000, true);
        });
      }
    });
    return (
      <div className="bg_neutral_100 | arrow_right_class">
        <Image src={ArrowRight} alt="hero-img" />
      </div>
    );
  }
);

const SwiperButtonNext = React.forwardRef(
  (_props: any, ref: React.Ref<HTMLDivElement>) => {
    const swiper = useSwiper();
    useEffect(() => {
      if (_props) {
        _props.btnRef.current.addEventListener("click", () => {
          swiper.slideNext(1000, true);
        });
      }
    });
    return (
      <div className="bg_neutral_100 | arrow_right_class">
        <Image src={ArrowRight} alt="hero-img" />
      </div>
    );
  }
);

function SliderSection() {
  const MOBILE_VIEW_WIDTH = 768;
  const DESKTOP_VIEW_WIDTH = 1050;
  const swiper = useSwiper();
  const [slidesPerView, setSlidesPerView] = useState(3);
  const btnPrevRef = React.createRef<HTMLDivElement>();
  const btnNextRef = React.createRef<HTMLDivElement>();

  const { height: heightFromWindow, width: widthFromWindow } = useWindowSize();

  useEffect(() => {
    if (widthFromWindow <= MOBILE_VIEW_WIDTH) {
      setSlidesPerView(1);
    } else if (
      widthFromWindow <= DESKTOP_VIEW_WIDTH &&
      widthFromWindow > MOBILE_VIEW_WIDTH
    ) {
      setSlidesPerView(2);
    } else if (widthFromWindow > DESKTOP_VIEW_WIDTH) {
      setSlidesPerView(3);
    }
  }, [widthFromWindow]);
  return (
    <section className="bg_primary_800">
      <div className="container-child-max-width | carousel_section">
        <div className="flex-item flex-item-space carousel_heading_container">
          <p className="clr_neutral_100 fs_heading_lg fw_body">
            An enterprise template to ramp up your company website
          </p>

          <div className="flex-item default_margin_left carousel_heading_buttons">
            <div
              className="bg_neutral_100 | arrow_right_class rotate_arrow"
              ref={btnPrevRef}
            >
              <Image src={ArrowRight} alt="hero-img" />
            </div>
            <div
              className="bg_neutral_100 default_margin_left | arrow_right_class"
              ref={btnNextRef}
            >
              <Image src={ArrowRight} alt="hero-img" />
            </div>
          </div>
        </div>
        <Swiper
          autoplay={true}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="carousel_card_container"
        >
          <div
            className="flex-item default_margin_left carousel_heading_buttons"
            style={{ display: "none" }}
          >
            <SwiperButtonPrev btnRef={btnPrevRef} />{" "}
            <SwiperButtonNext btnRef={btnNextRef} />
          </div>

          <SwiperSlide>
            <li className="bg_neutral_100 | carousel_card">
              <p className="fs_heading ff_open_sans fw_body">
                “Buyer buzz partner network disruptive non-disclosure agreement
                business”
              </p>

              <div className="flex-item default_margin_md">
                <div>
                  <Image src={CarouselImg1} alt="arrow-right" />
                </div>
                <div className="default_margin_left_sm">
                  <p className="fs_body_sm fw_btn_lg ff_open_sans">Albus Dumbledore</p>
                    <p style={{marginTop: '4px'}} />
                  <p className="fs_text fw_body ff_open_sans">Manager @ Howarts</p>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <li className="bg_neutral_100 | carousel_card">
              <p  className="fs_heading ff_open_sans fw_body">
                “Learning curve infrastructure value proposition advisor
                strategy user experience hypotheses investor.”
              </p>

              <div className="flex-item default_margin_md">
                <div>
                  <Image src={CarouselImg2} alt="arrow-right" />
                </div>
                <div className="default_margin_left_sm">
                  <p className="fs_body_sm fw_btn_lg ff_open_sans">Severus Snape</p>
                  <p style={{marginTop: '4px'}} /><p className="fs_text fw_body ff_open_sans">Manager @ Slytherin</p>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <li className="bg_neutral_100 | carousel_card">
              <p  className="fs_heading ff_open_sans fw_body">
                “Release facebook responsive web design business model canvas
                seed money monetization.”
              </p>

              <div className="flex-item default_margin_md">
                <div>
                  <Image src={CarouselImg3} alt="arrow-right" />
                </div>
                <div  className="default_margin_left_sm">
                  <p className="fs_body_sm fw_btn_lg ff_open_sans">Harry Potter</p>
                  <p style={{marginTop: '4px'}} /> <p className="fs_text fw_body ff_open_sans">Team Leader @ Gryffindor</p>
                </div>
              </div>
            </li>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <li className="bg_neutral_100 | carousel_card">
              <p className="fs_heading ff_open_sans fw_body">
                “Release facebook responsive web design business model canvas
                seed money monetization.”
              </p>

              <div className="flex-item default_margin_md">
                <div>
                  <Image src={CarouselImg3} alt="arrow-right" />
                </div>
                <div className="default_margin_left_sm">
                  <p className="fs_body_sm fw_btn_lg ff_open_sans">Harry Potter</p>
                  <p style={{marginTop: '4px'}} /> <p className="fs_text fw_body ff_open_sans">Team Leader @ Gryffindor</p>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <li className="bg_neutral_100 | carousel_card">
              <p className="fs_heading ff_open_sans fw_body">
                “Learning curve infrastructure value proposition advisor
                strategy user experience hypotheses investor.”
              </p>

              <div className="flex-item default_margin_md">
                <div>
                  <Image src={CarouselImg2} alt="arrow-right" />
                </div>
                <div className="default_margin_left_sm">
                  <p className="fs_body_sm fw_btn_lg ff_open_sans">Severus Snape</p>
                  <p style={{marginTop: '4px'}} /> <p className="fs_text fw_body ff_open_sans">Manager @ Slytherin</p>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="bg_neutral_100 | carousel_card">
              <p className="fs_heading ff_open_sans fw_body">
                “Buyer buzz partner network disruptive non-disclosure agreement
                business”
              </p>

              <div className="flex-item default_margin_md">
                <div>
                  <Image src={CarouselImg1} alt="arrow-right" />
                </div>
                <div className="default_margin_left_sm">
                  <p className="fs_body_sm fw_btn_lg ff_open_sans">Albus Dumbledore</p>
                  <p style={{marginTop: '4px'}} /><p className="fs_text fw_body ff_open_sans">Manager @ Howarts</p>
                </div>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default SliderSection;
