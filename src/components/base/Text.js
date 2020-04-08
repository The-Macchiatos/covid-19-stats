import React, {forwardRef} from "react";
import {Box} from "reflexbox";

const Text = forwardRef((props, ref) =>
    <Box
        ref={ref}
        tx='text'
        {...props}
    />
);

export default Text;
