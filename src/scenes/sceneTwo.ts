import Phaser from "phaser";
import PhaserLogo from "../objects/phaserLogo";
import FpsText from "../objects/fpsText";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, CONFIG } from "../config";

export default class SceneTwo extends Phaser.Scene {
    fpsText: FpsText;
    constructor() {
        super({ key: CONFIG.SCENES.SceneTwo });
    }
    logoState: {
        x: number;
        y: number;
        velocityX: number;
        velocityY: number;
    };

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

        const logo = new PhaserLogo(this, this.logoState.x, this.logoState.y);
        this;
        this.add.text(100, 100, "Scene Two", { color: "#246F9B" });
        this.add.text(
            DEFAULT_HEIGHT / 2,
            DEFAULT_WIDTH / 2,
            "Click The Logo To Go To Scene Three",
            { color: "#246F9B", fontSize: "30px" }
        );
        this.physics.add.existing(logo);
        this.fpsText = new FpsText(this);
        logo.setVelocity(this.logoState.velocityX, this.logoState.velocityY);
        logo.on("pointerdown", () => {
            const logoState = {
                x: logo.x,
                y: logo.y,
                velocityX: logo.body?.velocity.x,
                velocityY: logo.body?.velocity.y,
            };
            this.scene.start(CONFIG.SCENES.SceneThree, {
                logoState: logoState,
            });
        });
    }
    update() {
        this.fpsText.update();
    }
}
