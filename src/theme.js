export const theme = {
    googleFonts: 'https://fonts.googleapis.com/css?family=Muli+Mono|Muli:400,700&display=swap',
    colors: {
        text: '#fff',
        background: '#00141b',
        primary: '#9e86ff',
        secondary: '#1ca8dd',
        tertiary: '#007ae1',
        fourth: '#db86ff',
        success: '#e7ff86',
        danger: '#ff9e86',
        muted: '#f6f6f9',
        gray: '#dddddf',
        highlight: 'hsla(205, 100%, 40%, 0.125)',
    },
    fonts: {
        body: 'Muli, sans-serif',
        heading: 'inherit',
        monospace: '"Roboto Mono", monospace',
    },
    fontSizes: [
        12, 14, 16, 20, 24, 32, 48, 64, 96
    ],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    sizes: {
        avatar: 48,
    },
    radii: {
        default: 4,
        circle: 99999,
    },
    shadows: {
        card: '0 0 4px rgba(0, 0, 0, .125)',
    },
    // rebass variants
    text: {
        heading: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
        },
        display: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
            fontSize: [5, 6, 7],
        },
        caps: {
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
        },
    },
    variants: {
        avatar: {
            width: 'avatar',
            height: 'avatar',
            borderRadius: 'circle',
        },
        card: {
            p: 2,
            bg: 'background',
            boxShadow: 'card',
        },
        link: {
            color: 'primary',
        },
        nav: {
            fontSize: 1,
            fontWeight: 'bold',
            display: 'inline-block',
            p: 2,
            color: 'inherit',
            textDecoration: 'none',
            ':hover,:focus,.active': {
                color: 'primary',
            }
        },
    },
    buttons: {
        primary: {
            fontSize: 2,
            fontWeight: 'bold',
            color: 'background',
            bg: 'primary',
            borderRadius: 'default',
        },
        outline: {
            variant: 'buttons.primary',
            color: 'primary',
            bg: 'transparent',
            boxShadow: 'inset 0 0 2px',
        },
        secondary: {
            variant: 'buttons.primary',
            color: 'background',
            bg: 'secondary',
        },
    },
    styles: {
        root: {
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
        },
    },
    breakpoints: [
        '40em', //  640px - mobile
        '52em', //  832px - tablet
        '64em', // 1024px - desktop
        '88em' // 1408px - widescreen
    ]
};

export default theme
