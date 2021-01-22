import React from 'react';
import { Box } from '@material-ui/core';
import NavicatBar from './NavcatBar'

export default function DenseAppBar() {
    return (
        <Box display="flex" flexDirection="column">
            <Box>
                <NavicatBar></NavicatBar>
            </Box>
            <Box flexGrow={1}></Box>
        </Box>
    );
}
