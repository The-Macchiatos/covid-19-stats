export const styles = {
    width: '100%',
    backgroundColor: 'rgba(31,41,51, 0.5)',
    overflow: 'hidden',
    borderRadius: '8px',
    ':hover': {
        backgroundColor: 'rgba(31,41,51, 0.8)'
    },
    marginBottom: '2rem'
};

export const defs = [
    {
        id: 'gradientA',
        type: 'linearGradient',
        colors: [
            {offset: 0, color: '#9e86ff'},
            {offset: 100, color: '#9e86ff'},
        ]
    },
    {
        id: 'gradientB',
        type: 'linearGradient',
        colors: [
            {offset: 0, color: '#1ca8dd'},
            {offset: 100, color: '#1ca8dd'},
        ]
    },
    {
        id: 'gradientC',
        type: 'linearGradient',
        colors: [
            {offset: 0, color: '#007ae1'},
            {offset: 100, color: '#007ae1'},
        ]
    }
];
