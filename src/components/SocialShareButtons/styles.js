const svg = {
    height: '1.1rem',
    width: '1.1em',
    marginRight: '0.4em',
    margin: 0,
    padding: 0,
    verticalAlign: 'middle',
    fill: '#fff'
};

export const styles = {
    facebook: {
        backgroundColor: '#3b5998',
        borderColor: '#3b5998',
        ':hover': {
            cursor: 'pointer',
            bg: '#2d4373',
            borderColor: '#3b5998'
        },
        svg
    },
    whatsapp: {
        backgroundColor: '#25D366',
        borderColor: '#25D366',
        ':hover': {
            cursor: 'pointer',
            bg: '#1da851',
            borderColor: '#1da851'
        },
        svg
    },
    linkedin: {
        backgroundColor: '#0077b5',
        borderColor: '#0077b5',
        ':hover': {
            cursor: 'pointer',
            bg: '#046293',
            borderColor: '#046293'
        },
        svg
    }
};
