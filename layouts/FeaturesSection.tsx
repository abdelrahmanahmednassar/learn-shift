/* eslint-disable @next/next/no-img-element */
"use client";
import { useTrans } from "@/Providers/useTrans";

export default function FeaturesSection() {
  const t = useTrans().trans;

  return (
    <section className="features">
      <div className="security row feat">
        <div className="right col-lg-6 col-md-12 d-flex align-items-center">
          <div
            className="icon animated"
            data-anime-name="right-in"
            data-next-anime
            anime-before="200"
          >
            <i className="ri-shield-line"></i>
          </div>
          <div className="text">
            <h1
              className="red animated"
              data-anime-name="right-in"
              data-anime-delay="50"
              data-next-anime
            >
              {t.pages.index.features.security.title}
            </h1>
            <p
              className="text-security animated"
              data-anime-name="right-in"
              data-anime-delay="100"
            >
              {t.pages.index.features.security.comment}
            </p>
          </div>
        </div>
        <div className="left col-lg-6 col-md-12 d-flex justify-content-lg-end">
          <div className="image group-anime" wait-anime="text-security">
            <div
              className="pattern animated"
              data-anime-name="bottom-in-center"
              data-next-anime
            ></div>
            <div
              className="back animated"
              data-anime-name="bottom-in"
              data-anime-delay="200"
              data-next-anime
            ></div>
            <img
              className="img shield animated"
              data-anime-name="left-in"
              data-anime-delay="300"
              data-next-anime
              src="/assets/images/shield.png"
              alt="shield"
            />
            <div
              className="ads-image-1 animated"
              data-anime-name="right-in"
              data-anime-delay="400"
              data-next-anime
            >
              <span
                className="app-img animated"
                data-anime-name="right-in"
                data-anime-delay="500"
                data-next-anime
              ></span>
              <div
                className="text-app animated"
                data-anime-name="right-in"
                data-anime-delay="600"
                data-next-anime
              >
                <span className="app-title"></span>
                <div className="app-commint">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <span
                className="btn-download animated"
                data-anime-name="right-in"
                data-anime-delay="700"
                data-next-anime
              >
                <i className="ri-arrow-down-line"></i>
              </span>
              <div
                className="blur-layer animated"
                data-anime-name="bottom-in"
                data-anime-delay="900"
                data-next-anime
              >
                <i className="ri-close-line"></i>
              </div>
            </div>
            <div
              className="ads-image-2 animated"
              data-anime-name="bottom-in"
              data-anime-delay="1000"
              data-next-anime
            >
              <div
                className="video animated"
                data-anime-name="bottom-in"
                data-anime-delay="1100"
                data-next-anime
              >
                <i
                  className="ri-movie-line animated"
                  data-anime-name="bottom-in"
                  data-anime-delay="1200"
                  data-next-anime
                ></i>
              </div>
              <div
                className="blur-layer animated"
                data-anime-name="bottom-in"
                data-anime-delay="1500"
              >
                <i className="ri-close-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="star-img animated"
        data-anime-name="bottom-in"
        anime-before="120"
      >
        <img src="/assets/images/star.png" alt="star" />
        <img src="/assets/images/star.png" alt="star" />
      </div>

      <div className="analytics row feat">
        <div className="right col-lg-6 col-md-12 d-flex justify-content-start order">
          <div className="image">
            <div
              className="pattern animated"
              data-anime-name="bottom-in-center"
              data-next-anime
            ></div>
            <div
              className="back animated"
              data-anime-name="bottom-in"
              data-next-anime
            ></div>
            <img
              className="img hand-up animated"
              data-anime-name="left-in"
              data-anime-delay="300"
              data-next-anime
              src="/assets/images/hand-up.png"
              alt="hand-up"
            />
            <img
              className="img hand-down animated"
              data-anime-name="right-in"
              data-anime-delay="400"
              data-next-anime
              src="/assets/images/hand-down.png"
              alt="hand-down"
            />

            <div
              className="box excellent animated"
              data-anime-name="right-in"
              data-anime-delay="500"
              data-next-anime
            >
              <div
                className="mark animated"
                data-anime-name="right-in"
                data-anime-delay="600"
                data-next-anime
              >
                <i
                  className="ri-user-smile-line animated"
                  data-anime-name="right-in"
                  data-anime-delay="700"
                  data-next-anime
                ></i>
              </div>
              <p> {t.pages.index.features.analytics.eval[0]}</p>
            </div>
            <div
              className="box very-good animated"
              data-anime-name="left-in"
              data-anime-delay="800"
              data-next-anime
            >
              <div
                className="mark animated"
                data-anime-name="left-in"
                data-anime-delay="900"
                data-next-anime
              >
                <i
                  className="ri-seedling-line animated"
                  data-anime-name="left-in"
                  data-anime-delay="1000"
                  data-next-anime
                ></i>
              </div>
              <p> {t.pages.index.features.analytics.eval[1]}</p>
            </div>
            <div
              className="box good animated"
              data-anime-name="left-in"
              data-anime-delay="1100"
              data-next-anime
            >
              <div
                className="mark animated"
                data-anime-name="left-in"
                data-anime-delay="1200"
                data-next-anime
              >
                <i
                  className="ri-heart-pulse-line animated"
                  data-anime-name="left-in"
                  data-anime-delay="1300"
                  data-next-anime
                ></i>
              </div>
              <p> {t.pages.index.features.analytics.eval[2]}</p>
            </div>
            <div
              className="box bad animated"
              data-anime-name="right-in"
              data-anime-delay="1400"
              data-next-anime
            >
              <div
                className="mark animated"
                data-anime-name="right-in"
                data-anime-delay="1500"
                data-next-anime
              >
                <i
                  className="ri-information-line animated"
                  data-anime-name="right-in"
                  data-anime-delay="1600"
                  data-next-anime
                ></i>
              </div>
              <p> {t.pages.index.features.analytics.eval[3]}</p>
            </div>
            <div
              className="box very-bad animated"
              data-anime-name="bottom-in"
              data-anime-delay="1700"
              data-next-anime
            >
              <div
                className="mark animated"
                data-anime-name="bottom-in"
                data-anime-delay="1800"
                data-next-anime
              >
                <i
                  className="ri-alert-line animated"
                  data-anime-name="bottom-in"
                  data-anime-delay="1900"
                ></i>
              </div>
              <p> {t.pages.index.features.analytics.eval[4]}</p>
            </div>
          </div>
        </div>
        <div className="left col-lg-6 col-md-12 d-flex align-items-center justify-content-lg-end">
          <div
            className="icon red animated"
            data-anime-name="left-in"
            data-anime-before="200"
            data-next-anime
          >
            <i className="ri-bar-chart-box-line"></i>
          </div>
          <div className="text">
            <h1
              className="red animated"
              data-anime-name="left-in"
              data-anime-delay="50"
              data-next-anime
            >
              {t.pages.index.features.analytics.title}
            </h1>
            <p
              className="animated"
              data-anime-name="left-in"
              data-anime-delay="100"
            >
              {t.pages.index.features.analytics.comment}
            </p>
          </div>
        </div>
      </div>
      <div className="help row feat">
        <div className="right col-lg-6 col-md-12 d-flex align-items-center">
          <div
            className="icon animated"
            data-anime-name="right-in"
            anime-before="200"
            data-next-anime
          >
            <i className="ri-price-tag-3-line"></i>
          </div>
          <div className="text">
            <h1
              className="red animated"
              data-anime-name="right-in"
              data-next-anime
              data-anime-delay="50"
            >
              {t.pages.index.features.help.title}
            </h1>
            <p
              className="animated"
              data-anime-name="right-in"
              data-anime-delay="100"
            >
              {t.pages.index.features.help.comment}
            </p>
          </div>
        </div>
        <div className="left col-lg-6 col-md-12 d-flex justify-content-lg-end">
          <div className="image">
            <div
              className="pattern animated"
              data-anime-name="bottom-in-center"
              data-next-anime
            ></div>
            <div
              className="back animated"
              data-anime-name="bottom-in"
              data-next-anime
            ></div>
            <img
              className="img speaker animated"
              data-anime-name="left-in"
              data-anime-delay="300"
              src="/assets/images/speaker.png"
              alt="speaker"
              data-next-anime
            />
            <img
              className="img monay animated"
              data-anime-name="right-in"
              data-anime-delay="500"
              src="/assets/images/monay.png"
              alt="monay"
            />
          </div>
        </div>
      </div>
      <div className="multi row feat">
        <div className="right col-lg-6 col-md-12 d-flex justify-content-start order">
          <div className="image">
            <div
              className="pattern animated"
              data-anime-name="bottom-in-center"
              data-next-anime
            ></div>
            <div
              className="back animated"
              data-anime-name="bottom-in"
              data-next-anime
            ></div>
            <img
              className="img pc animated"
              data-anime-name="bottom-in"
              data-next-anime
              data-anime-delay="200"
              src="/assets/images/pc.png"
              alt="pc"
            />

            <div
              className="box-course one animated"
              data-anime-name="left-in"
              data-next-anime
              data-anime-delay="600"
            >
              <div className="background"></div>
              <div className="text">
                <div className="right">
                  <h2 className="name">
                    {t.pages.index.features.multi.image[0].title}
                  </h2>
                  <p className="date">2025-05-11</p>
                  <p className="day-left">
                    {t.pages.index.features.multi.image[0].date}
                  </p>
                </div>
                <div className="left">
                  <p className="rate">52%</p>
                </div>
              </div>
            </div>
            <div
              className="box-course two animated"
              data-anime-name="left-in"
              data-next-anime
              data-anime-delay="500"
            >
              <div className="background"></div>
              <div className="text">
                <div className="right">
                  <h2 className="name">
                    {t.pages.index.features.multi.image[1].title}
                  </h2>
                  <p className="date">2025-6-15</p>
                  <p className="day-left">
                    {t.pages.index.features.multi.image[0].date}
                  </p>
                </div>
                <div className="left">
                  <p className="rate">77%</p>
                </div>
              </div>
            </div>
            <div
              className="box-course three animated"
              data-anime-name="left-in"
              data-next-anime
              data-anime-delay="400"
            >
              <div className="background"></div>
              <div className="text">
                <div className="right">
                  <h2 className="name">
                    {t.pages.index.features.multi.image[2].title}
                  </h2>
                  <p className="date">2025-02-17</p>
                  <p className="day-left">
                    {t.pages.index.features.multi.image[2].date}
                  </p>
                </div>
                <div className="left">
                  <p className="rate">62%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left col-lg-6 col-md-12 d-flex align-items-center justify-content-lg-end">
          <div
            className="icon red animated"
            data-anime-name="left-in"
            data-anime-before="200"
            data-next-anime
          >
            <i className="ri-macbook-line"></i>
          </div>
          <div className="text">
            <h1
              className="red animated"
              data-anime-name="left-in"
              data-next-anime
              data-anime-delay="50"
            >
              {t.pages.index.features.multi.title}
            </h1>
            <p
              className="animated"
              data-anime-name="left-in"
              data-anime-delay="100"
            >
              {t.pages.index.features.multi.comment}
            </p>
          </div>
        </div>
      </div>
      <div
        className="done-img animated"
        data-anime-name="bottom-in"
        data-anime-before="120"
      >
        <img src="/assets/images/done.png" alt="done" />
        <img src="/assets/images/done.png" alt="done" />
      </div>
    </section>
  );
}
