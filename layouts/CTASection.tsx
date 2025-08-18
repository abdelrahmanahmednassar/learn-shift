/* eslint-disable @next/next/no-img-element */
"use client";
import { useTrans } from "@/Providers/useTrans";
import Link from "next/link";

export default function CTASection() {
  const t = useTrans().trans;

  return (
    <section className="register-now">
      <div
        className="body row animated"
        data-anime-name="top-in"
        data-next-anime
        data-anime-delay="200"
        anime-before="300"
      >
        <div className="right col-lg-6 col-md-12 d-flex align-items-center">
          <div>
            <h2
              className="title animated"
              data-anime-name="right-in"
              data-next-anime
              data-anime-delay="500"
            >
              {t.pages.index.register.title}
            </h2>
            <p
              className="des animated"
              data-anime-name="right-in"
              data-next-anime
              data-anime-delay="600"
            >
              {t.pages.index.register.comment}
            </p>

            <Link
              href="https://api.whatsapp.com/send?phone=201556489708&text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%86%D8%A7%20%D8%B4%D9%81%D8%AA%20%D9%85%D9%86%D8%B5%D8%A9%20Learn%20Shift%20%D9%88%D8%B9%D8%AC%D8%A8%D9%86%D9%8A%20%D9%81%D9%83%D8%B1%D8%A9%20%D8%A5%D9%86%D8%B4%D8%A7%D8%A1%20%D9%85%D9%86%D8%B5%D8%A9%20%D8%AA%D8%B9%D9%84%D9%8A%D9%85%D9%8A%D8%A9%20%D8%AE%D8%A7%D8%B5%D8%A9.%20%D8%AD%D8%A7%D8%A8%D8%A8%20%D8%A3%D8%B9%D8%B1%D9%81%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%A8%D8%A7%D9%82%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%85%D9%85%D9%8A%D8%B2%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AD%D8%A9%D8%8C%20%D9%88%D8%AA%D8%B3%D8%A7%D8%B9%D8%AF%D9%88%D9%86%D9%8A%20%D8%A3%D8%AE%D8%AA%D8%A7%D8%B1%20%D8%A7%D9%84%D8%A3%D9%86%D8%B3%D8%A8%20%D9%84%D9%8A%D8%A7.%0A%0A"
              className="animated main-btn"
              data-anime-name="right-in"
              data-next-anime
              data-anime-delay="900"
            >
              {t.pages.index.register.title}
            </Link>
          </div>
        </div>
        <div className="left col-lg-6 col-md-12 d-flex justify-content-end">
          <img
            className="at animated"
            data-anime-name="left-in"
            data-anime-delay="1200"
            src="/assets/images/at.png"
            alt="at"
          />
        </div>
      </div>
    </section>
  );
}
