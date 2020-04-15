import React, {forwardRef, memo} from "react";
import Box from "./Box";

const Text = memo(forwardRef((props, ref) =>
    <Box
        ref={ref}
        tx='text'
        {...props}
    />
));

export default Text;
