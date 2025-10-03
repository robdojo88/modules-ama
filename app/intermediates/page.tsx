import Card from '@/components/cards';

export default function Intermediates() {
    const list = [
        {
            title: 'WEEK 1',
            img: 'https://img.freepik.com/free-photo/cyber-attack-with-unrecognizable-hooded-hacker-using-virtual-reality-digital-glitch-effect_146671-18957.jpg?uid=R148155645',
            modules: 'MODULE 1-5',
            path: '/intermediates/IWeek1',
        },
        {
            title: 'WEEK 2',
            img: 'https://img.freepik.com/premium-photo/child-with-light-bulb-mixed-media_641298-8243.jpg?uid=R148155645',
            modules: 'MODULE 1-5',
            path: '/intermediates/IWeek2',
        },
        {
            title: 'WEEK 3',
            img: 'https://img.freepik.com/premium-photo/dawn-vintage-server-room-wallpaper_1297153-37740.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
            path: '/intermediates/IWeek3',
        },
        {
            title: 'WEEK 4',
            img: 'https://img.freepik.com/free-photo/view-3d-personal-computer-with-workstation_23-2150714015.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
            path: '/intermediates/IWeek4',
        },
        {
            title: 'WEEK 5',
            img: 'https://img.freepik.com/free-photo/global-networking-background-hand-using-phone-technology-remix-galaxy_53876-124711.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
            path: '/intermediates/IWeek5',
        },
        {
            title: 'WEEK 6',
            img: 'https://img.freepik.com/free-photo/cyber-security-expert-working-with-technology-neon-lights_23-2151645608.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
            path: '/intermediates/IWeek6',
        },
        {
            title: 'WEEK 7',
            img: 'https://img.freepik.com/free-photo/cyberpunk-illustration-with-neon-colors-futuristic-technology_23-2151672024.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
            path: '/intermediates/IWeek7',
        },
        {
            title: 'WEEK 8',
            img: 'https://img.freepik.com/free-photo/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code-green_146671-18918.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
            path: '/intermediates/IWeek8',
        },
        {
            title: 'WEEK 9',
            img: 'https://img.freepik.com/premium-photo/young-person-interacting-with-digital-surface_591846-5755.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
            path: '/intermediates/IWeek9',
        },
        {
            title: 'WEEK 10',
            img: 'https://img.freepik.com/premium-photo/cybersecurity-expert-surrounded-by-digital-data-code-holograms_71756-13584.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
            path: '/intermediates/IWeek10',
        },
        {
            title: 'WEEK 11',
            img: 'https://img.freepik.com/premium-photo/tech-consultant-software-engineer-background_960396-769859.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
            path: '/intermediates/IWeek11',
        },
        {
            title: 'SUMMARY',
            img: 'https://img.freepik.com/premium-photo/businessman-with-binary-numbers_175634-772.jpg?uid=R148155645&ga=GA1.1.1558979997.1715070741&semt=ais_hybrid&w=740&q=80',
            modules: 'MODULE 1-5',
            path: '/intermediates/ISummary',
        },
    ];

    return (
        <section>
            <h1 className='text-center mb-2 md:mb-5 text-2xl font-bold'>
                Intermediates
            </h1>
            <div>
                <Card list={list} />
            </div>
        </section>
    );
}
