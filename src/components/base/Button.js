import React, {forwardRef} from "react";
import {Box} from "reflexbox";

const Button = forwardRef((props, ref) =>
    <Box
        ref={ref}
        as='button'
        tx='buttons'
        variant='primary'
        {...props}
        __css={{
            appearance: 'none',
            display: 'inline-block',
            textAlign: 'center',
            lineHeight: 'inherit',
            textDecoration: 'none',
            fontSize: 'inherit',
            px: 3,
            py: 2,
            color: 'white',
            bg: 'primary',
            border: 0,
            borderRadius: 4,
        }}
    />
);

export  default Button;
