import React from 'react'
import Image from "next/future/image";


import HeroCardImg1 from "../../assets/hero-illustrations/hero-illustration-1.svg";
import HeroCardImg2 from "../../assets/hero-illustrations/hero-illustration-2.svg";
import HeroCardImg3 from "../../assets/hero-illustrations/hero-illustration-3.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
function ServicesSection() {
  return (
    <section className="container-child-max-width  | services_container"   >
    <p className="fs_body_sm text_neutral_800 fw_body">Our Services</p>
    <p className="fs_heading_lg">
      Handshake infographic mass market crowdfunding iteration.
    </p>

    <div className=" flex-item flex-item-space hero-card-container">
      <div className="hero-card">
        <Image src={HeroCardImg1} alt="hero-img" />
        <p className="text_primary_800 fs_body_md fw_body padding-top-default">
          Cool feature title
        </p>
        <p className="text_neutral_800 fs_btn fw_body body_lh">
          Learning curve network effects return on investment.
        </p>
        <a
          href="#"
          className="text_primary_800 fs_btn fw_btn_lg padding-top-default flex-item  | explore_link"
        >
          <p> Explore page</p>
          <Image src={ArrowRight} alt="hero-img" />
        </a>
      </div>

      <div className="hero-card">
        <Image src={HeroCardImg2} alt="hero-img" />
        <p className="text_primary_800 fs_body_md fw_body padding-top-default">
          Even cooler feature
        </p>
        <p className="text_neutral_800 fs_btn fw_body body_lh">
          Learning curve network effects return on investment.
        </p>
        <a
          href="#"
          className="text_primary_800 fs_btn fw_btn_lg padding-top-default flex-item  | explore_link"
        >
          <p> Explore page</p>
          <Image src={ArrowRight} alt="hero-img" />
        </a>
      </div>

      <div className="hero-card">
        <Image src={HeroCardImg3} alt="hero-img" />
        <p className="text_primary_800 fs_body_md fw_body padding-top-default">
          Cool feature title
        </p>
        <p className="text_neutral_800 fs_btn fw_body body_lh">
          Learning curve network effects return on investment.
        </p>
        <a
          href="#"
          className="text_primary_800 fs_btn fw_btn_lg padding-top-default flex-item  | explore_link"
        >
          <p> Explore page</p>
          <Image src={ArrowRight} alt="hero-img" />
        </a>
      </div>
    </div>
  </section>
  )
}

export default ServicesSection