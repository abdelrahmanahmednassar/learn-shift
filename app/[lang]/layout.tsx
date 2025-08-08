import { TranslationProvider } from "@/Providers/useTrans";
import { getDictionary } from "./dictionaries";
import HeaderApp from "@/components/header-app";
import FooterApp from "@/components/footer-app";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "ar" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const isLtr = ["en"].find((l) => l == lang);

  return (
    <div className={`default-layout ${lang} ${isLtr && "ltr"}`}>
      <TranslationProvider dictionary={dict} lang={lang}>
        <HeaderApp />
        {children}
        <FooterApp />
      </TranslationProvider>
    </div>
  );
}
