import React, {forwardRef, memo} from "react";
import Box from "./Box";


const Card = memo(forwardRef((props, ref) =>
    <Box
        ref={ref}
        variant='card'
        {...props}
    />
));

export default Card;
