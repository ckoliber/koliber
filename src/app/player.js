import { createPlayer } from "arwes";

export default createPlayer(null, {
    sound: {
        src: ["/sounds/error.mp3"],
        volume: 0.75,
    },
    settings: {
        oneAtATime: true,
    },
});
