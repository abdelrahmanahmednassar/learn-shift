/* eslint-disable @next/next/no-img-element */
"use client";
import { useTrans } from "@/Providers/useTrans";
import Link from "next/link";

export default function HeroSection() {
  const t = useTrans().trans;

  return (
    <>
      <section className="first-sect row">
        <div className="right col-lg-6 col-md-12">
          <div className="title">
            <h1 className="animated" data-anime-name="right-in" data-next-anime>
              {t.pages.index.firstSect.title}
            </h1>
            <img
              className="arrow animated"
              data-anime-name="right-in"
              data-anime-delay="200"
              data-next-anime
              src="/assets/images/arrow.svg"
              alt="arrow"
            />
            <span
              className="word animated"
              data-anime-name="right-in"
              data-anime-delay="500"
              data-next-anime
            >
              {t.pages.index.firstSect.smallWord}
            </span>
          </div>
          <p
            className="animated"
            data-anime-name="right-in"
            data-anime-delay="700"
            data-next-anime
          >
            {t.pages.index.firstSect.comment}
          </p>

          <div
            className="buttons animated"
            data-anime-name="right-in"
            data-anime-delay="800"
            data-next-anime
          >
            <Link
              href="https://api.whatsapp.com/send?phone=201556489708"
              target="_blank"
              className="register"
            >
              {t.pages.index.firstSect.buttons.signup}
            </Link>
          </div>
        </div>
        <div className="left col-lg-6 col-md-12 d-flex justify-content-end">
          <div className="image">
            <div
              className="back animated"
              data-next-anime
              data-anime-name="left-in"
              data-anime-delay="850"
            ></div>
            <img
              className="rocket animated"
              data-anime-name="left-in"
              data-anime-delay="950"
              data-next-anime
              src="/assets/images/rocket.png"
              alt="rocket"
            />
            <img
              className="mobile animated"
              data-anime-name="top-in"
              data-next-anime
              data-anime-delay="1050"
              src="/assets/images/mobile.png"
              alt="mobile"
            />
            <img
              className="aim animated"
              data-anime-name="bottom-in"
              data-next-anime
              data-anime-delay="1000"
              src="/assets/images/aim.png"
              alt="aim"
            />
            <div
              className="pattern animated"
              data-anime-name="left-in-center"
              data-anime-delay="900"
              data-next-anime
            ></div>
          </div>
        </div>
      </section>
      <div
        className="scroll-down animated"
        data-anime-name="bottom-in"
        data-anime-delay="1100"
      >
        <div className="box"></div>
        <div className="line-doted">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}
