import "./globals.css";

export const metadata = {
  title: "Еда+",
  description: "Система столовой для СПО",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
