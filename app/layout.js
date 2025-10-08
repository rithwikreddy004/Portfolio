import './globals.css';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 

export const metadata = {
  title: 'Rithwiik Reddy',
  description: 'A modern, sleek developer portfolio built with Next.js and the App Router.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
