import type { Metadata } from 'next'
import './globals.css'
import { Montserrat} from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'


export const metadata: Metadata = {
  title: 'Lucky 13',
  description: '',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat'
})






export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${montserrat.className}`} lang="en">
      <body className='bg-white min-h-screen'>
        <Header/>
        <main className="w-screen min-h-[55vh] md:min-h-[70vh] bg-yellow h-fit">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
