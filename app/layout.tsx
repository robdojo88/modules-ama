// @ts-ignore
import '@/styles/globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className=''>
                <Navbar />
                <div className='p-10 min-h-[780px] md:min-h-[750px]'>
                    {children}
                </div>

                <Footer />
            </body>
        </html>
    );
}
