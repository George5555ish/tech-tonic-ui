import React from 'react'
import Image from "next/future/image";

import BlogImg2 from "../../assets/images/blog-section-img2.svg";
import BlogImg3 from "../../assets/images/BlogImg3.svg";
import BlogImg4 from "../../assets/images/BlogImg4.svg";

import BlogAvatar1 from "../../assets/images/blog-avatar-1.svg";
import BlogAvatar2 from "../../assets/images/blog-avatar-2.svg";
import BlogAvatar3 from "../../assets/images/blog-avatar-3.svg";
function BlogSection() {
  return (
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
  )
}

export default BlogSection