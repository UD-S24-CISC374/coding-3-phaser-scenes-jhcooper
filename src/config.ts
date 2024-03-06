import Phaser from "phaser";
import MainScene from "./scenes/mainScene";
import PreloadScene from "./scenes/preloadScene";
import SceneOne from "./scenes/sceneOne";
import SceneTwo from "./scenes/sceneTwo";
import SceneThree from "./scenes/sceneThree";

export const DEFAULT_WIDTH = 1280;
export const DEFAULT_HEIGHT = 720;

export const CONFIG = {
    title: "My Untitled Phaser 3 Game",
    version: "0.0.1",
    type: Phaser.AUTO,
    backgroundColor: "#ffffff",
    scale: {
        parent: "phaser-game",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
    },
    scene: [PreloadScene, MainScene, SceneOne, SceneTwo, SceneThree],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: { y: 300 },
        },
    },
    input: {
        keyboard: true,
        mouse: true,
        touch: true,
        gamepad: false,
    },
    render: {
        pixelArt: false,
        antialias: true,
    },
    SCENES: {
        PreloadScene: "preloadScene",
        MainScene: "mainScene",
        SceneOne: "SceneOne",
        SceneTwo: "SceneTwo",
        SceneThree: "SceneThree",
    },
};
