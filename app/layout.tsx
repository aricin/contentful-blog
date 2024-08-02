import "./globals.css";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Pocket Change - a blog by ibotta",
  description: "Discover ways to save on back to school shopping!",
};

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <section className="min-h-screen">
          <main>{children}</main>
        </section>
      </body>
    </html>
  );
}
