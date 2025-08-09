import { TranslationProvider } from "@/Providers/useTrans";
import { getDictionary } from "./dictionaries";
import HeaderApp from "@/components/header-app";
import FooterApp from "@/components/footer-app";
import { Metadata } from "next";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}


export const metadata: Metadata = {
  title:
    "LearnShift",
  description:
    "Learn Shift مش بس منصة تعليمية، ولكن شريكك في تنظيم العملية التعليمية بالكامل — خطط دروسك، قدمها أونلاين بسهولة، تفاعل مع طلابك، وتابع تقدمهم لحظة بلحظة. كل ده من خلال نظام مصمم خصيصًا للمدرسين اللي عايزين يقدّموا تعليم أفضل ويوفروا وقتهم.",
  keywords: [
    // Arabic
    "ليرن شيفت",
    "منصة ليرن شيفت", 
    "ليرن شيفت",
    "منصة ليرن شيفت",
    "ليرن شيفت",
    "منصة ليرن شيفت",
    "التدريس مش زي زمان... منصتك Learn Shift",
    "منصة تعليمية متكاملة",
    "منصة تعليمية",
    "تعليم أونلاين",
    "تحليلات تعليمية",
    "حماية الفيديوهات",
    "لوحة تحكم المدرس",
    "دعم فني",
    "دفع إلكتروني",
    "تسويق للمدرسين",
    "إدارة الطلاب",
    "امتحانات أونلاين",
    "محتوى تعليمي",
    "تعليم عن بعد",
    "Learn Shift",
    "تنظيم الدروس",
    "تفاعل الطلاب",
    "تطوير التعليم",
    // English
    "Learn Shift",
    "Learn Shift Next Generation Learning Platform",
    "Next Gen Learning",
    "Next Generation Learning Platform",
    "Learn Shift Next Gen Learning",
    "educational platform",
    "online teaching",
    "teacher dashboard",
    "video protection",
    "analytics",
    "student engagement",
    "lesson planning",
    "real-time tracking",
    "content management",
    "exam system",
    "secure registration",
    "marketing for teachers",
    "financial management",
    "parent follow-up",
    "automatic grading",
    "multi-teacher subscription",
    "free technical support",
    "Fawry payment",
    "Vodafone Cash",
    "Next Generation Learning Platform",
  ],
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    siteName: "Learn Shift",
    title: "Learn Shift | Next Generation Learning",
    description: "التدريس مش زي زمان ... منصتك مع Learn Shift",
    type: "website",
    url: "https://learnshift.netlify.app",
  },
};

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
