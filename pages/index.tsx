import NextPage from "next";
import Head from "next/head";
import Image from "next/future/image";
import React from "react";
import styles from "../styles/Home.module.css";
import DefaultImg from "../assets/images/default-img.png";
import ChevronDown from "../assets/icons/chevron-down.svg";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Navbar from "../components/Navbar";
import SliderSection from "../components/SliderSection";
import TopSection from "../components/TopSection";
import ServicesSection from "../components/ServicesSection";
import BlogSection from "../components/BlogSection";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import HeroCardsSection from "../components/HeroCardSection";
const Home = () => {
  const [isImgLoaded, setIsImgLoaded] = React.useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Boldo - Edgar Allen</title>
        <meta name="description" content="Boldo - Edgar Allen Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopSection />
      <Fade bottom>
        <ServicesSection />
      </Fade>
      <HeroCardsSection />
      <div className="default_padding_md" />
      <SliderSection />
      <Slide bottom>
        <section className="container-child-max-width default_padding_main | default_section ">
          <div>
            <Image
              src={DefaultImg}
              alt="default-img"
              onLoad={() => {
                setIsImgLoaded(true);
              }}
              style={
                isImgLoaded ? { display: "inline-block" } : { display: "none" }
              }
            />
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
      </Slide>

      <Slide bottom>
        <BlogSection />
      </Slide>
      <Fade bottom>
        <Cta />
      </Fade>
      <Footer />
    </div>
  );
};
export default Home;