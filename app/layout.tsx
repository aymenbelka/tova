import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tova | حلول ذكية لرحلة نموك",
  description:
    "منصة Tova تقدم حلولًا رقمية مبتكرة للمؤسسات والأعمال الناشئة في السعودية والعالم العربي.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
