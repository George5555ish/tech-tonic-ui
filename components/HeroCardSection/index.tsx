import React from 'react'
import Image from "next/future/image";

import Fade from 'react-reveal/Fade'; 

import Check from "../../assets/icons/check.svg";
import Feather from "../../assets/icons/feather.svg";
import Eye from "../../assets/icons/eye.svg";
import Sun from "../../assets/icons/sun.svg";
import BarChartBlue from "../../assets/hero-illustrations/bar-chart-blue.svg";
import PieChartIllustration from "../../assets/hero-illustrations/pie-chart-illustration.svg";
import HomepageImg1 from "../../assets/images/homepage-img-1.svg";
import HomepageImg2 from "../../assets/images/homepage-img-2.svg"; 

function HeroCardsSection() {
  return (
    <>
     <section className="even-columns flex-item flex-item-space container-child-max-width | hero-services-container">
     <Fade left>
     <div className="hero-services-card" >
          <Image src={HomepageImg1} alt="hero-img" />
          <div className="hero-services-card-child">
            <Image src={BarChartBlue} alt="hero-img" />
            <p className="fs_body_md fw_btn_lg">30%</p>
            <p className="text_sm text_primary_800">More income in June</p>
          </div>
        </div>
       </Fade>
       <Fade right>

        <div>
          <p className="fs_body_md text_primary_800 fw_body default_margin_lg | hero-service-text">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>
          <div>
            <div className="flex-item hero-service-list">
              <div className="check-container bg_primary_800 flex-item-center">
                <Image src={Check} alt="hero-img" />
              </div>
              <p className="fs_body_md">
                We connect our customers with the best.
              </p>
            </div>
            <div className="flex-item hero-service-list">
              <div className="check-container bg_primary_800 flex-item-center">
                <Image src={Check} alt="hero-img" />
              </div>
              <p className="fs_body_md">
                Advisor success customer launch party.
              </p>
            </div>
            <div className="flex-item hero-service-list">
              <div className="check-container bg_primary_800 flex-item-center">
                <div>
                  <Image src={Check} alt="hero-img" />
                </div>
              </div>
              <p className="fs_body_md">Business-to-consumer long tail.</p>
            </div>
          </div>
          <div className="default_margin_lg" />
          <a className="btn-primary">Start now</a>
        </div>
        </Fade>
      </section>

      <section className="even-columns flex-item flex-item-space container-child-max-width | hero-services-container">
      <Fade right><div>
          <p className="fs_body_md text_primary_800 fw_body | hero-service-text">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>
          <div>
            <div className="flex-item hero-service-list active bordered_item">
              <Image src={Feather} alt="hero-img" />
              <p className="fs_body_sm">
                We connect our customers with the best.
              </p>
            </div>
            <div className="flex-item hero-service-list bordered_item">
              <div>
                <Image src={Eye} alt="hero-img" />
              </div>
              <p className="fs_body_sm">
                Advisor success customer launch party.
              </p>
            </div>
            <div className="flex-item hero-service-list bordered_item">
              <Image src={Sun} alt="hero-img" />

              <p className="fs_body_sm">Business-to-consumer long tail.</p>
            </div>
          </div>
        </div>
        </Fade>
        <Fade left>
  <div className="hero-services-card right_service_container">
          <Image src={HomepageImg2} alt="hero-img" />
          <div className="right_service_card flex-item-center flex-item-column">
            <Image src={PieChartIllustration} alt="hero-img" />
            <div className="flex-item  | service-list-container service_list_first_child">
              <p className="bg_primary_400 | service-list-circle" />
              <p className="text_sm text_primary_800 service_list_padding">
                35% - Agile Development
              </p>
            </div>
            <div className="flex-item | service-list-container">
              <p className="bg_accent_200 | service-list-circle" />
              <p className="text_sm text_primary_800 service_list_padding">
                30% - Investor bandwidth
              </p>
            </div>
            <div className="flex-item | service-list-container">
              <p className="bg_neutral_800 | service-list-circle" />
              <p className="text_sm text_primary_800 service_list_padding">
                35% - A/B testing
              </p>
            </div>
          </div>
        </div>
        </Fade>
      
      </section>
    </>
  )
}

export default HeroCardsSection