import { Box as Rebox} from 'reflexbox/styled-components'
import React, {forwardRef, memo} from "react";

const Box = memo(forwardRef((props, ref) =>
    <Rebox
        ref={ref}
        variant='styles.root'
        {...props}
    />
));

export default Box;
