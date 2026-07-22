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
                href="https://api.whatsapp.com/send?phone=201556489708"
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
