import React from "react";
import "styles.css";

import { ThemeProvider, createTheme } from "arwes";

export default () => (
    <ThemeProvider theme={createTheme()}>
        <div>My Project</div>
    </ThemeProvider>
);
