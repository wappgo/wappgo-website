
import '../public/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Wappgo: Best Full Stack Development IT Firm",
  description: "Wappgo is a professional driven IT company ready to develop the dreams of startups, SMEs and enterprises by providing web and app development services and other solutions.",
  keywords: [
    "Wappgo", "Wappgo it services", "wappgo indore", "best it firm",
    "full stack development", "it company", "start up",
    "TheLal", "AI real estate India", "broker-inclusive platform",
    "property buying", "property selling", "real estate technology",
    "Indore real estate", "smart property search", "real estate AI tools"
  ],
  author: "Wappgo IT Services Pvt. Ltd.",
  metadataBase: new URL("https://wappgo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wappgo: Best Full Stack Development IT Firm",
    description: "Wappgo is a professional driven IT company...",
    url: "https://wappgo.com",
    type: "website",
    images: ["/assets/images/thelal-logo-main.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wappgo: Best Full Stack Development IT Firm",
    description: "Wappgo is a professional driven IT company...",
    images: ["/assets/images/thelal-logo-main.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </body>
    </html>
  );
}
