import Phaser from "phaser";
import PhaserLogo from "../objects/phaserLogo";
import FpsText from "../objects/fpsText";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, CONFIG } from "../config";

export default class SceneOne extends Phaser.Scene {
    fpsText: FpsText;
    logoState: {
        x: number;
        y: number;
        velocityX: number;
        velocityY: number;
    };
    constructor() {
        super({ key: CONFIG.SCENES.SceneOne });
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
        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);
        this.fpsText = new FpsText(this);
        const logo = new PhaserLogo(this, this.logoState.x, this.logoState.y);
        this.add.text(100, 100, "Scene One", {
            color: "#246F9B",
            fontSize: "30px",
        });
        this.physics.add.existing(logo);
        this.add.text(
            DEFAULT_WIDTH / 2 - 100,
            DEFAULT_HEIGHT / 2,
            "Click The Logo To Go To Scene Two",
            { color: "#246F9B", fontSize: "50px" }
        );
        logo.setVelocity(this.logoState.velocityX, this.logoState.velocityY);
        logo.on("pointerdown", () => {
            const logoState = {
                x: logo.x,
                y: logo.y,
                velocityX: logo.body?.velocity.x,
                velocityY: logo.body?.velocity.y,
            };
            this.scene.start(CONFIG.SCENES.SceneTwo, { logoState: logoState });
        });
    }
    update() {
        this.fpsText.update();
    }
}
