/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";

import "@/styles/main.scss";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

export const metadata: Metadata = {
  title: "Learn Shift ",
  description: "Next Gen Learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
