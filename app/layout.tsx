// @ts-ignore
import '@/styles/globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import LastVisitedTracker from '@/hooks/LastVisitedTracker';
import BackButton from '@/components/backButton';
import ForwardButton from '@/components/forwardButton';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className=''>
                <div className='fixed z-20 top-6/12 left-8'>
                    <BackButton />
                </div>
                <div className='fixed z-20 top-6/12 right-8'>
                    <ForwardButton />
                </div>
                <Navbar />
                <div className='px-3 md:px-52 md:py-10 md:min-h-lvh'>
                    {/* <div className='px-3 md:px-28 md:py-10 min-h-[780px] md:min-h-[750px]'> */}
                    <LastVisitedTracker />
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
