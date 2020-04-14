import React, {forwardRef} from "react";
import Box from "./Box";

const Heading = forwardRef((props, ref) =>
    <Box
        ref={ref}
        as={props.as || 'h1'}
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
