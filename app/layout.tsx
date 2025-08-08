/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";

import "@/styles/main.scss";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

export const metadata: Metadata = {
  title:
    "LearnShift - منصة تعليمية للمدرسين | تنظيم الدروس، حماية الفيديوهات، تحليلات، دعم فني، دفع إلكتروني",
  description:
    "Learn Shift مش بس منصة تعليمية، ولكن شريكك في تنظيم العملية التعليمية بالكامل — خطط دروسك، قدمها أونلاين بسهولة، تفاعل مع طلابك، وتابع تقدمهم لحظة بلحظة. كل ده من خلال نظام مصمم خصيصًا للمدرسين اللي عايزين يقدّموا تعليم أفضل ويوفروا وقتهم.",
  keywords: [
    // Arabic
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
    title: "Learn Shift",
    description: "منصة تعليمية للمدرسين",
    type: "website",
    url: "https://learnshift.netlify.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        <meta name="google-site-verification" content="BGarRjKuuYRF3eEfLkREhccIoiCsy8RuSQPF8xPm19Q" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
