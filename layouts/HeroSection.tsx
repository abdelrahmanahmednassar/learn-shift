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
              href="https://api.whatsapp.com/send?phone=201003685977&text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%86%D8%A7%20%D8%B4%D9%81%D8%AA%20%D9%85%D9%86%D8%B5%D8%A9%20Learn%20Shift%20%D9%88%D8%B9%D8%AC%D8%A8%D9%86%D9%8A%20%D9%81%D9%83%D8%B1%D8%A9%20%D8%A5%D9%86%D8%B4%D8%A7%D8%A1%20%D9%85%D9%86%D8%B5%D8%A9%20%D8%AA%D8%B9%D9%84%D9%8A%D9%85%D9%8A%D8%A9%20%D8%AE%D8%A7%D8%B5%D8%A9.%20%D8%AD%D8%A7%D8%A8%D8%A8%20%D8%A3%D8%B9%D8%B1%D9%81%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%A8%D8%A7%D9%82%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%85%D9%85%D9%8A%D8%B2%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AD%D8%A9%D8%8C%20%D9%88%D8%AA%D8%B3%D8%A7%D8%B9%D8%AF%D9%88%D9%86%D9%8A%20%D8%A3%D8%AE%D8%AA%D8%A7%D8%B1%20%D8%A7%D9%84%D8%A3%D9%86%D8%B3%D8%A8%20%D9%84%D9%8A%D8%A7.%0A%0A"
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
