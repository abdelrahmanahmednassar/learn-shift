/* eslint-disable @next/next/no-img-element */
"use client";
import { useTrans } from "@/Providers/useTrans";

export default function OtherFeaturesSection() {
  const t = useTrans().trans;

  return (
    <section className="other-features">
      <h2
        className="title animated"
        data-anime-name="bottom-in"
        anime-before="120"
      >
        {t.pages.index.otherFeat.title}
      </h2>

      <div className="image">
        <img
          className="start-medal animated"
          data-anime-name="top-in"
          data-next-anime
          src="/assets/images/start-medal.png"
          alt="start-medal"
        />

        <div
          className="box-feat f6 animated"
          data-anime-name="right-in"
          data-next-anime
          data-anime-off-auto-run
          data-anime-delay="200"
        >
          <div className="icon">
            <i className="ri-group-line"></i>
          </div>
          {t.pages.index.otherFeat.elements[5]}
        </div>

        <div
          className="box-feat f7 animated"
          data-anime-name="right-in"
          data-next-anime
          data-anime-off-auto-run
          data-anime-delay="300"
        >
          <div className="icon">
            <i className="ri-money-dollar-circle-line"></i>
          </div>
          {t.pages.index.otherFeat.elements[6]}
        </div>

        <div
          className="box-feat f8 animated"
          data-anime-name="right-in"
          data-anime-off-auto-run
          data-next-anime
          data-anime-delay="400"
        >
          <div className="icon">
            <i className="ri-customer-service-2-line"></i>{" "}
          </div>
          {t.pages.index.otherFeat.elements[7]}
        </div>

        <div
          className="box-feat f9 animated"
          data-next-anime
          data-anime-name="right-in"
          data-anime-delay="500"
          data-anime-off-auto-run
        >
          <div className="icon">
            <i className="ri-wallet-3-line"></i>{" "}
          </div>
          {t.pages.index.otherFeat.elements[8]}
        </div>

        <div
          className="box-feat f1 animated"
          data-anime-name="top-in"
          data-next-anime
          data-anime-off-auto-run
          data-anime-delay="600"
        >
          <div className="icon">
            <i className="ri-home-2-line"></i>
          </div>
          {t.pages.index.otherFeat.elements[0]}
        </div>
        <div
          className="box-feat f2 animated"
          data-anime-name="left-in"
          data-anime-off-auto-run
          data-next-anime
          data-anime-delay="700"
        >
          <div className="icon">
            <i className="ri-whatsapp-line"></i>{" "}
          </div>
          {t.pages.index.otherFeat.elements[1]}
        </div>
        <div
          className="box-feat f3 animated"
          data-anime-name="left-in"
          data-next-anime
          data-anime-off-auto-run
          data-anime-delay="800"
        >
          <div className="icon">
            <i className="ri-dashboard-line"></i>{" "}
          </div>
          {t.pages.index.otherFeat.elements[2]}
        </div>
        <div
          className="box-feat f4 animated"
          data-anime-name="left-in"
          data-next-anime
          data-anime-off-auto-run
          data-anime-delay="900"
        >
          <div className="icon">
            <i className="ri-contract-line"></i>{" "}
          </div>
          {t.pages.index.otherFeat.elements[3]}
        </div>
        <div
          className="box-feat f5 animated"
          data-anime-name="left-in"
          data-anime-delay="1000"
          data-anime-off-auto-run
        >
          <div className="icon">
            <i className="ri-list-check-3"></i>{" "}
          </div>
          {t.pages.index.otherFeat.elements[4]}
        </div>
      </div>
    </section>
  );
}
