import Phaser from "phaser";
import PhaserLogo from "../objects/phaserLogo";
import FpsText from "../objects/fpsText";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, CONFIG } from "../config";
export default class SceneThree extends Phaser.Scene {
    fpsText: FpsText;
    logoState: {
        x: number;
        y: number;
        velocityX: number;
        velocityY: number;
    };
    preload() {
        this.load.image("background", "..../assets/img/mainbackground.png");
    }
    constructor() {
        super({ key: CONFIG.SCENES.SceneThree });
    }

    init(data: {
        logoState: {
            x: number;
            y: number;
            velocityX: number;
            velocityY: number;
        };
    }) {
        this.logoState = data.logoState;
    }

    create() {
        this.add.text(100, 100, "Scene Three", { color: "#D12D0A" });
        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);
        this.add.image(DEFAULT_WIDTH / 2, DEFAULT_HEIGHT / 2, "background");
        this.add.text(
            DEFAULT_HEIGHT / 2,
            DEFAULT_WIDTH / 2,
            "Game Over You Lost",
            { color: "#D12D0A", fontSize: "30px" }
        );
        const logo = new PhaserLogo(this, this.logoState.x, this.logoState.y);
        this.physics.add.existing(logo);
        this.fpsText = new FpsText(this);
        logo.setVelocity(this.logoState.velocityX, this.logoState.velocityY);
    }
    update() {
        this.fpsText.update();
    }
}
