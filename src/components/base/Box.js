import { Box as Rebox} from 'reflexbox/styled-components'
import React, {forwardRef} from "react";

const Box = forwardRef((props, ref) =>
    <Rebox
        ref={ref}
        variant='styles.root'
        {...props}
    />
);

export default Box;
