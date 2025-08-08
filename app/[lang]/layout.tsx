import { TranslationProvider } from "@/Providers/useTrans";
import { getDictionary } from "./dictionaries";
import HeaderApp from "@/components/header-app";
import FooterApp from "@/components/footer-app";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

import { notFound } from "next/navigation";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  const supportedLangs = ["en", "ar"];
  if (!supportedLangs.includes(lang)) {
    notFound();
  }
  const dict = await getDictionary(lang as "en" | "ar");
  const isLtr = ["en"].find((l) => l == lang);

  return (
    <div className={`default-layout ${lang} ${isLtr && "ltr"}`}>
      <TranslationProvider dictionary={dict} lang={lang as "en" | "ar"}>
        <HeaderApp />
        {children}
        <FooterApp />
      </TranslationProvider>
    </div>
  );
}
