import React, {forwardRef} from "react";
import {Box} from "reflexbox";

const Heading = forwardRef((props, ref) =>
    <Box
        ref={ref}
        as='h2'
        tx='text'
        variant='heading'
        {...props}
        __css={{
            fontSize: 4,
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
        }}
    />
);

export default Heading;
