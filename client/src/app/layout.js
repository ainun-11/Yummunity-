// app/layout.js
import './globals.scss'
import { Vazirmatn } from 'next/font/google'
import Navbar from '@/app/components/navbar/navbar.component'
import Footer from '@/app/components/footer/footer.component'
import Provider from '@/utils/provider'

const vazir = Vazirmatn({ subsets: ['latin', 'arabic'] }) // no local files

export const metadata = { title: 'Yummunity' }

export default function RootLayout({ children }) {
    return (
        <html lang="fa" className={vazir.className}>
            <body>
                <Navbar />
                <Provider>{children}</Provider>
                <Footer />
            </body>
        </html>
    )
}
