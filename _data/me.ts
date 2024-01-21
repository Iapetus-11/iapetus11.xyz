import {
    faPython,
    faJs,
    faJava,
    faGithub,
    faReact,
    faAws,
    faUbuntu,
    faStripeS,
    faDocker,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import {
    faHashtag,
    faDatabase,
    faCrown,
    faCodeBranch,
    faBolt,
    faDiagramProject,
    faTableColumns,
    faTerminal,
    faLayerGroup,
    faFileLines,
} from '@fortawesome/free-solid-svg-icons';

import svelteIconSvg from '$lib/images/svelte-icon.svg';
import djangoIconSvg from '$lib/images/django-icon.svg';
import petusPng from '$lib/images/petus.png';
import minecraftGlobalPaddedPng from '$lib/images/minecraft-global-padded.png';
import asciiMePng from '$lib/images/ascii-me.png';
import fractalColoredIterative from '$lib/images/fractal_colored_iterative_1.png';
import nimsnakePng from '$lib/images/nimsnake.png';
import villagerBotPng from '$lib/images/villager-bot.png';
import emojiLeaderboardExamplePng from '$lib/images/emoji-leaderboard-example.png';
import quake3BotWebp from '$lib/images/quake-3-bot.webp';
import postmanIconSvg from '$lib/images/postman-icon.svg';
import typeScriptIconSvg from '$lib/images/typescript.svg';
import butterflyMx444IconPng from '$lib/images/butterflymx-444.png';
import miloMinecraftHeadWebp from '$lib/images/milo-minecraft-head.webp';

function calculateYearsElapsed(since: Date): number {
    return new Date(new Date().getTime() - since.getTime()).getFullYear() - 1970;
}

const aliveForYears = calculateYearsElapsed(new Date('9/1/2003'));
const programmingForYears = calculateYearsElapsed(new Date('8/1/2016'));

export const aboutMe =
    `Hey! I'm Milo, a ${aliveForYears} year-old full-stack developer who's been programming for ` +
    `${programmingForYears}+ years and loves to learn new things!`;

const languages = [
    {
        name: 'Python',
        icon: faPython,
    },
    {
        name: 'C#',
        icon: faHashtag,
    },
    {
        name: 'SQL',
        icon: faDatabase,
    },
    {
        name: 'JavaScript',
        icon: faJs,
    },
    {
        name: 'TypeScript',
        customIcon: typeScriptIconSvg,
        customScale: 0.8,
    },
    {
        name: 'Nim',
        icon: faCrown,
    },
    {
        name: 'Java',
        icon: faJava,
    },
];

const other = [
    {
        name: 'Git',
        icon: faCodeBranch,
    },
    {
        name: 'FastAPI',
        icon: faBolt,
    },
    {
        name: 'Django',
        customIcon: djangoIconSvg,
    },
    {
        name: 'Asp.Net',
        icon: faDiagramProject,
    },
    {
        name: 'Vue',
        icon: faVuejs,
    },
    {
        name: 'Svelte',
        customIcon: svelteIconSvg,
    },
    {
        name: 'PostgreSQL',
        icon: faDatabase,
    },
    {
        name: 'Entity Framework',
        icon: faTableColumns,
    },
    {
        name: 'NGINX',
        icon: faLayerGroup,
    },
    {
        name: 'Ubuntu',
        icon: faUbuntu,
    },
    {
        name: 'Stripe',
        icon: faStripeS,
    },
    {
        name: 'Docker',
        icon: faDocker,
    },
    {
        name: 'Sentry',
        icon: faFileLines,
    },
];

export const skills = {
    languages: languages,
    other: other,
};

export const projects = [
    {
        name: 'Villager Bot',
        description:
            'A Minecraft-themed utility, moderation, and economy Discord bot used by tens of thousands.',
        image: villagerBotPng,
        href: 'https://villagerbot.com',
    },
    {
        name: 'To-ASCII',
        description:
            'A Python library and command line tool which can convert images, gifs, videos, and even live video from to ASCII art.',
        image: asciiMePng,
        href: 'https://ascii.iapetus11.me',
    },
    {
        name: 'Fractals',
        description:
            'Fractal generation from adjustable parameters, originally created during CUHackit 2022 but since redone.',
        image: fractalColoredIterative,
        href: '/fractals',
    },
    {
        name: 'minecraft\u200B.global',
        description:
            'An advanced Minecraft server list created with Next.js, TailwindCSS, Asp.Net, and TypeScript.',
        image: minecraftGlobalPaddedPng,
        href: 'https://minecraft.global',
    },
    {
        name: 'api.iapetus11.me',
        description:
            'An API written in C# utilizing Asp.Net and Entity Framework, used by Villager Bot and other projects.',
        image: petusPng,
        href: 'https://github.com/Iapetus-11/api.iapetus11.me',
    },
    {
        name: 'Snake',
        description: 'The snake game written in Nim using a wrapper for the SFML graphics library.',
        image: nimsnakePng,
        href: 'https://github.com/Iapetus-11/snake',
    },
    {
        name: 'Emoji Leaderboard',
        description:
            'A Slack bot which tracks emoji use and displays it on a frontend built with SvelteKit.',
        image: emojiLeaderboardExamplePng,
        href: 'https://github.com/Iapetus-11/slack-emoji-leaderboard',
    },
    {
        name: 'Quake III Bot',
        description: 'A Discord bot which facilitates the management of Quake III servers via RCON',
        image: quake3BotWebp,
        href: 'https://github.com/Iapetus-11/quake3-bot',
    },
    {
        name: 'ButterflyMX 444',
        description:
            'A web app which allows users to open apartments using ButterflyMX using a reverse engineered API wrapper',
        image: butterflyMx444IconPng,
        href: 'https://github.com/Iapetus-11/ButterflyMX-444',
    },
    {
        name: 'Skin Renderer',
        description:
            'A microservice written in Elixir + Phoenix to render Minecraft skins (currently just renders heads)',
        image: miloMinecraftHeadWebp,
        href: 'https://github.com/Iapetus-11/minecraft-skins',
        pixelated: true,
    },
];