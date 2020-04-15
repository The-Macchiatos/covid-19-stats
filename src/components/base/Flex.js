import { Flex as Reflex} from 'reflexbox/styled-components'
import React, {forwardRef, memo} from "react";

const Flex = memo(forwardRef((props, ref) =>
    <Reflex
        ref={ref}
        variant='styles.root'
        {...props}
    />
));

export default Flex;
