/* eslint-disable @next/next/no-img-element */
"use client";
import { useTrans } from "@/Providers/useTrans";
import Link from "next/link";

export default function PricingSection() {
  const t = useTrans().trans;

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="title">{t.pages.index.pricing.title}</h2>
          <p className="subtitle">{t.pages.index.pricing.subtitle}</p>
        </div>

        <div className="pricing-cards">
          {t.pages.index.pricing.packages.map((pkg, index) => (
            <div
              key={index}
              className={`pricing-card${pkg.popular ? " popular" : ""}`}
            >
              {pkg.popular && <div className="popular-badge">{t.pages.index.pricing.popular}</div>}

              <div className="card-header">
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-description">{pkg.description}</p>
              </div>

              <div className="card-features">
                <ul>
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <i className="ri-check-line"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-footer">
                <Link href={pkg.url} className="main-btn">
                  {pkg.button}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
