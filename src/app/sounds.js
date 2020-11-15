import { createSounds } from "arwes";

export default createSounds({
    shared: { volume: 1 },
    players: {
        click: {
            sound: { src: ["/sounds/click.mp3"] },
        },
        typing: {
            sound: { src: ["/sounds/typing.mp3"] },
            settings: { oneAtATime: true },
        },
        deploy: {
            sound: { src: ["/sounds/deploy.mp3"] },
            settings: { oneAtATime: true },
        },
    },
});
