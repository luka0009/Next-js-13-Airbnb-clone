import './globals.css';
import { Nunito, Roboto, Open_Sans } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import Modal from './components/modal/Modal';

export const metadata = {
  title: 'Airbnb-clone',
  description: 'Airbnb clone created with Next.js 13',
}

const font = Open_Sans({
  subsets: ['latin'],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
