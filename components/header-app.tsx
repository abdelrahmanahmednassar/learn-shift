/* eslint-disable @next/next/no-img-element */
"use client";
import { useTrans } from "@/Providers/useTrans";
import { useLocalePath } from "@/utils/locale";
import Link from "next/link";
import PrefsBtns from "./prefs-btns";

/**
 * HeaderApp component displays the header with logo, navigation, and user actions.
 */
const HeaderApp: React.FC = () => {
  const t = useTrans().trans;

  return (
    <div className="container header-app">
      <Link href={useLocalePath("/")}>
        <img className="logo" src="/assets/images/logo.svg" alt="Logo" />
      </Link>

      <div className="left">
        <PrefsBtns />

        <div className="buttons">
          <Link
            href="https://wa.me/+201003685999"
            target="_blank"
            className="register"
          >
            {t.components.headerApp.buttons.signup}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderApp;
