import React, {forwardRef} from "react";
import {Box} from "reflexbox";

const Link = forwardRef((props, ref) =>
    <Box
        ref={ref}
        as='a'
        variant='link'
        {...props}
    />
);

export default Link;