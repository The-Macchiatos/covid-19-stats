import { Flex as Reflex} from 'reflexbox/styled-components'
import React, {forwardRef} from "react";

const Flex = forwardRef((props, ref) =>
    <Reflex
        ref={ref}
        variant='styles.root'
        {...props}
    />
);

export default Flex;
