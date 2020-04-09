import React, {forwardRef} from "react";
import Box from "./Box";


const Card = forwardRef((props, ref) =>
    <Box
        ref={ref}
        variant='card'
        {...props}
    />
);

export default Card;
