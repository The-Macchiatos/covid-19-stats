import React, {forwardRef, memo} from "react";
import Box from "./Box";

const Link = memo(forwardRef((props, ref) =>
    <Box
        ref={ref}
        as='a'
        variant='link'
        {...props}
    />
));

export default Link;
