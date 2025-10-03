import RecentPageButton from '@/components/recentPageButton';
import { Image } from '@heroui/image';

export default function Home() {
    return (
        <section>
            <RecentPageButton />
            <div className='text-center space-y-4'>
                <div className='border-2 border-gray-400 border-dashed md:w-6xl mx-auto py-10 bg-amber-300 rounded-2xl'>
                    <h1 className='text-4xl font-bold'>Announcements</h1>
                    <p className='md:px-60 text-justify md:my-10'>
                        <span className='font-semibold'>
                            1️⃣ All activities must be submitted via Google
                            Classroom (GCR).
                        </span>{' '}
                        Always remember to comment on the time you spent for
                        each activity. Do not fake your time. Avoid relying on
                        AI, use it only for suggestions, not as your main
                        source. You are still in the learning stage, so focus on
                        building your foundation first. AI can be helpful in the
                        future once you have a strong base.
                    </p>
                </div>
            </div>
            <h1 className='text-center my-10 text-4xl'>Preliminary Awards</h1>
            <p className='text-center text-2xl'>
                Out of nearly 50 students in 2513, here are the four who
                demonstrated effort and dedication this term.
            </p>
            <div className='grid grid-cols-2 gap-4 px-36 mt-10'>
                <Image
                    isZoomed
                    alt='Certificate'
                    className='shadow-md'
                    src='1.png'
                />
                <Image
                    isZoomed
                    alt='Certificate'
                    className='shadow-md'
                    src='2.png'
                />
                <Image
                    isZoomed
                    alt='Certificate'
                    className='shadow-md'
                    src='3.png'
                />
                <Image
                    isZoomed
                    alt='Certificate'
                    className='shadow-md'
                    src='4.png'
                />
            </div>
        </section>
    );
}
