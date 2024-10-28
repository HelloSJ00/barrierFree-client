import "./globals.css";
import ThemeRegistry from "./_components/ThemeRegistry";

export const metadata = {
  title: "BarrierFree",
  description: "K-PAAS Service ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
