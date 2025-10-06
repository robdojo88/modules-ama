'use client';
import { Image } from '@heroui/image';
import ButtonNextModule from '@/components/buttonNextModule';
export default function BModule1() {
    const nextModule = {
        title: 'Module 2: How the Web Works',
        path: '/beginners/bWeek1/bModule2',
    };
    return (
        <section className='space-y-5'>
            <h1 className='module_title'>Module 1: Git & Github</h1>
            <div>
                <span className='font-semibold'>
                    We’ll talk about the four key ideas in Git:
                </span>{' '}
                repositories, commits, branches, and merges. You’ll see how
                these work together to help you track and manage changes in your
                projects. We’ll also go over the basic Git commands and how to
                use GitHub for working with others, sharing code, and managing
                projects.
            </div>
            <div className='flex justify-center'>
                <iframe
                    width='908'
                    height='568'
                    src='https://www.youtube.com/embed/AUHwAZ8CS8o'
                    title='Git Basics'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                ></iframe>
            </div>
            <div className='max-w-8xl mx-auto p-6 space-y-6'>
                {/* Git Section */}
                <section>
                    <h1 className='text-2xl font-bold mb-2'>
                        Git - Distributed Version Control
                    </h1>
                    <p className='mb-4'>
                        <strong>“Distributed”</strong> means that every
                        developer has their own complete copy of the repository,
                        including the full history of all files, on their local
                        machine.
                    </p>
                    <h2 className='text-xl font-semibold mb-2'>
                        “Version Control”
                    </h2>
                    <ul className='list-disc list-inside space-y-1'>
                        <li>Keeps record of your changes</li>
                        <li>Enables collaboration</li>
                        <li>Tracks who made changes</li>
                        <li>Allows reverting changes</li>
                    </ul>
                    <p className='mt-4'>
                        Git is designed to be fast and efficient when handling
                        large code bases.
                    </p>
                </section>

                {/* GitHub Section */}
                <section>
                    <h1 className='text-2xl font-bold mb-2'>GitHub</h1>
                    <p>
                        GitHub is a platform and one of the largest web-based
                        Git repository hosting services. It allows developers to
                        collaborate online, share code, and work together
                        effectively.
                    </p>
                </section>

                {/* Four Concepts of Git */}
                <section>
                    <h1 className='text-2xl font-bold mb-2'>
                        Four Key Concepts of Git
                    </h1>
                    <ol className='list-decimal list-inside'>
                        <li>Repository</li>
                        <li>Commits</li>
                        <li>Branches</li>
                        <li>Merging</li>
                    </ol>
                    <div className='py-5 md:pl-7'>
                        {/* Repository */}
                        <div>
                            <h2 className='text-2xl font-semibold underline'>
                                1. Repository
                            </h2>
                            <ul className='list-disc list-inside'>
                                <li>
                                    Allows performing various operations to
                                    create different versions of the project
                                </li>
                                <li>
                                    Enables making changes or updates to the
                                    code
                                </li>
                                <li>Tracks who made the changes</li>
                            </ul>
                            <Image
                                alt='local-repo'
                                className='my-5 md:max-w-10/12'
                                src='https://res.cloudinary.com/ddjpvtdyk/image/upload/v1759714078/local-repo.png'
                            />
                        </div>
                    </div>
                    <div className='py-5 md:pl-7'>
                        {/* Commits */}
                        <div>
                            <h2 className='text-2xl font-semibold underline'>
                                2. Commit
                            </h2>
                            <ul className='list-disc list-inside'>
                                <li>
                                    saving a snapshot of your project’s files at
                                    a certain point in time
                                </li>
                                <li>
                                    each commit gets a unique hash (like
                                    a1b2c3...) to identify it
                                </li>
                            </ul>
                            <Image
                                alt='local-repo'
                                className='my-5 bg-white md:max-w-10/12'
                                src='https://res.cloudinary.com/ddjpvtdyk/image/upload/v1759714780/git-add-commit_ceb2ng.png'
                            />
                        </div>
                    </div>
                    <div className='py-5 md:pl-7'>
                        {/* Branch */}
                        <div>
                            <h2 className='text-2xl font-semibold underline'>
                                3. Branches
                            </h2>
                            <ul className='list-disc list-inside'>
                                <li>
                                    a separate line of development, a pointer to
                                    a series of commits
                                </li>
                                <li>
                                    you can make changes without affecting the
                                    main project until you’re ready.
                                </li>
                            </ul>
                            <Image
                                alt='local-repo'
                                className='my-5 bg-white md:max-w-10/12'
                                src='https://res.cloudinary.com/ddjpvtdyk/image/upload/v1759714985/git-branch_ponwt5.png'
                            />
                        </div>
                    </div>
                    <div className='py-5 md:pl-7'>
                        {/* Merging */}
                        <div>
                            <h2 className='text-2xl font-semibold underline'>
                                4. Branches
                            </h2>
                            <ul className='list-disc list-inside'>
                                <li>
                                    combining the changes from one branch into
                                    another
                                </li>
                                <li>
                                    git takes the commits from other-branch and
                                    applies them to your current branch
                                </li>
                            </ul>
                            <Image
                                alt='local-repo'
                                className='my-5 bg-white md:max-w-10/12'
                                src='https://res.cloudinary.com/ddjpvtdyk/image/upload/v1759715199/git-merging_gubnt6.png'
                            />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Image
                            alt='local-repo'
                            className='my-5 bg-white'
                            src='https://res.cloudinary.com/ddjpvtdyk/image/upload/v1759715327/git-commands_ordp3b.jpg'
                        />
                    </div>
                </section>
                <ButtonNextModule nextModule={nextModule} />
            </div>
        </section>
    );
}
