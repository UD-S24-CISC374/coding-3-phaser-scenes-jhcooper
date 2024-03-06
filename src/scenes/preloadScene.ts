import Phaser from "phaser";
import { CONFIG } from "../config";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: CONFIG.SCENES.PreloadScene });
    }

    preload() {
        this.load.image("phaser-logo", "assets/img/phaser-logo.png");
    }

    create() {
        this.scene.start(CONFIG.SCENES.MainScene);
    }
}
