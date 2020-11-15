import React from "react";

import theme from "./theme";
import sounds from "./sounds";
import player from "./player";

import Router from "./router";

import { ThemeProvider, SoundsProvider, Arwes } from "arwes";

player.play();

export default () => (
    <ThemeProvider theme={theme}>
        <SoundsProvider sounds={sounds}>
            <Arwes animate show background="/background.jpg">
                <Router />
            </Arwes>
        </SoundsProvider>
    </ThemeProvider>
);
