import React from "react";
import "./styles.css";

import { ThemeProvider, createTheme, Arwes } from "arwes";

export default () => (
    <ThemeProvider theme={createTheme()}>
        <Arwes>
            <div style={{ padding: 20 }}>
                <Button>My Button</Button>
            </div>
            <h1>My App</h1>
            <p>A SciFi Project</p>
        </Arwes>
    </ThemeProvider>
);
