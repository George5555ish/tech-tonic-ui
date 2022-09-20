import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import styles from "../styles/Home.module.css";
import HeroImg1 from "../assets/hero-illustrations/hero-card-3.svg";
import HeroImg2 from "../assets/hero-illustrations/bar-container.svg";
import HeroImg4 from "../assets/hero-illustrations/hero-card-4.svg";
import HeroImg5 from "../assets/hero-illustrations/hero-card-5.svg";

import HeroCardImg1 from "../assets/hero-illustrations/hero-illustration-1.svg";
import HeroCardImg2 from "../assets/hero-illustrations/hero-illustration-2.svg";
import HeroCardImg3 from "../assets/hero-illustrations/hero-illustration-3.svg";

import Check from "../assets/icons/check.svg";
import BarChartBlue from "../assets/hero-illustrations/bar-chart-blue.svg";
import HomepageImg1 from "../assets/images/homepage-img-1.svg";
import HomepageImg2 from "../assets/images/homepage-img-2.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";
import BoldoLogo from "../assets/logos/boldo-logo.svg";
import PrestoLogo from "../assets/logos/presto-logo.svg";
import BoldoCustomLogo from "../fragments/BoldoCustomLogo";
import Navbar from "../components/Navbar";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boldo - Edgar Allen</title>
        <meta name="description" content="Boldo - Edgar Allen Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="top_container container bg_primary_800">
        <div className="bg_circle" />
        <header className="container-child-max-width flex-item flex-item-space">
          <BoldoCustomLogo
            textColor={"#FFF"}
            logoColor={"rgba(101, 228, 163, 1)"}
          />
          <Navbar />
        </header>

        <div className="hero-section even-columns container-child-max-width">
          <div className="">
            <p className="clr_neutral_100 fs_heading_lg heading_width_sm | hero-section-text">
              Save time by building fast with Boldo Template{" "}
            </p>
            <p className="clr_neutral_100 fs_body_sm heading_width_sm">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="flex-item default_margin">
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
              <div>
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
      <section className="container container-child-max-width | services_container">
        <p className="fs_body_sm text_neutral_800 fw_body">Our Services</p>
        <p className="fs_heading_lg">
          Handshake infographic mass market crowdfunding iteration.
        </p>

        <div className="even-columns flex-item-center hero-card-container">
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

      <section className="even-columns container-child-max-width hero hero-services-container">
        <div className="hero-services-card">
          <Image src={HomepageImg1} alt="hero-img" />
          <div className="hero-services-card-child">
            <Image src={BarChartBlue} alt="hero-img" />
            <p className="fs_body_md fw_btn_lg">30%</p>
            <p className="text_sm text_primary_800">More income in June</p>
          </div>
        </div>
        <div>
          <p className="fs_body_md text_primary_800 fw_body | hero-service-text">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>
          <div>
            <div className="flex-item hero-service-list">
              <div className="check-container bg_primary_800 flex-item-center">
                <Image src={Check} alt="hero-img" />
              </div>
              <p className="fs_body_md">We connect our customers with the best.</p>
            </div>
            <div className="flex-item hero-service-list">
              <div  className="check-container bg_primary_800 flex-item-center">
                <Image src={Check} alt="hero-img" />
              </div>
              <p className="fs_body_md">Advisor success customer launch party.</p>
            </div>
            <div  className="flex-item hero-service-list">
              <div  className="check-container bg_primary_800 flex-item-center">
                <div >
                  <Image src={Check} alt="hero-img" />
                </div>
              </div>
              <p className="fs_body_md">Business-to-consumer long tail.</p>
            </div>
          </div>
          <div className="default_margin_lg"/>
          <a className="btn-primary">Start now</a>
        </div>
      </section>

      <section className="even-columns container">
        <div>
          <p>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>
          <div>
            <div>
              <Image src={HeroImg2} alt="hero-img" />
              <p>We connect our customers with the best.</p>
            </div>
            <div>
              <Image src={HeroImg2} alt="hero-img" />
              <p>We connect our customers with the best.</p>
            </div>
            <div>
              <div>
                <Image src={HeroImg2} alt="hero-img" />
              </div>
              <p>We connect our customers with the best.</p>
            </div>
          </div>
        </div>

        <div>
          <Image src={HeroImg2} alt="hero-img" />
          <div>
            <Image src={HeroImg2} alt="hero-img" /> <p>30%</p>
            <p>More income in June</p>
          </div>
        </div>
      </section>

      <section className="container">
        <div>
          <p>An enterprise template to ramp up your company website</p>

          <div>
            <div>
              <Image src={HeroImg2} alt="hero-img" />
            </div>
            <div>
              <Image src={HeroImg2} alt="hero-img" />
            </div>
          </div>
        </div>

        <div>
          <div>
            <p>
              “Buyer buzz partner network disruptive non-disclosure agreement
              business”
            </p>

            <div>
              <div>
                <Image src={ArrowRight} alt="arrow-right" />
              </div>
              <div>
                <p>Albus Dumbledore</p>
                <p>Manager @ Howarts</p>
              </div>
            </div>
          </div>

          <div>
            <p>
              “Buyer buzz partner network disruptive non-disclosure agreement
              business”
            </p>

            <div>
              <div>
                <Image src={ArrowRight} alt="arrow-right" />
              </div>
              <div>
                <p>Albus Dumbledore</p>
                <p>Manager @ Howarts</p>
              </div>
            </div>
          </div>

          <div>
            <p>
              “Buyer buzz partner network disruptive non-disclosure agreement
              business”
            </p>

            <div>
              <div>
                <Image src={ArrowRight} alt="arrow-right" />
              </div>
              <div>
                <p>Albus Dumbledore</p>
                <p>Manager @ Howarts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div>
          <Image src={ArrowRight} alt="arrow-right" />
        </div>
        <div>
          <p>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>
          <div>
            <div>
              <p>
                We connect our customers with the best, and help them keep
                up-and stay open.
              </p>
              <div>
                <Image src={ArrowRight} alt="arrow-right" />
              </div>
            </div>

            <div>
              <p>Android research {"&"} development rockstar?</p>
              <div>
                <Image src={ArrowRight} alt="arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <p>Our Blog</p>
        <p>Value proposition accelerator product management venture</p>
        <div>
          <div>
            <Image src={ArrowRight} alt="arrow-right" />
            <div>
              <p>Category</p>
              <p>November 22, 2021</p>
            </div>
            <p>Pitch termsheet backing validation focus release.</p>
            <div>
              <div>
                <Image src={ArrowRight} alt="arrow-right" />
              </div>
              <p>Chandler Bing</p>
            </div>
          </div>

          <div>
            <Image src={ArrowRight} alt="arrow-right" />
            <div>
              <p>Category</p>
              <p>November 22, 2021</p>
            </div>
            <p>
              Seed round direct mailing non-disclosure agreement graphical user
              interface rockstar.
            </p>
            <div>
              <div>
                <Image src={ArrowRight} alt="arrow-right" />
              </div>
              <p>Rachel Green</p>
            </div>
          </div>

          <div>
            <Image src={ArrowRight} alt="arrow-right" />
            <div>
              <p>Category</p>
              <p>November 22, 2021</p>
            </div>
            <p>
              Beta prototype sales iPad gen-z marketing network effects value
              proposition
            </p>
            <div>
              <div>
                <Image src={ArrowRight} alt="arrow-right" />
              </div>
              <p>Monica Geller</p>
            </div>
          </div>
        </div>
        <a>Load more</a>
      </section>
      <section className="container">
        <div>
          <div className="bg_circle" />
          <div>
            <p>An enterprise template to ramp up your company website</p>
            <form>
              <input type="text" aria-label="email-address" />
              <button type="submit">Start now</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className="even-columns container">
          <div>
            <a>
              <div className="logo"></div>
              <p className="logo_text">Boldo</p>
            </a>

            <p>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p>All rights reserved.</p>
          </div>

          <ul>
            <li>
              <a>Landings</a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Services</a>
            </li>
          </ul>

          <ul>
            <li>
              <a>Company</a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Careers</a> <strong>Hiring!</strong>
            </li>
            <li>
              <a>Services</a>
            </li>
          </ul>

          <ul>
            <li>
              <a>Resources</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Services</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
