import { Button } from '@heroui/button';

export default function Home() {
    return (
        <section>
            <Button
                color='default'
                variant='ghost'
                className='flex justify-self-center md:mb-5'
            >
                Recent Visited Page
            </Button>

            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-bold'>Announcements</h1>
                <p>No announcement has been posted.</p>
            </div>
        </section>
    );
}
