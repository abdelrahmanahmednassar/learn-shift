/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

/**
 * FooterApp component displays the footer section with about, social, and navigation links.
 */
const FooterApp: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-app">
      <div className="container">
        <div className="footer-content">
          <img className="logo" src="/assets/images/full-logo.png" alt="Logo" />
          <ul className="social modern-icons">
            <li>
              <Link
                href="https://api.whatsapp.com/send?phone=201556489708&text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%86%D8%A7%20%D8%B4%D9%81%D8%AA%20%D9%85%D9%86%D8%B5%D8%A9%20Learn%20Shift%20%D9%88%D8%B9%D8%AC%D8%A8%D9%86%D9%8A%20%D9%81%D9%83%D8%B1%D8%A9%20%D8%A5%D9%86%D8%B4%D8%A7%D8%A1%20%D9%85%D9%86%D8%B5%D8%A9%20%D8%AA%D8%B9%D9%84%D9%8A%D9%85%D9%8A%D8%A9%20%D8%AE%D8%A7%D8%B5%D8%A9.%20%D8%AD%D8%A7%D8%A8%D8%A8%20%D8%A3%D8%B9%D8%B1%D9%81%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%A8%D8%A7%D9%82%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%85%D9%85%D9%8A%D8%B2%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AD%D8%A9%D8%8C%20%D9%88%D8%AA%D8%B3%D8%A7%D8%B9%D8%AF%D9%88%D9%86%D9%8A%20%D8%A3%D8%AE%D8%AA%D8%A7%D8%B1%20%D8%A7%D9%84%D8%A3%D9%86%D8%B3%D8%A8%20%D9%84%D9%8A%D8%A7.%0A%0A"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="ri-whatsapp-fill"></i>{" "}
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=61578916379830"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill"></i>{" "}
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/abdelrahman-ahmed-nassar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill"></i>{" "}
              </Link>
            </li>
          </ul>
          <div className="footer-copyright">
            &copy; {currentYear} Learn Shift
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterApp;
