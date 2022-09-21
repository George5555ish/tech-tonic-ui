import NextPage from "next";
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
import Feather from "../assets/icons/feather.svg";
import Eye from "../assets/icons/eye.svg";
import Sun from "../assets/icons/sun.svg";
import BarChartBlue from "../assets/hero-illustrations/bar-chart-blue.svg";
import PieChartIllustration from "../assets/hero-illustrations/pie-chart-illustration.svg";
import HomepageImg1 from "../assets/images/homepage-img-1.svg";
import HomepageImg2 from "../assets/images/homepage-img-2.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";
import BoldoLogo from "../assets/logos/boldo-logo.svg";
import PrestoLogo from "../assets/logos/presto-logo.svg";
import BoldoCustomLogo from "../fragments/BoldoCustomLogo";

import DefaultImg from "../assets/images/default-img.svg";
import BlogImg2 from "../assets/images/blog-section-img2.svg";
import BlogImg3 from "../assets/images/BlogImg3.svg";
import BlogImg4 from "../assets/images/BlogImg4.svg";

import BlogAvatar1 from "../assets/images/blog-avatar-1.svg";
import BlogAvatar2 from "../assets/images/blog-avatar-2.svg";
import BlogAvatar3 from "../assets/images/blog-avatar-3.svg";
import ChevronDown from "../assets/icons/chevron-down.svg";

import Navbar from "../components/Navbar";
import SliderSection from "../components/SliderSection";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boldo - Edgar Allen</title>
        <meta name="description" content="Boldo - Edgar Allen Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="top_container bg_primary_800">
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
      <section className="container-child-max-width  | services_container">
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

      <section className="even-columns flex-item flex-item-space container-child-max-width | hero-services-container">
        <div className="hero-services-card">
          <Image src={HomepageImg1} alt="hero-img" />
          <div className="hero-services-card-child">
            <Image src={BarChartBlue} alt="hero-img" />
            <p className="fs_body_md fw_btn_lg">30%</p>
            <p className="text_sm text_primary_800">More income in June</p>
          </div>
        </div>

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
      </section>

      <section className="even-columns flex-item flex-item-space container-child-max-width | hero-services-container">
        <div>
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
      </section>
      <div className="default_padding_md" />
      <SliderSection />

      <section className="container-child-max-width default_padding_main | default_section ">
        <div>
          <Image src={DefaultImg} alt="default-img" />
        </div>
        <div className="flex-item default_section_container">
          <p className="fs_heading_md fw_body | default_section_text">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>
          <div className="  default_section_list_container">
            <div className="default_section_list">
              <p>We connect our customers with the best?</p>
              <div className="bg_primary_800 bg_circle">
                <Image src={ChevronDown} alt="arrow-right" />
              </div>
            </div>
            <div className="default_section_list">
              <p>Android research {"&"} development rockstar?</p>
              <div className="bg_primary_800 bg_circle">
                <Image src={ChevronDown} alt="arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-child-max-width  | services_container">
        <p className="fs_body_sm text_neutral_800 fw_body | blog_heading">
          Our Blog
        </p>
        <p className="fs_heading_lg">
          Value proposition accelerator product management venture
        </p>

        <div className=" flex-item flex-item-space hero-card-container blog_margin">
          <div className="hero-card">
            <div className="mx_height_class">
              <Image
                src={BlogImg4}
                alt="hero-img"
                className="mx_height_class"
              />
            </div>
            <div className="flex-item flex-item-align">
              <p className="text_primary_800 fs_body_sm fw_btn_lg padding-top-default">
                Category
              </p>
              <p className="text_neutral_600 fs_body_sm fw_body padding-top-default accent_text">
                November 22, 2021
              </p>
            </div>
            <p className="text_primary_800 fs_btn fw_body body_lh padding-top-default blog_lower_text">
              Pitch termsheet backing validation focus release.
            </p>
            <div className="flex-item blog_default_margin">
              <div>
                <Image src={BlogAvatar1} alt="arrow-right" />
              </div>
              <div className="default_margin_left_sm">
                 
                <p className="fs_body_sm fw_body ff_open_sans">
                  Manager @ Howarts
                </p>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="mx_height_class">
              <Image
                src={BlogImg3}
                alt="hero-img"
                className="mx_height_class"
              />
            </div>
            <div className="flex-item flex-item-align">
              <p className="text_primary_800 fs_body_sm fw_btn_lg padding-top-default">
                Category
              </p>
              <p className="text_neutral_600 fs_body_sm fw_body padding-top-default accent_text">
                November 22, 2021
              </p>
            </div>
            <p className="text_primary_800 fs_btn fw_body body_lh padding-top-default blog_lower_text">
              Seed round direct mailing non-disclosure agreement graphical user
              interface rockstar.
            </p>
            <div className="flex-item blog_default_margin">
              <div>
                <Image src={BlogAvatar1} alt="arrow-right" />
              </div>
              <div className="default_margin_left_sm">
                 
                <p className="fs_body_sm fw_body ff_open_sans">
                  Manager @ Howarts
                </p>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="mx_height_class">
              <Image src={BlogImg2} alt="hero-img" />
            </div>
            <div className="flex-item flex-item-align">
              <p className="text_primary_800 fs_body_sm fw_btn_lg padding-top-default">
                Category
              </p>
              <p className="text_neutral_600 fs_body_sm fw_body padding-top-default accent_text">
                November 22, 2021
              </p>
            </div>
            <p className="text_primary_800 fs_btn fw_body body_lh padding-top-default blog_lower_text">
              Beta prototype sales iPad gen-z marketing network effects value
              proposition
            </p>
            <div className="flex-item blog_default_margin">
              <div>
                <Image src={BlogAvatar1} alt="arrow-right" />
              </div>
              <div className="default_margin_left_sm">
                 
                <p className="fs_body_sm fw_body ff_open_sans">
                  Manager @ Howarts
                </p>
              </div>
            </div>
          </div>
        </div>

        <a href="#" className="btn-plain-accent">
          Load more
        </a>
      </section>
      <section>
        <div className="container default_padding_main">
           
          <div className="bg_primary_800 text_neutral_100 flex-item flex-item-center flex-item-column | cta">
            <p className="text_neutral_400 fs_heading_lg fw_body">An enterprise template to ramp up your company website</p>
            <form>
              <input type="text" aria-label="email-address" /> 
              <button className="bg_accent_200 fs_btn fw_btn_lg | btn-accent" type="submit">Start now</button>
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
