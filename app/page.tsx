import RecentPageButton from '@/components/recentPageButton';
export default function Home() {
    return (
        <section>
            <RecentPageButton />
            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-bold'>Announcements</h1>
                <p>No announcement has been posted.</p>
            </div>
        </section>
    );
}
