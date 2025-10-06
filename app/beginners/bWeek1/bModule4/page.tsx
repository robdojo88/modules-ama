import { Image } from '@heroui/image';
import ButtonNextModule from '@/components/buttonNextModule';

export default function BModule3() {
    const nextModule = {
        title: 'Week 2',
        path: '/beginners/bWeek2',
    };

    return (
        <section className='space-y-5'>
            <h1 className='module_title'>Module 4: Full Stack Development</h1>

            <div className='space-y-5'>
                <p>
                    So… what is Full Stack? Think of it as the complete package
                    of web development. It’s made up of three main parts: front
                    end, back end, and database. If you’re skilled in all three,
                    that’s when people call you a Full-Stack Developer. Don’t
                    worry, we’ll walk through each area during the training.
                    Just trust the process.
                </p>
            </div>

            <div>
                <Image
                    src='https://res.cloudinary.com/dhgjhspsp/image/upload/v1747557411/fullstack_sioshn.png'
                    className='my-5 md:w-8/12 mx-auto bg-white'
                />
            </div>

            {/* FRONT END */}
            <div className='max-w-8xl mx-auto my-5 md:my-10 space-y-6'>
                <h1 className='text-2xl font-bold mb-2'>1. The Front End</h1>
                <div className='pl-10 space-y-5'>
                    <p>
                        - The front end (a.k.a. Client-side - baka malito kayo
                        sa word na client, magkaiba ang “Client” (Ito yung na
                        discussed doon sa web) versus “Client-Side” (ito naman
                        yung frontend side sa Website Development, chatGpt mo na
                        kung nalilito kapa, dali!)) is what people actually see
                        and interact with on a website.
                    </p>
                    <p>
                        - Example: The page you’re looking at right now in any
                        website, that’s the front end!
                    </p>
                    <p>
                        - Many people think front-end developers only deal with
                        HTML (the structure) and CSS (the design). That’s partly
                        true, but modern front-end work goes way beyond that.
                    </p>
                    <p>
                        - Nowadays, developers also use JavaScript and
                        frameworks like React, Angular, or Vue to make websites
                        more dynamic, interactive, and fun to use. (If curious
                        ka, search mo sa YT yung ReactJS).
                    </p>
                    <p>
                        - No matter what language is running behind the scenes,
                        the front end will always be built using HTML, CSS, and
                        JavaScript.
                    </p>
                </div>
            </div>

            {/* BACK END */}
            <div className='max-w-8xl mx-auto my-5 md:my-10 space-y-6'>
                <h1 className='text-2xl font-bold mb-2'>2. The Back End</h1>
                <div className='pl-10 space-y-5'>
                    <p>
                        - The back end (a.k.a. server-side) is like the “brain”
                        of the application. This is where all the heavy lifting
                        happens — logic, processing, and handling requests.
                    </p>
                    <p>
                        - For example: You click “Login” → That request goes to
                        the back end → The server checks if your username and
                        password are correct → Then it responds with the right
                        page (success or error). This is what we call the
                        <span className='font-semibold'>
                            {' '}
                            request and response cycle
                        </span>
                        .
                    </p>
                    <p>
                        - Common back-end languages are PHP, Python, Ruby, or
                        Node.js (also JavaScript using NodeJs).
                    </p>
                    <p>
                        - But hold on, if the back end is the brain, where does
                        it store the information it needs? That’s where the
                        database comes in.
                    </p>
                </div>
            </div>

            {/* DATABASE */}
            <div className='max-w-8xl mx-auto my-5 md:my-10 space-y-6'>
                <h1 className='text-2xl font-bold mb-2'>3. The Database</h1>
                <div className='pl-10 space-y-5'>
                    <p>
                        - The database is basically the memory of your
                        application. It stores all the data — user accounts,
                        products, orders, posts, you name it.
                    </p>
                    <p>
                        - Example: When you add something to your cart in an
                        online shop, you’re actually adding a new entry to their
                        database.
                    </p>
                    <p>
                        - Databases let you create, read, update, and delete
                        information (often shortened as <b>CRUD</b>). Remember
                        CRUD — I will always use it in web development.
                    </p>
                    <p>
                        - The most common language to talk to a database is{' '}
                        <b>SQL (Structured Query Language)</b>.
                    </p>
                    <p>
                        - You’ll also learn about tools like{' '}
                        <b>ORMs (Object Relational Mappings)</b> that make
                        database handling easier.
                    </p>
                </div>
            </div>

            {/* WHY MANY TECHNOLOGIES */}
            <div className='max-w-8xl mx-auto my-5 md:my-10 space-y-6'>
                <h1 className='text-2xl font-bold mb-2'>
                    So Why Are There So Many Technologies?
                </h1>
                <div className='pl-10 space-y-5'>
                    <p>
                        Because each part of the stack has its own job, and
                        developers have created different tools to make each job
                        easier or more powerful.
                    </p>
                    <p>
                        Don’t stress about memorizing all of them right away —
                        you’ll get to explore them step by step.
                    </p>
                </div>
            </div>

            {/* VIDEO GAME ANALOGY */}
            <div className='max-w-8xl mx-auto my-5 md:my-10 space-y-6'>
                <h1 className='text-2xl font-bold mb-2'>
                    The Video Game Analogy
                </h1>
                <div className='pl-10 space-y-5'>
                    <p>
                        🎮 Clans = Programming Languages (Python, JavaScript,
                        C#, Java, PHP, etc.)
                    </p>
                    <p>
                        🚗 Cars = Frameworks (Django, Spring, .NET, Laravel,
                        Rails, Angular, React, etc.)
                    </p>
                    <p>
                        ⚙️ Accessories = Libraries/Tools (Hibernate, Redux,
                        NumPy, etc.)
                    </p>
                    <p>
                        A player chooses a clan (language), levels up by
                        learning fundamentals, and eventually gets access to
                        cars (frameworks). Cars can be customized with
                        accessories (libraries). At higher levels, players can
                        even create new cars (frameworks) or accessories
                        (libraries).
                    </p>
                </div>
            </div>

            {/* WHY SO MANY TOOLS EXIST */}
            <div className='max-w-8xl mx-auto my-5 md:my-10 space-y-6'>
                <h1 className='text-2xl font-bold mb-2'>
                    Why So Many Tools Exist
                </h1>
                <div className='pl-10 space-y-3'>
                    <p>- Each programming language has multiple frameworks.</p>
                    <p>
                        - Each framework has many libraries/tools built on top.
                    </p>
                    <p>
                        - Developers can create new frameworks or libraries
                        quickly, so the ecosystem grows fast.
                    </p>
                    <p>
                        - Best practices from one language/framework often
                        influence others (cross-pollination).
                    </p>
                    <p>
                        This creates thousands of buzzwords in tech, but many
                        are just variations of the same categories (language →
                        framework → library).
                    </p>
                </div>
            </div>

            {/* HOW TO NAVIGATE */}
            <div className='max-w-8xl mx-auto my-5 md:my-10 space-y-6'>
                <h1 className='text-2xl font-bold mb-2'>
                    How to Navigate the Landscape
                </h1>
                <p className='italic'>
                    (This is very important, para hindi maligaw when learning
                    Web Development.)
                </p>

                <div className='pl-10 space-y-5'>
                    <h2 className='font-semibold text-lg'>As a learner:</h2>
                    <ul className='list-disc pl-8 space-y-1'>
                        <li>
                            Start with fundamentals (don’t jump to frameworks
                            right away).
                        </li>
                        <li>Build projects at the “core” level first.</li>
                        <li>
                            Move to frameworks after you have a strong
                            foundation.
                        </li>
                        <li>
                            Learn to distinguish whether something is a
                            language, framework, or library.
                        </li>
                    </ul>

                    <h2 className='font-semibold text-lg'>As a developer:</h2>
                    <ul className='list-disc pl-8 space-y-1'>
                        <li>Don’t obsess over every accessory/library.</li>
                        <li>Focus on mastering fundamentals and frameworks.</li>
                        <li>
                            Once advanced (level 30–50), you’ll be able to build
                            your own libraries/tools/frameworks.
                        </li>
                    </ul>

                    <h2 className='font-semibold text-lg'>
                        As a recruiter/hiring manager:
                    </h2>
                    <ul className='list-disc pl-8 space-y-1'>
                        <li>Don’t just filter resumes by buzzwords.</li>
                        <li>
                            Someone with deep fundamentals can adapt to
                            frameworks and tools.
                        </li>
                        <li>
                            A “level 50” developer may not list every keyword,
                            but can create solutions in any environment.
                        </li>
                    </ul>
                </div>
            </div>

            {/* IMPORTANT REMINDER */}
            <div className='max-w-8xl mx-auto my-10 space-y-5'>
                <h1 className='text-2xl font-bold mb-2'>Important Reminder</h1>
                <div className='pl-10 space-y-5'>
                    <p>
                        Ang dami talagang tools kasi tuloy-tuloy ang mga
                        developers sa pag-create ng bagong frameworks at
                        libraries habang nagle-level up sila.
                    </p>
                    <p>Pero ito ang core path natin:</p>
                    <ul className='list-decimal pl-8 space-y-1'>
                        <li>Matuto muna ng isang language</li>
                        <li>Masterin ang fundamentals</li>
                        <li>Saka ka gumamit ng frameworks</li>
                        <li>Gumawa ng sariling tools (kung kaya na!)</li>
                        <li>
                            At kung advanced ka na, baka makagawa ka pa ng
                            sarili mong framework.
                        </li>
                    </ul>
                    <p>
                        Huwag kang ma-overwhelm sa dami ng buzzwords. Kasi kapag
                        solid ang fundamentals mo, kahit anong language o
                        framework, kaya mong saluhin, unawain --{'>'} as in
                        panis na lang sayo!!!
                    </p>
                </div>
            </div>

            <ButtonNextModule nextModule={nextModule} />
        </section>
    );
}
