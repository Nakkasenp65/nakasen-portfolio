import Navbar from "@/component/Navbar/Navbar";
import "./globals.css";
import Footer from "@/component/Footer/Footer";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"), // use your real domain or localhost for dev
  title: {
    template: "P.Nakasen - %s",
    default: "P.Nakasen",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
