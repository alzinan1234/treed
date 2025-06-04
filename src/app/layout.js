import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import 'mapbox-gl/dist/mapbox-gl.css';

const outfit = Outfit({
  subsets: ['latin'], // Use 'latin' or other subsets as needed
  variable: '--font-outfit', // Optional: CSS variable for Tailwind or custom CSS
  display: 'swap', // Prevents layout shift by using fallback font
});

export const metadata = {
  title: 'Treedi',
  description: 'Treedi web',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased bg-[#0D0D0D] text-white tracking-wide`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
