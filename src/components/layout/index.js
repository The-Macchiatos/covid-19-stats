import React, {forwardRef, memo} from 'react';
import {Box} from '../base';

const px = n => typeof n === 'number' ? n + 'px' : n;

const widthToColumns = width => Array.isArray(width)
    ? width.map(widthToColumns)
    : !!width && `repeat(auto-fit, minmax(${px(width)}, 1fr))`;

const countToColumns = n => Array.isArray(n)
    ? n.map(countToColumns)
    : !!n && `repeat(${n}, 1fr)`;

const Tiles = memo(forwardRef(({width, columns, gap = 3, ...props}, ref) => {
    const gridTemplateColumns = !!width ? widthToColumns(width) : countToColumns(columns);
    return (
        <Box
            ref={ref}
            tx='layout'
            variant='tiles'
            {...props}
            __css={{
                display: 'grid',
                gridGap: gap,
                gridTemplateColumns
            }}
        />
    );
}));

export default Tiles;
