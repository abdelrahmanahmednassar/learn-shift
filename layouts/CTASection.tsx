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
              href="https://api.whatsapp.com/send?phone=201556489708"
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
