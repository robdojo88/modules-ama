import { Image } from '@heroui/image';
import ButtonNextModule from '@/components/buttonNextModule';

export default function BModule3() {
    const nextModule = {
        title: 'Module 4: Full Stack Development',
        path: '/beginners/bWeek1/bModule4',
    };
    return (
        <section className='space-y-5'>
            <h1 className='module_title'>Module 3: Basic in Web</h1>
            <div className='space-y-5'>
                <p>
                    In the previous lesson, you learned what the web is and what
                    it is composed of. The client sends HTTP requests to
                    servers, and servers will respond back to the client.
                    Additionally, we demystified what really happens
                    step-by-step whenever you’re visiting a website, and for
                    this lesson, let’s have some refresher on some tech jargon
                    you probably learned way back in schooling!
                </p>
            </div>
            <Image
                src='https://miro.medium.com/1*K6M-x-6e39jMq_c-2xqZIQ.png'
                className='my-5 bg-white '
            />
            <div className='max-w-8xl mx-auto my-5 md:my-10 space-y-6'>
                <h1 className='text-2xl font-bold mb-2'>What is a URL?</h1>
                <p>
                    Think of a URL as the “address” you type in your browser
                    when you want to visit a website, like typing facebook.com
                    to open Facebook. That’s the URL (which stands for Uniform
                    Resource Locator). Basically, it tells your browser where on
                    the internet to go to find the page you want.
                </p>
                <div className='max-w-8xl mx-auto p-6 space-y-6'>
                    <h2 className='font-bold'>
                        A URL usually has two main parts:
                    </h2>
                    <ul className='list-disc list-inside'>
                        <li>
                            1. Protocol - like http or https (this tells your
                            computer how to talk to the site).
                        </li>
                        <li>
                            2. Resource name - like facebook.com or
                            www.amaes.edu.ph (this is the name of the site
                            you’re visiting).
                        </li>
                    </ul>
                </div>
                <p>
                    So when you type https://www.amaes.edu.ph, your browser
                    knows to grab AMA Education’s homepage for you.
                </p>
            </div>
            <div className='max-w-8xl mx-auto my-5 md:my-10 space-y-6'>
                <h1 className='text-2xl font-bold mb-2'>
                    What is an IP address?
                </h1>
                <p>
                    Now, behind every website is something called an IP address.
                    Think of it like a phone number for computers. Every device
                    on the internet, your laptop, phone, even a server, has a
                    unique IP address so they can “call” each other.
                </p>
                <p>
                    For example, Google’s servers have IP addresses like
                    142.250.204.142. But imagine if you had to remember numbers
                    like that for every website you visit, that’d be impossible!
                    That’s why we use names like google.com instead.
                </p>
                <p>
                    Here’s how it works: when you type google.com, your computer
                    asks the DNS (Domain Name System), which works like the
                    internet’s phonebook, “Hey, what’s the number (IP address)
                    for google.com?” DNS finds it, gives it back, and your
                    browser connects you to the right server.
                </p>
            </div>
            <div className='max-w-8xl mx-auto my-5 md:my-10 space-y-6'>
                <h1 className='text-2xl font-bold mb-2'>What is localhost?</h1>
                <p>
                    “Localhost” sounds fancy, but it just means your own
                    computer. When you’re learning to build websites or apps,
                    you don’t need to put them on the internet right away, you
                    can test them on your own machine first. That’s what
                    localhost is for.
                </p>
                <p>
                    When you type localhost in your browser, your computer acts
                    as both the client (the one asking) and the server (the one
                    answering). Basically, your computer is talking to itself.
                    And the IP address for localhost is always 127.0.0.1.
                </p>
            </div>
            <div className='max-w-8xl mx-auto my-5 md:my-10 space-y-6'>
                <h1 className='text-2xl font-bold mb-2'>What is a port?</h1>
                <p>
                    On your computer, ports work kind of like “doors” that let
                    different kinds of data in and out. Just like your laptop
                    has a USB port for a flash drive and an audio port for
                    earphones, software also has network ports.
                </p>
                <p>
                    Each port is like a separate channel. For example, one port
                    might handle web traffic, another might handle emails, and
                    another might be used by your own apps. Developers often
                    need to pick which port their local apps will run on, like
                    localhost:3000 or localhost:5000. Do not be overwhelmed with
                    that port, we’ll tackle that encounter soon.
                </p>
            </div>
            <div className='max-w-8xl mx-auto my-5 md:my-10 space-y-6'>
                <h1 className='text-2xl font-bold mb-2 underline'>Again</h1>
                <ul className='list-disc pl-6 text-gray-700'>
                    <li>
                        <strong>URL</strong> – the “address” you type; easy for
                        humans to read and remember.
                    </li>
                    <li>
                        <strong>IP Address</strong> – the actual number address
                        of the computer; used by machines to locate each other.
                    </li>
                    <li>
                        <strong>Localhost</strong> – your own computer acting as
                        a server for testing or development.
                    </li>
                    <li>
                        <strong>Port</strong> – a “door” your computer uses to
                        handle different kinds of network connections.
                    </li>
                </ul>
            </div>
            <div className='flex justify-center'>
                <Image
                    src='https://cdn.hackerhero.com/1.1/assets/uploads/level-modules/830-homesweethome-1681231719075.jpg'
                    className='my-5 bg-white max-w-3xs'
                />
            </div>

            <ButtonNextModule nextModule={nextModule} />
        </section>
    );
}
