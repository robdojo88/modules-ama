import { Image } from '@heroui/image';
import ButtonNextModule from '@/components/buttonNextModule';

export default function BModule2() {
    const nextModule = {
        title: 'Module 3: Basic in Web',
        path: '/beginners/bWeek1/bModule3',
    };
    return (
        <section className='space-y-5'>
            <h1 className='module_title'>Module 2: How the web works</h1>
            <div className='space-y-5'>
                <span className='font-semibold'>
                    So What's This Whole "Web" Thing Anyway?
                </span>
                <p>
                    Look, I know you use the internet every single day -
                    scrolling Instagram, watching TikToks, checking your email.
                    But have you ever stopped and thought "Wait, how does this
                    actually work?"
                </p>
                <p>
                    Don't worry, most people haven't! But since you're gonna be
                    building websites and stuff, let's break it down in a way
                    that actually makes sense. Alam ko hindi ka nanaman
                    magbabasa, basahin mo ito para may matutunan ka, sayang
                    tuition.
                </p>
                <p>
                    Think about it like this: Remember when you were a kid and
                    you'd send letters to your friends? You needed the postal
                    service, right? The internet is basically like that postal
                    service, but instead of delivering letters between houses,
                    it's delivering information between computers all over the
                    world.
                </p>
            </div>
            <div className='max-w-8xl mx-auto my-5 md:my-10 space-y-6'>
                <h1 className='text-2xl font-bold mb-2'>
                    The Two Main Players: You vs. The Website
                </h1>
                <p>
                    Okay, so there are basically two types of computers in this
                    whole web thing:
                </p>
                <div className='max-w-8xl mx-auto p-6 space-y-6'>
                    <h2 className='font-bold'>1. Clients (That's You!)</h2>
                    <ul className='list-disc list-inside'>
                        <li>
                            This is just a fancy word for your stuff - your
                            laptop, your phone, whatever you're reading this on
                            right now. And the browser you're using (Chrome,
                            Safari, Firefox, whatever).
                        </li>
                        <li>
                            Basically, if you're the one asking for something,
                            you're the client. Think of yourself as the person
                            walking into a coffee shop and ordering a latte.
                        </li>
                    </ul>
                </div>
                <div className='max-w-8xl mx-auto p-6 space-y-6'>
                    <h2 className='font-bold'>
                        2. Servers (The Behind-the-Scenes Magic)
                    </h2>
                    <ul className='list-disc list-inside'>
                        <li>
                            These are the computers that actually have all the
                            websites stored on them. They're like regular
                            computers, but they don't have screens or keyboards
                            - they just sit in big warehouses waiting to help
                            people out.
                        </li>
                        <li>
                            They're like the barista in the coffee shop. You ask
                            for a latte, they make it and give it to you.
                        </li>
                    </ul>
                    <Image
                        alt='local-repo'
                        className='my-5 md:max-w-10/12'
                        src='https://miro.medium.com/1*DUPqrw8b9G01NPpZox9hng.jpeg'
                    />
                    <ul className='list-disc list-inside'>
                        <li>
                            Here's the deal: You ask for a website, the server
                            gives it to you. That's literally it.
                        </li>
                        <li>
                            When you want to check out Facebook, you're
                            basically going "Hey Facebook, can I see your
                            website?" and Facebook goes "Sure thing! Here you
                            go!" and sends you a copy to look at. Easy, right?
                        </li>
                    </ul>
                </div>
            </div>
            <div className='max-w-8xl mx-auto my-5 md:my-10 space-y-6'>
                <h1 className='text-2xl font-bold mb-2'>
                    What Actually Happens When You Type in a Website
                </h1>
                <p>
                    Alright, let's say you want to go to Facebook. Here's what's
                    really going down behind the scenes:
                </p>
                <div className='max-w-8xl mx-auto p-6 space-y-6'>
                    <h2 className='font-bold'>
                        Step 1: Finding Facebook's Address
                    </h2>
                    <ul className='list-disc list-inside'>
                        <li>
                            When you type "facebook.com," your computer is like
                            "Okay cool, but where exactly IS Facebook?" So it
                            asks this thing called DNS (Domain Name Server) -
                            think of it like asking Siri for directions.
                        </li>
                        <li>
                            DNS is basically like "Oh Facebook? Yeah, they live
                            at 52.33.229.159" (that weird number is called an IP
                            address - it's like a street address but for
                            computers).
                        </li>
                        <li>
                            (Your browser consults Domain Name Server or DNS
                            (think of this like an address book or phone book)
                            to find the real address of the Facebook server (the
                            IP address which is a series of four
                            period-separated numbers like 52.33.229.159)).
                        </li>
                    </ul>
                </div>
                <div className='max-w-8xl mx-auto p-6 space-y-6'>
                    <h2 className='font-bold'>
                        Step 2: Knocking on Facebook's Door
                    </h2>
                    <ul className='list-disc list-inside'>
                        <li>
                            Now your browser knows where to go, so it sends a
                            message to Facebook's servers like "Hey! It's me!
                            Can you send me your website please?" This is called
                            an HTTP request, but honestly, who cares what it's
                            called.
                        </li>
                        <li>
                            (The browser sends an HTTP request message to
                            Facebook’s servers asking it to send a copy of their
                            website back to you, the client.)
                        </li>
                    </ul>
                </div>
                <div className='max-w-8xl mx-auto p-6 space-y-6'>
                    <h2 className='font-bold'>
                        Step 3: Facebook Checks You Out
                    </h2>
                    <ul className='list-disc list-inside'>
                        <li>
                            Facebook's servers are like "Hmm, is this person
                            allowed to see our website?" Since Facebook is
                            public, they're like "Yeah sure, you're good!"
                        </li>
                        <li>
                            (If you’re not violating any security protocols and
                            have the proper permissions, Facebook's servers will
                            approve your client request and respond by sending
                            the website's files back to your browser.)
                        </li>
                    </ul>
                </div>
                <div className='max-w-8xl mx-auto p-6 space-y-6'>
                    <h2 className='font-bold'>
                        Step 4: Facebook Sends You the Goods
                    </h2>
                    <ul className='list-disc list-inside'>
                        <li>
                            Instead of sending you the whole website at once
                            (which would be super slow), Facebook breaks it up
                            into tiny pieces called{' '}
                            <span className='font-semibold'>
                                "data packets"
                            </span>
                            . It's like if someone tore up a magazine and mailed
                            you each page separately - but way faster.
                        </li>
                    </ul>
                </div>
                <div className='max-w-8xl mx-auto p-6 space-y-6'>
                    <h2 className='font-bold'>
                        Step 5: Your Browser Puts It All Together
                    </h2>
                    <ul className='list-disc list-inside'>
                        <li>
                            Your browser catches all these little pieces and
                            puts them back together like a puzzle. Once it's
                            done, boom! There's Facebook on your screen.
                        </li>
                        <li>
                            (For each small chunk traveled to your browser, the
                            browser will assemble them until it looks complete
                            website that displays the Facebook homepage to you.)
                        </li>
                    </ul>
                </div>
            </div>
            <ButtonNextModule nextModule={nextModule} />
        </section>
    );
}
