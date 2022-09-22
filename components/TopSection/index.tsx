import React from 'react'
import Image from "next/future/image";
import BoldoCustomLogo from '../../fragments/BoldoCustomLogo'
import Navbar from '../Navbar'
import HeroImg1 from "../../assets/hero-illustrations/hero-card-3.svg";
import HeroImg2 from "../../assets/hero-illustrations/bar-container.svg";
import HeroImg4 from "../../assets/hero-illustrations/hero-card-4.svg";
import HeroImg5 from "../../assets/hero-illustrations/hero-card-5.svg";
import BoldoLogo from "../../assets/logos/boldo-logo.svg";
import PrestoLogo from "../../assets/logos/presto-logo.svg";
function TopSection() {
  return (
   
    <section className="top_container bg_primary_800"  >
    <div className="overlay_circle" />
    <header className="container-child-max-width flex-item flex-item-space | header">
      <BoldoCustomLogo
        textColor={"#FFF"}
        logoColor={"rgba(101, 228, 163, 1)"}
      />
      <Navbar />
    </header>

    <div className="hero-section even-columns container-child-max-width">
      <div className="top_container_left">
        <p className="clr_neutral_100 fs_heading_lg heading_width_sm | hero-section-text">
          Save time by building fast with Boldo Template
        </p>
        <p className="text_neutral_400 fs_body_sm heading_width_sm">
          Funding handshake buyer business-to-business metrics iPad
          partnership. First mover advantage innovator success deployment
          non-disclosure.
        </p>
        <div className="flex-item default_margin | top_container_buttons">
          <a className="bg_accent_200 fs_btn fw_btn_lg | btn-accent">
            Buy template
          </a>
          <a className="fs_btn fw_btn_lg default_margin_left | btn-plain">
            Explore
          </a>
        </div>
      </div>
      <div className="hero-section-child">
        <div className="default_img">
          <Image src={HeroImg1} className="hero_dots" alt="hero-img" />
          <Image src={HeroImg2} className="hero_chart" alt="hero-img" />
        </div>
        <div className="flex-item flex-item-space bottom_hero_cards">
          <div className="default_img_sm">
            <Image src={HeroImg1} className="hero_dots" alt="hero-img" />
            <Image src={HeroImg4} className="hero_chart" alt="hero-img" />
          </div>
          <div style={{background:"#0a2640", borderRadius: '15.0305px'}}>
            <Image src={HeroImg5} alt="hero-img" />
          </div>
        </div>
      </div>
    </div>

    <div className="flex-item flex-item-space container-child-max-width | logo-container">
      <Image src={BoldoLogo} alt="hero-img" />
      <Image src={PrestoLogo} alt="hero-img" />
      <Image src={BoldoLogo} alt="hero-img" />
      <Image src={PrestoLogo} alt="hero-img" />
      <Image src={BoldoLogo} alt="hero-img" />
      <Image src={PrestoLogo} alt="hero-img" />
    </div>
  </section> 
  )
}

export default TopSection