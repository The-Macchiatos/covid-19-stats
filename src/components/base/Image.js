import React, {forwardRef, memo} from "react";
import Box from "./Box";


const Image = memo(forwardRef((props, ref) =>
    <Box
        ref={ref}
        as='img'
        {...props}
        __css={{
            maxWidth: '100%',
            height: 'auto',
        }}
    />
));

export default Image;
